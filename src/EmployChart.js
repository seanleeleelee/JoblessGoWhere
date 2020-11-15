import { Line } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Line,
  data: () => ({
    results: [],
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "Retrenched Employees Annualy",
          data: [],
          borderWidth: 0.5,
          borderColor: "red",
          backgroundColor: "black",
          fill: false
        }
      ]
    },
    options: {}
  }),
  methods: {
    fetchData: function() {
      axios
        .get(
          "https://data.gov.sg/api/action/datastore_search?resource_id=19eb72c4-5bb1-4484-a64c-3516a84cf1b0"
        )
        .then(response => {
          this.results = response.data.result.records;
          for (let key in this.results) {
            if (this.results[key].year > 2010) {
              this.chartdata.datasets[0].data.push(this.results[key].retrench);
              this.chartdata.labels.push(this.results[key].year);
            }
          }
          this.renderChart(this.chartdata, this.options);
        });
    }
  },
  mounted() {
    // console.log('Do I come here')
    this.fetchData();
  }
};
