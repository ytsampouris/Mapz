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
          Biodiversity dataset
        </q-toolbar-title> -->

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
  methods: {

  }
}
</script>
<style scoped>
a {
  color: black;
  text-decoration: none; /* no underline */
}
</style>