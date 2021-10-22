<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <!-- <q-toolbar-title>
          Geoportal
        </q-toolbar-title> -->
        <q-space /> 
        <!-- <div> -->
          <q-btn flat round dense icon="fa fa-expand-arrows-alt" class="q-mr-xs" @click="zoomToExtent()"/>
          <q-btn flat round dense icon="room" @click="geolocation()"/>
          <q-btn flat round dense icon="info" class="q-mr-xs" @click="setMapStatus('info')"/>
          <!-- <q-btn flat round dense icon="print" @click="setMapStatus('print')"/> -->
          <q-btn flat round dense icon="architecture" class="q-mr-xs" @click="setMapStatus('measure')"/>
          <!-- <q-btn flat round dense icon="edit" @click="setMapStatus('draw')"/> -->
          <!-- <q-btn flat round dense icon="upload_file" @click="setMapStatus('dragdrop')"/> -->
        <!-- </div> -->
          <q-btn flat round dense icon="fab fa-youtube" color="white" class="q-mr-xs" href="https://youtu.be/IVzWHCsG4yM" type="a" target="new_window"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <a href="https://tidydox.herokuapp.com" target="_blank">
          <q-item
            clickable
            tag="a"
          >
            <q-item-section
              avatar
            >
              <q-icon name="inventory_2" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Διαχειριστής εγγράφων</q-item-label>
              <q-item-label caption>
                Μετάβαση
              </q-item-label>
            </q-item-section>
          </q-item>
        </a>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Πληροφορίες',
    caption: 'Πληροφορίες για την εφαρμογή',
    icon: 'info',
    link: '/'
  },
  {
    title: 'Χάρτης',
    caption: 'Πλοήγηση στους χάρτες',
    icon: 'map',
    link: '/map'
  },
  {
    title: 'Βάση Δεδομένων',
    caption: 'Πλοήγηση στα δεδομένα',
    icon: 'fa fa-database',
    link: '/database'
  },
  {
    title: 'Είσοδος',
    caption: 'Είσοδος στην εφαρμογή',
    icon: 'login',
    link: 'login'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  watch: {
    leftDrawerOpen: function() {
      this.emitUpdateMapSize();
    }
  },
  methods: {
    setMapStatus (payload) {
      this.$store.commit('webgis/SET_MAP_STATUS', payload);
      if(payload === 'info') {
        this.$root.$emit("map:mapStatus:info");
      }
      if(payload === 'measure') {
        this.$root.$emit("map:measure:start", 'LineString');
      }
    },
    zoomToExtent() {
      this.$root.$emit("map:zoomToExtent", true);
    },
    geolocation() {
      this.$root.$emit("map:activateGeolocation", true);
      this.setMapStatus('geolocation');
    },
    emitUpdateMapSize() {
      this.$root.$emit('map:updateSize');
    }
  }
}
</script>
<style scoped>
a {
  color: black;
  text-decoration: none; /* no underline */
}
</style>