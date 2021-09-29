<template>
  <q-layout class="bg-indigo-1 text-grey-7" view="lHh Lpr lFf">
    <the-header></the-header>

    <q-page-container class="main-container">
      <div class="left-container">
        <nav-bar></nav-bar>
        <router-view></router-view>
      </div>
      <div class="right-container">
        <side-card></side-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

import TheHeader from './components/layout/TheHeader.vue';
import NavBar from './components/layout/NavBar.vue';
import SideCard from './components/sideCard.vue';
export default {
  components: {
    TheHeader,
    NavBar,
    SideCard
  },

  data(){
    return{
      error : null
    }
  },
  


  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
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
  text-align: center;
  display: flex;
}
.left-container{
  width: 70rem;
  margin-right: 3rem;
}
.right-container{
  width: 30rem;
}
/**/
</style>