<template>
  <q-page padding>
    Λίστα των χρηστών του συστήματος
    <q-list bordered padding>
      <q-item v-for="user in users" :key="user._id">

        <q-item-section>
          <q-item-label>{{ user.fullname}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-btn icon="edit" flat round @click="newUserDialog = true; userToEdit = user"/>
        </q-item-section>

        <q-item-section side top>
          <q-btn icon="delete" flat round @click="deleteUser(user._id)"/>
        </q-item-section>

      </q-item>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="newUserDialog = true; userToEdit = newUser"/>
    </q-page-sticky>

    <q-dialog v-model="newUserDialog" persistent>
      <userProfile :user="userToEdit"></userProfile>
    </q-dialog>
  </q-page>
</template>

<script>
import { queries, mutations } from 'src/graphql';
import userProfile from 'components/UserProfile.vue';

export default {
  name: 'userManagement',
  components: { userProfile },
  data() {
    return {
      newUser: { userName: "Νέος χρήστης"},
      newUserDialog: false,
      userToEdit: null
    }
  },
  apollo: {
    users: {
      query: queries.getUsers,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  },
  methods: {
    deleteUser(_id) {
      this.$q.notify({
        message: 'Διαγραφή Χρήστη;',
        color: 'negative',
        timeout:0,
        actions: [
          { label: 'Διαγραφή', color: 'white', handler: () => {
            this.$apollo.mutate({
              mutation: mutations.deleteUser,
              variables: {
                _id
              },update: (cache, { data: { deleteUser } }) => {
                if (deleteUser) {
                  const data = cache.readQuery({
                    query: queries.getUsers
                  });
                  data.users = data.users.filter(u => u._id !== _id);
                  cache.writeQuery({
                    query: queries.getUsers,
                    data
                  });
                }
              }
            })
          }
        },
        { label: 'Άκυρο', color: 'white' }]
      })
    }
  }
}
</script>
