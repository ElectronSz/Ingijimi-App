<template>
  <b-navbar class="navbar is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>

      <template slot="start">
        <b-navbar-item>
          <router-link to="/">{{page}}</router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="/features">Features</router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="/terms">Terms</router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="/about">About</router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link to="/contact">Contact</router-link>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link class="button is-primary" to="/register">
              <strong>Sign up</strong>
            </router-link>
            <router-link class="button is-primary" to="/login">
              <strong>Login</strong>
            </router-link>
          </div>
        </b-navbar-item>
      </template>

  </b-navbar>
</template>

<script>
export default {
  props: ["page", "loggedIn"]
};
</script>