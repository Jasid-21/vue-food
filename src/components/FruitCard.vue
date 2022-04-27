<template>
    <li class="fruit-card-container">
        <div class="fruit-card">
            <div class="img-container">
                <img v-bind:src="this.img_url" v-bind:alt="this.item_name" class="item-img">
            </div>
            <h3 class="name">
                {{this.item_name}}
            </h3>
            <p class="perkg">
                Per kg
            </p>
            <h3 class="price">
                $<span>{{this.price}}</span>
            </h3>
            <div class="button-container">
                <cart-button v-bind:name="'Add to Cart'" class="filled" v-bind:prod_id="this.prod_id" />
            </div>
        </div>
    </li>
</template>

<script>
import CartButton from './CartButton.vue';
export default {
    name: 'FruitCard',
    props: ['img_url', 'item_name', 'price', 'prod_id'],
    components: { CartButton }
}
</script>

<style scoped>
.fruit-card-container {
    margin-left: 10px;
    margin-right: 50px;
}

.fruit-card {
    width: 350px !important;
    height: 530px;

    border-radius: 10px;
    box-shadow: 1px 1px 10px black;
}

.fruit-card:hover {
    box-shadow: 1px 1px 10px green;
}

.img-container {
    width: 100%;
    max-height: 300px;
    border-bottom: 2px solid gray;
    border-radius: 10px;
    overflow: hidden;
}

.item-img {
    width: 100%;
}

.name {
    text-align: center;
    font-size: 22px;
}

.perkg {
    text-align: center;
    color: rgb(107, 107, 107);
}

.price {
    margin: 0px;
    text-align: center;
    font-size: 35px;
}

.button-container {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>