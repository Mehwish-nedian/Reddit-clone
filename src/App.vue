<template>
  <q-layout class="bg-indigo-1 text-grey-7" view="lHh Lpr lFf">
    <the-header></the-header>

    <q-page-container class="main-container">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

import TheHeader from './components/layout/TheHeader.vue';
import NavBar from './components/layout/NavBar.vue';
export default {
  components: {
    TheHeader,
    NavBar
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
}


.logo{
    height: 4.5rem;
    float: left;
    margin: 0 5rem 0 1rem;
}
.main-container{
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
/**/
</style>