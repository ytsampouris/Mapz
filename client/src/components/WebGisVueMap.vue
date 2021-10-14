<template>
  <div xs12 d-flex fill-height pa-0>
    <vl-map
      ref="map"
      style="height: 94vh"
      :load-tiles-while-animating="false"
      :load-tiles-while-interacting="false"
      :default-controls="{ attribution: true, rotate: false, zoom: true }"
      @postcompose="onMapPostCompose"
      @mounted="onMapMounted"
    >
      <vl-view
        :zoom.sync="zoom"
        :min-zoom="minZoom"
        :max-zoom="maxzoom"
        :center.sync="center"
        projection="EPSG:3857"
      ></vl-view>

      <vl-layer-tile
        v-for="layer in baseLayers"
        :id="layer.id"
        :key="layer.id"
        :visible="layer.visible"
        :z-index="parseInt(layer.zindex)"
        :opacity="layer.opacity"
      >
        <component v-if="layer.type === 'osm'" :is="'vl-source-' + layer.type"></component>
        <component v-else :is="'vl-source-' + layer.type" v-bind="layer" :api-key="apiKey" imagery-set="AerialWithLabels"></component>
      </vl-layer-tile>

      <!-- VECTOR LAYERS -->
      <component
        :is="layer.cmp"
        v-for="(layer, index) in vectorLayers"
        :id="layer.id"
        :key="index"
        :visible="layer.visible"
        v-bind="layer"
        :z-index="layer.zIndex"
      >
        <!-- add vl-source-* -->
        <component :is="layer.source.cmp" v-bind="layer.source"></component>
        <!--// vl-source-* -->

        <!-- add style components if provided -->
        <!-- create vl-style-box or vl-style-func -->
        <div v-if="layer.style">
          <component
            :is="style.cmp"
            v-for="(style, i) in layer.style"
            :key="i"
            v-bind="style"
          >
            <!-- create inner style components: vl-style-circle, vl-style-icon, vl-style-fill, vl-style-stroke & etc -->
            <div v-if="style.styles">
              <component
                :is="cmp"
                v-for="(st, cmp) in style.styles"
                :key="cmp"
                v-bind="st"
              >
                <!-- vl-style-fill, vl-style-stroke if provided -->
                <vl-style-fill v-if="st.fill" v-bind="st.fill"></vl-style-fill>
                <vl-style-stroke
                  v-if="st.stroke"
                  v-bind="st.stroke"
                ></vl-style-stroke>
              </component>
            </div>
          </component>
        </div>
        <!--// style -->
      </component>

      <!-- UTILITY LAYERS -->
      <vl-layer-vector
        :id="utilityLayers[0].id"
        :ref="utilityLayers[0].ref"
        :visible="utilityLayers[0].visible"
        :z-index="utilityLayers[0].zIndex"
      >
        <vl-source-vector
          :ident="utilityLayers[0].source.ident"
          :features.sync="drawnFeatures"
        >
          <vl-style-box>
            <vl-style-fill :color="[255, 204, 51, 0.2]"></vl-style-fill>
            <vl-style-stroke color="#ffcc33" :width="2"></vl-style-stroke>
            <vl-style-circle :radius="4">
              <vl-style-fill :color="[255, 204, 51, 0.2]"></vl-style-fill>
              <vl-style-stroke color="#ffcc33" :width="2"></vl-style-stroke>
            </vl-style-circle>
          </vl-style-box>
        </vl-source-vector>
      </vl-layer-vector>

      <vl-layer-vector
        :id="utilityLayers[1].id"
        :ref="utilityLayers[1].ref"
        :visible="utilityLayers[1].visible"
        :z-index="utilityLayers[1].zIndex"
      >
        <vl-source-vector
          :ident="utilityLayers[1].source.ident"
          :features.sync="measuredFeatures"
        ></vl-source-vector>
      </vl-layer-vector>
      <!-- <vl-layer-vector
        v-if="nomimatimResults.length > 0"
        :id="utilityLayers[2].id"
        :ref="utilityLayers[2].ref"
        :visible="utilityLayers[2].visible"
        :z-index="utilityLayers[2].zIndex"
      >
        <vl-source-vector
          :ident="utilityLayers[2].source.ident"
          :features.sync="nomimatimResults"
        >
          <vl-style-func :factory="nomimatimStyleFactory"> </vl-style-func>
        </vl-source-vector>
      </vl-layer-vector> -->
      <!-- INFO POPOUP -->
      <!-- <vl-layer-vector
          v-if="mapStatus === 'info' && selectedFeatures !== 'undefined'"
        >
          <vl-source-vector ref="infoVectorSource">
            <vl-feature
              v-for="feature in selectedFeatures"
              :id="feature.id"
              :key="feature.id"
              :properties="feature.properties"
            >
              <vl-overlay
                :position="pointOnSurface(feature.geometry)"
                positioning="center-left"
                auto-pan
                stop-event
                :insert-first="false"
              >
                <div class="overlayWrapper">
                  <ul>
                    <li v-for="k in Object.keys(feature.properties)" :key="k">
                      {{ k }} : {{ feature.properties[k] }}
                    </li>
                  </ul>
                </div>
              </vl-overlay>
            </vl-feature>
          </vl-source-vector>
        </vl-layer-vector> -->

      <!-- DRAW INTERACTION -->
      <vl-interaction-draw
        v-if="$store.state.webgis.mapStatus === 'draw'"
        ref="drawInteraction"
        source="draw-target"
        :type="$store.state.webgis.drawType"
        :stop-click="true"
      >
        <vl-style-box>
          <vl-style-fill :color="[255, 255, 255, 0.2]"></vl-style-fill>
          <vl-style-stroke
            :color="[0, 0, 0, 0.5]"
            :width="2"
            :line-dash="[10, 10]"
          ></vl-style-stroke>
          <vl-style-circle :radius="4">
            <vl-style-fill :color="[255, 255, 255, 0.2]"></vl-style-fill>
            <vl-style-stroke
              color="[0, 0, 0, 0.7]"
              :width="2"
            ></vl-style-stroke>
          </vl-style-circle>
        </vl-style-box>
      </vl-interaction-draw>
      <!-- MEASURE INTERACTION -->
      <vl-interaction-draw
        v-if="$store.state.webgis.mapStatus === 'measure' && $store.state.webgis.measureType"
        ref="measureInteraction"
        source="measure-target"
        :type="$store.state.webgis.measureType"
        :stop-click="true"
        @drawstart="measureDrawStart"
        @drawend="measureDrawEnd" />

      <vl-geoloc
        v-if="mapStatus === 'geolocation'"
        ref="geoloc"
        @update:position="onUpdatePosition"
      >
        <template slot-scope="geoloc">
          <vl-feature
            v-if="geoloc.position"
            id="marker"
            ref="marker"
            :properties="{ start: Date.now(), duration: 2500 }"
          >
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-circle :radius="4">
                <vl-style-fill color="red"></vl-style-fill>
                <vl-style-stroke :color="[234, 53, 53]"></vl-style-stroke>
              </vl-style-circle>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-vector ref="featureInfo" key="9900001" :z-index="9900003">
        <vl-source-vector
          v-if="featureInfo.crs"
          :features="featureInfo.features"
          @update:features="onFeatureInfoUpdate"
        >
        </vl-source-vector>
      </vl-layer-vector>
      <vl-layer-vector
        ref="uploadedFeatures"
        render-mode="image"
        :z-index="lastZindex"
      >
        <vl-source-vector
          ref="uploadedFeaturesSource"
          :features.sync="uploadedFeatures"
        >
        </vl-source-vector>
      </vl-layer-vector>
    </vl-map>
    <!-- <div class="map-panel">
      <q-card>
        <q-toolbar color="secondary darken-2 white--text" flat>
          <q-toolbar-title>{{ panelInfo.toUpperCase() }}</q-toolbar-title>
          <q-space />
          <div>
            <q-btn flat outline round @click="togglePanel()">
              <q-icon name="more_vert" />
            </q-btn>
          </div>
        </q-toolbar>
        <template v-if="showPanel">
        </template>
      </q-card>
    </div> -->
  </div>
