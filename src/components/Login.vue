<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <v-btn elevation="2" @click="stravaLogin" v-if="!isLogged">
      Login to strava</v-btn
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Login',
  props: {
    msg: String
  },
  methods: {
    stravaLogin() {
      location.replace(
        'https://www.strava.com/oauth/authorize?client_id=40144' +
          '&redirect_uri=' +
          process.env.VUE_APP_REDIRECT +
          'myStrava' +
          '&response_type=code&scope=activity:read_all'
      );
    }
  },
  mounted() {
    if (this.isLogged && window.URL == window.origin + '/login')
      this.$router.push(
        '/myStrava/?state=&code=' +
          this.token +
          '&scope=read,activity%3Aread_all'
      );
  },
  computed: {
    ...mapGetters('auth', {
      isLogged: 'isLogged',
      token: 'token'
    })
  }
};
</script>
