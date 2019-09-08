<template>
  <b-navbar class="is-light">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">Home</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-dropdown  :label="user">
        <b-navbar-item href="#">Profile</b-navbar-item>
        <b-navbar-item>Logout</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  props: ["page"],
  data() {
    return {
      user: "Hello Musa"
    };
  },
  methods: {
    logout() {
      this.$session.destroy();
      this.$router.push("/");
    
    }
  }
};
</script>