</template>
<script>
import ScaleLine from "ol/control/ScaleLine";
import MousePosition from "ol/control/MousePosition";
import ZoomToExtent from "ol/control/ZoomToExtent";
import { getArea, getLength } from "ol/sphere.js";
import { unByKey } from "ol/Observable";
import { createStringXY } from "ol/coordinate";
import { DragAndDrop } from "ol/interaction.js";
import { GPX, GeoJSON, IGC, KML, TopoJSON, WMSCapabilities } from "ol/format";
import {
  GeolocatioControl,
  InfoControl,
  PrintControl,
  MeasureControl,
  DrawControl,
  DragAndDropControl
  // NomimatimControl
} from "./extra/ol-custom-controls.js";
import { Polygon, LineString, Point } from "ol/geom.js";

import { findPointOnSurface, createStyle } from "vuelayers/lib/ol-ext";

import { saveAs } from "file-saver";
import { omit } from "./extra/utils";

import { topology } from "topojson-server";

import axios from "axios";

export default {
  name: "VueMap",
  props: {
    baseLayers: {
      type: Array,
      required: true
    },
    vectorLayers: {
      type: Array,
      required: true
    },
    utilityLayers: {
      type: Array,
      required: true
    },
    featureInfo: {
      type: Object,
      default: () => {}
    },
    mapStatus: {
      type: String,
      default: "display"
    },
    activeTreeItem: {
      type: Number,
      default: null
    },
    showPanel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      zoom: 17,
      center: [3720577, 4166974],
      rotation: 0,
      minZoom: 6,
      maxzoom: 18,
      apiKey: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
      drawnFeatures: [],
      measuredFeatures: [],
      uploadedFeatures: [],
      extent: [21.4, 39.5, 23.65, 41.8],
      printSize: [(297 * 72) / 25.4, (210 * 72) / 25.4],
      evtKey: {},
      selectedLayer: null,
      selectedFeature: {},
      nomimatimInput: "",
      nomimatimResults: [],
      convertLength: {
        meters: {
          meters: 1,
          miles: 0.000621371192,
          yards: 1.0936133,
          feet: 3.2808399
        },
        miles: {
          meters: 1609.344,
          miles: 1,
          yards: 1760,
          feet: 5280
        },
        yards: {
          meters: 0.9144,
          miles: 0.000568181818,
          yards: 1,
          feet: 3
        },
        feet: {
          meters: 0.3048,
          miles: 0.000189393939,
          yards: 0.333333333,
          feet: 1
        },
        "sq. meters": {
          "sq. meters": 1,
          "sq. miles": 3.8610215854781257e-7,
          "sq. yards": 1.19599005,
          "sq. feet": 10.7639104
        },
        "sq. miles": {
          "sq. meters": 2589988.11,
          "sq. miles": 1,
          "sq. yards": 3097600,
          "sq. feet": 27878400
        },
        "sq. yards": {
          "sq. meters": 0.83612736,
          "sq. miles": 3.22830579e-7,
          "sq. yards": 1,
          "sq. feet": 9
        },
        "sq. feet": {
          "sq. meters": 0.09290304,
          "sq. miles": 0.000000035870064279155,
          "sq. yards": 0.111111111,
          "sq. feet": 1
        }
      },
    };
  },
  computed: {
    lastZindex() {
      return 200 + this.vectorLayers.length + 1;
    }
  },
  watch: {
    "$store.state.webgis.measureUnit": {
      handler: function(newValue, oldValue) {
        if (oldValue === newValue) return;
        if (this.$store.state.webgis.measureOutput === "") return;
        this.$store.commit('webgis/SET_MEASURE_OUTPUT', Math.round(
            + this.$store.state.webgis.measureOutput * this.convertLength[oldValue][newValue] * 100
          ) / 100);
      },
      deep: true
    }
  },
  mounted() {
    this.$root.$emit("map:loading", true);
    const map = this.$refs.map.$map;
    // console.log('map ref', map, this.$refs.map.updateSize);
    if (map) {
      map.updateSize();
    }
    this.$root.$on('draw:clear', this.drawClear);
    this.$root.$on('measure:clear', this.drawClear);
    this.$root.$on('map:zoomToExtent', this.zoomToExtent);
    this.$root.$on('map:refresh', (params) => {
      this.refreshMap(params);
    });
  },
  methods: {
    onMapMounted() {
      this.waitFix();
    },
    refreshMap(params) {
      const map = this.$refs.map.$map;
      const size = map.getSize();
      const extent = map.getView().calculateExtent(size);

      const layer = this.baseLayers.filter(bsl => {
        return bsl.id === params.id;
      })
      layer.opacity = params.opacity;
      map.setSize(size);
      map.getView().fit([extent[0]+0.1,extent[1],extent[2],extent[3]], { size: size });
    },
    zoomToExtent() {
      this.$refs.map.$map.getView().animate({
        center: [2300914.433 , 4599808.379],
        zoom: this.$refs.map.$map.getView().getZoom() + 2
      });
    },
    togglePanel() {
      this.$root.$emit('change:showpanel', !this.showPanel);
      this.onMapMounted();
    },
    waitFix() {
      console.log('wait to fix');
      setTimeout(() => {
        this.$refs.map.$map.updateSize();
        this.$root.$emit("map:loading", false);
      }, 2000);
    },
    pointOnSurface: findPointOnSurface,
    print() {
      const map = this.$refs.map.$map;
      const size = map.getSize();
      const extent = map.getView().calculateExtent(size);
      map.once("rendercomplete", event => {
        const canvas = event.context.canvas;
        try {
          const data = canvas.toDataURL("image/jpeg");
          this.$root.$emit("export:pdf", { data });
        } catch (error) {
          this.$root.$emit("error", { msg: error });
        }

        map.setSize(size);
        map.getView().fit(extent, { size: size });
      });
      // Reset original map size

      // Set print size
      map.setSize(this.printSize);
      map.getView().fit(extent, { size: this.printSize });
    },

    formatLength(line) {
      // const length = getLength(
      //   line.clone().transform("EPSG:4326", "EPSG:3857")
      // );

      const length = line.getLength();

      let output;
      output =
        Math.round(
          length * this.convertLength["meters"][this.$store.state.webgis.measureUnit] * 100
        ) / 100;
      this.$store.commit('webgis/SET_MEASURE_OUTPUT', output);
    },
    formatArea(polygon) {
      // const area = getArea(polygon.clone().transform("EPSG:4326", "EPSG:3857"));
      // alert(area);
      const area = polygon.getArea();
      let output;
      output =
        Math.round(
          area * this.convertLength["sq. meters"][this.$store.state.webgis.measureUnit] * 100
        ) / 100;
      this.$store.commit('webgis/SET_MEASURE_OUTPUT', output);
    },
    formatCoords(point) {
      const coordinates = point.clone().getCoordinates();
      this.$store.commit('webgis/SET_MEASURE_OUTPUT', [
        Number(Math.round(coordinates[0] + "e3") + "e-3"),
        Number(Math.round(coordinates[1] + "e3") + "e-3")
      ]);
    },
    measureDrawStart() {
      this.$refs.measure.getSource().clear();
    },
    drawClear() {
      this.$refs.draw.getSource().clear();
      this.$refs.measure.getSource().clear();
    },
    measureDrawEnd(evt) {
      let geom = evt.feature.getGeometry();
      if (geom instanceof Polygon) {
        this.formatArea(geom);
      } else if (geom instanceof LineString) {
        this.formatLength(geom);
      } else if (geom instanceof Point) {
        this.formatCoords(geom);
      }
      return;
    },
    panelButton() {
      alert(
        "This Panel can be used for user/project information and general interaction"
      );
    },
    onUpdatePosition(coordinate) {
      this.deviceCoordinate = coordinate;
      this.$refs.map.$map.getView().animate({
        center: coordinate,
        zoom: this.$refs.map.$map.getView().getZoom() + 2
      });
    },
    onMapPostCompose({ vectorContext, frameState }) {
      const easeInOut = t => 1 - Math.pow(1 - t, 3);

      if (!this.$refs.marker || !this.$refs.marker.$feature) return;
      const feature = this.$refs.marker.$feature;
      if (!feature.getGeometry() || !feature.getStyle()) return;
      const flashGeom = feature.getGeometry().clone();
      const duration = feature.get("duration");
      const elapsed = frameState.time - feature.get("start");
      const elapsedRatio = elapsed / duration;
      const radius = easeInOut(elapsedRatio) * 35 + 5;
      const opacity = easeInOut(1 - elapsedRatio);
      const fillOpacity = easeInOut(0.5 - elapsedRatio);
      vectorContext.setStyle(
        createStyle({
          imageRadius: radius,
          fillColor: [119, 170, 203, fillOpacity],
          strokeColor: [119, 170, 203, opacity],
          strokeWidth: 2 + opacity
        })
      );
      vectorContext.drawGeometry(flashGeom);
      vectorContext.setStyle(feature.getStyle()(feature)[0]);
      vectorContext.drawGeometry(feature.getGeometry());
      if (elapsed > duration) {
        feature.set("start", Date.now());
      }
      this.$refs.map.render();
    },
    downloadKml() {
      const source = this.$refs.featureInfo.getSource();
      if (source) {
        const features = source.getFeatures();
        if (features && features.length > 0) {
          const writer = new KML();
          const kml = writer.writeFeatures(features, {
            featureProjection: "EPSG:4326"
          });
          const data = new Blob([kml], {
            type: "application/vnd.google-earth.kml+xml"
          });

          saveAs(data, "features");
        }
      }
    },
    downloadGeojson() {
      const source = this.$refs.featureInfo.getSource();
      if (source) {
        const features = source.getFeatures();
        if (features && features.length > 0) {
          const writer = source.getFormat();
          const geojson = writer.writeFeatures(features, {
            featureProjection: "EPSG:4326"
          });
          const data = new Blob([geojson], {
            type: "application/json"
          });
          saveAs(data, "features");
        }
      }
    },
    downloadTopoJSON() {
      const source = this.$refs.featureInfo.getSource();
      if (source) {
        const features = source.getFeatures();
        if (features && features.length > 0) {
          const writer = source.getFormat();
          const geojson = writer.writeFeaturesObject(features, {
            featureProjection: "EPSG:4326"
          });
          const topo = topology({ foo: geojson });
          const data = new Blob([JSON.stringify(topo)], {
            type: "application/json"
          });

          saveAs(data, "features");
        }
      }
    },
    dragAndDrop() {
      const map = this.$refs.map.$map;
      const dd = new DragAndDrop({
        formatConstructors: [GPX, GeoJSON, IGC, KML, TopoJSON]
      });
      map.getInteractions().forEach(int => {
        if (int instanceof DragAndDrop) map.removeInteraction(int);
      });

      map.addInteraction(dd);
      dd.on("addfeatures", evt => {
        this.$refs.uploadedFeaturesSource.$source.clear();
        if (!evt.features) {
          this.selectedFeature = Object.assign(
            {},
            { id: null },
            { properties: {} },
            { valid: false }
          );
          return;
        }
        this.$refs.uploadedFeaturesSource.addFeatures(evt.features);
        const extent = this.$refs.uploadedFeaturesSource.$source.getExtent();
        map.getView().fit(extent);
        const file = evt.file;
        unByKey(this.evtKey);
        const evtKey = map.on("singleclick", evt => {
          map.forEachFeatureAtPixel(
            evt.pixel,
            feature => {
              const id = feature.getId();
              const featureProps = feature.getProperties();
              const realProps = omit(featureProps, ["geometry"]);
              if (file.type === "application/vnd.google-earth.kml+xml") {
                let filtered = {};
                if (realProps.description) {
                  realProps.description
                    .split("\n")
                    .filter(el => {
                      return el.includes("<li>");
                    })
                    .map(el => {
                      const line = el
                        .replace(/<[^>]*>/g, "")
                        .trim()
                        .split(":");
                      let k = line[0];
                      let v = line[1];
                      const object = { [k]: v };
                      filtered = { ...filtered, ...object };
                    });
                } else {
                  filtered = realProps;
                }
                this.selectedFeature = Object.assign(
                  {},
                  { id },
                  { properties: filtered },
                  { valid: true }
                );
              } else if (file.type === "application/json") {
                this.selectedFeature = Object.assign(
                  {},
                  { id },
                  { properties: realProps },
                  { valid: true }
                );
              }
            },
            {
              layerFilter: layer => layer === this.$refs.uploadedFeatures.$layer
            }
          );
        });
        this.evtKey = evtKey;
      });
    },
    clearUploaded() {
      this.$refs.uploadedFeaturesSource.clear();
      this.selectedFeature = {};
    },
    cancelUploaded() {
      this.$root.$emit("upload:cancel");
      const map = this.$refs.map.$map;
      map.getInteractions().forEach(int => {
        if (int instanceof DragAndDrop) map.removeInteraction(int);
      });
      this.clearUploaded();
    }
  }
};
</script>

