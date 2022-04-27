<template>
    <div class="comments-section">
        <div class="form-section">
            <comments-form />
        </div>
        <div class="comment_list-section">
            <comment-card 
            v-bind:key="comment.id"
            v-bind:comment="comment.comment" 
            v-bind:date="comment.date" 
            v-for="comment of this.comments" />
        </div>
    </div>
</template>

<script>
import comments from '../assets/comments.json';
import CommentsForm from './CommentsForm.vue';
import CommentCard from './CommentCard.vue';

export default {
    name: 'CommentsSection',
    data() {
        return comments;
    },
    components: { CommentsForm, CommentCard },
    methods: {
        post_comment() {
            alert("Hello");
        }
    }
}
</script>

<style scoped>
.comments-section {
    background-color: var(--mod_gray);
    left: 0px;
    right: 0px;
    min-height: 50px;

    padding: 50px 10px;
}

.form-section {
    width: 100%;
    display: flex;
    justify-content: center;
}

.comment_list-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>