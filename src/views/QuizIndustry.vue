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
                Which industry are you interested in?
              </h2>
              <select
                class="dropdown"
                v-model="industry"
              >
                <option v-for="item in industryList" :key="item">
                  {{ item }}
                </option>
              </select>
              <br /><br />{{ "Your chosen industry: " + industry }}
            </div>
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <div class="md-layout">
                <div
                  class="md-layout-item md-size-50 md-small-size-100 text-left"
                >
                  <md-button to="/quiz/lifestage" class="md-danger">
                    Back
                  </md-button>
                </div>
                <div
                  class="md-layout-item md-size-50 md-small-size-100 text-right"
                >
                  <md-button
                    v-if="this.industry != ''"
                    class="md-success"
                    v-on:click="addIndustry()"
                  >
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
                      v-if="this.industry == ''"
                      class="md-success"
                      :md-value="25"
                    ></md-progress-bar>
                    <md-progress-bar
                      v-else
                      class="md-success"
                      :md-value="50"
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
  bodyClass: "quiz-industry-page",
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
    },
  },
  data() {
    return {
      lifestage: "",
      industry: "",
      industryList: [],
      docID: ""
    };
  },
  methods: {
    fetchIndustries: function() {
      database
        .collection("industries")
        .orderBy("Name")
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(doc => {
            this.industryList.push(doc.data().Name);
          });
        });
    },
    addIndustry: function() {
      this.$store.commit("changeIndustry", this.industry);
      this.$router.push({path : "/quiz/skillset"});
      console.log("Updated user industry with: " + this.industry + this.lifestage);
    }
  },
  created() {
    this.fetchIndustries();
    this.lifestage = this.$store.state.user.lifestage;
    console.log("Retrieved Industries" + this.lifestage);
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
