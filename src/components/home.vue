<template>
  <div class="">
    <v-btn elevation="2" @click="getActivities"> Get you activities</v-btn>
    <div v-if="activities">
      <div class="tw-mt-4">
        <button
          class="tw-mx-2 tw-button tw-bg-gray-500 tw-py-2 tw-px-4 tw-rounded tw-font-bold"
          v-for="type in activities"
          :key="type.name"
          :color="graph == type.name ? 'primary' : ''"
          @click="graph = type.name"
        >
          {{ type.name }}
        </button>
      </div>
      <div class="tw-flex" v-if="graph">
        <div class="tw-w-1/2 tw-mx-auto tw-mt-5">
          <histogram
            :chartData="activities[graph].act"
            :label="graph"
            :chartColors="chartColor"
            :options="options"
          ></histogram>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import histogram from './histogram';
// import allActivities from '../dummy/dummy-data';
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
      graph: null,
      options: {}
    };
  },
  components: { histogram },
  methods: {
    getActivities() {
      this.$store.dispatch('activity/getActivities');
      this.show = true;
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
    ...mapGetters('activity', {
      act: 'getActivities'
    }),
    ...mapGetters('auth', {
      isLogged: 'isLogged'
    }),
    activities() {
      const a = this.act;
      // const a = ActivityService.parseActivities(allActivities.activities);
      return a;
    }
  }
};
</script>