<style lang="scss" scoped>
.mapWrapper {
  position: relative;
}
.mymap {
  position: relative;
  top: 0em;
  right: 0em;
  height: 100%;
}
.map-panel {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
}
::v-deep .v-toolbar__title {
  font-size: 1em;
}
::v-deep .mouse-position {
  background-color: #454545;
  color: #fff;
  border-radius: 4px;
  top: 0.5em;
  left: 3em;
  position: absolute;
  padding: 4px;
  margin: 2px;
}

::v-deep .ol-overviewmap {
  bottom: auto;
  left: auto;
  right: 0.5em;
  top: 2.5em;
}
.overlayWrapper {
  background: #fff;
  padding: 2px;
  color: black;
  overflow: auto;
  max-height: 15em;
}
.overlayWrapper-xs {
  background: #fff;
  padding: 2px;
  color: black;
  overflow: auto;
  max-height: 5em;
}
::v-deep .ol-control button {
  background-color: #454545;
}
::v-deep .ol-scale-line {
  background-color: #454545;
}
::v-deep .ol-scale-line .ol-touch {
  background-color: #454545;
}
::v-deep .rotate-north {
  top: 7em;
  left: 0.5em;
}
::v-deep .ol-touch .rotate-north {
  top: 5.71em;
}
::v-deep .geolocation {
  top: 7em;
  left: 0.5em;
}
::v-deep .ol-touch .geolocation {
  top: 7.21em;
}
::v-deep .infobtn {
  top: 9.5em;
  left: 0.5em;
}
::v-deep .ol-touch .infobtn {
  top: 9.21em;
}
::v-deep .printBtn {
  top: 12em;
  left: 0.5em;
  .q-icon {
    line-height: 0.5em;
    width: 0.5em;
  }
}
::v-deep .ol-touch .printBtn {
  top: 11.21em;
}
::v-deep .measureBtn {
  top: 14.5em;
  left: 0.5em;
  .q-icon {
    line-height: 0.5em;
    width: 0.5em;
  }
}
::v-deep .ol-touch .measureBtn {
  top: 13.21em;
}
::v-deep .drawBtn {
  top: 17em;
  left: 0.5em;
  .q-icon {
    line-height: 0.5em;
    width: 0.5em;
  }
}
::v-deep .ol-touch .drawBtn {
  top: 15.71em;
}
::v-deep .dragAndDropBtn {
  top: 19.5em;
  left: 0.5em;
  .q-icon {
    line-height: 0.5em;
    width: 0.5em;
  }
}
::v-deep .ol-touch .dragAndDropBtn {
  top: 15.21em;
}

::v-deep .nomimatimBtn {
  top: 22em;
  left: 0.5em;
  .q-icon {
    line-height: 0.5em;
    width: 0.5em;
  }
}
::v-deep .ol-touch .dragAndDropBtn {
  top: 16.71em;
}
.here {
  background-color: white;
  font-size: 1em;
  color: black;
  padding: 0.4em;
  border: 2px solid black;
  border-radius: 5px;
}
.full {
  text-align: justify;
  text-justify: inter-word;
}
.nomimatimList:hover {
  background-color: #454545;
  color: white;
  cursor: zoom-in;
}
</style>