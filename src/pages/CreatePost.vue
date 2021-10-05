<template>

  <div class="q-mb-md createPost__heading">
    <h4 class="q-mb-md">Create a post</h4>
    <hr>
  </div>
  <div class="bg-grey-1 q-pb-lg createPost">
  <div class="createPost__navigation">
      <div class="nav-item" @click.stop="clickNav($event)">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="article" />
        <p>Posts</p>
      </div>
      <div class="nav-item" @click="clickNav($event)">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="article" />
        <p>Images &amp; Videos</p>
      </div>
      <div class="nav-item" @click="clickNav($event)">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="article" />
        <p>Link</p>
      </div>
      <div class="nav-item" @click="clickNav($event)">
        <q-icon class="nav-item__icon q-mr-md" size="3rem" name="article" />
        <p>Poll</p>
      </div>
  </div>
  <div class="q-mx-lg createPost__title">
     <q-input class="q-pa-none q-ma-none"  outlined v-model="text" :dense="dense" placeholder="Title"/>
  </div>

    <div class="txt-editor q-pa-md q-gutter-sm">
      <q-editor placeholder="Text (optional)" v-model="editor" min-height="5rem" />
    </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      editor: ''
    }
  },
  methods: {
    clickNav(e){
      e.stopPropagation();
      console.log(e.target)
     /* if(e.target.classList.contains('nav-item')){
        e.target.classList.add('clicked');
      }*/
      
    }
  }
}
</script>
<style lang='scss' scoped>
.createPost{
  &__heading{
    
  }
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

.txt-editor{
    width: 100%;
}
</style>