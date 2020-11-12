<template>
  <div class="wrapper">
    <parallax class="section header-filter" :style="headerStyle"> </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h1 class="title text-center">Check out your progress!</h1>
            </div>
          </div>

          <div class="md-layout">
            <div class="md-layout-item md-size-35 md-small-size-100">
              <md-card>
                <md-card-content class="text-center">
                  <h2>Welcome {{ username }}</h2>
                  <div class="md-layout-item md-size-70 mx-auto text-center">
                    <div class="avatar">
                      <img
                        :src="teamImg2"
                        alt="Circle Image"
                        class="rounded-circle img-fluid"
                      />
                    </div>
                  </div>
                </md-card-content>
              </md-card>
            </div>

            <div class="md-layout-item md-size-65 md-small-size-100">
              <h2 class="title text-left">Chosen Industry : {{ industry }}</h2>
              <h3><b>Industry Description: </b></h3>
              <h5>{{industryDescription}}</h5>
            
            </div>
            

            <div class="md-layout-item md-size-100 md-small-size-100">
              <hr>
              <h2 class="title text-left">To complete</h2>
              <div class="md-layout">
                <div
                  v-for="course in recommendedCourses"
                  v-bind:key="course.id"
                >
                  <div class="md-layout">
                    <div class="md-layout-item md-size-30">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item mx-auto">
                          <img
                            v-bind:src="course.Image"
                            class="img-raised rounded"
                          />
                        </div>
                        <md-card-content class="text-center">
                          <h4>{{ course.Name }}</h4>
                          <md-button
                          class="md-success"
                          @click="click(course.Link)"
                          >Start</md-button
                        >
                        </md-card-content>
                      </md-card>
                    </div>

                    <div class="md-layout-item md-size-50">
                      <h3>Course Description</h3>
                      <h4>{{ course.Description }}</h4>
                    </div>
                    
                  </div>
                  <br>
                </div>
              </div>
              <hr />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import database from "../firebase.js";

export default {
  bodyClass: "quiz-lifestage-page",

  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg"),
    },
    htmlImg: {
      type: String,
      default: require("@/assets/img/profile/html.jpeg"),
    },
    gaImg: {
      type: String,
      default: require("@/assets/img/profile/google-analytics.svg"),
    },
    csImg: {
      type: String,
      default: require("@/assets/img/profile/IntroCSlogo.jpeg"),
    },
    oopImg: {
      type: String,
      default: require("@/assets/img/profile/oop.jpg"),
    },
    javaImg: {
      type: String,
      default: require("@/assets/img/profile/java.jpg"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/user.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  data() {
    return {
      userName: "",
      industry: "",
      completedCourses: [],
      recommendedCourses: [],
      industryDescription: "",
      username: "",
      UID: "",
    };
  },
  methods: {
    click: function (link) {
      window.open(link, "_blank");
    } /*
    fetchCompletedCourses: function(){
      database
      .collection("CompletedCourses")
      .get()
      .then(querySnapShot => {
        querySnapShot.forEach(doc => {
          this.completedCourses.push(doc.data())
        });
      });
    },*/,
    getUID: function () {
      this.UID = firebase.auth().currentUser.uid;
    },
    fetchUserData: function () {
      database
        .collection("users")
        .doc(this.UID)
        .get()
        .then((doc) => {
          this.username = doc.data().username;
          this.industry = doc.data().industry;
          this.recommendedCourses = doc.data().recommendedcourses;
          this.completedCourses = doc.data().course;
          this.fetchIndustryData()
        });
    },
    fetchIndustryData: function() {
      database
      .collection("industries")
      .where("Name", "==" , this.industry)
      .get()
      .then(querySnapShot => {
        querySnapShot.forEach(doc => {
          this.industryDescription = doc.data().Description
      });
      });
    },
      
    
  },

  created() {
    /*database
      .collection("Users")
      .where("email", "==", this.userEmail)
      .get()
      .then(user => {
        console.log(user.data().Username);
        this.userName = user.data().Username;
      });*/
    this.getUID();
    this.fetchUserData();

    
  },
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: left !important;
}

.md-has-textarea + .md-layout {
  margin-top: 20px;
}
</style>
