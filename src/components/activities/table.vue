<template>
  <div class="tw-flex tw-justify-center tw-p-4">
    <table class="tw-table-auto tw-margin-auto tw-text-xs md:tw-text-lg">
      <thead>
        <tr class="tw-bg-gray-800 tw-text-white">
          <th class="md:tw-pl-4">Date</th>
          <th class="md:tw-pl-4">Distance Km</th>
          <th class="md:tw-pl-4">Time HH:MM:SS</th>
          <th class="md:tw-pl-4">Avg Km/h</th>
          <th class="md:tw-pl-4">Avg Min/km</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activity in chartData" :key="activity.id">
          <td>{{ activity.date }}</td>
          <td>{{ (activity.distance / 1000).toFixed(2) }}</td>
          <td>
            {{ msToHuman(activity.elapsed_time) }}
          </td>
          <td>{{ getAvSpeedHr(activity.avSpeed) }}</td>
          <td>{{ getAvSpeedKm(activity.avSpeed) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    msToHuman(time) {
      return new Date(time * 1000).toISOString().substr(11, 8);
    },
    getAvSpeedHr(speed) {
      let km_per_hour = (speed * 18) / 5;
      return km_per_hour.toFixed(2);
    },
    getAvSpeedKm(speed) {
      let km_per_hour = (speed * 18) / 5;
      let min_km = 60 / km_per_hour;
      let [min, seconds] = [
        +min_km.toString().split('.')[0],
        +min_km.toString().split('.')[1]
      ];
      return min + ':' + (seconds * 60).toString().substr(0, 2);
    }
  }
};
</script>

<style>
.spacing {
  padding-left: 12px;
}
</style>
