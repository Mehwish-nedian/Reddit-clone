<template>

  <div class="createPost__header">
    <h4 class="q-mb-md">Create a post</h4>
    <q-btn flat rounded color="primary">Drafts 
      <span class="drafts-number">0</span>
    </q-btn>
  </div>
  <hr class="q-mb-md">
  <div class="bg-grey-1 q-pb-lg createPost">
  <top-navigation></top-navigation>
  <div class="nav-content-area">
    <div class="q-mx-lg createPost__title">
      <q-input class="q-pa-none q-ma-none"  outlined v-model="text" :dense="dense" placeholder="Title"/>
    </div>
    <div v-if="postSelected" class="txt-editor q-pa-md q-gutter-sm">
      <q-editor placeholder="Text (optional)" v-model="editor" min-height="25rem" />
    </div>
    <div v-else-if="mediaSelected" class="q-pa-md q-gutter-sm">
      <div class="image__drop">
        Drag and drop images or upload
      </div>
    </div>
    <div v-else-if="linkSelected" class="q-pa-md q-gutter-sm">
      <div class="link__input">
        <q-input class="q-pa-none q-ma-none"  outlined v-model="text" :dense="dense" placeholder="Url"/>
      </div>
    </div>
  </div>
  <create-post-bottom-navigation></create-post-bottom-navigation>
</div>
</template>
<script>
import topNavigation from '../components/createPost/topNavigation.vue';
import createPostBottomNavigation from '../components/createPost/createPostBottomNavigation.vue';
export default {
  components: {
    createPostBottomNavigation,
    topNavigation
  },
  data(){
    return{
      editor: null
    }
  }
}
</script>
<style lang='scss' scoped>
.createPost{
  &__header{
    display: flex;
    justify-content: space-between;
    .drafts-number{
      background-color: gray;
      color: white;
      padding: .01rem .2rem;
      margin-left: .7rem;
    }
  }

}

.txt-editor{
    width: 100%;
}
</style>