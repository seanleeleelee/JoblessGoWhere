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
              <h2 class="title text-center">What skillsets do you have?</h2>
              <div class="text-center">
                Note: Hold down control (ctrl) or the command button to select
                multiple skills.
              </div>
              <br />
              <select class="dropdown" v-model="selectedSkills" multiple>
                <option v-for="skill in skillsList" :key="skill">
                  {{ skill }}
                </option>
              </select>
              <br /><br />{{ "Your chosen skillset(s): " + selectedSkills }}
            </div>
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <div class="md-layout">
                <div
                  class="md-layout-item md-size-50 md-small-size-100 text-left"
                >
                  <md-button to="/quiz/industry" class="md-danger">
                    Back
                  </md-button>
                </div>
                <div
                  class="md-layout-item md-size-50 md-small-size-100 text-right"
                >
                  <md-button class="md-success" v-on:click="addSkillsets()">
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
                      v-if="!this.selectedSkills.length"
                      class="md-success"
                      :md-value="50"
                    ></md-progress-bar>
                    <md-progress-bar
                      v-else
                      class="md-success"
                      :md-value="75"
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
  bodyClass: "quiz-skillset-page",
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
      selectedSkills: [],
      skillsList: [],
      industry: "", // no more wishful thinking
      lifestage: ""
    };
  },
  methods: {
    fetchSkillsets: function() {
      database
        .collection("courses")
        .where("Industry", "==", this.industry)
        .orderBy("Skillset")
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(doc => {
            this.skillsList.push(doc.data().Skillset);
          });
        });
    },
    addSkillsets: function() {
      this.$store.commit("addSkillsets", this.selectedSkills);
      this.$router.push({ path: "/quiz/course" });
      console.log("updated doc" + this.selectedSkills);
    }
  },
  created() {
    this.lifestage = this.$store.state.user.lifestage;
    this.industry = this.$store.state.user.industry;
    console.log("Retrieved Skillsets" + this.industry);
    this.fetchSkillsets();
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
