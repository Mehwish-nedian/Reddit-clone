<template>
  <q-layout class="bg-indigo-1 text-grey-7" view="lHh Lpr lFf">
    <the-header></the-header>    
    <q-page-container class="main-container">
      <router-view></router-view>     
    </q-page-container>
  </q-layout>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
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
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #DAE0E6;
}
.logo{
    height: 4.5rem;
    float: left;
    margin: 0 5rem 0 1rem;
}
.main-container{
  display: flex;
  justify-content: space-around;
  max-width: 1100px;
  margin: 5rem auto;
  .heading-popular-posts{
    text-align: left;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.7;
  }
 
  &__posts{
     text-align: center;
     display: flex;
  }
}
.left-container{
  width: 70rem;
  margin-right: 3rem;
  
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
</style>