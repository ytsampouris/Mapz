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
            :data="flora"
            :columns="columns_flora"
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
        <q-btn color="red" icon-right="fab fa-youtube" label="Οδηγίες χρήσης" type="a" target="new_tab" href="https://youtu.be/9tLArub6QPY" />

<table class="tableizer-table">
<thead><tr class="tableizer-firstrow"><th colspan="4">Υπόμνημα βάσης δεδομένων ειδών χλωρίδας της Κεφαλλονιάς</th><th>&nbsp;</th></tr></thead><tbody>
 <tr><td>Τάξη</td><td>Λατινική ονομασία της τάξης</td></tr>
 <tr><td>Οικογένεια</td><td>Λατινική ονομασία της οικογένειας</td></tr>
 <tr><td>Είδος</td><td>Λατινική ονομασία του είδους</td></tr>
 <tr><td>Ευρωπαϊκό Καθεστώς Απειλής IUCN</td><td>Αναγράφεται η κατηγορία απειλής στην οποία κατατάσσονται για την Ευρώπη τα είδη σύμφωνα με τον Κόκκινο Κατάλογο της IUCN (ενημέρωση Ιούνιος 2021). Κάθε είδος κατατάσσεται σε κάποια από τις εξής κατηγορίες: ΕΧ: Εξαφανισθέντα EW: Εξαφανισθέντα στη Φύση CR: Κρισίμως Κινδυνεύοντα EN: Κινδυνεύοντα VU: Εύτρωτα NT: Εγγύς Απειλούμενα LC: Ελάχιστης Ανησυχίας DD: Ανεπαρκώς Γνωστά NE: Μη Αξιολογημένα</td></tr>
 <tr><td>Οδηγία 92/43/ΕΟΚ</td><td>Αναγράφεται το παράρτημα της Οδηγίας 92/43/ΕΟΚ για τη διατήρηση των φυσικών οικοτόπων καθώς και της άγριας πανίδας και χλωρίδας στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: II : Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος των οποίων η διατήρηση επιβάλλει τον καθορισμό ειδικών ζωνών διατήρησης IV: Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος που απαιτούν αυστηρή προστασία V: Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος των οποίων η σύλληψη στη φύση και η εκμετάλλευση υπόκεινται, ενδεχομένως, σε διαχειριστικά μέτρα</td></tr>
 <tr><td>Σύμβαση Βέρνης</td><td>Αναγράφεται το παράρτημα της Σύμβασης της Βέρνης περί της διατήρησης της άγριας ζωής και του φυσικού περιβάλλοντος της Ευρώπης στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: I: Είδη για τα οποία απαιτείται να εφαρμόζονται ειδικά μέτρα διατήρησης (αναθεωρημένο παράρτημα I) ΙΙ: Είδη πανίδας που βρίσκονται υπό αυστηρή προστασία ΙΙΙ:  Είδη πανίδας που βρίσκονται υπό προστασία</td></tr>
 <tr><td>Σύμβαση CITES</td><td>Αναγράφεται το παράρτημα της Σύμβαση για το Διεθνές Εμπόριο Ειδών Άγριας Πανίδας και Χλωρίδας που απειλούνται με εξαφάνιση (CITES) στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει στα εξής παραρτήματα: Ι: Είδη που απειλούνται με εξαφάνιση και τα οποία επηρεάζονται ή ενδέχεται να επηρεαστούν από το διεθνές εμπόριο και η CITES γενικά απαγορεύει κάθε είδος διεθνούς εμπορίας αυτών των ειδών ΙΙ: Είδη τα οποία δεν απειλούνται απαραιτήτως με εξαφάνιση, αλλά ενδέχεται να απειληθούν εκτός κι αν το εμπόριό τους ελέγχεται III: Είδη που υπόκεινται σε έλεγχο από μια συγκεκριμένη χώρα και για τα οποία απαιτείται η συνεργασία άλλων χωρών για τον έλεγχο του διεθνούς εμπορίου</td></tr>
 <tr><td>Ημερομηνία Καταγραφής</td><td>Ημερομηνία της καταγραφής του είδους που περιλαμβάνεται στη βάση</td></tr>
 <tr><td>Πηγή</td><td>Πηγή της καταγραφής του είδους που περιλαμβάνεται στη βάση</td></tr>
 <tr><td>Σύνδεσμος EUNIS</td><td>Διεύθυνση url της εγγραφής του είδους στη διαδικτυακή βάση EUNIS για τα είδη</td></tr>
