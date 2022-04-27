<template>
    <nav class="main_navbar">
        <div class="navbar_logo-container">
            <h1 class="food_logo-container">Food-Fruits</h1>
        </div>
        <div class="links-container">
            <nav-link class="navlink" v-bind:name="'Home'" v-bind:nameToScroll="'home-container'" />
            <nav-link class="navlink" v-bind:name="'About'" v-bind:nameToScroll="'about-container'" />
            <nav-link class="navlink" v-bind:name="'Shop'" v-bind:nameToScroll="'shop-container'" />
            <nav-link class="navlink" v-bind:name="'Comments'" v-bind:nameToScroll="'comments-container'" />
            <nav-link class="navlink" v-bind:name="'Contact'" v-bind:nameToScroll="'contact-container'" />
        </div>
    </nav>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
    name: 'VueNavbar',
    components: {
        NavLink
    }
}
</script>

<style scoped>
.main_navbar {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 80px;
    background-color: var(--navbar_color);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
}

.food_logo-container {
    margin: 0px;
    color: orange;
    font-weight: bold;
    font-size: 35px;
}

.links-container {
    display: flex;
}

.navlink {
    margin-left: 20px;
}
</style>