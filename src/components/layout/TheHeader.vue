<template>
  <q-header elevated class="header bg-grey-1 text-grey-7">
      <nav>
            <img class="logo" src="../../assets/images/Logo.png" alt="Logo">
      </nav>  
      <span class="header__searchbar">
        <search-bar></search-bar>
      </span>
      <span class="header__side-btns">
        <q-btn class="header__side-btns--login q-px-xl q-mx-sm" outline rounded color="primary" >Log in</q-btn>
        <q-btn class="header__side-btns--signup q-px-xl q-mx-sm" unelevated rounded color="primary" >Sign up</q-btn>
      </span>
    </q-header>
</template>
<script>
import SearchBar from '../SearchBar.vue';
//import BaseButton from '../BaseButton.vue';
export default {
  components: {
    SearchBar,
   // BaseButton
  }
}
</script>
    
<style lang="scss" scoped>
.header{
  display: flex;
  //flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &__searchbar{
    flex-grow: 1;
  }
  &__side-btns{
    margin-right: 10%;
    display: flex;
    align-items: space-between;
    &--login, &--signup{
      text-transform: capitalize;
      //padding: .2rem 3em;
      
    }
  }
}

</style>