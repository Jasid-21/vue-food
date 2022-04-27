<template>
  <div id="app">
    <vue-navbar />
    <section id="home-container" class="home-container" data-section="Home">
      <div class="home-section">
        <div class="home_info-container">
          <h4>FRESH & ORGANIC</h4>
          <h1>Delicious and Seasonal Fruits</h1>
          <div class="buttons-container">
            <vue-button v-bind:name="'Fruit collection'" v-bind:nameToScroll="'shop-section'" class="filled" />
            <vue-button v-bind:name="'Contact us'" class="ghost" />
          </div>
        </div>
      </div>
    </section>

    <section id="about-container" class="about-container" data-section="About">
      <support-section />
      <seo-profile-section />
      <info-section />
    </section>

    <section id="shop-container" class="shop-container" data-section="Shop">
      <shop-seciton />
    </section>

    <section id="comments-container" class="comments-container" data-section="Comments">
      <comments-section />
    </section>

    <section id="contact-container" class="contact-container" data-section="Contact">
      <contact-section />
    </section>

    <div id="comment" class="comment">
      This web application was created based on <a href="https://themewagon.com/themes/fruitkha-free-bootstrap-4-responsive-food-business-template/">this</a> website.
    </div>
  </div>
</template>

<script>
import VueNavbar from './components/VueNavbar.vue'
import VueButton from './components/VueButton.vue'
import SupportSection from './components/SupportSection.vue'
import SeoProfileSection from './components/SeoProfileSection.vue'
import InfoSection from './components/InfoSection.vue'
import ShopSeciton from './components/ShopSection.vue'
import CommentsSection from './components/CommentsSection.vue'
import ContactSection from './components/ContactSection.vue'
import store from './store'

export default {
  name: 'App',
  components: {
    VueNavbar,
    VueButton,
    SupportSection,
    SeoProfileSection,
    InfoSection,
    ShopSeciton,
    CommentsSection,
    ContactSection
  },
  methods: {
    windowScroll() {
      const elements = document.querySelectorAll('section');
      for(var elem of elements) {
        const el_top = elem.getBoundingClientRect().top;
        const el_bottom = elem.getBoundingClientRect().bottom;
        if(el_top <= 0 && el_bottom >= 0) {
          const zone = elem.getAttribute('data-section');
          store.commit('set_actual_zone', zone);
        }
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.windowScroll);
  }
}
</script>

<style>
:root {
  --navbar_color: rgb(0, 18, 36);
  --mod_orange: rgb(255, 136, 25);
  --mod_gray: rgb(240, 240, 240);
}

html, body {
  margin: 0px;
  padding: 0px;
  scroll-behavior: smooth;
}

#app {
  margin: 0px;
  padding: 0px;
}

.home-container {
  height: 100vh;
  background-image: url('./assets/home-bckg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.home-section {
  width: 100%;
  height: 100%;

  background-color: rgba(1, 25, 36, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
}

.home_info-container h4 {
  color: var(--mod_orange);
  text-align: center;
  font-size: 20px;
}

.home_info-container h1 {
  color: white;
  font-weight: bold;
  font-size: 65px;
  margin: 0px;
}

.buttons-container {
  --padding: 250px;
  left: 0px;
  right: 0px;
  padding-left: var(--padding);
  padding-right: var(--padding);
  display: flex;
  justify-content: space-around;
}

.about-container {
  background-color: white;
}

.comment {
  left: 0px;
  right: 0px;
  text-align: center;

  font-weight: 700;
  font-size: 16px;
  font-style: italic;
  
  color: white;

  padding: 50px 100px 20px;
  background-color: rgb(28, 28, 29);
}
</style>
