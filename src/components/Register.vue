<template>
<div>
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
                    <b-input></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field label="Middle Name">
                    <b-input></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field label="Surname">
                    <b-input></b-input>
                  </b-field>
                </div>
              </div>

              <div class="columns">
                <div class="column is-4">
                  <b-field label="Cell Number">
                    <b-input></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field label="Town">
                    <b-input></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field type="is-success" label="Region">
                    <b-select placeholder="Select a Region" expanded>
                      <option value="hhohho">Hhohho</option>
                      <option value="manzini">Manzini</option>
                      <option value="shiselo">Shiselweni</option>
                      <option value="lubombo">Lubombo</option>
                    </b-select>
                  </b-field>
                </div>
              </div>

                 <div class="columns">
                <div class="column is-4">
                  <b-field  label="Email Address">
                    <b-input type="email"></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field  type="is-success" label="Password">
                    <b-input type="password" password-reveal></b-input>
                  </b-field>
                </div>
                <div class="column is-4">
                  <b-field  type="is-success" label="Repeat Password">
                    <b-input type="password" password-reveal></b-input>
                  </b-field>
                </div>
               
              </div>

              <div class="columns">
                <div class="column">
                  <b-button type="is-primary" icon-left="plus">Sign Up</b-button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <Footer/>
</div>
  
</template>
<script>
import Footer from './Footer.vue'
export default {
    components: {
        Footer
    }
}
</script>
<style scoped>
body {
  background: url("../assets/bg_1.png") no-repeat;
}
</style>