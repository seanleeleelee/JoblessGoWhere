import { Bar } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Bar,
  data: () => ({
    results: [],
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "",
          data: [],
          borderWidth: 1,
          borderColor: "black",
          backgroundColor: "rgba(50, 153, 76, 0.7)",
          fill: true
        }
      ]
    },
    options: {
      legend: {
        display: false
      }
    }
  }),
  methods: {
    fetchData: function() {
      axios
        .get(
          "https://data.gov.sg/api/action/datastore_search?resource_id=115bf8a7-46df-466c-b7fc-375ef3c1b425"
        )
        .then(response => {
          this.results = response.data.result.records;
          for (let key in this.results) {
            if (
              this.results[key].year > 2010 &&
              this.results[key].sex == "MF"
            ) {
              this.chartdata.datasets[0].data.push(this.results[key].graduates);
              this.chartdata.labels.push(this.results[key].course);
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
