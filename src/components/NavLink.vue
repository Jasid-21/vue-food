<template>
    <div class="navLink" 
    v-bind:class="this.get_zone==this.name?'active':''" 
    v-on:click="this.scrollInto"
    >{{name}}</div>
</template>

<script>
import store from '../store'
export default {
    name: 'NavLink',
    props: ['name', 'nameToScroll'],
    methods: {
        scrollInto() {
            const element = document.getElementById(this.nameToScroll);
            element.scrollIntoView();
        }
    },
    computed: {
        get_zone() {
            return store.getters.getZone;
        }
    }
}
</script>

<style scoped>
.navLink {
    color: white;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
}

.navLink:hover {
    color: var(--mod_orange);
}

.navLink.active {
    color: var(--mod_orange);
}
</style>