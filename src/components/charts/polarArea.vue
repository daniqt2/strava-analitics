<script>
import { PolarArea } from 'vue-chartjs';
export default {
  extends: PolarArea,
  props: {
    chartData: {
      type: Array
    },
    options: {
      type: Object
    },
    chartColors: {
      type: Object
    }
  },
  watch: {
    chartData() {
      // this._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.paintChartPolar();
    }
  },
  mounted() {
    this.paintChartPolar();
  },
  methods: {
    paintChartPolar() {
      let data = [];
      let labels = [];
      this.chartData.forEach(a => {
        data.push(a.actNumber);
        labels.push(a.name);
      });
      this.renderChart({
        datasets: [
          {
            data: data,
            backgroundColor: [
              '#219ebc',
              '#ffb703',
              '#264653',
              '#f94144',
              '#2a9d8f',
              '#90be6d',
              '#e9c46a',
              '#fb8500',
              '#f4a261',
              '#e76f51',
              '#94f5ff',
              '#e5989b',
              '#b5838d',
              '#fec89a',
              '#023047',
              '#e07a5f',
              '#3d405b',
              '#'
            ]
          }
        ],
        // options: {
        //   legend: {
        //     display: false
        //   }
        // },
        labels: labels
      });
    }
  }
};
</script>

<style></style>
