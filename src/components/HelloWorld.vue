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
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    stravaLogin() {
      location.replace(
        'https://www.strava.com/oauth/authorize?client_id=40144' +
          '&redirect_uri=https://stava-analisis.netlify.app/myStrava' +
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
