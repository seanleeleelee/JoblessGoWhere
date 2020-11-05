<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-35 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Get started for free!</h4>

              <p slot="description" class="description">
                One click away to unlocking your full potential
              </p>
              <br />

              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Username...</label>
                <md-input
                  id="name"
                  v-model="username"
                  type="text"
                  required
                ></md-input>
              </md-field>

              <md-field class="md-form-group " slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input
                  id="email"
                  v-model="email"
                  type="email"
                  required
                ></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password</label>
                <md-input
                  type="password"
                  id="password"
                  v-model="password"
                  required
                ></md-input>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Confirm Password</label>
                <md-input
                  type="password"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  required
                ></md-input>
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
                v-on:click="register"
              >
                Sign up
              </md-button>
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
      confirmPassword: null,
      errors: [],
      /*
      lifestage: '' ,
      industry: '',
      skillsets: [],
      course: [],
      recommendedCourses : [],*/

    };
  },
  methods: {
    register: function(e) {
      this.errors = [];

      if (!this.username) {
        this.errors.push("Username required.");
      }
      /*if(this.username && !this.existingUser()) {
        this.errors.push("Username Taken");
      }*/
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.password) {
        this.errors.push("Password required");
      }

      if (this.confirmPassword != this.password) {
        this.errors.push("Confirm password does not match ");
      }

      if (!this.errors.length) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            return database
            .collection('users')
            .doc(user.user.uid).set({
              username:this.username,
              lifestage: this.$store.state.user.lifestage ,
              industry: this.$store.state.user.industry,
              skillsets: this.$store.state.user.skillsets,
              course: this.$store.state.user.course,
              recommendedcourses: this.$store.state.user.recommendedCourses
            });
          }).then(() => {
            this.$router.push("/ProfilePage");
          })
          .catch(error => {
            this.errors.push(error);
          });
      }

      e.preventDefault();
          
            /*
            this.$router.push("/ProfilePage");
          })
          .catch(error => {
            this.errors.push(error);
          });
      }
      e.preventDefault();*/
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
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
  },
};
</script>

<style lang="css"></style>
