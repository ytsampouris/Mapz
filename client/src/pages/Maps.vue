<template>
  <q-page padding>
    <q-btn color="red" icon-right="fab fa-youtube" label="Οδηγίες χρήσης" type="a" target="new_tab" href="https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa" />

    <div v-if="!layers || $apollo.loading" style="width: 100%; height: 50%; text-align: center; vertical-align: middle; z-index: 999; color: grey; position: absolute;">
      <div style="top: 40%; width: 100%; height: 100%; position: absolute;">
        <q-spinner-gears
          color="grey"
          size="4em"
        />
        <div style="margin: 1em">Φόρτωση...</div>
      </div>
    </div>
    <div v-if="layers">
      <div class="q-pa-xs flex flex-center">
        <span class="text-subtitle1">Χάρτες</span>
      </div>
      <q-banner v-if="layers.length === 0" inline-actions rounded class="bg-orange text-white">
        Δεν βρέθηκαν χάρτες
      </q-banner>
      <q-list v-if="layers && layers.length > 0">
        <q-item v-for="layer in layers" :key="layer.id">
          <q-item-section>
            <q-expansion-item
              expand-separator
              icon="map"
              :label="`${layer.zindex}. ${layer.label}`"
              :caption="layer.details"
            >
              <q-card>
                <q-card-section>
                  <q-item-label caption>
                    <q-list>
                      <q-item v-if="layer.timespan">Timespan: {{ layer.timespan }}</q-item>
                      <q-item v-if="layer.type">Type: {{ layer.type }}</q-item>
                      <q-item v-if="layer.visible">Visibility: {{ layer.visible }}</q-item>
                      <q-item v-if="layer.url">URL: {{ layer.url }}</q-item>
                      <q-item v-if="layer.attributions">Attributions: {{ layer.attributions }}</q-item>
                      <q-item v-if="layer.zindex">zIndex: {{ layer.zindex }}</q-item>
                      <q-item v-if="layer.filetype">Filetype: {{ layer.filetype }}</q-item>
                      <q-item v-if="layer.crs">Coordinate system: {{ layer.crs }}</q-item>
                      <q-item v-if="layer.filename">Filename: {{ layer.filename }}</q-item>
                      <q-item v-if="layer.dbtablename">Database table name: {{ layer.dbtablename }}</q-item>
                    </q-list>
                    <q-separator spaced inset/>
                  </q-item-label>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-item-section>

          <q-item-section side top>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn flat round icon="delete" @click="deleteLayer(layer.id)" />
              <q-btn flat round icon="edit" @click="editLayerDialog = true; editingLayer = layer" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-banner inline-actions rounded class="bg-light-blue-7 text-white">
      Με τα κουμπιά πραγματοποιείται διαγραφή θεματικού χάρτη, επιλογή εμφάνισης ή όχι και επεξεργασία ιδιοτήτων χάρτη.
    </q-banner>

    <q-dialog v-model="editLayerDialog" persistent transition-show="scale" transition-hide="scale">
      <q-card style="width: 50%" v-if="editingLayer">
        <q-card-section>
          <q-input v-model="editingLayer.label" label="Γενική περιγραφή" />
          <q-input v-model="editingLayer.details" label="Λεπτομέρειες" />
          <q-input v-model="editingLayer.timespan" label="Χρονική κάλυψη" />
          <q-input v-model="editingLayer.filetype" label="Τύπος αρχείου" />
          <q-input v-model="editingLayer.crs" label="Πρωτότυπο σύστημα γεωγραφικών συντεταγμένων" />
          <q-input v-model="editingLayer.attributions" label="Αρχική πηγή" />
          <q-input v-model="editingLayer.filename" label="Όνομα αρχείου" />
          <q-input v-model="editingLayer.type" label="Τύπος map tiles" />
          <q-input v-model="editingLayer.url" label="URL" />
          <q-toggle v-model="editingLayer.visible" label="Ορατό"/>
          <q-toggle v-model="editingLayer.published" label="Δημοσιευμένος"/>
          <q-input v-model="editingLayer.zindex" label="Σειρά εμφάνισης" />
          <q-input v-model="editingLayer.apikey" label="Κλειδί API" />
          <q-input v-model="editingLayer.dbtablename" label="Όνομα πίνακα βάσης δεδομένων" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Άκυρο" v-close-popup />
          <q-btn flat label="Αποθήκευση" v-close-popup @click="saveLayer" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { queries, mutations } from 'src/graphql';

export default {
  name: 'maps',
  data() {return {
    current: 1,
    searchText: null,
    expanded: false,
    group: [ 'title' ],
    searchDocuments: null,
    editLayerDialog: false,
    editingLayer: null
  }},
  apollo: {
    layers: {
      query: queries.getLayers,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  },
  methods: {
    saveLayer() {
      const layer = this.editingLayer;
      this.$apollo.mutate({
        mutation: mutations.updateLayer,
        variables: {
          id: layer.id,
          label: layer.label,
          details: layer.details,
          timespan: layer.timespan,
          filetype: layer.filetype,
          crs: layer.crs,
          attributions: layer.attributions,
          filename: layer.filename,
          type: layer.type,
          url: layer.url,
          zindex: parseInt(layer.zindex),
          visible: layer.visible,
          published: layer.published,
          apikey: layer.apikey,
          dbtablename: layer.dbtablename
        }, update: (cache, { data: { updateLayer } }) => {
          if (updateLayer) {
            const data = cache.readQuery({
              query: queries.getLayers
            });
            cache.writeQuery({
              query: queries.getLayers,
              data
            });
          }
        }
      });
    },
    // search() {
    //   const searchText = this.searchText;
    //   const options = this.options;
    //   this.expanded = false;
    //   this.$apollo.query({
    //     query: queries.searchLayers,
    //     variables: {
    //       searchText
    //     }
    //   }).then((data) => {
    //     this.searchLayers = data.data.searchLayers;
    //   });
    // },
    deleteLayer(id) {
      this.$q.notify({
        message: 'Διαγραφή χάρτη;',
        color: 'negative',
        timeout:0,
        actions: [
          { label: 'Διαγραφή', color: 'white', handler: () => {
            this.$apollo.mutate({
              mutation: mutations.deleteLayer,
              variables: {
                id
              },update: (cache, { data: { deleteLayer } }) => {
                if (deleteLayer) {
                  const data = cache.readQuery({
                    query: queries.getLayers
                  });
                  data.layers = data.layers.filter(d => d.id !== id);
                  cache.writeQuery({
                    query: queries.getLayers,
                    data
                  });
                }
              }
            });
            this.$q.loading.hide();
            }
          },
          { label: 'Άκυρο', color: 'white' }
        ]
      })
    }
  }
}
</script>
