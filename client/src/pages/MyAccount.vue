<template>
  <q-page>
    <div class="background-photo">
        <div class="default-background">
            <q-img src="https://cdn.quasar.dev/img/material.png" style="height: 200px;"></q-img>
        </div>
        <div class="profile-photo text-center absolute-top">
          <div class="default-user-image">
              <q-avatar round="round" color="blue-grey-10" icon="person" font-size="100px" size="120px" text-color="white"></q-avatar>
          </div>
        </div>
    </div>
    <div class="text-center">
    <p class="text-h4">Όνομα χρήστη: {{user.username}}</p>
    <p class="text-subtitle1">email: {{user.email}}</p>
    <p class="text-subtitle1">Ρόλος στο σύστημα: {{user.role}}</p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'myAccount',
  data() {
    return {
      user: null
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
}
</script>
