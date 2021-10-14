<template>
  <q-card style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Επεξεργασία Χρήστη</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <q-input dense label="Όνομα χρήστη" v-model="user.username" autofocus @keyup.enter="prompt = false" />
      <q-input dense label="Ονοματεπώνυμο" v-model="user.fullname" @keyup.enter="prompt = false" />
      <q-input dense label="email" v-model="user.email" @keyup.enter="prompt = false" />
      <q-input dense label="Κωδικός" v-model="user.password" @keyup.enter="prompt = false" type="password"/>
      <q-select
        label="Τμήμα"
        stack-label
        multiple
        use-chips
        dense
        :options="departments"
        option-value="_id"
        option-label="title"
        v-model="user.department"
        transition-show="scale"
        transition-hide="scale">
      </q-select>

    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Άκυρο" v-close-popup />
      <q-btn flat label="Αποθήκευση" v-close-popup @click="saveUserProfile" />
    </q-card-actions>
  </q-card>
</template>
<script>
import { mutations, queries } from 'src/graphql';

export default {
  name: "userProfile",
  props: ["user"],
  data() {
    return {
      newDepartment: null,
      newDepartmentDialog: false,
    }
  },
  apollo: {
    departments: {
      query: queries.getDepartments,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  },
  methods: {
    saveUserProfile() {
      const departmentIds = this.user.department.map(function(item) { return item["_id"]; });
      if (this.user._id) {
        this.$apollo.mutate({
          mutation: mutations.updateUser,
          variables: {
            _id: this.user._id,
            username: this.user.username,
            fullname: this.user.fullname,
            password: this.user.password,
            department: departmentIds,
            email: this.user.email
          }, update: (cache, { data: { updateUser } }) => {
            if (updateUser) {
              const data = cache.readQuery({
                query: queries.getUsers
              });
              cache.writeQuery({
                query: queries.getUsers,
                data
              });
            }
          }
        });
      } else {
        this.$apollo.mutate({
          mutation: mutations.createUser,
          variables: {
            username: this.user.username,
            fullname: this.user.fullname,
            password: this.user.password,
            department: departmentIds,
            email: this.user.email
          }, update: (cache, {data: { createUser }}) => {
            if (createUser) {
              const data = cache.readQuery({
                query: queries.getUsers,
              });
              cache.writeQuery({
                query: queries.getUsers,
                data: data.users.push(createUser)
              });
            }
          }
        });
      }
    }
  }
}
</script>
