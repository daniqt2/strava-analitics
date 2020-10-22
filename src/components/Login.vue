<template>
  <div class="tw-text-center tw-bg-orange">
    <button
      @click="stravaLogin"
      class="tw-p-4 tw-bg-blue-800 tw-text-white tw-rounded"
    >
      Login to Strava
    </button>
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
