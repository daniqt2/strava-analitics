<script>
import { Line } from 'vue-chartjs';
export default {
  extends: Line,
  props: {
    label: {
      type: String
    },
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
  mounted() {
    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor
    } = this.chartColors;
    const dates = this.chartData.map(d => d.date).reverse();
    const distance = this.chartData.map(d => d.distance / 1000).reverse();
    this.renderChart({
      labels: dates,
      datasets: [
        {
          label: this.label,
          data: distance,
          borderColor: borderColor,
          pointBorderColor: pointBorderColor,
          pointBackgroundColor: pointBackgroundColor,
          backgroundColor: backgroundColor
        },
        this.options
      ]
    });
  }
};
</script>

<style></style>
