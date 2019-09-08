<template>
  <div>
    <NavBar/>
    <div class="container">
      <div class="columns">
        <div class="column is-12">
          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h2 class="subtitle">Sign In Here</h2>
                <div class="columns">
                  <div class="column is-5">
                    <b-field label="Email">
                      <b-input type="email" v-model="email"></b-input>
                    </b-field>
                  </div>
                  <div class="column is-5">
                    <b-field label="Password">
                      <b-input type="password" password-reveal v-model="password"></b-input>
                    </b-field>
                  </div>
                  <div class="column is-2">
                    <b-button
                      class="mt-3"
                      type="is-primary"
                      icon-left="plus"
                      @click.prevent="validateUser"
                    >Sign In</b-button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="vld-parent">
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
        :height="height"
        :width="width"
        :opacity="opacity"
        color="#0131FF"
        background-color="#FFB9D1"
        transition="bounce"
        loader="bars"
      ></loading>
    </div>
    <Footer />
  </div>
</template>
<script>
import NavBar from './NavBar'
import Footer from "./Footer.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { llg } from "llg";
import { auth } from "../config";

export default {
  components: {
    Footer,
    Loading,
    NavBar
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      fullPage: true,
      height: 100,
      width: 100,
      opacity: 0.9,
      data: ""
    };
  },
  created() {},
  beforeCreate() {
    llg(" Before Create");
    if (this.$session.exists()) {
      this.$router.push({ path: "client" });
    } else {
      llg("Before Create None");
    }
  },
  methods: {
    signIn(email, password) {
      const self = this;
      this.isLoading = true;

      let user = {
        email: email,
        password: password
      };

      //login firebase auth
      auth
        .signInWithEmailAndPassword(user.email, user.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          llg(errorCode, errorMessage);
        })
        .then(function name(user) {
          if (typeof user == "undefined") {
            llg("Undefined User");
          } else {
            let data = {
              uid: user.user.uid,
              email: user.user.email,
              verified: user.user.emailVerified,
              loggedIn: true
            };
            self.$session.start();
            self.$session.set("xyz", data);
            self.$router.push({ path: "client" });
          }
        });
      // simulate AJAX
      setTimeout(() => {
        self.isLoading = false;
      }, 5000);
    },
    validateUser() {
      //if empty fields, prompt error messsage
      if (this.email.trim() == "" || this.password.trim() == "") {
        llg("Empty Password");
      } else {
        //if validation true, continue login
        this.signIn(this.email, this.password);
      }
    }
  }
};
</script>
<style scoped>
body {
  background: url("../assets/bg_1.png") no-repeat;
}

.mt-3 {
  margin-top: 30px;
}
</style>