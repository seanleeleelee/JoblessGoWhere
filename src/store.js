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
    lifestage: lifestage ? lifestage : "",
    industry: industry ? industry : "",
    course: course ? course : [],
    skillsets: skillsets ? skillsets : []
  },
  mutations: {
    changeLifestage(state, lifestage) {
      state.lifestage = lifestage;
      this.commit("saveLifestage");
    },
    changeIndustry(state, industry) {
      state.industry = industry;
      this.commit("saveIndustry");
    },
    addCourse(state, courses) {},
    addSkillsets(state, skillsets) {},
    saveLifestage(state) {
      window.localStorage.setItem("lifestage", state.lifestage);
    },
    saveIndustry(state) {
      window.localStorage.setItem("industry", state.industry);
    },
    saveCourse(state) {
      window.localStorage.setItem("course", state.course);
    },
    saveSkillsets(state) {
      window.localStorage.setItem("skillsets", state.skillsets);
    }
  },
  getters: {
    lifestage: state => state.lifestage
  }
});
