<template>
    <div class="seo_profile-section">
        <div class="seo_profile-img-container">
            <img src="../assets/profile_picture.jpg" class="seo_profile-img" alt="profile picture">
        </div>
        <div class="seo_info-container">
            <h2 class="name">Some Seo Name</h2>
            <div class="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae quos perferendis aliquid tenetur, vero autem similique cumque eum itaque reprehenderit dolores eos cum facilis! Nihil, error sed. Atque, asperiores!
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SeoProfileSection'
}
</script>

<style scoped>
.seo_profile-section {
    background-color: white;
    margin: 100px 0px;
}

.seo_profile-img-container {
    width: 100px;
    height: 100px;
    border: 2px solid white;
    border-radius: 50%;

    margin-left: auto;
    margin-right: auto;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.seo_profile-img {
    width: 100%;
}

.name {
    text-align: center;
    font-weight: 800;
    color: rgb(2, 21, 46);
}

.info {
    --padding: 300px;
    padding-left: var(--padding);
    padding-right: var(--padding);

    color: gray;
    text-align: center;
}
</style>