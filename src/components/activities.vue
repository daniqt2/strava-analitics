<template>
  <div class="tw-text-center tw-justify-center">
    <button elevation="2" @click="getActivities">
      {{ !act ? 'Get you activities' : 'Reload Activities' }}
    </button>
    <div v-if="act" class="tw-text-center tw-w-1/2 tw-m-auto tw-my-4">
      <div :loading="loading" title="Activity Types" class="tw-bg-white">
        <polar
          :chartData="actPercent"
          :label="graph"
          :chartColors="chartColor"
          :options="options"
        ></polar>
      </div>
    </div>
    <div
      class="tw-grid tw-grid-flow-col tw-grid-cols-2 tw-grid-rows-4 tw-gap-4 tw-justify-items-center"
      v-if="act"
    >
      <div
        v-for="type in act"
        :key="type.name"
        :title="type.name"
        type="primary"
        class="tw-rounded tw-font-bold  tw-mt-4  tw-bg-white tw-w-64"
        :color="graph == type.name ? 'primary' : ''"
        @click="graph = type.name"
      >
        <a slot="extra" href="#">More</a>
        <p>Activities: {{ act[type.name].act.length }}</p>
      </div>
    </div>
    <histogram
      :chartData="act['Run'].act"
      :index="0"
      :label="'Run'"
    ></histogram>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import histogram from './histogram';
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
  components: { polar, histogram },
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
