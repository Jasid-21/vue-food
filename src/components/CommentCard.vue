<template>
    <div class="comment-card">
        <div class="img-container"></div>
        <div class="comment-container">
            <div class="comment-value">{{this.comment}}</div>
            <p class="date">{{this.date}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentCard',
    props: ['comment', 'date']
}
</script>

<style scoped>
.comment-card {
    width: min-content;
    margin-bottom: 10px;
    display: flex;
}

.img-container {
    width: 50px;
    height: 50px;
    border: 2px solid black;
    border-radius: 50%;
}

.comment-container {
    width: 750px;
    margin-left: 20px;
}

.comment-value {
    text-align: justify;
}

.date {
    width: 100%;
    text-align: right;
    font-style: italic;
    font-size: 14px;
    margin-top: 0px;
}
</style>