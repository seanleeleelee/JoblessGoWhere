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
              <h4>
                These are courses recommended for you through your quiz results
              </h4>
              <div class="DataAnalytics">
                <div class="md-layout">
                  <div
                    class="md-layout-item md-medium-size-30 md-small-size-100"
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
                            Coursea | Intermediate
                          </h6>
                          <p>
                            Completed by <b>68%</b> of people in the same
                            industry as you
                          </p>
                        </md-card-content>
                      </md-card>
                    </div>
                  </div>

                  <div
                    class="md-layout-item md-medium-size-30 md-small-size-100"
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
                            Completed by <b>65%</b> of people in the same industry as
                            you
                          </p>
                        </md-card-content>
                      </md-card>
                    </div>
                  </div>

                  <div
                    class="md-layout-item md-medium-size-30 md-small-size-100"
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
                            Completed by <b>57%</b> of people in the same industry as
                            you
                          </p>
                        </md-card-content>
                      </md-card>
                    </div>
                  </div>
                </div>
              </div>
              <md-button href="/SignUp" class="md-success md-lg">
                
                Continue Sign Up
              </md-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      lifestage: null
    };
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
