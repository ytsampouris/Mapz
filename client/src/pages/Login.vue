<template>
  <q-page padding>
    <h5 class="text-center">Είσοδος στο σύστημα</h5>
    <q-form class="authentication q-gutter-y-md" ref="emailAuthenticationForm" @submit="signIn">
      <q-input
        v-model="email"
        name="email"
        outlined="outlined"
        lazy-rules="lazy-rules"
        autocomplete="email"
        color="primary"
        data-cy="email"
        label="EMAIL"
        type="email"
        :rules="[val => !!val || '*Field is required', val => val.includes('@') && val.includes('.') || '*Please Provide a valid email']"
      />
      <q-input
        v-model="password"
        lazy-rules="lazy-rules"
        outlined="outlined"
        autocomplete="current-password new-password"
        color="primary"
        data-cy="password"
        label="PASSWORD"
        :rules="[val =&gt; !!val || '*Field is required']" :type="isPwd ? 'password' : 'text'"
        @keyup.enter="onSubmit(); $event.target.blur()"
        ref="fldPasswordChange"
      >
        <template v-slot:append>
          <q-icon class="cursor-pointer" :name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd" />
        </template>
      </q-input>
      <!-- <q-input
        v-if="isRegistration"
        lazy-rules="lazy-rules"
        outlined="outlined"
        autocomplete="new-password"
        color="primary"
        data-cy="verifyPassword"
        label="VERIFY PASSWORD"
        v-model="passwordMatch"
        :type="isPwd ? 'password' : 'text'"
        @keyup.enter="onSubmit(); $event.target.blur()"
        ref="fldPasswordChangeConfirm"
        :rules="confirmPWD"
      >
        <template v-slot:append>
          <q-icon class="cursor-pointer" :name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd" />
        </template>
      </q-input> -->
      <q-btn
        class="full-width q-mt-md"
        color="primary"
        data-cy="submit"
        type="submit"
        label="Είσοδος"
      >
      </q-btn>
      <!-- <p class="q-mt-md q-mb-none text-center">
          <router-link class="text-primary" :to="routeAuthentication">
            <span v-if="isRegistration">Need to login?</span>
            <span v-else>Need to create an account?</span>
          </router-link>
      </p> -->
      <!-- <p class="q-ma-sm text-center">
          <router-link class="text-primary" to="forgotPassword">Forgot Password?</router-link>
      </p> -->
    </q-form>
  </q-page>
</template>

<script>
import { mutations } from 'src/graphql';
import { QSpinnerGears } from 'quasar';

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      isPwd: true,
    }
  },
  methods: {
    signIn() {
      // TODO user the qspinnergears in loading
      const login = this.email;
      const password = this.password;
      this.$apollo.mutate({
        mutation: mutations.signIn,
        variables: {
          login, password
        },update: (cache, { data: { signIn } }) => {
          // console.log('sing in', signIn)
          localStorage.setItem("token", signIn.token);
          localStorage.setItem("user", JSON.stringify(signIn));
          this.$router.push({ path: '/user' });
          // TODO use token on queries and mutations, store it in localstore or vuex?
        }
      }).catch(error => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.$apollo.mutate({
          mutation: mutations.signIn,
          variables: {
            email, password
          },update: (cache, { data: { signIn } }) => {
            localStorage.setItem("token", signIn.token);
            localStorage.setItem("user", JSON.stringify(signIn));
            this.$router.push({ path: '/user' });
          }
        })
      })
    }
  }
}
</script>
