<template>
 <div class="container">
    <div class="left-container">
        <navbar></navbar>
        <create-post-bar></create-post-bar>
        <slot name="posts"></slot>
    </div>
    <div class="right-container">
        <side-card></side-card>
    </div>
 </div>
</template>
<script>
import Navbar from './layout/NavBar.vue';
import createPostBar from './createPost/createPostBar.vue';
//import postCard from './postCard.vue';
import sideCard from './sideCard.vue';
export default {
    
    components: {
        Navbar,
        sideCard,
        createPostBar
        //postCard
    }
}
</script>
<style scoped>
.container{
    display: flex;
}
</style>