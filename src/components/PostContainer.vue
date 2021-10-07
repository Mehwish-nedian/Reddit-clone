<template>
 <div class="container">
    <div class="left-container">
        <navbar></navbar>
        <create-post-bar></create-post-bar>
        <slot name="posts"></slot>
    </div>
    <div class="right-container">
        <side-card></side-card>
        <premium-card></premium-card>
        <home-card></home-card>
        <help-card></help-card>
        <q-btn class="back-to-top" unelevated rounded color="primary">Back to Top</q-btn>
    </div>
 </div>
</template>
<script>
import Navbar from './layout/NavBar.vue';
import createPostBar from './createPost/createPostBar.vue';
//import postCard from './postCard.vue';
import sideCard from './sideCard.vue';
import premiumCard from './buyPremiumCard.vue';
import homeCard from './SideHomeCard.vue';
import helpCard from './createPost/helpCard.vue';
export default {
    
    components: {
        Navbar,
        sideCard,
        createPostBar,
        premiumCard,
        homeCard,
        helpCard
        //postCard
    }
}
</script>
<style scoped>
.container{
    display: flex;
}
.back-to-top{
    width: 12rem;
    font-size: 1.4rem;
    text-transform: capitalize;
    margin: 2rem auto;
    font-weight: bold;
    position: fixed;
    bottom: 0;
}
</style>