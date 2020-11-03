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
              <h2 class="title text-center">Your Recommended Courses</h2>
              <div class="DataAnalytics">
                <div class="md-layout">
                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="DataAnalytics">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-100 mx-auto">
                          <img
                            :src="dataAnalyticsImg"
                            alt="Thumbnail Image"
                            class="img-raised rounded"
                          />
                        </div>

                        <md-card-content>
                          <h3 class="card-title">
                            Data Analytics
                          </h3>
                          <h6>
                            Coursera | Intermediate
                          </h6>
                          <p>
                            Completed by <b>{{ generateNumber() }}%</b> of
                            people in the same industry as you
                          </p>
                        </md-card-content>
                      </md-card>
                    </div>
                  </div>

                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="lifestage">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-100 mx-auto">
                          <img
                            :src="gaImg"
                            alt="Thumbnail Image"
                            class="img-raised rounded "
                          />
                        </div>

                        <md-card-content>
                          <h3 class="card-title">
                            Google Analytics
                          </h3>
                          <h6>
                            edX | Beginner
                          </h6>
                          <p>
                            Completed by <b>{{ generateNumber() }}%</b> of
                            people in the same industry as you
                          </p>
                        </md-card-content>
                      </md-card>
                    </div>
                  </div>

                  <div
                    class="md-layout-item md-medium-size-33 md-small-size-100"
                  >
                    <div class="lifestage">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-100 mx-auto">
                          <img
                            :src="SEOimg"
                            alt="Thumbnail Image"
                            class="img-raised rounded img-fluid"
                          />
                        </div>
                        <md-card-content>
                          <h3 class="card-title">
                            SEO
                          </h3>
                          <h6>
                            SkillsFuture | Beginner
                          </h6>
                          <p>
                            Completed by <b>{{ generateNumber() }}%</b> of
                            people in the same industry as you
                          </p>
                        </md-card-content>
                      </md-card>
                    </div>
                  </div>
                </div>
              </div>
              <md-button href="/SignUp" class="md-success md-lg">
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
    dataAnalyticsImg: {
      type: String,
      default: require("@/assets/img/python.jpeg")
    },
    gaImg: {
      type: String,
      default: require("@/assets/img/profile/google-analytics.svg")
    },
    SEOimg: {
      type: String,
      default: require("@/assets/img/seo.jpg")
    },
    midCareerImg4: {
      type: String,
      default: require("@/assets/img/GoogleAnalytics.png")
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
      industry: "",
      lifestage: "",
      selectedSkills: [],
      selectedCourses: [],
      recommendedCourses:[],
      min: 40,
      max: 90
    };
  },
  methods: {
    generateNumber: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    fetchRecommended: function() {
      database
        .collection("courses")
        .where("Industry", "==", this.industry)
        .where("Skillset", "not-in", this.selectedSkills) // still need to filter from selectedCourse
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(doc => {
            this.recommendedCourses.push(doc.data().Name);
          });
        });
    }
  },
  created() {
    this.industry = this.$store.state.user.industry;
    this.lifestage = this.$store.state.user.lifestage;
    this.selectedSkills = this.$store.state.user.skillsets;
    this.selectedCourses = this.$store.state.user.course;
    this.fetchRecommended();
    console.log("Recommended Courses: " + this.recommendedCourses);
    this.$store.commit("addRecommended", this.recommendedCourses);
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