</tbody></table>

      </q-tab-panel>

      <q-tab-panel name="animals">

        <div class="q-pa-xs" v-if="!$apollo.loading">
          <q-table
            class="my-sticky-column-table"
            title="Είδη"
            :data="fauna"
            :columns="columns_fauna"
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
        <q-btn color="red" icon-right="fab fa-youtube" label="Οδηγίες χρήσης" type="a" target="new_tab" href="https://youtu.be/9tLArub6QPY" />

<table class="tableizer-table">
<thead><tr class="tableizer-firstrow"><th colspan="4">Υπόμνημα βάσης δεδομένων ειδών πανίδας της Κεφαλλονιάς</th><th>&nbsp;</th></tr></thead><tbody>
 <tr><td>Φύλο</td><td>Λατινική ονομασία του φύλου</td></tr>
 <tr><td>Κλάση</td><td>Λατινική ονομασία της κλάσης</td></tr>
 <tr><td>Τάξη</td><td>Λατινική ονομασία της τάξης</td></tr>
 <tr><td>Οικογένεια</td><td>Λατινική ονομασία της οικογένειας</td></tr>
 <tr><td>Είδος</td><td>Λατινική ονομασία του είδους</td></tr>
 <tr><td>Κοινή ονομασία είδους</td><td>Ελληνική κοινή ονομασία του είδους</td></tr>
 <tr><td>Κωδικός είδους Natura 2000</td><td>Κωδικός ειδών κοινοτικού ενδιαφέροντος, διαθέσιμος από https://eunis.eea.europa.eu/species.jsp</td></tr>
 <tr><td>Περιοχή Δικτύου Natura 2000</td><td>Περιοχή του δικτύου Natura 2000 στην οποία έχει καταγραφεί το είδος, διαθέσιμη από https://natura2000.eea.europa.eu/</td></tr>
 <tr><td>Ευρωπαϊκό Καθεστώς Απειλής IUCN</td><td>Αναγράφεται η κατηγορία απειλής στην οποία κατατάσσονται για την Ευρώπη τα είδη σύμφωνα με τον Κόκκινο Κατάλογο της IUCN (ενημέρωση Ιούνιος 2021). Κάθε είδος κατατάσσεται σε κάποια από τις εξής κατηγορίες: ΕΧ: Εξαφανισθέντα EW: Εξαφανισθέντα στη Φύση CR: Κρισίμως Κινδυνεύοντα EN: Κινδυνεύοντα VU: Εύτρωτα NT: Εγγύς Απειλούμενα LC: Ελάχιστης Ανησυχίας DD: Ανεπαρκώς Γνωστά NE: Μη Αξιολογημένα</td></tr>
 <tr><td>Οδηγία 92/43/ΕΟΚ</td><td>Αναγράφεται το παράρτημα της Οδηγίας 92/43/ΕΟΚ για τη διατήρηση των φυσικών οικοτόπων καθώς και της άγριας πανίδας και χλωρίδας στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: II : Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος των οποίων η διατήρηση επιβάλλει τον καθορισμό ειδικών ζωνών διατήρησης IV: Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος που απαιτούν αυστηρή προστασία V: Ζωικά και φυτικά είδη κοινοτικού ενδιαφέροντος των οποίων η σύλληψη στη φύση και η εκμετάλλευση υπόκεινται, ενδεχομένως, σε διαχειριστικά μέτρα</td></tr>
 <tr><td>Οδηγία 2009/147/ΕΚ</td><td>Αναγράφεται το παράρτημα της Οδηγίας  2009/147/ΕΚ περί της διατηρήσεως των αγρίων πτηνών στο οποίο περιλαμβάνεται κάθε είδος. Ένα πτηνό μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: Ι: Είδη που υπόκεινται σε ειδικά μέτρα, τα οποία αφορούν τον οικότοπό τους, για να εξασφαλισθεί η επιβίωση και η αναπαραγωγή στη ζώνη εξαπλώσεώς τους ΙΙ: Είδη για τα οποία επιτρέπεται η θήρα, εφόσον το επιτρέπει το επίπεδο του πληθυσμού τους  και δεν υπονομεύονται οι προσπάθειες διατηρήσεως που αναλαμβάνονται στη ζώνη εξαπλώσεως των ειδών αυτών ΙΙI: Είδη για τα οποία δραστηριότητες όπως η πώληση, μεταφορά, κατοχή και διάθεση δεν απαγορεύονται εφόσον τα πτηνά έχουν φονευθεί ή συλληφθεί νόμιμα ή έχουν με άλλο νόμιμο τρόπο αποκτηθεί και εφόσον δεν έχουν προβλεφθεί περιορισμοί για αυτό το σκοπό</td></tr>
 <tr><td>Σύμβαση Βέρνης</td><td>Αναγράφεται το παράρτημα της Σύμβασης της Βέρνης περί της διατήρησης της άγριας ζωής και του φυσικού περιβάλλοντος της Ευρώπης στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει σε ένα ή περισσότερα από τα εξής παραρτήματα: I: Είδη για τα οποία απαιτείται να εφαρμόζονται ειδικά μέτρα διατήρησης (αναθεωρημένο παράρτημα I) ΙΙ: Είδη πανίδας που βρίσκονται υπό αυστηρή προστασία ΙΙΙ:  Είδη πανίδας που βρίσκονται υπό προστασία</td></tr>
 <tr><td>Σύμβαση Βόννης</td><td>Αναγράφεται το παράρτημα της Σύμβασης της Βόννης για τη διατήρηση των αποδημητικών ειδών που ανήκουν στην άγρια πανίδα στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει στα εξής παραρτήματα: I: Κινδυνεύοντα αποδημητικά είδη που πρέπει να προστατευτούν από τα μέρη της σύμβασης ΙΙ: Αποδημητικά είδη των οποίων η κατάσταση διατήρησης είναι δυσμενής και για τα οποία χρειάζεται η σύναψη Διεθνών Συμφωνιών για τη διατήρηση και διαχείρισή τους, καθώς και είδη των οποίων η κατάσταση διατήρησης θα επωφελείτο σημαντικά από τη διεθνή συνεργασία η οποία θα προέκυπτε από μια Διεθνή Συμφωνία</td></tr>
 <tr><td>Σύμβαση CITES</td><td>Αναγράφεται το παράρτημα της Σύμβαση για το Διεθνές Εμπόριο Ειδών Άγριας Πανίδας και Χλωρίδας που απειλούνται με εξαφάνιση (CITES) στο οποίο περιλαμβάνεται κάθε είδος. Ένα είδος μπορεί να ανήκει στα εξής παραρτήματα: Ι: Είδη που απειλούνται με εξαφάνιση και τα οποία επηρεάζονται ή ενδέχεται να επηρεαστούν από το διεθνές εμπόριο και η CITES γενικά απαγορεύει κάθε είδος διεθνούς εμπορίας αυτών των ειδών ΙΙ: Είδη τα οποία δεν απειλούνται απαραιτήτως με εξαφάνιση, αλλά ενδέχεται να απειληθούν εκτός κι αν το εμπόριό τους ελέγχεται III: Είδη που υπόκεινται σε έλεγχο από μια συγκεκριμένη χώρα και για τα οποία απαιτείται η συνεργασία άλλων χωρών για τον έλεγχο του διεθνούς εμπορίου</td></tr>
 <tr><td>Ημερομηνία Καταγραφής</td><td>Ημερομηνία της καταγραφής του είδους που περιλαμβάνεται στη βάση</td></tr>
 <tr><td>Πηγή</td><td>Πηγή της καταγραφής του είδους που περιλαμβάνεται στη βάση</td></tr>
 <tr><td>Σύνδεσμος EUNIS</td><td>Διεύθυνση url της εγγραφής του είδους στη διαδικτυακή βάση EUNIS για τα είδη</td></tr>
