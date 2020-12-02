<template>
  <div class="tw-text-center tw-bg-orange">
    <p class="tw-text-gray-800 tw-font-bold">Connect</p>
    <button
      @click="stravaLogin"
      class="tw-p-1 tw-bg-strava-primary tw-shadow-lg tw-rounded"
    >
      <img
        width="200px"
        class="tw-flex tw-ml-1"
        src="../static/icons/stravaName.png"
      />
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
