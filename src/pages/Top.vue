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

   <post-card>
      <template v-slot:title>
        The subreddit that’s all about Android games!
      </template>
      <template v-slot:post-image>
        <img src="../assets/images/mountain.jpeg" class="post-card__image">
      </template>
    </post-card>

    <post-card >
      <template v-slot:title>Best resource to refresh on C++?</template>
      <template v-slot:card-text>
        Hey guys, I learned C++ in university back in Fall 2017. I actually  
        enjoyed the class, learned alot of really good concepts. I haven't  
        really used C++ since then, but I've been interviewing lately and almost 
        everyone seems to want the candidate to be good with that language. I'm 
        more on the hardware side of things (Digital Design, Computer  Architecture, FPGAs)
        but I can definitely see how we could use OO  concepts to model the systems that 
        we have in hardware. I've been doing a  bit of refreshing, but I would like 
        to know some good resources to give  me a better recap.
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