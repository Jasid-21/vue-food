<template>
    <div id="shop-section" class="shop-section">
        <div class="info">
            <div>
                <h2 class="title"><span class="orange_span">Our</span> products</h2>
                <p class="def">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente ipsum, dolores eligendi consectetur modi
                </p>
            </div>
        </div>
        <br>
        <ul class="catalog-carousel">
            <fruit-card v-bind:key="fruit.id" 
            v-for="fruit of this.fruits" 
            v-bind:img_url="fruit.image"
            v-bind:item_name="fruit.name"
            v-bind:price="fruit.price"
            v-bind:prod_id="fruit.id"
            />
        </ul>
    </div>
</template>

<script>
import fruits from '../assets/fruits.json'
import FruitCard from './FruitCard.vue'
export default {
    name: 'ShopSection',
    data() {
        return fruits
    },
    components: { FruitCard }
}
</script>

<style scoped>
.shop-section {
    padding: 100px 0px;
    margin-bottom: 50px;
}
.info {
    width: 100%;
    display: flex;
    justify-content: center;
}

.info > div {
    max-width: 500px;
}

.title {
    text-align: center;
    font-size: 40px;
    margin: 0px;
    margin-bottom: 20px;
}

.orange_span {
    color: orange;
}

.def {
    text-align: center;
    color: rgb(77, 77, 77);
}

.catalog-carousel {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px 0px 15px;
    list-style: none;
    display: flex;

    overflow: hidden;
    overflow-x: auto;
}

::-webkit-scrollbar, ::-webkit-scrollbar-track {
    height: 7px;
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    height: 7px;
    background-color: var(--mod_orange);
    border-radius: 5px;
}
</style>