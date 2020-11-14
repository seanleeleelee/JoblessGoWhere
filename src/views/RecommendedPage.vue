<template>
  <div class="wrapper">
    <parallax class="section header-filter" :style="headerStyle"> </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout" v-if="hasFinalCourses">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Your Recommended Courses</h2>
              <div class="DataAnalytics">
                <div class="md-layout">
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <a :href="this.courseLink1" target="_blank">
                      <div class="finalCourse1">
                        <md-card class="md-card-plain" md-with-hover>
                          <div class="md-layout-item md-size-100 mx-auto">
                            <img
                              :src="this.imageURL1"
                              class="img-raised rounded"
                            />
                          </div>

                          <md-card-content>
                            <h3 class="card-title">
                              {{ this.finalCourses[0].Name }}
                            </h3>
                            <h6>
                              {{ this.finalCourses[0].Platform }} |
                              {{ this.finalCourses[0].Difficulty }}
                            </h6>
                            <p>
                              Completed by <b>{{ generateNumber() }}%</b> of
                              people in the same industry as you
                            </p>
                          </md-card-content>
                        </md-card>
                      </div>
                    </a>
                  </div>

                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <a :href="this.courseLink2" target="_blank">
                      <div class="finalCourse2">
                        <md-card class="md-card-plain" md-with-hover>
                          <div class="md-layout-item md-size-100 mx-auto">
                            <img
                              :src="this.imageURL2"
                              class="img-raised rounded "
                            />
                          </div>

                          <md-card-content>
                            <h3 class="card-title">
                              {{ this.finalCourses[1].Name }}
                            </h3>
                            <h6>
                              {{ this.finalCourses[1].Platform }} |
                              {{ this.finalCourses[1].Difficulty }}
                            </h6>
                            <p>
                              Completed by <b>{{ generateNumber() }}%</b> of
                              people in the same industry as you
                            </p>
                          </md-card-content>
                        </md-card>
                      </div>
                    </a>
                  </div>

                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <a :href="this.courseLink3" target="_blank">
                      <div class="finalCourse3">
                        <md-card class="md-card-plain" md-with-hover>
                          <div class="md-layout-item md-size-100 mx-auto">
                            <img
                              :src="this.imageURL3"
                              alt="Thumbnail Image"
                              class="img-raised rounded img-fluid"
                            />
                          </div>
                          <md-card-content>
                            <h3 class="card-title">
                              {{ this.finalCourses[2].Name }}
                            </h3>
                            <h6>
                              {{ this.finalCourses[2].Platform }} |
                              {{ this.finalCourses[2].Difficulty }}
                            </h6>
                            <p>
                              Completed by <b>{{ generateNumber() }}%</b> of
                              people in the same industry as you
                            </p>
                          </md-card-content>
                        </md-card>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <h4>These are your top 3 recommended courses</h4>
              <h4>Click on each icon to be directed to the course page!</h4>
              <md-button to="/SignUp" class="md-success md-lg">
                Save Recommendation
              </md-button>
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
  bodyClass: "quiz-lifestage-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
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
      industry: "",
      lifestage: "",
      selectedSkills: [],
      selectedCourses: [],
      recommendedCourses: [],
      finalCourses: [],
      hasFinalCourses: false,
      min: 40,
      max: 90,
      imageURL1: "",
      imageURL2: "",
      imageURL3: "",
      courseLink1: "",
      courseLink2: "",
      courseLink3: ""
    };
  },
  methods: {
    generateNumber: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    getRandom: function(arr, n) {
      var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
      if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
    },
    fetchRecommended() {
      // user has not selected any skills,firebase requires non empty array for 'not-in' filter
      if (this.selectedSkills.length === 0) {
        return database
          .collection("courses")
          .where("Industry", "==", this.industry)
          .get()
          .then(querySnapShot => {
            querySnapShot.forEach(doc => {
              this.recommendedCourses.push(doc.data());
            });
          });
      } else {
        return database
          .collection("courses")
          .where("Industry", "==", this.industry)
          .where("Skillset", "not-in", this.selectedSkills) // still need to filter from selectedCourse
          .get()
          .then(querySnapShot => {
            querySnapShot.forEach(doc => {
              this.recommendedCourses.push(doc.data());
            });
          })
          
      }
    },
    sleep(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    },
    openURL1() {
      window.open(courseLink1, "_blank");
    },
    openURL2() {
      window.open(courseLink2, "_blank");
    },
    openURL3() {
      window.open(courseLink3, "_blank");
    },
    getDelayedData() {
      // Create a new Promise and resolve after 1 seconds
      var myTimerPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          // callback function for timer, gets called after the time-delay
          // Your timer is done now. Print a line for debugging and resolve myTimerPromise
          
          resolve();
        }, 1000); // This promise will be resolved in 1 second
      });

      // Fetch data now, within Promise.all()
      Promise.all([myTimerPromise, this.fetchRecommended()]).then(() => {
        
      });
    },
    filterRecommended() {
      //remove user completed courses from the total recommendedCourses
      // if there were less than 3 recommendedCourses returned
      for (var courseName in this.selectedCourses) {
        for (var i = this.recommendedCourses.length - 1; i >= 0; --i) {
          if (this.recommendedCourses[i].Name == courseName) {
            this.recommendedCourses.splice(i, 1);
          }
        }
      }

      if (this.recommendedCourses.length < 3) {
        this.finalCourses = this.$store.state.user.defaultCourses;
      } else {
        this.finalCourses = this.getRandom(this.recommendedCourses, 3);
      }
      this.hasFinalCourses = true;
      this.$store.commit("addFinalCourses", this.finalCourses);
    },
    updateImageURL() {
      this.imageURL1 = this.finalCourses[0].Image;
      this.imageURL2 = this.finalCourses[1].Image;
      this.imageURL3 = this.finalCourses[2].Image;
    },
    updateCourseLink() {
      this.courseLink1 = this.finalCourses[0].Link;
      this.courseLink2 = this.finalCourses[1].Link;
      this.courseLink3 = this.finalCourses[2].Link;
    }
  },
  created() {
    this.lifestage = this.$store.state.user.lifestage;
    this.industry = this.$store.state.user.industry;
    this.selectedSkills = this.$store.state.user.skillsets;
    this.selectedCourses = this.$store.state.user.course;
    this.finalCourses = this.$store.state.user.finalCourses;
    this.hasFinalCourses = this.$store.state.user.hasFinalCourses;
  },
  async mounted() {
    if (this.hasFinalCourses === false) {
      await this.fetchRecommended();
      this.filterRecommended();
    }
    // await this.fetchRecommended()
    // this.filterRecommended()
    this.updateImageURL();
    this.updateCourseLink();
    
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