</tbody></table>
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
  computed: {
    fauna: {
      get() {
        return this.species.filter((x => x.type === 'fauna'));
      }
    },
    flora: {
      get() {
        return this.species.filter((x => x.type === 'flora'));
      }
    }
  },
  data () {
    return {
      error: null,
      tab: "plants",
      tableFilter: '',
      columns_flora: [
        { name: 'taxonomy', label: 'Τάξη', field: 'taxonomy', sortable: true },
        { name: 'family', label: 'Οικογένεια', field: 'family', sortable: true },
        {
          name: 'species',
          label: 'Είδος',
          field: 'species',
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
      ],
      columns_fauna: [
        { name: 'latin_name', label: 'Φύλο', field: 'latin_name', sortable: true },
        { name: 'class', label: 'Κλάση', field: 'class', sortable: true },
        { name: 'taxonomy', label: 'Τάξη', field: 'taxonomy', sortable: true },
        { name: 'family', label: 'Οικογένεια', field: 'family', sortable: true },
        {
          name: 'species',
          label: 'Είδος',
          field: 'species',
          sortable: true
        },
        { name: 'common_name', label: 'Κοινή ονομασία', field: 'common_name', sortable: true },
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
          name: 'directive_09',
          label: 'Οδηγία 2009/147/ΕΚ',
          field: 'directive_09',
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
