import {Pie} from 'vue-chartjs'
import database from "../firebase.js"
import firebase from "firebase";

export default {
    extends: Pie,
    data:
      function () {
        return {
          datacollection: {
            labels:[],
            datasets: [{
              data: [],
              label:"",
              fill: true,
              borderColor:[],
              backgroundColor: [],
            }]
          },
          options: {
            title: {
                display: true,
                text: 'Proportion of Chosen Industry by Users'
              },
            responsive: true,
            legend: {
                display: false,
                position : "bottom",
            },
          }
        }
      },
    UID: "",
    userindustry: "",
    methods: {
      getUID: function () {
        this.UID = firebase.auth().currentUser.uid;
      },
      fetchIndustry: function() {
        database
        .collection("users")
        .doc(this.UID)
        .get()
        .then(doc => {
          this.userindustry = doc.data().industry;
          this.fetchData();
        })
      },
      fetchData: function () {
        database
          .collection("industries")
          .get()
          .then(querySnapShot => {
            var col = 50;
            querySnapShot.forEach(doc => {
              this.datacollection.labels.push(doc.data().Name);
              this.datacollection.datasets[0].borderColor.push('black');
              this.datacollection.datasets[0].data.push(col);
              if (this.userindustry == doc.data().Name){
                this.datacollection.datasets[0].backgroundColor.push('rgba(0, 128, 255, 0.7)');
              } else {
                this.datacollection.datasets[0].backgroundColor.push('rgba(50, 153, 76, 0.2)');
              }
              col += 18
            })
            this.renderChart(this.datacollection, this.options)
          })
      },
      
    },
    created() {
      this.getUID();
      this.fetchIndustry();
    }
  }