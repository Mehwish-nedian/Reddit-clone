<template>
    <div class="createPost__navigation">
      <div :class="{'clicked': postSelected, 'nav-item': true}" @click.stop="clickNav('post')">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="article" />
        <p>Posts</p>
      </div>
      <div :class="{'clicked': mediaSelected, 'nav-item': true}" @click="clickNav('media')">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="article" />
        <p>Images &amp; Videos</p>
      </div>
      <div :class="{'clicked': linkSelected, 'nav-item': true}" @click="clickNav('link')">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="article" />
        <p>Link</p>
      </div>
      <div :class="{'clicked': pollSelected, 'nav-item': true}" @click="clickNav('poll')">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="article" />
        <p>Poll</p>
      </div>
  </div>
</template>
<script>
export default {
    
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
      padding: 2rem 0;
      cursor: pointer;
      &__icon{
        
      }
    }
    .nav-item:hover{
      background-color: #f2f8fc;;
      //background-color: rgba(0,121,211,0.1);
    }
    .clicked{
      color: blue;
      border-bottom: 2px solid blue
    }
  }
}
</style>