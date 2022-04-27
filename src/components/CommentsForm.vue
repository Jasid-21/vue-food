<template>
    <form v-on:submit="this.post_comment">
        <div class="comment-section">
            <div class="profile_img-container">
                <img src="../assets/profile_picture.jpg" alt="Generic profile" class="generic_profile-img">
            </div>
            <textarea name="comment-area" 
            class="comment-area" 
            cols="30" rows="10" 
            placeholder="Type a comment here..."></textarea>
        </div>
        <div class="button-container">
            <button type="submit">Submit</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'CommentsForm',
    methods: {
        post_comment() {
            alert("Hello");
        }
    }
}
</script>

<style scoped>
form {
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.comment-section {
    display: flex;
    align-items: center;
}

.profile_img-container {
    width: 100px;
    height: 100px;

    border: 2px solid white;
    border-radius: 50%;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
}

.generic_profile-img {
    width: 100%;
}

.comment-area {
    width: 700px;
    height: 130px;
    border-radius: 5px;

    padding: 10px;
    font-size: 16px;
}

.button-container {
    display: flex;
    justify-content: flex-end;
}

.button-container button {
    width: 80px;
    height: 30px;

    background-color: rgba(119, 0, 0, 1);
    border: 2px solid rgb(119, 0, 0);
    color: white;
    font-weight: 600;
    border-radius: 6px;

    margin-top: 5px;
    transition-property: background-color;
    transition-duration: 250ms;
}

.button-container button:hover {
    background-color: rgba(119, 0, 0, 0);
    color: rgb(119, 0, 0);
    cursor: pointer;
}
</style>