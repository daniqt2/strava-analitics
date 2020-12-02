<template>
  <div class="tw-bg-transparent">
    <h1 class="tw-text-xl tw-font-bold">{{ activity }}</h1>
    <p class="tw-text-sm tw-font-bold">
      You have {{ chartData.act.length }} activities of this kind
    </p>
    <div class="tw-my-2 tw-bg-white">
      <histogram
        :chartData="chartData.act"
        :index="0"
        :label="chartData.has_distance ? 'Distance' : 'Time'"
        :type="chartData.has_distance ? 'd' : 't'"
        :options="getOptions(chartData)"
      ></histogram>
    </div>
    <div class="tw-my-2 tw-bg-white">
      <Table :chartData="chartData.act"></Table>
    </div>
    <div class="mt-10"></div>
  </div>
</template>

<script>
import histogram from '../histogram';
import moment from 'moment';
import Table from './table.vue';
export default {
  props: {
    activity: {
      type: String
    },
    chartData: {
      type: Object
    }
  },
  components: {
    histogram,
    Table
  },
  methods: {
    getOptions(metric) {
      console.log(metric);
      if (!metric.has_distance) {
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
  }
};
</script>

<style></style>
