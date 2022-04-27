<template>
    <div class="suport-item">
        <div class="icon-container">
            <font-awesome-icon class="suport-icon" v-bind:icon="this.icon_name" />
        </div>

        <div class="info-container">
            <h3 class="info-title">{{this.info_title}}</h3>
            <p class="info-extra">{{this.info_extra}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuportItem',
    props: ['icon_name', 'info_title', 'info_extra']
}
</script>

<style scoped>
.suport-item {
    justify-self: center;
    height: 76px;
    display: flex;
}

.icon-container {
    width: 70px;
    height: 70px;

    border: 3px dotted orange;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.suport-icon {
    width: 40px;
    height: 40px;
    color: orange;
}

.info-container {
    padding-left: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info-title {
    margin:  0px;
    font-size: 25px;
    font-weight: 600;
    color: var(--navbar_color);
}

.info-extra {
    margin: 0px;
    margin-top: 10px;
    font-size: 18px;
    color: gray;
}
</style>