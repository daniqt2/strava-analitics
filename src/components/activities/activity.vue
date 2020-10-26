<template>
  <div class="tw-bg-transparent">
    <p>{{ activity }}</p>
    <div class="tw-my-2 tw-bg-white">
      <histogram
        :chartData="chartData.act"
        :index="0"
        :label="chartData.has_distance ? 'Distance' : 'Time'"
        :options="getOptions(chartData)"
      ></histogram>
    </div>
    <div class="mt-10">
      <p>Total Activities: {{ chartData.length }}</p>
    </div>
  </div>
</template>

<script>
import histogram from '../histogram';
import moment from 'moment';
export default {
  props: {
    activity: {
      type: String
    },
    chartData: {
      type: Array
    }
  },
  components: {
    histogram
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
