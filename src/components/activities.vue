<template>
  <div class="tw-text-center tw-justify-center tw-w-full">
    <button
      elevation="2"
      @click="getActivities"
      class="tw-bg-white tw-rounded tw-text-blue-600 tw-p-2"
    >
      {{ !act ? 'Get you activities' : 'Reload Activities' }}
    </button>
    <div v-if="act" class="tw-text-center md:tw-w-1/3 tw-m-auto tw-my-4">
      <div
        :loading="loading"
        title="Activity Types"
        class="tw-bg-white"
        v-if="actPercent"
      >
        <polar
          :chartData="actPercent"
          :label="graph"
          :chartColors="chartColor"
        ></polar>
      </div>
    </div>
    <div
      class="tw-grid tw-grid-flow-row md:tw-grid-flow-col md:tw-grid-cols-auto md:tw-grid-rows-2 tw-gap-4 tw-justify-items-center"
      v-if="act"
    >
      <div
        v-for="type in act"
        :key="type.name"
        :title="type.name"
        type="primary"
        class="tw-rounded tw-font-bold tw-bg-white tw-w-64 tw-p-4"
        :color="graph == type.name ? 'primary' : ''"
        @click="graph = type.name"
      >
        <p class="tw-font-bold tw-text-lg">{{ type.name }}</p>
        <p>Total Activities: {{ act[type.name].act.length }}</p>
      </div>
    </div>
    <!-- <histogram
      :chartData="act['Run'].act"
      :index="0"
      :label="'Run'"
    ></histogram> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import histogram from './histogram';
import polar from './charts/polarArea';
import moment from 'moment';
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      graph: null,
      options: {}
    };
  },
  components: { polar },
  methods: {
    getActivities() {
      this.$store.dispatch('activity/getActivities');
      this.show = true;
    },
    getOptions(metric) {
      console.log('met', metric);
      if (!metric.has_d) {
        return {
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function(value) {
                    return moment(value).format('hh:ss') + 'h';
                  }
                }
              }
            ]
          }
        };
      } else {
        return {
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function(value) {
                    return value + 'km';
                  }
                }
              }
            ]
          }
        };
      }
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
      act: 'getActivities',
      actPercent: 'activitiesPercent'
    }),
    ...mapGetters('auth', {
      isLogged: 'isLogged'
    })
  }
};
</script>
