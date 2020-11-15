import { Line } from "vue-chartjs";
import database from "../firebase.js";
import firebase from "firebase";

export default {
  extends: Line,
  data: function() {
    return {
      datacollection: {
        labels: [
          2000,
          2002,
          2004,
          2006,
          2008,
          2010,
          2012,
          2014,
          2016,
          2018,
          2020
        ],
        datasets: [
          {
            data: [],
            label: "",
            borderColor: "",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Number of People in the Industry over the past 20 years"
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  UID: "",
  industry: "",
  methods: {
    fetchIndustry: function() {
      database
        .collection("users")
        .doc(this.UID)
        .get()
        .then(doc => {
          this.industry = doc.data().industry;
          this.fetchData();
        });
    },
    getUID: function() {
      this.UID = firebase.auth().currentUser.uid;
    },
    fetchData: function() {
      database
        .collection("industries")
        .where("Name", "==", this.industry)
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(doc => {
            this.datacollection.datasets[0].data = doc.data().data;
            this.datacollection.datasets[0].label = doc.data().Name;
            this.datacollection.datasets[0].borderColor = doc.data().borderColor;
          });
          this.renderChart(this.datacollection, this.options);
        });
    }
  },
  created() {
    this.getUID();
    this.fetchIndustry();
  }
};
