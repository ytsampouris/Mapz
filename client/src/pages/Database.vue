<template>
  <q-page padding>
    <q-tabs
      v-model="tab"
      class="bg-green-8 text-white shadow-2"
    >
      <q-tab name="plants" icon="fas fa-leaf" label="Χλωρίδα" />
      <q-tab name="animals" icon="fas fa-frog" label="Πανίδα" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="plants">
        <q-btn color="white" flat icon-right="fab fa-youtube" label="Οδηγίες χρήσης" type="a" target="new_tab" href="https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa" />
        <br>
        <q-btn color="red" icon-right="fab fa-youtube" label="Οδηγίες χρήσης" type="a" target="new_tab" href="https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa" />

        <div v-if="$apollo.loading" style="width: 100%; height: 100vh; text-align: center; vertical-align: middle; z-index: 999; color: grey; position: absolute; top: 40%">
          <q-spinner-gears
            color="grey"
            size="4em"
          />
          <div style="margin: 1em">Φόρτωση...</div>
        </div>

        <div class="q-pa-xs" v-if="!$apollo.loading">
          <q-table
            class="my-sticky-column-table"
            title="Είδη"
            :data="species"
            :columns="columns"
            :filter="tableFilter"
            row-key="name"
            wrap-cells
          >
            
            <template v-slot:top="props">
              <div class="col-2 q-table__title">Είδη</div>
              <q-space />
              <q-input borderless dense debounce="300" v-model="tableFilter" placeholder="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-btn
                round dense
                :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen"
                class="q-ml-md"
              />
            </template>
          </q-table>
        </div>
      </q-tab-panel>

      <q-tab-panel name="animals">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

    </q-tab-panels>

  </q-page>
</template>

<script>
import { queries } from 'src/graphql';

export default {
  name: 'Database',
  apollo: {
    species: {
      query: queries.getSpecies,
      error(error) {
        this.error = JSON.stringify(error.message);
        console.log('error:: ', error)
      }
    }
  },
  data () {
    return {
      error: null,
      tab: "plants",
      tableFilter: '',
      columns: [
        // {
        //   name: 'id',
        //   required: true,
        //   label: 'A/A',
        //   align: 'left',
        //   field: row => row.id,
        //   format: val => `${val}`,
        //   sortable: true
        // },
        {
          name: 'species',
          align: 'center',
          label: 'Είδος',
          field: 'species',
          sortable: true
        },
        { name: 'family', label: 'Οικογένεια', field: 'family', sortable: true },
        { name: 'class', label: 'Τάξη', field: 'class', sortable: true },
        {
          name: 'n2k',
          label: 'Κωδικός Ν2Κ',
          field: 'n2k',
          sortable: true
        },
        {
          name: 'code_n2k',
          label: 'Περιοχή Ν2Κ',
          field: 'code_n2k',
          sortable: true
        },
        {
          name: 'iunc',
          label: 'IUNC',
          field: 'iunc',
          sortable: true
        },
        {
          name: 'directive_92',
          label: 'Οδηγία 92/43/ΕΟΚ',
          field: 'directive_92',
          sortable: true
        },
        {
          name: 'bern',
          label: 'Σύμβαση Βέρνης',
          field: 'bern',
          sortable: true
        },
        {
          name: 'bonn',
          label: 'Σύμβαση Βόννης',
          field: 'bonn',
          sortable: true
        },
        {
          name: 'cites',
          label: 'Cites',
          field: 'cites',
          sortable: true
        },
        {
          name: 'date',
          label: 'Ημερομηνία',
          field: 'date',
          sortable: true
        },
        {
          name: 'source',
          label: 'Πηγή',
          field: 'source',
          sortable: true
        },
        {
          name: 'eunis',
          label: 'Σύνδεσμος EUNIS',
          field: 'eunis',
          sortable: true
        }
      ]
    }
  }
}
</script>
