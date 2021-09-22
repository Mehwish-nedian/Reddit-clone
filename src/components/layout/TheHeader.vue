<template>
  <q-header elevated class="bg-grey-1 text-grey-7">
      <nav>
            <img class="logo" src="../../assets/images/Logo.png" alt="Logo">
      </nav>  
      <div class="searchbar">
        <search-bar></search-bar>
      </div>
    </q-header>
</template>
<script>
import SearchBar from '../SearchBar.vue';
export default {
  components: {
    SearchBar
  }
}
</script>
<style scoped>

</style>