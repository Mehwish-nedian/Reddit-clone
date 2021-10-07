<template>
    <post-container>
    <template v-slot:posts>
        
        <post-card >
          <template v-slot:title>
          The subreddit that’s all about Android games! 
          Be part of an ever-growing community of gamers to geek out on various topics
          </template>
      <template v-slot:video>
        <div class="q-pa-md">
          <q-video :ratio="16/9" src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"/>
        </div>
      </template>
      <template v-slot:card-text>
        <p class="q-my-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quod, aperiam tempore provident saepe rem maxime qui reiciendis</p>
      </template>
    </post-card>

   

    </template>
  </post-container>
</template>
<script>
import postCard from '../components/postCard.vue';
import PostContainer from '../components/PostContainer.vue';
export default {
    components: {
        postCard,
        PostContainer
    }
}
</script>