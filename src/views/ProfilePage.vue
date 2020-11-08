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
                  <h2>Welcome {{ userName }}</h2>
                  <p>{{ userEmail }}</p>
                  <div class="md-layout-item md-size-70 mx-auto text-center">
                    <div class="avatar ">
                      <img
                        :src="teamImg2"
                        alt="Circle Image"
                        class="rounded-circle img-fluid"
                      />
                    </div>
                  </div>
                  <h3>
                    {{ industry }}
                  </h3>
                </md-card-content>
              </md-card>
            </div>

            <div class="md-layout-item md-size-65 md-small-size-100">
              <h2 class="title text-left">Course Mastery</h2>
              <div class="title">
                <h3>{{ course1 }}</h3>
              </div>
              <md-progress-bar
                class="md-success"
                :md-value="amount"
              ></md-progress-bar>

              <div class="title">
                <h3>{{ course2 }}</h3>
              </div>
              <md-progress-bar
                class="md-success"
                :md-value="amount2"
              ></md-progress-bar>

              <div class="title">
                <h3>{{ course3 }}</h3>
              </div>
              <md-progress-bar
                class="md-success"
                :md-value="amount3"
              ></md-progress-bar>
              <hr />

              <h2 class="title text-left">To complete</h2>
              <div class="md-layout">
                <div class="md-layout-item md-size-30">
                  <div class="DataAnalytics">
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-100 mx-auto">
                        <img
                          :src="course1_pic"
                          alt="Thumbnail Image"
                          class="img-raised rounded"
                        />
                      </div>

                      <md-card-content class="text-center">
                        <h4>
                          {{course1_name}}
                        </h4>
                      </md-card-content>
                    </md-card>
                  </div>
                </div>

                <div class="md-layout-item md-size-30">
                  <div class="DataAnalytics">
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-100 mx-auto">
                        <img
                          :src="course2_pic"
                          alt="Thumbnail Image"
                          class="img-raised rounded"
                        />
                      </div>
                      <md-card-content class="text-center">
                        <h4>
                          {{course2_name}}
                        </h4>
                      </md-card-content>
                    </md-card>
                  </div>
                </div>

                <div class="md-layout-item md-size-30">
                  <div class="DataAnalytics">
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-100 mx-auto">
                        <img
                          :src="course3_pic"
                          alt="Thumbnail Image"
                          class="img-raised rounded"
                        />
                      </div>
                      <md-card-content class="text-center">
                        <h4>
                          {{course3_name}}
                        </h4>
                      </md-card-content>
                    </md-card>
                  </div>
                </div>
              </div>

              <div class="md-layout">
                <div class="md-layout-item md-size-30 text-center">
                  <md-button class="md-success" @click="click(course1_link)">Start</md-button>
                </div>

                <div class="md-layout-item md-size-30 text-center">
                  <md-button class="md-success" @click="click(course2_link)">Start</md-button>
                </div>

                <div class="md-layout-item md-size-30 text-center">
                  <md-button class="md-success" @click="click(course3_link)">Start</md-button>
                </div>
              </div>
              <br />
              <hr />

              <h2 class="title text-left">Completed Courses</h2>
              <div class="md-layout">
                <div class="md-layout-item md-size-30">
                  <div class="DataAnalytics">
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-100 mx-auto">
                        <img
                          :src="oopImg"
                          alt="Thumbnail Image"
                          class="img-raised rounded"
                        />
                      </div>

                      <md-card-content class="text-center">
                        <h4>
                          Object Oriented Programming in Java
                        </h4>
                      </md-card-content>
                    </md-card>
                  </div>
                </div>

                <div class="md-layout-item md-size-30">
                  <div class="DataAnalytics">
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-100 mx-auto">
                        <img
                          :src="javaImg"
                          alt="Thumbnail Image"
                          class="img-raised rounded"
                        />
                      </div>
                      <md-card-content class="text-center">
                        <h4>
                          Introduction to Relational Database
                        </h4>
                      </md-card-content>
                    </md-card>
                  </div>
                </div>
              </div>

              <div class="md-layout">
                <div class="md-layout-item md-size-30 text-center">
                  <md-button class="md-success">Redo course</md-button>
                </div>

                <div class="md-layout-item md-size-30 text-center">
                  <md-button class="md-success ">Redo course</md-button>
                </div>
              </div>
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
      default: require("@/assets/img/city-profile.jpg")
    },
    htmlImg: {
      type: String,
      default: require("@/assets/img/profile/html.jpeg")
    },
    gaImg: {
      type: String,
      default: require("@/assets/img/profile/google-analytics.svg")
    },
    csImg: {
      type: String,
      default: require("@/assets/img/profile/IntroCSlogo.jpeg")
    },
    oopImg: {
      type: String,
      default: require("@/assets/img/profile/oop.jpg")
    },
    javaImg: {
      type: String,
      default: require("@/assets/img/profile/java.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/user.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  data() {
    return {
      lifestage: null,
      amount: 30,
      amount2: 20,
      amount3: 80,
      userEmail: firebase.auth().currentUser.email,
      userName: "",
      finalCourses:[],
      course1: "",
      course1_name: "",
      course1_link: "",
      course1_pic: "",
      course2: "",
      course2_name: "",
      course2_link: "",
      course2_pic: "",
      course3: "",
      course3_name: "",
      course3_link: "",
      course3_pic: "",
      industry: ""
    };
  },
  methods: {
    click: function(link) {
            window.open(link, "_blank");
        }
    /*getUsername(email) {
      return database
        .collection("Users")
        .where("email", "==", this.userEmail)
        .get()
        .then(user => {
          console.log(user.data().Username);
          this.userName = user.data().Username;
        });
    }*/
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
    this.finalCourses = this.$store.state.user.finalCourses;
    this.industry = this.$store.state.user.industry;
    this.course1 = this.finalCourses[0].Skillset;
    this.course1_name = this.finalCourses[0].Name;
    this.course1_link = this.finalCourses[0].Link;
    this.course1_pic = this.finalCourses[0].Image;
    this.course2 = this.finalCourses[1].Skillset;
    this.course2_name = this.finalCourses[1].Name;
    this.course2_link = this.finalCourses[1].Link;
    this.course2_pic = this.finalCourses[1].Image;
    this.course3 = this.finalCourses[2].Skillset;
    this.course3_name = this.finalCourses[2].Name;
    this.course3_link = this.finalCourses[2].Link;
    this.course3_pic = this.finalCourses[2].Image;

  }
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
