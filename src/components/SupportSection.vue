<template>
    <div class="suport-section">
        <suport-item v-bind:icon_name="'fa-solid fa-truck'" 
        v-bind:info_title="'Free Shipping'"
        v-bind:info_extra="'When order over $75'" />

        <suport-item v-bind:icon_name="'fa-solid fa-phone-volume'" 
        v-bind:info_title="'24/7 Support'"
        v-bind:info_extra="'Get support all day'" />

        <suport-item v-bind:icon_name="'fa-solid fa-arrows-rotate'" 
        v-bind:info_title="'Refund'"
        v-bind:info_extra="'Get refund within 3 days!'" />
      </div>
</template>

<script>
import SuportItem from './SuportItem.vue'
export default {
    name: 'SupportSection',
    components: {
        SuportItem
    }
}
</script>

<style scoped>
.suport-section {
  background-color: var(--mod_gray);
  padding: 100px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>