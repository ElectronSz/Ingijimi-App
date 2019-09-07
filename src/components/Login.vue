<template>
  <div>
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
        height = "100"
        width="100"
        opacity= "0.9"
        color = "#0131FF"
        background-color="#FFB9D1"
        transition = "bounce"
        loader ="bars"
      ></loading>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "./Footer.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { llg } from "llg";

export default {
  components: {
    Footer,
    Loading
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      fullPage: true
    };
  },
  methods: {
    signIn(email, password) {
         this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
      llg(email, password);
    },
    validateUser() {
      //if empty fields, prompt error messsage
      if (this.email.trim() == "" || this.password.trim() == "") {
        llg("Empty Password");
      } else {
        //if validation true, continue login
        this.signIn(this.email, this.password);
      }
    },
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    onCancel() {
      llg("User cancelled the loader.");
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