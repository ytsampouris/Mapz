<template>
  <q-card>
    <q-card-section>
      <div>
          <q-banner rounded class="bg-purple-8 text-white">
              {{ $t("panelText.info") }}
          </q-banner>
          <div v-if="loading" style="width: 100%; height: 100%; text-align: center; vertical-align: middle; z-index: 999; color: grey; position: absolute;">
            <div style="top: 40%; width: 100%; height: 100%; position: absolute;">
              <q-spinner-gears
                color="grey"
                size="4em"
              />
              <div style="margin: 1em">Φόρτωση...</div>
            </div>
          </div>
      </div>

      <q-scroll-area style="height: 40vh">
        <div v-if="!$apollo.loading">
          <q-list v-for="feature in featuresInfo" :key="feature.id">
              <q-item v-for="attr in Object.keys(feature.properties)" :key="attr">
                <q-icon xs name="chevron_right" />
                <span v-if="attr === 'image'">
                  <img :src="`${attr}`" alt="Image" width="100%" height="100%">
                </span>
                <span v-if="attr === 'url'"><a :href="`${attr}`">Σύνδεσμος</a></span>
                <span v-else>
                  {{ attr }} : {{ feature.properties[attr] }}
                </span>
              </q-item>
          </q-list>
        </div>
        <div v-else>
          {{ featureInfo }}
        </div>
      </q-scroll-area>
    </q-card-section>
  </q-card>
</template>
<script>
import { queries } from 'src/graphql';

export default {
    data() {
      return {
        featureInfo: {},
        featuresInfo: [],
        loading: false,
      }
    },
    mounted() {
      this.$root.$on('map:info:coordinates', (measurements, layerToQuery, zoom) => {
        // console.log(measurements, layerToQuery, zoom);
        if(!layerToQuery.id) {
          this.$q.notify({
            message: 'Δεν έχετε επιλέξει χάρτη! Επιλέξτε από την λίστα και ξαναπροσπαθήστε.',
            color: 'negative',
            timeout: 1800,
          });
        } else {
          const x = measurements[0];
          const y = measurements[1];
          const layer = layerToQuery.dbtablename;
          const type = layerToQuery.filetype;
          // console.log(layerToQuery.dbtablename, type, x, y);
          this.loading = true;
          this.$apollo.query({
            query: queries.queryXY,
            variables: {
              layer, type, zoom, x, y
            },
            fetchPolicy: 'no-cache',
          }).then((data) => {
            // console.log(data)
            if(JSON.parse(data.data.queryXY)[0][0].query_point_layer_by_xy !== null) {
              // console.log('json reply:: ', JSON.parse(data.data.queryXY[0]).query_point_layer_by_xy)
              if (JSON.parse(data.data.queryXY)["1"].rows.length > 0) {
                this.featuresInfo = [];
                this.$root.$emit('map:infoLayer:clearSource');
                JSON.parse(data.data.queryXY)["1"].rows.forEach((r) => {
                  if(type === 'Point') {
                    this.featuresInfo.push(JSON.parse(r.query_point_layer_by_xy));
                  }
                  if(type === 'Line') {
                    this.featuresInfo.push(JSON.parse(r.query_line_layer_by_xy));
                  }
                  if(type === 'Polygon') {
                    this.featuresInfo.push(JSON.parse(r.query_polygon_layer_by_xy));
                  }
                  if(type === 'Raster') {
                    this.featuresInfo.push({
                      id: '1',
                      properties: {
                        "Τιμή pixel:": r.val
                      }
                    });
                  }
                });
              } else {
                this.$q.notify({
                  message: 'Δεν βρέθηκαν πληροφορίες',
                  color: 'negative',
                  timeout:1200,
                })
              }
            }
            this.loading = false;
          }).then(() => {
            if(this.featuresInfo.length > 0 && type !== 'Raster') {
              this.featuresInfo.forEach((f) => {
                // console.log(JSON.stringify(f));
                this.$root.$emit('map:infoLayer:addFeature', f);
              });
            }
          });
        }
      });

    },
    methods: {
      clearInfo() {
        this.$root.$emit("info:clear");
      },
      cancelInfo() {
        this.$root.$emit("info:cancel");
        this.selectedLayer = null;
      },
      onFeatureInfoUpdate(e) {
        if (e.length > 0) {
          const extent = this.$refs.featureInfo.getSource().getExtent();
          this.$refs.map.$map.getView().fit(extent);
        }
      },
    }
}
</script>