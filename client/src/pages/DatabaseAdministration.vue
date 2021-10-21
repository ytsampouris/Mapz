<template>
  <q-page padding>
    <q-btn color="white" flat icon-right="fab fa-youtube" label="Οδηγίες χρήσης" type="a" target="new_tab" href="https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa" />
    <br>
    <q-btn color="red" icon-right="fab fa-youtube" label="Οδηγίες χρήσης" type="a" target="new_tab" href="https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa" />
    <div v-if="$apollo.loading" style="width: 100%; height: 50%; text-align: center; vertical-align: middle; z-index: 999; color: grey; position: absolute;">
      <div style="top: 40%; width: 100%; height: 100%; position: absolute;">
        <q-spinner-gears
          color="grey"
          size="4em"
        />
        <div style="margin: 1em">Φόρτωση...</div>
      </div>
    </div>
    <div v-if="rowLoading" style="width: 100%; height: 50%; text-align: center; vertical-align: middle; z-index: 999; color: grey; position: absolute;">
      <div style="top: 40%; width: 100%; height: 100%; position: absolute;">
        <q-spinner-gears
          color="grey"
          size="4em"
        />
        <div style="margin: 1em">Φόρτωση...</div>
      </div>
    </div>
    <div class="q-pa-xs" v-if="!$apollo.loading && !rowLoading">
      <q-table
        title="Είδη"
        class="my-sticky-column-table"
        :data="species"
        :columns="columns"
        row-key="name"
        wrap-cells
      >
      <template v-slot:top="props">
        <div class="col-2 q-table__title">Είδη</div>
        <q-space />
        <q-btn
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-xs"
        />
        <q-btn
          dense
          icon="add"
          @click="addRowDialog=true"
          class="q-ml-xs"
        />
        <q-btn
          v-if="rowsChanged.length > 0"
          dense color="primary"
          icon="save"
          @click="saveTable"
          class="q-ml-xs"
        />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
            <q-btn icon="delete" dense flat color="negative" @click="deleteSpecies(props.row.id)"></q-btn>
          </q-td>

          <q-td key="species" :props="props">
            {{ props.row.species }}
            <q-popup-edit v-model="props.row.species">
              <q-input v-model="props.row.species" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="family" :props="props">
            {{ props.row.family }}
            <q-popup-edit v-model="props.row.family">
              <q-input v-model="props.row.family" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="classification" :props="props">
            {{ props.row.classification }}
            <q-popup-edit v-model="props.row.classification">
              <q-input v-model="props.row.classification" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="code_n2k" :props="props">
            {{ props.row.code_n2k }}
            <q-popup-edit v-model="props.row.code_n2k">
              <q-input v-model="props.row.code_n2k" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="n2k" :props="props">
            {{ props.row.n2k }}
            <q-popup-edit v-model="props.row.n2k">
              <q-input v-model="props.row.n2k" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="iunc" :props="props">
            {{ props.row.iunc }}
            <q-popup-edit v-model="props.row.iunc">
              <q-input v-model="props.row.iunc" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="directive_92" :props="props">
            {{ props.row.directive_92 }}
            <q-popup-edit v-model="props.row.directive_92">
              <q-input v-model="props.row.directive_92" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="bern" :props="props">
            {{ props.row.bern }}
            <q-popup-edit v-model="props.row.bern">
              <q-input v-model="props.row.bern" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="bonn" :props="props">
            {{ props.row.bonn }}
            <q-popup-edit v-model="props.row.bonn">
              <q-input v-model="props.row.bonn" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="cites" :props="props">
            {{ props.row.cites }}
            <q-popup-edit v-model="props.row.cites">
              <q-input v-model="props.row.cites" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="date" :props="props">
            {{ props.row.date }}
            <q-popup-edit v-model="props.row.date">
              <q-input v-model="props.row.date" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="source" :props="props">
            {{ props.row.source }}
            <q-popup-edit v-model="props.row.source">
              <q-input v-model="props.row.source" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>

          <q-td key="eunis" :props="props">
            {{ props.row.eunis }}
            <q-popup-edit v-model="props.row.eunis">
              <q-input v-model="props.row.eunis" dense autofocus counter @input="trackRowChanges(props.row)" />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
      </q-table>



      <q-dialog v-model="addRowDialog" persistent transition-show="scale" transition-hide="scale">
        <div v-if="rowLoading" style="width: 100%; height: 100vh; text-align: center; vertical-align: middle; z-index: 999; color: grey; position: absolute;">
          <div style="top: 40%; width: 100%; height: 100vh; position: absolute;">
            <q-spinner-gears
              color="grey"
              size="4em"
            />
            <div style="margin: 1em">Φόρτωση...</div>
          </div>
        </div>
        <q-card style="width: 50%">
          <q-card-section>
            <div class="text-h6">Προσθήκη</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input v-model="new_species" dense label="Είδος" />
            <q-input v-model="new_family" dense label="Οικογένεια" />
            <q-input v-model="new_classification" dense label="Τάξη" />
            <q-input v-model="new_n2k" dense label="Κωδικός Ν2Κ" />
            <q-input v-model="new_code_n2k" dense label="Περιοχή Ν2Κ" />
            <q-input v-model="new_iunc" dense label="IUNC" />
            <q-input v-model="new_directive_92" dense label="Οδηγία 92/43/ΕΟΚ" />
            <q-input v-model="new_bern" dense label="Σύμβαση Βέρνης" />
            <q-input v-model="new_bonn" dense label="Σύμβαση Βόννης" />
            <q-input v-model="new_cites" dense label="Cites" />
            <q-input v-model="new_date" dense label="Ημερομηνία" />
            <q-input v-model="new_source" dense label="Πηγή" />
            <q-input v-model="new_eunis" dense label="Σύνδεσμος EUNIS" />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn label="Αποθήκευση" color="primary" @click="addSpecies()" />
            <q-btn outline label="Άκυρο" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

    </div>
  </q-page>
