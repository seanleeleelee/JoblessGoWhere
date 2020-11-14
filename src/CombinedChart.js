import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
    extends: Line,
    data: () => ({
        results: [],
        results2: [],
        chartdata: {
            labels: [],
            datasets: [
                {
                    label: 'Retrenched Employees Annually',
                    data: [],
                    borderWidth: 0.5,
                    borderColor: "red",
                    backgroundColor: 'rgba(255, 153, 153, 0.3)',
                    fill: true
                },
                {
                    label: 'Job Vacancy Annually',
                    data: [],
                    borderWidth: 0.5,
                    borderColor: "blue",
                    backgroundColor: 'rgba(204, 229, 255, 0.3)',
                    fill: true
                }
            ]

        },
        options: {
            legend:{
                fontColor:'Black',
                fontSize:20
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }),
    methods: {
        fetchData: function () {
            axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=19eb72c4-5bb1-4484-a64c-3516a84cf1b0')
                .then(response => {
                    this.results = response.data.result.records;
                    for (let key in this.results) {
                        if (this.results[key].year > 2010) {
                            this.chartdata.datasets[0].data.push(this.results[key].retrench)
                            this.chartdata.labels.push(this.results[key].year)
                        }
                    }
                    this.renderChart(this.chartdata, this.options)
                })
            axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=5d429272-3383-442e-b20b-5306daf55229')
                .then(response => {
                    this.results2 = response.data.result.records;
                    for (let key in this.results2) {
                        if (this.results2[key].year > 2010) {
                            this.chartdata.datasets[1].data.push(this.results2[key].job_vacancy)
                            
                        }
                    }
                    this.renderChart(this.chartdata, this.options)
                })
        }

    },
    mounted() {
        this.fetchData()

    }
}