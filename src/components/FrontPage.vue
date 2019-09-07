<template>
<div class="body">
<div class="container">
    <div class="columns">
      <div class="column is-5">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Ingijimi Yakho</h1>
              <h2 class="subtitle">Delivery, pickups & shopping made easy</h2>
              <div>
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>What do we really do?</strong>
                        <br />At Ingijimi Yakho, wherever you are in the kingdom, from a family picnic in the park, or your office to your date night at home. Experience a world of fastest delivery, shopping and pickup with convenience and time in mind.
                      
                      </p>

                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-reply"></i>
                          </span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-retweet"></i>
                          </span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-heart"></i>
                          </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div class="media-right">
                    <button class="delete"></button>
                  </div>
                </article>
                <div>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="column is-7">
        <div class="bg-img"></div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <nav class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Customers</p>
              <p class="title">123</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Deliveries</p>
              <p class="title">756</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Pick Ups</p>
              <p class="title">227</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Bikes</p>
              <p class="title">8</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>

<Footer/>
</div>
  
  
</template>

<script>
import Footer from './Footer.vue'
export default {
  name: "front",
  components: {
    Footer
  }
};
</script>
<style>
.bg-img {
  height: 400px;
  background: url("../assets/bg_1.png") no-repeat;
  max-width: 100%;
  background-size: auto;
}

body {
  background: url("../assets/bg_3.png") no-repeat;
}

footer{
  margin-top: 1%;
}
</style>

