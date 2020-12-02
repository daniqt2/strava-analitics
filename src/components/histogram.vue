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
    index: {
      type: Number
    },
    type: {
      type: String
    }
  },
  watch: {
    chartData() {
      // this._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.paintChart();
    }
  },
  data() {
    return {
      colors: [
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
        '#3d405b'
      ]
    };
  },
  mounted() {
    this.paintChart();
  },
  methods: {
    paintChart() {
      var d = null;
      console.log('this.indexxx', this.index);
      const dates = this.chartData.map(d => d.date).reverse();
      if (this.type == 'd')
        d = this.chartData.map(dd => dd.elapsed_time).reverse();
      else d = this.chartData.map(dd => dd.distance / 1000).reverse();
      this.renderChart(
        {
          labels: dates,
          datasets: [
            {
              label: this.label,
              data: d,
              // borderColor: this.colors[this.index + 1],
              pointBorderColor: this.colors[this.index - 1],
              pointBackgroundColor: this.colors[this.index - 1],
              backgroundColor: this.colors[this.index]
            }
          ],
          legend: {
            display: false
          }
        },
        this.options
      );
    }
  }
};
</script>

<style></style>
