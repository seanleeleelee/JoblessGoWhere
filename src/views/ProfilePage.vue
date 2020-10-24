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
            <div class="md-layout-item md-size-40 md-small-size-100">
              <div class="tim-typo">
                <h2>
                  Welcome Ashley
                </h2>
              </div>
              <div class="md-layout-item md-size-40">
                <img class="rounded" :src="dataAnalyticsImg" />
              </div>
            </div>

            <div class="md-layout-item md-size-60 md-small-size-100">
              <h1 class="title text-center">Course Mastery</h1>
              <div class="title">
                <h3>Programming Methadology</h3>
              </div>
              <md-progress-bar
                class="md-success"
                :md-value="amount"
              ></md-progress-bar>

              <div class="title">
                <h3>Programming Methadology II</h3>
              </div>
              <md-progress-bar
                class="md-success"
                :md-value="amount"
              ></md-progress-bar>

              <div class="title">
                <h3>Data Structures And Algorithmns</h3>
              </div>
              <md-progress-bar
                class="md-success"
                :md-value="amount"
              ></md-progress-bar>
              <hr />

              <h1 class="title text-center">Course Mastery</h1>
              <div class="title">
                <h3>Programming Methadology</h3>
              </div>
              <md-progress-bar
                class="md-success"
                :md-value="amount"
              ></md-progress-bar>

              <div class="title">
                <h3>Programming Methadology II</h3>
              </div>
              <md-progress-bar
                class="md-success"
                :md-value="amount"
              ></md-progress-bar>

              <div class="title">
                <h3>Data Structures And Algorithmns</h3>
              </div>
              <md-progress-bar
                class="md-success"
                :md-value="amount"
              ></md-progress-bar>

              <hr />
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
      default: require("@/assets/img/DataAnalytics.jpg")
    },
    googleAnalyticsImg: {
      type: String,
      default: require("@/assets/img/GoogleAnalytics.png")
    },
    SEOimg: {
      type: String,
      default: require("@/assets/img/SEO.jpg")
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
