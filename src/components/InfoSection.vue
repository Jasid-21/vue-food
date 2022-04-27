<template>
    <div class="info-section">
        <div class="video-container">
            <video src="../assets/info-video.mp4" controls></video>
            <div class="credits">
                Video by Julia M Cameron: https://www.pexels.com/video/family-eating-together-8769000/
            </div>
        </div>
        <div class="info-container">
            <div>
                <h5 class="subtitle">Since Year 1999</h5>
                <h2 class="title">We are <span class="orange-span">Food-Fruits</span></h2>
                <p class="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis saepe iste autem? Vero voluptas perspiciatis, voluptatibus labore repellendus eaque veniam cum quas, accusantium eos facilis vel! Aut, aperiam quis!
                    <br>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quam, illo dolore repellendus accusamus quia voluptates praesentium numquam nisi
                </p>
                <vue-button v-bind:name="'Go to Shop'" class="filled" v-bind:nameToScroll="'shop-section'" />
            </div>
        </div>
    </div>
</template>

<script>
import VueButton from './VueButton.vue'
export default {
  components: { VueButton },
    name: 'InfoSection',
    components: { VueButton }
}
</script>

<style scoped>
.info-section {
    padding: 100px;
    background-color: var(--mod_gray);
    display: flex;
    justify-content: space-around;
}

.video-container {
    width: 550px;
    position: relative;
}

video {
    width: 100%;
    border: 3px solid white;
    border-radius: 0px 10px 0px 10px;
}

.credits {
    position: absolute;
    bottom: 0px;
    right: 0px;
    margin: 0px 10px 10px;
    text-shadow: 2px 2px 5px black;
}

.info-container {
    width: 500px;
    display: flex;
    align-items: center;
}

.subtitle {
    font-size: 18px;
    color: gray;
    font-weight: 500;
    margin: 0px;
    margin-bottom: 10px;
}

.title {
    font-size: 40px;
    margin-top: 1px;
}

.orange-span {
    color: var(--mod_orange);
}

.info {
    font-size: 18px;
}
</style>