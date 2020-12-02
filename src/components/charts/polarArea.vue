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
              '#FA8620',
              '#ffb703',
              '#e76f51',
              '#FC937E',
              '#71B4F0',
              '#90be6d',
              '#4B9BAB',
              '#3D437D',
              '#f4a261',
              '#e76f51',
              '#94f5ff',
              '#e5989b',
              '#b5838d',
              '#fec89a',
              '#023047',
              '#e07a5f',
              '#3d405b'
            ]
          }
        ],
        labels: labels
      });
    }
  }
};
</script>

<style></style>
