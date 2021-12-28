<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-md-4">
        <div>
          <q-input ref="filter" filled v-model="filter" label="Αναζήτηση">
            <template v-slot:append>
              <q-icon v-if="filter !== ''" name="clear" class="cursor-pointer" @click="resetFilter" />
            </template>
          </q-input>
          <q-scroll-area style="height: 40vh">
            <q-tree
              :nodes="baseLayers"
              node-key="id"
              label-key="label"
              :filter="filter"
              tick-strategy="strict"
              :ticked.sync="ticked"
              :selected.sync="selectedLayer"
              @update:ticked="setVisibility"
            >
              <template v-slot:default-header="prop">
                <div class="row items-center">
                  <div>{{ prop.node.label }}
                    <q-btn v-if="prop.node.zindex < baseLayers.length" round flat color="primary" size="xs" @click="moveUp(prop.node.id)" icon="expand_less" />
                    <q-btn v-if="prop.node.zindex > 1" round flat color="primary" size="xs" @click="moveDown(prop.node.id)" icon="expand_more" />
                    <!-- <q-btn round flat color="primary" size="xs" @click="downloadLayer" icon="download" /> -->
                    <q-btn round flat color="primary" size="xs" @click="layerToSetOpacity = prop.node; opacityDialog = true;" icon="invert_colors" />
                    <q-btn round flat color="primary" size="xs" @click="layerInfo(prop.node)" icon="info" />
                  </div>
                </div>
              </template>
            </q-tree>
          </q-scroll-area>
        </div>


        <q-separator inset />

        <div class="text-center">
          {{$store.state.mapStatus}}
          <displayPanel v-if="$store.state.webgis.mapStatus === 'home'"/>
          <geolocation v-if="$store.state.webgis.mapStatus === 'geolocation'"/>
          <info v-if="$store.state.webgis.mapStatus === 'info'"/>
          <print v-if="$store.state.webgis.mapStatus === 'print'"/>
          <measure v-if="$store.state.webgis.mapStatus === 'measure'"/>
          <draw v-if="$store.state.webgis.mapStatus === 'draw'"/>
          <dragAndDrop v-if="$store.state.webgis.mapStatus === 'dragdrop'"/>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div ref="map-root" style="width: 100%; height: 95vh;">
        </div>
      </div>

    </div>

    <q-dialog v-model="opacityDialog" transition-show="scale" transition-hide="scale">
      <q-card style="width: 50%">
        <q-card-section class="q-pt-md">
          <q-icon color="primary" name="invert_colors" />
          <q-slider
            v-model="layerOpacity"
            :min="1"
            :max="100"
            label
            :label-value="`${layerOpacity}%`"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="OK" color="primary" @click="setOpacity()" />
          <q-btn flat label="Κλείσιμο" color="black" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="layerInfoDialog" persistent transition-show="scale" transition-hide="scale">
      <q-card style="width: 70%">
        <q-card-section class="q-pt-md">
          <div class="text-h6">Πληροφορίες χάρτη</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-list>
            <q-item v-for="attr in Object.keys(layerMetadata)" :key="attr">
              <span v-if="attr === 'label'">Γενική περιγραφή</span>
              <span v-if="attr === 'details'">Λεπτομέρειες</span>
              <span v-if="attr === 'timespan'">Χρονική κάλυψη</span>
              <span v-if="attr === 'filetype'">Τύπος αρχείου</span>
              <span v-if="attr === 'crs'">Πρωτότυπο σύστημα γεωγραφικών συντεταγμένων</span>
              <span v-if="attr === 'attributions'">Αρχική πηγή</span>
              : {{ layerMetadata[attr] }}
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-actions align="right" class="primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import displayPanel from "../components/panel/display.vue";
import dragAndDrop from "../components/panel/dragndrop.vue";
import draw from "../components/panel/draw.vue";
import geolocation from "../components/panel/geolocation.vue";
import info from "../components/panel/info.vue";
import measure from "../components/panel/measure.vue";
import print from "../components/panel/print.vue";
import { queries } from 'src/graphql';

// OPENLAYERS IMPORTS
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ';
import BingMaps from 'ol/source/BingMaps';
import Geolocation from 'ol/Geolocation';
import Feature from 'ol/Feature';
import Draw from 'ol/interaction/Draw';
import GeoJSON from 'ol/format/GeoJSON';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { Point, LineString, Polygon } from 'ol/geom';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import { getArea, getLength } from 'ol/sphere';
import { unByKey } from 'ol/Observable';
import 'ol/ol.css'

