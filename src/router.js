import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import SignUp from "./views/SignUp.vue";
import LoginPage from "./views/LoginPage.vue";
import QuizLifestage from "./views/QuizLifestage.vue";
import QuizIndustry from "./views/QuizIndustry.vue";
import RecommendedPage from "./views/RecommendedPage.vue";
import QuizLoginHeader from "./layout/QuizLoginHeader.vue";
import AccountsNavbar from "./layout/AccountsNavbar.vue";
import ProfilePage from "./views/ProfilePage.vue";
import QuizSkillset from "./views/QuizSkillset.vue";
import QuizCourse from "./views/QuizCourse.vue";
import firebase from "firebase";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: AccountsNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/SignUp",
      name: "SignUp",
      components: { default: SignUp, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/LoginPage",
      name: "LoginPage",
      components: { default: LoginPage, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/quiz/lifestage",
      name: "quizlifestage",
      components: { default: QuizLifestage, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/quiz/industry",
      name: "quizindustry",
      components: { default: QuizIndustry, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/quiz/skillset",
      name: "quizskillset",
      components: { default: QuizSkillset, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/quiz/course",
      name: "quizcourse",
      components: { default: QuizCourse, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/RecommendedPage",
      name: "RecommendedPage",
      components: { default: RecommendedPage, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/ProfilePage",
      name: "ProfilePage",
      components: { default: ProfilePage, header: AccountsNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      },
      meta: {
        requiresAuth: true
      }
    }
  ],

  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history"
});

//Nav Guards
router.beforeEach((to, from, next) => {
  //check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //check if not logged in
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: "/LoginPage",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    //check if logged in
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
