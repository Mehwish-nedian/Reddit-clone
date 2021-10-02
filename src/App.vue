<template>
  <q-layout class="bg-indigo-1 text-grey-7" view="lHh Lpr lFf">
    <the-header></the-header>
    
    <q-page-container class="main-container">
      <trending-section></trending-section>
      <div class="main-container__posts">
        <div class="left-container">
           <h2 class="q-my-md heading-popular-posts">Popular Posts</h2>
          <nav-bar></nav-bar>
          <router-view></router-view>
        </div>
        <div class="right-container">
          <side-card></side-card>
          <premium-card></premium-card>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
import trendingSection from './components/trendingTodaySection.vue';
import NavBar from './components/layout/NavBar.vue';
import SideCard from './components/sideCard.vue';
import premiumCard from './components/buyPremiumCard.vue';

export default {
  components: {
    TheHeader,
    NavBar,
    SideCard,
    premiumCard,
    trendingSection
  },

 
}
</script>
<style lang="scss">
@import './assets/scss/_variables.scss';
*,
*::before,
*::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


html{
    font-size: 62.5%;
    font-weight: 300;
    line-height: 1.6;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color: $color-bg-grey;
}

.logo{
    height: 4.5rem;
    float: left;
    margin: 0 5rem 0 1rem;
}
.main-container{
  max-width: 1100px;
  margin: 5rem auto;
 
  &__posts{
     text-align: center;
     display: flex;
  }
}
.left-container{
  width: 70rem;
  margin-right: 3rem;
  .heading-popular-posts{
    text-align: left;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.7;
  }
}
.right-container{
  width: 30rem;
  display: flex;
  flex-direction: column;
  &>*:not(:first-child){
    margin-top: 1.5rem;
    width: 100%;
  }
}
/**/
</style>