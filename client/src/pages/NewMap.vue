<template>
  <q-page padding>
    <q-btn color="white" flat icon-right="fab fa-youtube" label="Οδηγίες χρήσης" type="a" target="new_tab" href="https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa" />
    <br>
    <q-btn color="red" icon-right="fab fa-youtube" label="Οδηγίες χρήσης" type="a" target="new_tab" href="https://www.youtube.com/playlist?list=PLwQ-2nYs008a8uMgJw64h7NcyjxtLbCUa" />
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Εισαγωγή στοιχείων χάρτη"
          icon="list"
          :done="step > 1"
        >
          <q-item v-ripple>
            <q-item-section>
              <q-item-label>Εμφάνιση μόνο των απαραίτητων</q-item-label>
              <q-item-label caption>Ενεργοποιήστε την εμφάνιση μόνο το απαραίτητων πεδίων για να λειτουργήσει ο χάρτης. Τα υπόλοιπα αφορούν μεταδεδομένα που δεν είναι απαραίτητα για να λειτουργήσει σωστά, αλλά πληροφορίες για το χρήστη.</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle v-model="visibleMetadata" />
            </q-item-section>
          </q-item>
          <div>
              <div class="row">
                <div class="col q-ma-md">
                    <q-input v-model="label" label="Γενική περιγραφή" bottom-slots filled md>
                      <template v-slot:hint>
                        Η περιγραφή που θα φαίνεται σαν όνομα στην λίστα των χαρτών
                      </template>
                    </q-input>
                </div>
              </div>

              <div class="row" md>
                <div class="col q-ma-md">
                  <q-select v-model="filetype" :options="['Point', 'Line', 'Polygon', 'Raster']" label="Τύπος δεδομένων" bottom-slots filled>
                    <template v-slot:hint>
                      Η δήλωση αυτή παίζει σημαντικό ρόλο κατά την εκτέλεση του info tool. Ουσιαστικά δηλώνουμε τι τύπος δεδομένων είναι για να γίνεται σωστά η αναζήτηση πληροφορίας στην βάση δεδομένων.
                    </template>
                  </q-select>
                </div>
              </div>

              <div class="row" md>
                <div class="col q-ma-md">
                  <q-input v-model="zindex" label="Σειρά εμφάνισης" bottom-slots filled>
                    <template v-slot:hint>
                      Είναι ένας αριθμός με βάση τον οποίο το layer εμφανίζεται στο tree και στο χάρτη ψηλότερα ή χαμηλότερα από τα υπόλοιπα. Όσο πιο μεγάλος ο αριθμός τόσο πιο ψηλά εμφανίζεται.
                    </template>
                  </q-input>
                </div>
              </div>

              <div class="row" md>
                <div class="col q-ma-md">
                  <q-select v-model="type" :options="['xyz', 'osm']" label="Τύπος" bottom-slots filled>
                    <template v-slot:hint>
                      Δήλωση xyz αν πρόκειται για αποτέλεσμα εξαγωγής tiles από το QGIS, osm για Openstreet map.
                    </template>
                  </q-select>
                </div>
              </div>

              <div class="row" md>
                <div class="col q-ma-md">
                  <q-input v-model="url" label="URL" bottom-slots filled>
                    <template v-slot:hint>
                      Ποια είναι η πηγή URL από όπου φορτώνεται ο χάρτης. Για χάρτες που φτιάχνονται με το QGIS και ανεβάζουμε το αρχείο *.mbtiles.
                    </template>
                  </q-input>
                </div>
              </div>


              <div class="row" md>
                <div class="col q-ma-md">
                  <q-input v-model="dbtablename" label="Όνομα πίνακα βάσης δεδομένων" bottom-slots filled>
                    <template v-slot:hint>
                      Τα χαρτογραφικά δεδομένα θα εισαχθούν ή έχουν εισαχθεί με το QGIS στην βάση δεδομένων. Εδώ γράφετε το όνομα με το οποίο έχει γίνει η εισαγωγή για να μπορεί να λειτουργήσει η ανάκτηση δεδομένων με το info tool.
                    </template>
                  </q-input>
                </div>
              </div>


              <div class="row" md>
                <div class="col q-ma-md">
                  <q-item v-ripple>
                    <q-item-section>
                      <q-item-label>Ορατό</q-item-label>
                      <q-item-label caption>Αν θα είναι από την αρχή της φόρτωσης του χάρτη ορατό το layer.</q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                      <q-toggle v-model="visible" />
                    </q-item-section>
                  </q-item>
                </div>
              </div>

              <div class="row" md>
                <div class="col q-ma-md">
                  <q-item v-ripple>
                    <q-item-section>
                      <q-item-label>Δημοσιευμένο</q-item-label>
                      <q-item-label caption>Αν ο χάρτης θα είναι ορατός σε απλούς χρήστες.</q-item-label>
                    </q-item-section>
                    <q-item-section avatar>
                      <q-toggle v-model="published" />
                    </q-item-section>
                  </q-item>
                </div>
              </div>
              <!-- <div class="row" md>
                <div class="col q-ma-md">
                  <q-input v-model="apikey" label="Κλειδί API" bottom-slots filled>
                    <template v-slot:hint>
                      Αν η παραπάνω επιλογή είναι Bing τότε θα χρειαστεί να εισαχθεί και το κλειδί API για να είναι δυνατό να φορτώσει.
                    </template>
                  </q-input>
                </div>
              </div> -->
          </div>

          <div v-if="visibleMetadata">
              <div class="row" md>
                <div class="col q-ma-md">
                    <q-input v-model="details" label="Λεπτομέρειες" bottom-slots filled >
                      <template v-slot:hint>
                        Λεπτομερής περιγραφή του χάρτη. Θα φαίνεται όταν ο χρήστης πατάει για να δει περισσότερες πληρφορίες για το θεματικό επίπεδο.
                      </template>
                    </q-input>
                </div>
              </div>

              <div class="row" md>
                <div class="col q-ma-md">
                  <q-input v-model="timespan" label="Χρονική κάλυψη" bottom-slots filled>
                    <template v-slot:hint>
                      Ο χρόνος αναφοράς των δεδομένων του χάρτη.
                    </template>
                  </q-input>
                </div>
              </div>

              <div class="row" md>
                <div class="col q-ma-md">
                  <q-input v-model="crs" label="Πρωτότυπο σύστημα γεωγραφικών συντεταγμένων" bottom-slots filled>
                    <template v-slot:hint>
                      Το σύστημα συντεταγμένων της αρχικής καταγραφής. Για λεπτομέρειες δείτε τους κωδικούς EPSG.
                    </template>
                  </q-input>
                </div>
              </div>

              <div class="row" md>
                <div class="col q-ma-md">
                  <q-input v-model="attributions" label="Αρχική πηγή" bottom-slots filled>
                    <template v-slot:hint>
                      Ουσιαστικά η βιβλιογραφική αναφορά. Ποια είναι η πηγή των δεδομένων.
                    </template>
                  </q-input>
                </div>
              </div>

              <div class="row" md>
                <div class="col q-ma-md">
                  <q-input v-model="filename" label="Όνομα αρχείου" bottom-slots filled>
                    <template v-slot:hint>
                      Το όνομα του αρχείου της αρχικής πηγής δεδομένων.
                    </template>
                  </q-input>
                </div>
              </div>

          </div>
        </q-step>

        <q-step
          :name="2"
          title="Επισύναψη χαρτογραφικών αρχείων"
          icon="settings"
          :done="step > 2"
        >
          <q-file
            v-model="files"
            label="Επιλογή αρχείου"
            outlined
            use-chips
          />
          <q-btn v-if="step === 1 && files && files.length > 0" color="primary" label="Επισύναψη αρχείων" @click="uploadFiles();" />
        </q-step>
        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn v-if="step === 1" @click="addLayer(); $refs.stepper.next()" color="primary" label="Εισαγωγή χάρτη"></q-btn>
            <q-btn v-if="step === 1" @click="$refs.stepper.next()" color="primary" label="Εισαγωγή αρχείων" class="q-ml-sm"></q-btn>
            <q-btn v-if="step === 2" @click="uploadFiles()" color="primary" label="Αποθήκευση αρχείων"></q-btn>
            <q-btn v-if="step === 2" flat color="primary" @click="$refs.stepper.previous()" label="Πίσω" class="q-ml-sm"></q-btn>
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import { mutations } from 'src/graphql';
import { QSpinnerGears } from 'quasar';
import { date } from 'quasar';