export default {
  name: "WebGIS",
  components: {
    displayPanel, dragAndDrop, draw, geolocation, info, measure, print,
  },
  data() {
    return {
      olMap: null,
      vectorLayer: null,
      vectorSource: null,
      infoLayer: null,
      geolocation: null,
      draw: null,
      measurements: null,
      mapStatus: null,
      filter: '',
      opacityDialog: false,
      layerOpacity: 100,
      layerToSetOpacity: null,
      baseLayers: [],
      layerInfoDialog: false,
      pdfOptions: {
        fontSize: 6,
        textColor: "#FFFFFF",
        fillCollor: "#3f51b5",
        text: "powered by Terrarum"
      },
      date: {
        year: null,
        month: null,
        day: null,
        hour: null,
        minute: null
      },
      selectedLayer: null,
      layerMetadata: {}
    };
  },
  computed: {
    tableName: {
      get() {
        let selectedLayerName = null;
        this.baseLayers.forEach((layer) => {
          if(layer.id === this.selectedLayer){
            selectedLayerName = layer.dbtablename;
          }
        })
        return selectedLayerName;
      }
    },
    ticked: {
      get() {
        let ticked = [];
        this.baseLayers.forEach((layer) => {
          if(layer.visible === true){
            ticked.push(layer.id);
          }
        })
        return ticked;
      },
      set() {
        return
      }
    },
    currentDate: {
      get() {
        return this.date;
      },
      set(date) {
        this.date = {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate(),
          hour: date.getHours(),
          minutes: date.getMinutes()
        };
      }
    }
  },
  methods: {
    layerInfo(layer) {
      this.layerMetadata = {};
      this.layerInfoDialog = true;
      // console.log(this.baseLayers);
      Object.keys(layer).forEach(k => {
        if(layer[k] && ['label', 'details', 'attributions', 'timespan', 'crs', 'filetype'].includes(k)) {
          this.layerMetadata[k] = layer[k];
        }
      });
    },
    info() {
      const vm = this;
      this.olMap.on('singleclick', function (evt) {
        if(vm.mapStatus === 'info') {
          if(document.getElementById("layerInfo")) {
            document.getElementById("layerInfo").innerHTML = evt.coordinate;
          }
          this.measurements = evt.coordinate;
          // console.log(vm.baseLayers);
          let layerToQuery = {};
          vm.baseLayers.forEach((layer) => {
            if(layer.id === vm.selectedLayer) {
              // console.log(layer.id, vm.selectedLayer);
              layerToQuery = layer;
            }
          })
          vm.$root.$emit("map:info:coordinates", this.measurements, layerToQuery, vm.olMap.getView().getZoom());
        }
      });
    },
    addInteraction(type) {
      this.draw = new Draw({
        source: this.vectorSource,
        type: type,
        style: new Style({
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)',
          }),
          stroke: new Stroke({
            color: 'rgba(0, 0, 0, 0.5)',
            lineDash: [10, 10],
            width: 2,
          }),
          image: new CircleStyle({
            radius: 5,
            stroke: new Stroke({
              color: 'rgba(0, 0, 0, 0.7)',
            }),
            fill: new Fill({
              color: 'rgba(255, 255, 255, 0.2)',
            }),
          }),
        }),
      });
      this.olMap.addInteraction(this.draw);
      let listener;
      let sketch;
      const vm = this;
      this.draw.on('drawstart', function (evt) {
        let output = null;
        vm.vectorLayer.getSource().clear();
        sketch = evt.feature;
        listener = sketch.getGeometry().on('change', function (evt, output) {
          const geom = evt.target;
          if (geom instanceof Polygon) {
            output = vm.formatArea(geom);
          } else if (geom instanceof LineString) {
            output = vm.formatLength(geom);
          }
          console.log(output)
          document.getElementById("measurement").innerHTML = output;
        });
      });

      this.draw.on('drawend', function () {
        sketch = null;
        unByKey(listener);
      });
    },
    formatLength(line) {
      let output = null;
      const length = getLength(line);
      if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
      } else {
        output = Math.round(length * 100) / 100 + ' ' + 'm';
      }
      this.$root.$emit('map:measurement:result', output);
      return output;
    },
    formatArea(polygon) {
      let output = null;
      const area = getArea(polygon);
      if (area > 10000) {
        output = Math.round((area / 1000000) * 100) / 100 + ' ' + 'km<sup>2</sup>';
      } else {
        output = Math.round(area * 100) / 100 + ' ' + 'm<sup>2</sup>';
      }
      this.$root.$emit('map:measurement:result', output);
      return output;
    },
    resetFilter () {
      this.filter = ''
      this.$refs.filter.focus()
    },
    async exportPDF(data) {
      const myPromise = new Promise((resolve, reject) => {
        if (data) resolve(data);
        reject();
      });
      try {
        const { data } = await myPromise;
        const pdf = new jsPDF("landscape", "mm", "a4");
        pdf.addImage(data, "JPEG", 0, 0, 297, 210);
        pdf.setFontSize(this.pdfOptions.fontSize);
        pdf.setFillColor(this.pdfOptions.fillCollor);
        pdf.rect(0, 0, 25, 6, "F");
        pdf.setTextColor(this.pdfOptions.textColor);
        pdf.text(this.pdfOptions.text, 2, 4);
        this.currentDate = new Date();
        const { year, month, day, hour, minutes } = this.date;
        await pdf.save(
          `export_${year}-${month}-${day}_${hour}\u02D0${minutes}.pdf`,
          {
            returnPromise: true
          }
        );
        this.updateMapStatus("display");
      } catch (error) {
        // console.log(error);
        this.updateMapStatus("display");
      }
    },
    setVisibility(e) {
      this.baseLayers.forEach((layer) => {
        if(e.includes(layer.id)) {
          // console.log(layer.id, e);
          layer.visible = true;
          this.$root.$emit('map:layer:setVisibility', { id: layer.id, visibility: true });
        } else {
          layer.visible = false;
          this.$root.$emit('map:layer:setVisibility', { id: layer.id, visibility: false });
        }
      });
    },
    moveUp(id) {
      const old_index = this.baseLayers.findIndex(x => x.id === id);
      const new_index = old_index - 1;
      // console.log(id, old_index, new_index);
      this.array_move(this.baseLayers, old_index, new_index);
    },
    moveDown(id) {
      const old_index = this.baseLayers.findIndex(x => x.id === id);
      const new_index = old_index + 1;
      // console.log(id, old_index, new_index);
      this.array_move(this.baseLayers, old_index, new_index);
    },
    array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
              arr.push(undefined);
          }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      arr.forEach((layer) => {
        const zindex = Math.abs(this.baseLayers.findIndex(x => x.id === layer.id) - arr.length);
        layer.zindex = zindex;
        this.$root.$emit('map:layers:setZIndex', layer.id, zindex);
      });
      this.baseLayers = arr;
    },
    changeShowPanel(payload) {
      this.$store.commit('webgis/SET_SHOWPANEL', payload);
    },
    setDisplay() {
      this.updateMapStatus("display");
    },
    clearInfo() {
      this.SET_FEATURE_INFO({});
    },
    cancelInfo() {
      this.clearInfo();
      this.setDisplay();
    },
    downloadLayer() {},
    dynamicSort(property, order) {
        let sortOrder;
        if(order) {
          sortOrder = order;
        } else {
          sortOrder = 1;
        } 
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    },
    fetchLayers() {
      this.$apollo.query({
        query: queries.getPublishedLayers,
        fetchPolicy: 'no-cache',
      }).then((data) => {
        // console.log(data)
        if(data && data.data && data.data.publishedLayers){
          data.data.publishedLayers.forEach((d) => {
            this.baseLayers.push(d);
            this.baseLayers = this.baseLayers.sort((a, b) => {
                return a.zindex - b.zindex;
            });
          });
        }
        this.baseLayers.sort(this.dynamicSort("zindex", -1));
        this.$root.$emit('map:setLayers', this.baseLayers);
      });
    },
    setOpacity() {
      this.layerToSetOpacity.opacity = this.layerOpacity/100;
      this.$root.$emit('map:layer:setOpacity', {id: this.layerToSetOpacity.id, opacity: this.layerOpacity/100});
    },
  },
  mounted() {
    const vm = this;
    this.$root.$on('change:showpanel', (e) => {
      this.changeShowPanel(e);
    });
    this.fetchLayers();

    this.vectorSource = new VectorSource();
    this.vectorLayer = new VectorLayer({
      name: 'measure',
      source: this.vectorSource,
      zIndex: 999999,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new Stroke({
          color: '#ffcc33',
          width: 2,
        }),
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({
            color: '#ffcc33',
          }),
        }),
      }),
    });

    this.infoLayerSource = new VectorSource();
    this.infoLayer = new VectorLayer({
      name: 'info',
      source: this.infoLayerSource,
      zIndex: 999999,
      style: new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        stroke: new Stroke({
          color: '#FF0000',
          width: 2,
        }),
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({
            color: '#FF0000',
          }),
        }),
      }),
    });

    this.olMap = new Map({
      target: this.$refs['map-root'],
      layers: [this.vectorLayer, this.infoLayer],
      view: new View({
        zoom: 11,
        maxZoom: 16,
        minZoom: 11,
        center: [2289715, 4615511],
        constrainResolution: true
      }),
    });

    this.geolocation = new Geolocation({
      projection: this.olMap.getView().getProjection(),
      tracking: true,
      trackingOptions: {
        enableHighAccuracy: true,
      },
    });

    const accuracyFeature = new Feature();
    this.geolocation.on('change:accuracyGeometry', function () {
      accuracyFeature.setGeometry(vm.geolocation.getAccuracyGeometry());
    });

    const positionFeature = new Feature();
    positionFeature.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: '#3399CC',
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 2,
          }),
        }),
      })
    );
    this.geolocation.on('change:position', function () {
      const coordinates = vm.geolocation.getPosition();
      positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
    });

    const geolocationLayer = new VectorLayer({
      source: new VectorSource({
        features: [accuracyFeature, positionFeature],
      }),
      zIndex: 99999
    });
    this.olMap.addLayer(geolocationLayer);

    this.olMap.once('postcompose', async() => {
      this.info();

      this.$root.$on('map:updateSize', () => {
        setTimeout(function(){
          vm.olMap.updateSize();
        }, 200);
      });
      this.$root.$on('map:zoomToExtent', () => {
        this.olMap.getView().animate({
          center: [2300914.433 , 4599808.379],
          zoom: this.olMap.getView().getZoom() + 2
        });
      });
      this.$root.$on('map:activateGeolocation', () => {
        console.log(this.geolocation)
        const coordinates = this.geolocation.getPosition();
        console.log(coordinates)
        this.olMap.getView().animate({
          center: coordinates,
          zoom: 16
        });
      });
      this.$root.$on('map:setLayers', (layers) => {
        layers.forEach((layer) => {
          if(layer.type) {
            let olLayer = null;
            if(layer.type === 'osm') {
              // console.log('osm:: ', layer)
              olLayer = new TileLayer({
                source: new OSM(),
                maxZoom: 18,
              });
            } else if (layer.type === 'xyz' || layer.type === 'XYZ') {
              // console.log('xyz:: ', layer)
              olLayer = new TileLayer({
                source: new XYZ(layer),
                minZoom: 10,
                className: 'layer',
                crossOrigin: 'anonymous'
              });
            } else if (layer.type === 'bingmaps') {
              // console.log('bing:: ', layer)
              olLayer = new TileLayer({
                visible: true,
                preload: Infinity,
                source: new BingMaps({
                  key: 'AmoqV2FnhbcjFLmxo9gSD80EeLH21TK6pNEKlo3-hav1OYGNnt1Km_MYy-fDLxM8',
                  imagerySet: 'AerialWithLabelsOnDemand'
                })
              })
            }
            olLayer.setProperties(layer);
            olLayer.setZIndex(layer.zindex);
            this.olMap.addLayer(olLayer);
          }
        });
      });
      this.$root.$on('map:layer:setOpacity', (params) => {
        this.olMap.getLayers().forEach((layer) => {
          if(layer.getProperties().id === params.id) {
            layer.setOpacity(params.opacity);
          }
        });
      });
      this.$root.$on('map:layer:setVisibility', (params) => {
        this.olMap.getLayers().forEach((layer) => {
          if(layer.getProperties().id === params.id) {
            layer.setVisible(params.visibility);
          }
        });
      });
      this.$root.$on('map:layers:setZIndex', (id, zindex) => {
        this.olMap.getLayers().forEach((layer) => {
          if(layer.getProperties().id === id) {
            layer.setZIndex(zindex);
          }
        });
      });
      this.$root.$on('map:measure:start', (type) => {
        this.olMap.removeInteraction(this.draw);
        this.addInteraction(type);
      });
      this.$root.$on('map:measure:clear', () => {
        this.vectorLayer.getSource().clear();
        this.olMap.removeInteraction(this.draw);
        document.getElementById("measurement").innerHTML = "";
      });
      this.$root.$on('map:mapStatus:info', () => {
        this.mapStatus = 'info';
        this.vectorLayer.getSource().clear();
        this.olMap.removeInteraction(this.draw);
        if(document.getElementById("measurement"))  {
          document.getElementById("measurement").innerHTML = "";
        }
      });
      this.$root.$on('map:infoLayer:clearSource', () => {
        this.infoLayer.getSource().clear();
      });
      this.$root.$on('map:infoLayer:addFeature', (f) => {
        this.infoLayerSource.addFeatures(new GeoJSON().readFeatures(f));
        this.$root.$emit('map:updateSize');
      });
    });
  }
};
</script>
<style>
  .ol-tooltip {
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    color: white;
    padding: 4px 8px;
    opacity: 0.7;
    white-space: nowrap;
    font-size: 12px;
    cursor: default;
    user-select: none;
  }
  .ol-tooltip-measure {
    opacity: 1;
    font-weight: bold;
  }
  .ol-tooltip-static {
    background-color: #ffcc33;
    color: black;
    border: 1px solid white;
  }
  .ol-tooltip-measure:before,
  .ol-tooltip-static:before {
    border-top: 6px solid rgba(0, 0, 0, 0.5);
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    content: "";
    position: absolute;
    bottom: -6px;
    margin-left: -7px;
    left: 50%;
  }
  .ol-tooltip-static:before {
    border-top-color: #ffcc33;
  }
</style>
