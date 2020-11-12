import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//functions to get variables from sessionStorage
let lifestage = window.sessionStorage.getItem("lifestage");
let industry = window.sessionStorage.getItem("industry");
let course = JSON.parse(window.sessionStorage.getItem("course"));
let skillsets = JSON.parse(window.sessionStorage.getItem("skillsets"));
let username = window.sessionStorage.getItem("username");
let recommendedCourses = JSON.parse(
  window.sessionStorage.getItem("recommendedCourses")
);
let finalCourses = JSON.parse(window.sessionStorage.getItem("finalCourses"));
let hasFinalCourses = window.sessionStorage.getItem("hasFinalCourses");

export const store = new Vuex.Store({
  state: {
    user: {
      lifestage: lifestage ? lifestage : "",
      industry: industry ? industry : "",
      course: course ? course : [],
      skillsets: skillsets ? skillsets : [],
      username: username ? username : "",
      recommendedCourses: recommendedCourses ? recommendedCourses : [],
      finalCourses: finalCourses ? finalCourses : [],
      hasFinalCourses: hasFinalCourses ? hasFinalCourses : false,
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
      this.commit("saveLifestage");
    },
    changeIndustry(state, payload) {
      state.user.industry = payload;
      state.user.hasFinalCourses = false;
      this.commit("saveIndustry");
    },
    addSkillsets(state, payload) {
      state.user.skillsets = payload;
      state.user.hasFinalCourses = false;
      this.commit("saveSkillsets");
    },
    addCourses(state, payload) {
      state.user.course = payload;
      state.user.hasFinalCourses = false;
      this.commit("saveCourses");
    },
    addRecommended(state, payload) {
      state.user.recommendedCourses = payload;
      this.commit("saveRecommendedCourses");
    },
    addFinalCourses(state, payload) {
      state.user.finalCourses = payload;
      state.user.hasFinalCourses = true;
      this.commit("saveFinalCourses");
    },
    // functions for saving state to sessionStorage
    saveLifestage(state) {
      window.sessionStorage.setItem("lifestage", state.user.lifestage);
    },
    saveIndustry(state) {
      window.sessionStorage.setItem("industry", state.user.industry);
    },
    saveCourses(state) {
      window.sessionStorage.setItem(
        "course",
        JSON.stringify(state.user.course)
      );
    },
    saveSkillsets(state) {
      window.sessionStorage.setItem(
        "skillsets",
        JSON.stringify(state.user.skillsets)
      );
    },
    saveUsername(state) {
      window.sessionStorage.setItem("username", state.user.username);
    },
    saveRecommendedCourses(state) {
      window.sessionStorage.setItem(
        "recommendedCourses",
        JSON.stringify(state.user.recommendedCourses)
      );
    },
    saveFinalCourses(state) {
      window.sessionStorage.setItem(
        "finalCourses",
        JSON.stringify(state.user.finalCourses)
      );
      window.sessionStorage.setItem(
        "hasFinalCourses",
        state.user.hasFinalCourses
      );
    }
  }
});
