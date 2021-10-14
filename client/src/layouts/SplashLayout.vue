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

        <q-toolbar-title>
          Geoportal
        </q-toolbar-title>

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
    title: 'Πληροφορίες',
    caption: 'Πληροφορίες για την εφαρμογή',
    icon: 'info',
    link: 'projectinfo'
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
  methods: {

  }
}
</script>
