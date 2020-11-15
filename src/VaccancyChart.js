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
          label: "Job Vacancy Annually",
          data: [],
          borderWidth: 0.5,
          borderColor: "blue",
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
          "https://data.gov.sg/api/action/datastore_search?resource_id=5d429272-3383-442e-b20b-5306daf55229"
        )
        .then(response => {
          this.results = response.data.result.records;
          for (let key in this.results) {
            if (this.results[key].year > 2010) {
              this.chartdata.datasets[0].data.push(
                this.results[key].job_vacancy
              );
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
