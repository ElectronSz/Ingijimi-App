<template>
  <div>
      <NavBar/>
    <div class="container">
      <div class="columns">
        <div class="column is-12">
          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h2 class="subtitle">Sign Up Here</h2>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Name">
                      <b-input v-model="fname"></b-input>
                    </b-field>
                  </div>
                  <div class="column is-4">
                    <b-field label="Middle Name">
                      <b-input v-model="mname"></b-input>
                    </b-field>
                  </div>
                  <div class="column is-4">
                    <b-field label="Surname">
                      <b-input v-model="lname"></b-input>
                    </b-field>
                  </div>
                </div>

                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Cell Number">
                      <b-input v-model="phone"></b-input>
                    </b-field>
                  </div>
                  <div class="column is-4">
                    <b-field label="Town">
                      <b-input v-model="town"></b-input>
                    </b-field>
                  </div>
                  <div class="column is-4">
                    <b-field type="is-success" label="Region">
                      <b-select v-model="region" placeholder="Select a region" expanded>
                        <option v-for="(option,i) in regions" :key="i">{{option}}</option>
                      </b-select>
                    </b-field>
                  </div>
                </div>

                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Email Address">
                      <b-input v-model="email" type="email"></b-input>
                    </b-field>
                  </div>
                  <div class="column is-4">
                    <b-field type="is-success" label="Password">
                      <b-input type="password" v-model="password" password-reveal></b-input>
                    </b-field>
                  </div>
                  <div class="column is-4">
                    <b-field type="is-success" label="Repeat Password">
                      <b-input type="password" v-model="password1" password-reveal></b-input>
                    </b-field>
                  </div>
                </div>

                <div class="columns">
                  <div class="column">
                    <b-button
                      type="is-primary"
                      @click.prevent="validateUser"
                      icon-left="plus"
                    >Sign Up</b-button>
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
import { llg } from "llg";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { auth } from "../config";

export default {
  components: {
    Footer,
    Loading,
    NavBar
  },
  data() {
    return {
      fname: "",
      mname: "",
      lname: "",
      phone: "",
      town: "",
      region: "",
      email: "",
      password: "",
      password1: "",
      isLoading: false,
      fullPage: true,
      height: 100,
      width: 100,
      opacity: 0.9,
      data: "",
      regions: ["Hhohho", "Manzini", "Shiselweni", "Lubombo"]
    };
  },
  beforeCreate() {
    llg(" Before Create");
    if (this.$session.exists()) {
      this.$router.push({ path: "client" });
    } else {
      llg("Before Create None");
    }
  },
  methods: {
    signUp(email, password) {
      const self = this;
      this.isLoading = true;

      let user = {
        email: email,
        password: password
      };

      //login firebase auth
      auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          llg(errorCode, errorMessage);
        })
        .then(function name(user) {
          llg(user.user.uid);
          let data = {
            uid: user.user.uid,
            email: user.user.email,
            verified: user.user.emailVerified,
            loggedIn: true
          };
          self.$session.start();
          self.$session.set("xyz", data);

          let user_data = {
            uid: data.uid,
            email: data.email,
            fname: self.fname,
            mname: self.mname,
            lname: self.lname,
            town: self.town,
            region: self.region,
            phone: self.phone,
            createdAt: Date.now()
          };

          //dispatch new user to db
          self.$store.dispatch("signup", user_data);
        });
        //waiting for 9 seconds
      setTimeout(() => {
        self.isLoading = false;
        self.$router.push({ path: "client" });
      }, 9000);
    },
    validateUser() {
      //if empty fields, prompt error messsage
      if (this.email.trim() == "" || this.password.trim() == "") {
        llg("Empty Password");
      } else {
        //if validation true, continue login
        this.signUp(this.email, this.password);
      }
    }
  }
};
</script>
<style scoped>
body {
  background: url("../assets/bg_1.png") no-repeat;
}
</style>