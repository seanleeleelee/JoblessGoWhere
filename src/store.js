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
      password: "",
      email: "",
      recommendedCourses: []
    }
  },
  mutations: {
    changeLifestage(state, lifestage) {
      state.user.lifestage = lifestage;
    },
    changeIndustry(state, industry) {
      state.user.industry = industry;
    },
    addSkillsets(state, skillsets) {
      state.user.skillsets = skillsets;
    },
    addCourses(state, courses) {
      state.user.course = courses;
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
