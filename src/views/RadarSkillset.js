import { Radar } from "vue-chartjs"
import database from "../firebase.js"
import firebase from "firebase";

export default {
  extends: Radar,
  data:
    function () {
      return {
        datacollection: {
          labels:[],
          datasets: [{
            data: [],
            label:"",
            borderColor: "",
            fill: true,
            borderColor:"black",
            backgroundColor: 'rgba(50, 153, 76, 0.5)'
          }]
        },
        options: {
          scale: {
            angleLines: {
              lineWidth: 1,
              color: 'rgba(128, 128, 128, 0.1)'
            },
          },
          legend: {
            display: false
        },
        title: {
          display: true,
          text: 'Industry Skill Mastery'
        },
          responsive: true,
          spanGaps: false,

        }
      }
    },
  UID: "",
  userSkills:[],
  industry: "",
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
        this.industry = doc.data().industry;
        this.userSkills = doc.data().skillsets;
        this.fetchData();
      })
    },
    fetchData: function () {
      database
        .collection("courses")
        .where("Industry", "==" , this.industry)
        .orderBy("Skillset")
        .get()
        .then(querySnapShot => {
          var con = 0.1;
          querySnapShot.forEach(doc => {
            this.datacollection.labels.push(doc.data().Skillset);
            console.log(doc.data().Skillset)
            if (this.userSkills.includes(doc.data().Skillset)){
              this.datacollection.datasets[0].data.push(1);
            } else {
              this.datacollection.datasets[0].data.push(0.1+con);
              con += 0.1;
            }
          })
          console.log(this.datacollection.datasets[0])
          this.renderChart(this.datacollection, this.options)
        })
    },
    
  },
  created() {
    this.getUID();
    this.fetchIndustry();
  }
}