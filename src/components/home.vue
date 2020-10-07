<template>
  <div class="">
    <v-btn elevation="2" @click="getActivities"> Get you activities</v-btn>
    <!-- {{ activities[0][0] }} -->
    <h1>SEP</h1>
    <!-- {{ activities[1][0] }} -->
    <histogram
      :chartData="activities[0]"
      label="Running"
      :chartColors="chartColor"
      :options="options"
    ></histogram>
    <histogram
      :chartData="activities[1]"
      label="Bike"
      :chartColors="chartColor"
      :options="options"
    ></histogram>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import histogram from './histogram';
import allActivities from '../dummy/dummy-data';
import ActivityService from '../services/activity.service';
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      chartColor: {
        borderColor: '#eeeffg',
        pointBorderColor: 'blue',
        pointBackgroundColor: 'purpple',
        backgroundColor: ' 	#ffc332'
      },
      options: {}
    };
  },
  components: { histogram },
  methods: {
    getActivities() {
      this.$store.dispatch('auth/getActivities');
    }
  },
  mounted() {
    var url = new URL(window.location.href);
    var c = url.searchParams.get('code');
    if (c && c.length > 0) {
      this.$store.dispatch('auth/login', c);
    }
  },
  computed: {
    ...mapGetters('auth', {
      activities: 'getActivities'
    }),
    activities() {
      const a = ActivityService.parseActivities(allActivities.activities);
      return a;
    }
  }
};
</script>
