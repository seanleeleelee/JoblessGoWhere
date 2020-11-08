import Vue from "vue";
import Vuex from "vuex";
// import * as fb from "./firebase";
// import router from "./router";

Vue.use(Vuex);

let lifestage = window.localStorage.getItem("lifestage");
let industry = window.localStorage.getItem("industry");
let course = window.localStorage.getItem("course");
let skillsets = window.localStorage.getItem("skillsets");

export const store = new Vuex.Store({
  state: {
    user: {
      lifestage: "",
      industry: "",
      skillsets: [],
      course: [],
      username: "",
      recommendedCourses: [],
      finalCourses: [],
      defaultCourses: [
        {
          Name: "Data Analytics",
          Difficulty: "Intermediate",
          Image:
            "https://www.smartdatacollective.com/wp-content/uploads/2018/11/top-7-data-analytics-tools-2019.jpg",
          Industry: "ICT and Media",
          Link: "https://www.coursera.org/learn/introduction-to-data-analytics",
          Platform: "Coursera",
          Skillset: "Data Analytics"
        },
        {
          Name: "Google Analytics",
          Difficulty: "Beginner",
          Image: "https://www.flaticon.com/svg/static/icons/svg/732/732204.svg",
          Industry: "ICT and Media",
          Link: "https://analytics.google.com/analytics/web/",
          Platform: "EDX",
          Skillset: "Data Analytics"
        },
        {
          Name: "SEO",
          Difficulty: "Beginner",
          Image:
            "https://ocdigitalnetwork.com/wp-content/uploads/2018/04/h3-image-2.png",
          Industry: "ICT and Media",
          Link: "https://www.coursera.org/specializations/seo",
          Platform: "Coursera",
          Skillset: "Online marketing"
        }
      ]
    }
  },
  mutations: {
    changeLifestage(state, payload) {
      state.user.lifestage = payload;
    },
    changeIndustry(state, payload) {
      state.user.industry = payload;
    },
    addSkillsets(state, payload) {
      state.user.skillsets = payload;
    },
    addCourses(state, payload) {
      state.user.course = payload;
    },
    addRecommended(state, payload) {
      state.user.recommendedCourses = payload;
    },
    addFinalCourses(state, payload) {
      state.user.finalCourses = payload;
    },
    saveLifestage(state) {
      window.localStorage.setItem("lifestage", state.user.lifestage);
    },
    saveIndustry(state) {
      window.localStorage.setItem("industry", state.user.industry);
    },
    saveCourse(state) {
      window.localStorage.setItem("course", state.user.course);
    },
    saveSkillsets(state) {
      window.localStorage.setItem("skillsets", state.user.skillsets);
    }
  }
});
