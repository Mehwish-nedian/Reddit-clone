<template>
  <div class="createPost__navigation">
      <div :class="{'clicked': isActive('post'), 'nav-item': true}" @click.stop="clickNav('post')">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="article" />
        <p>Post</p>
      </div>
      <div :class="{'clicked': isActive('media'), 'nav-item': true}" @click="clickNav('media')">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="image" />
        <p>Images &amp; Videos</p>
      </div>
      <div :class="{'clicked': isActive('link'), 'nav-item': true}" @click="clickNav('link')">
        <q-icon class="nav-item__icon nav-item__icon--link q-mr-md" size="3rem" name="link" />
        <p>Link</p>
      </div>
      <div :class="{'clicked': isActive('poll'), 'nav-item': true}" @click="clickNav('poll')">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="poll" />
        <p>Poll</p>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selectedTab : 'post',
    }
  },
    methods: {
      clickNav(tab){
        this.selectedTab = tab;
        this.$emit('changeTab', this.selectedTab);
      },
      isActive(tab){
        return this.selectedTab == tab;
      }
    }
}
</script>
<style lang='scss' scoped>

.createPost{
    &__navigation{
      display: flex;
    .nav-item{
      display: flex;  
      align-items: center;
      justify-content: center;
      flex-basis: 25%;
      margin-bottom: 2rem;
      padding: 1rem 0;
      cursor: pointer;
      &__icon{
        &--link{
          transform: rotate(45deg);
        }
      }
    }
    .nav-item:hover{
      background-color: #f2f8fc;
    }
    .clicked{
      color: $color-primary;
      border-bottom: 2px solid $color-primary;
      background-color: #f2f8fc;
    }
  }
}
</style>