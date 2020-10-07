<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    {{ isLogged }}
    <v-btn elevation="2" @click="stravaLogin"> Login to strava</v-btn>
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
      console.log(process.env.VUE_APP_REDIRECT);
      console.log(process.env);
      location.replace(
        'https://www.strava.com/oauth/authorize?client_id=40144' +
          '&redirect_uri=' +
          process.env.VUE_APP_REDIRECT +
          'myStrava' +
          '&response_type=code&scope=activity:read_all'
      );
    }
  },
  computed: {
    ...mapGetters('auth', {
      isLogged: 'isLogged'
    })
  }
};
</script>
