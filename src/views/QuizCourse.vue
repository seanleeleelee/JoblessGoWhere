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
              <h2 class="title text-center">
                What courses have you completed?
              </h2>
              <div class="text-center">
                Note: Hold down control (ctrl) or the command button to select
                multiple courses.
              </div>
              <br />
              <select
                class="dropdown"
                v-model="selectedCourses"
                multiple
              >
                <option v-for="course in courseList" :key="course">
                  {{ course }}
                </option>
              </select>
              <br /><br />{{
                "You have completed the following courses: " + selectedCourses
              }}
            </div>
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <div class="md-layout">
                <div
                  class="md-layout-item md-size-50 md-small-size-100 text-left"
                >
                  <md-button to="/quiz/skillset" class="md-danger">
                    Back
                  </md-button>
                </div>
                <div
                  class="md-layout-item md-size-50 md-small-size-100 text-right"
                >
                  <md-button class="md-success" v-on:click="addCourses()">
                    Next
                  </md-button>
                </div>
              </div>
              <br /><br /><br />
              <div id="progress-pagination">
                <p>Your progress:</p>
                <div class="md-layout">
                  <div class="md-layout-item md-size-100 md-xsmall-size-100">
                    <md-progress-bar
                      v-if="!this.selectedCourses.length"
                      class="md-success"
                      :md-value="75"
                    ></md-progress-bar>
                    <md-progress-bar
                      v-else
                      class="md-success"
                      :md-value="100"
                    ></md-progress-bar>
                  </div>
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
import database from "../firebase.js";

export default {
  bodyClass: "quiz-course-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
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
      selectedCourses: [],
      courseList: [],
      industry: "",
      selectedSkills: [] //no more wishful thinking
    };
  },
  methods: {
    fetchCourses: function() {
      database
        .collection("courses")
        .where("Industry", "==", this.industry)
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(doc => {
            this.courseList.push(doc.data().Name);
          });
        });
    },
    addCourses: function() {
      this.$store.commit("addCourses", this.selectedCourses);
      this.$router.push({path : "/RecommendedPage"});
      console.log("Selected courses: " + this.selectedCourses);
    },
    removeDuplicates: function() {
      this.courseList = [...new Set(this.courseList)];
      console.log("Removed Duplicates");
    }
  },
  created() {
    //this.lifestage = this.$store.state.user.lifestage;
    this.industry = this.$store.state.user.industry;
    this.selectedSkills = this.$store.state.user.skillsets;
    this.fetchCourses();
    this.removeDuplicates();

  }
};
</script>

<style scoped>
.dropdown {
  display: block;
  font-size: 14px;
  font-family: sans-serif;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%; /* useful when width is set to anything other than 100% */
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
}
</style>
