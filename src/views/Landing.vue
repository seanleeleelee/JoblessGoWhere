<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Upgrade your career</h1>
            <h3>
              Discover online courses to develop your professional skillsets.
            </h3>
            <br />
            <md-button href="/quiz/lifestage" class="md-success md-lg">
              <i class="fas fa-play"></i>
              Get Started
            </md-button>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout-item">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Times are tough...</h2>
              <h4 class="description">
                There are many resources and courses available for this on
                various platforms like SkillsFuture and Coursera. Despite the
                plethora of choices online and offline, people may be unsure of
                which courses are applicable or useful to their industry.
              </h4>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>fact_check</md-icon>
                  </div>
                  <h4 class="info-title">Discover yourself</h4>
                  <p>
                    Complete our onboarding quiz to let us know what industries
                    you are interested in.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>rule</md-icon>
                  </div>
                  <h4 class="info-title">Fill in the gaps</h4>
                  <p>
                    Our proprietary algorithm will recommend a personalized
                    collection of online learning resources that is tailored to
                    your career path.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>menu_book</md-icon>
                  </div>
                  <h4 class="info-title">Lifelong learning</h4>
                  <p>Upgrade your skills to land the job you deserve.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="md-layout">
            <div class="md-layout-item ">
              <h3 class="title text-center ">Singapore's Current Economic Trends</h3>
              <h4 class = "title text-left ">Job Employment and Retrenchment Trend</h4>
              <combined-chart></combined-chart>
              <br>
              <h4 class = "title text-left ">Distribution of University Graduates</h4>
              <div class = " md-layout-item short">
              <graduate-bar></graduate-bar>
              </div>
            </div>
          </div>
        <p class="text-right">Data taken from data.gov.sg</p>
        </div>
      </div>

    

      <div class="section text-center">
        <div class="container">
          <h2 class="title">Here is our team</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Cai Shuhang
                      
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.linkedin.com/in/cai-shuhang/"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Callie Cheong
                    </h4>
                    <md-card-content>
                      
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Sean Lee
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.linkedin.com/in/sean-lee-ren-yi/"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg4"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Ashley Ho
                    </h4>
                    <md-card-actions class="text-center"> </md-card-actions>
                  </md-card>
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
import GraduateBar from "../GraduateBar.js";
import CombinedChart from "../CombinedChart.js";
export default {
  bodyClass: "landing-page",
  components: {
    GraduateBar,
    CombinedChart
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/hero2.jpg"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/among_us.png"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/user.jpg"),
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/user2.jpg"),
    },
    teamImg4: {
      type: String,
      default: require("@/assets/img/faces/user3.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
