<template>
  <q-header elevated class="header bg-grey-1 text-grey-7">
      <nav>
        <img class="logo" src="../../assets/images/Logo.png" alt="Logo">
      </nav>  
      <span class="header__searchbar">
        <search-bar icon placeholder="Search Reddit"></search-bar>
      </span>
      <span class="header__side-btns q-mr-sm">
        <q-btn class="header__side-btns--login q-px-xl q-mx-sm" outline rounded color="primary" @click="showSigninDialog = true" >Log in</q-btn>
        <q-btn class="header__side-btns--signup q-px-xl q-mx-sm" unelevated rounded color="primary" @click="showSignupDialog = true" >Sign up</q-btn>
      </span>
    </q-header>
    <q-dialog class="dialog" v-model="showSigninDialog">
      <sign-in-dialog signin title="Login">
      </sign-in-dialog>
    </q-dialog>
    <q-dialog class="dialog" v-model="showSignupDialog">
      <sign-in-dialog title="Sign up"></sign-in-dialog>
    </q-dialog>
</template>
<script>
import SearchBar from '../SearchBar.vue';
import SignInDialog from '../signInDialog.vue';

export default {
  data(){
    return {
      showSigninDialog: false,
      showSignupDialog: false,
    }
  },
  components: {
    SearchBar,
    SignInDialog
  }
}
</script>
    
<style lang="scss" scoped>
.dialog{
  display: flex;
}
.popup__image{
  background-image: url('../../assets/images/bluebg.jpeg');
  
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__searchbar{
    flex-grow: 1;
  }
  &__side-btns{
    display: flex;
    align-items: space-between;
    &--login, &--signup{
      text-transform: capitalize;
      
      
    }
  }
}

</style>