</template>

<script>
import { queries, mutations } from 'src/graphql';

export default {
  name: 'DatabaseAdministration',
  apollo: {
    species: {
      query: queries.getSpecies,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  },
  methods: {
    saveTable() {
      this.rowLoading = true;
      this.rowsChanged.forEach(row => {
        // console.log('update this id: ', row.id, ' with this data: ', row);
        this.$apollo.mutate({
          mutation: mutations.updateSpecies,
          variables: {
            id: row.id,
            species: row.species,
            family: row.family,
            classification: row.classification,
            n2k: row.n2k,
            code_n2k: row.code_n2k,
            iunc: row.iunc,
            directive_92: row.directive_92,
            bern: row.bern,
            bonn: row.bonn,
            cites: row.cites,
            date: row.date,
            source: row.source,
            eunis: row.eunis
          },update: (cache, { data: { updateSpecies } }) => {
            this.rowLoading = false;
          }
        })
      });
    },
    addSpecies() {
      const species = this.new_species;
      const family = this.new_family;
      const classification = this.new_classification;
      const n2k = this.new_n2k;
      const code_n2k = this.new_code_n2k;
      const iunc = this.new_iunc;
      const directive_92 = this.new_directive_92;
      const bern = this.new_bern;
      const bonn = this.new_bonn;
      const cites = this.new_cites;
      const date = this.new_date;
      const source = this.new_source;
      const eunis = this.new_eunis;
      this.rowLoading = true;

      this.$apollo.mutate({
        mutation: mutations.addSpecies,
        variables: {
          species,
          family,
          classification,
          n2k,
          code_n2k,
          iunc,
          directive_92,
          bern,
          bonn,
          cites,
          date,
          source,
          eunis
        },update: (cache, { data: { addSpecies } }) => {
          if (addSpecies) {
            const data = cache.readQuery({
              query: queries.getSpecies
            });
            data.species = [addSpecies, ...data.species ];
            cache.writeQuery({
              query: queries.getSpecies,
              data
            });
          }
          this.addRowDialog = false;
          this.rowLoading = false;
        }
      })
    },
    deleteSpecies(id) {
      this.rowLoading = true;
      this.$apollo.mutate({
        mutation: mutations.deleteSpecies,
        variables: {
          id
        },update: (cache, { data: { deleteSpecies } }) => {
          if (deleteSpecies) {
            console.log(deleteSpecies);
            const data = cache.readQuery({
              query: queries.getSpecies,
            });
            data.species = data.species.filter(d => d.id !== id);
            cache.writeQuery({
              query: queries.getSpecies,
              data
            });
          }
          this.rowLoading = false;
        }
      });
    },
    trackRowChanges(row) {
      const rowReplacement = [row];
      if (this.rowsChanged.some(e => e.id === row.id)) {
        this.rowsChanged = this.rowsChanged.map(obj => rowReplacement.find(o => o.id === obj.id) || obj);
      } else {
        this.rowsChanged.push(row);
      }
    }
  },
  data() {
    return {
      addRowDialog: false,
      rowLoading: false,
      rowsChanged: [],
      new_species: null,
      new_family: null,
      new_classification: null,
      new_n2k: null,
      new_code_n2k: null,
      new_iunc: null,
      new_directive_92: null,
      new_bern: null,
      new_bonn: null,
      new_cites: null,
      new_date: null,
      new_source: null,
      new_eunis: null,
      columns: [
        {
          name: 'id',
          required: false,
          label: '',
          align: 'left',
          field: row => row.id,
        },
        {
          name: 'species',
          align: 'center',
          label: 'Είδος',
          field: 'species',
          sortable: true
        },
        { name: 'family', label: 'Οικογένεια', field: 'family', sortable: true },
        { name: 'classification', label: 'Τάξη', field: 'classification', sortable: true },
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
