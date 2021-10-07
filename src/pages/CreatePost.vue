<template>
<div class="left-container">
  <div class="createPost__header">
    <h4 class="createPost__heading q-mb-md">Create a post</h4>
    <q-btn flat rounded color="primary">Drafts 
      <span class="drafts-number">0</span>
    </q-btn>
  </div>
  <q-separator class="q-mb-md"/>
  <div class="bg-grey-1 createPost">
  <top-navigation @changeTab = "changeTab"></top-navigation>
  <div class="nav-content-area">
    <div class="q-mx-lg createPost__title">
      <q-input class="title-input q-pa-none q-ma-none"  outlined v-model="text" dense placeholder="Title"/>
    </div>
    <div v-if="selectedTab == 'post'" class="txt-editor q-pa-md q-gutter-sm">
      <q-editor placeholder="Text (optional)" v-model="editor" min-height="16rem" />
    </div>
    <div v-else-if="selectedTab == 'media'" class="q-pa-md q-gutter-sm">
      <div class="image__drop">
        Drag and drop images or upload
      </div>
    </div>
    <div v-else-if="selectedTab == 'link'" class="q-pa-md q-gutter-sm">
      <div class="link__input">
        <q-input dense class="q-pa-none q-ma-none"  outlined v-model="text" placeholder="Url"/>
      </div>
    </div>
  </div>
  <create-post-bottom-navigation></create-post-bottom-navigation>
</div>
</div>

<div class="right-container">
  <posting-card></posting-card>
  <div>Please be mindful of reddit's 
    <a href="#" class="text-primary primary policy"> content policy </a> and practice good <a href="#" class="text-primary policy">rediquettes</a></div>
    <help-card></help-card>
</div>

</template>
<script>
import topNavigation from '../components/createPost/topNavigation.vue';
import createPostBottomNavigation from '../components/createPost/createPostBottomNavigation.vue';
import postingCard from '../components/createPost/PostingToReddit.vue';
import helpCard from '../components/createPost/helpCard.vue';
export default {
  components: {
    createPostBottomNavigation,
    topNavigation,
    postingCard,
    helpCard
  },
  data(){
    return{
      editor: null,
      selectedTab : 'post'
    }
  },
  methods: {
    changeTab(selectedTab){
      this.selectedTab = selectedTab;
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
  &__heading{
    color: $color-grey-dark;
    font-size: 1.8rem;
  }
  
}
.right-container{
  .policy{
    font-weight: bold;
  }
}

.txt-editor{
    width: 100%;
}
</style>