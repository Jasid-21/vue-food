<template>
    <button v-on:click="addToCart">{{name}}</button>
</template>

<script>
import store from '../store'
export default {
    name: 'VueButton',
    props: ['name', 'prod_id'],
    methods: {
        addToCart() {
            store.commit('addToCart', this.prod_id);
            alert(store.getters.getCart);
        }
    }
}
</script>

<style scoped>
button {
    color: white;
    height: 40px;
    border-radius: 25px;
    padding: 0px 20px;
    font-weight: 600;
    cursor: pointer;
    transition-property: background-color, border-color, color;
    transition-duration: 200ms;
}

.ghost {
    background-color: transparent;
    border: 1px solid rgb(255, 136, 25);
}

.ghost:hover {
    background-color: rgb(255, 136, 25);
}

.filled {
    background-color: rgb(255, 136, 25);
    border: 1px solid rgb(255, 136, 25);
}

.filled:hover {
    background-color: rgb(0, 18, 36);
    border-color: rgb(0, 18, 36);
    color: rgb(255, 136, 25);
}
</style>