<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-35 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Welcome Back !</h4>

              <p slot="description" class="description">
                One click away to unlocking your full potential
              </p>
              <br />

              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Email </label>
                <md-input id="name" v-model="email" type="text"></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input type="password" v-model="password"></md-input>
              </md-field>

              <div slot="errors" class="errors" v-if="errors.length">
                <br />
                <p><b>Please correct the following error(s):</b></p>
                <ul>
                  <li :key="error.id" v-for="error in errors">{{ error }}</li>
                </ul>
              </div>

              <md-button
                slot="footer"
                class="md-simple md-success md-lg"
                v-on:click="login"
              >
                Login
              </md-button>

              <div slot="other" class="other">
                New member?
                <router-link to="/quiz/lifestage"
                  >Get started on the quiz instead?</router-link
                >
              </div>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import database from "../firebase.js";
import firebase from "firebase";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      username: null,
      email: null,
      password: null,
      errors: []
    };
  },
  methods: {
    login: function(e) {
      this.errors = [];

      if (!this.email) {
        this.errors.push("Email required");
      }

      if (!this.password) {
        this.errors.push("Password required");
      }

      if (!this.errors.length) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$router.push("/ProfilePage");
          })
          .catch(error => {
            this.errors.push(error);
          });
      }
      e.preventDefault();
    }
  },

  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