export default {
  name: 'NewMap',
  data() {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      date: date.formatDate(Date.now(), 'DD/MM/YYYY'),
      files: null,
      layer_id: null,
      label: null,
      details: null,
      timespan: null,
      filetype: null,
      crs: null,
      attributions: null,
      filename: null,
      crossorigin: null,
      preload: null,
      type: null,
      url: `${process.env.API_HOST_URL}:${process.env.PORT}/όνομα_αρχείου_mbtiles/{z}/{x}/{y}.png`.replace(/['"]+/g, ''),
      visible: true,
      published: false,
      zindex: null,
      apikey: null,
      dbtablename: null,
      visibleMetadata: false
    }
  },
  methods: {
    async uploadFiles() {
      this.$q.loading.show({
        message: 'Ανέβασμα αρχείων',
        backgroundColor: 'grey',
        spinner: QSpinnerGears,
        customClass: 'loader'
      });
      const formData = new FormData();
      formData.append('layer', this.files);
      try {
        await this.$api.post('/upload', formData );
        this.$q.loading.hide();
      } catch (error) {
        console.log(error);
        this.$q.loading.hide();
        this.$q.notify({
          message: 'Επιτρέπονται μόνο αρχεία mbtiles',
          color: 'negative',
          timeout: 1500,
        });
      }
    },
    addLayer() {
      this.$q.loading.show({
        message: 'Ολοκλήρωση αποθήκευσης',
        backgroundColor: 'grey',
        spinner: QSpinnerGears,
        customClass: 'loader'
      });

      const label = this.label;
      const details = this.details;
      const timespan = this.timespan;
      const filetype = this.filetype;
      const crs = this.crs;
      const attributions = this.attributions;
      const filename = this.filename;
      const type = this.type;
      const url = this.url;
      const visible = this.visible;
      const published = this.published;
      const apikey = this.apikey;
      const dbtablename = this.dbtablename;
      const zindex = parseInt(this.zindex);

      this.$apollo.mutate({
        mutation: mutations.addLayer,
        variables: {
          label,
          details,
          timespan,
          filetype,
          crs,
          attributions,
          filename,
          type,
          url,
          visible,
          published,
          apikey,
          dbtablename,
          zindex
        },
        update: (cache, { data: { addLayer } }) => {
          console.log('the document added was', addLayer);
          this.layer_id = addLayer.id;
        }
      }).then(() => {
        this.label = null;
        this.details = null;
        this.timespan = null;
        this.filetype = null;
        this.crs = null;
        this.attributions = null;
        this.filename = null;
        this.type = null;
        this.url = null;
        this.visible = null;
        this.published = null;
        this.apikey = null;
        this.dbtablename = null;
        this.zindex = null;

        this.$q.loading.hide();
      });
      this.step = 1;
    }
  }
}
</script>
