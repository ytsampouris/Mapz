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
          Επιλογές
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-btn
          flat
          color="negative"
          class="full-width"
          label="Έξοδος"
          icon="logout"
          no-caps
          @click="logout()"
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
import { apollo } from "../apollo/apollo-client-hooks";

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      linksData : [
        {
          title: 'Χάρτες',
          caption: 'Όλοι οι διαθέσιμοι χάρτες',
          icon: 'inventory_2',
          link: '/user/maps'
        },
        {
          title: 'Νέος χάρτης',
          caption: 'Εισαγωγή νέου χάρτη',
          icon: 'inbox',
          link: '/user/newMap',
          isAdmin: true
        },
        {
          title: 'Διαχείριση Βάσης Δεδομένων',
          caption: 'Επεξεργασία της βάσης',
          icon: 'drive_file_rename_outline',
          link: '/user/databaseAdministration'
        },
        // {
        //   title: 'Διαχείριση χρηστών',
        //   caption: 'Επιλογές για τους λογαριασμούς χρηστών',
        //   icon: 'supervisor_account',
        //   link: '/user/userManagement',
        //   isAdmin: true
        // },
        // {
        //   title: 'Διαχείριση τμημάτων',
        //   caption: 'Διαχείριση της δομής λειτουργίας',
        //   icon: 'manage_accounts',
        //   link: '/user/departmentManagement',
        //   isAdmin: true
        // },
        {
          title: 'Λογαριασμός',
          caption: 'Πληροφορίες λογαριασμού',
          icon: 'account_circle',
          link: '/user/myAccount'
        }
      ]
    }
  }, methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push({ path: '/' });
      apollo.apolloClient.resetStore();
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.role === 'admin') {
      this.essentialLinks = this.linksData;
    } else {
      this.essentialLinks = this.linksData.filter( x => !x.isAdmin);
    }
  }
}
</script>
