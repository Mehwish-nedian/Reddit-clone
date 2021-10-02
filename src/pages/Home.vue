<template>
    <post-card >
      <template v-slot:title>
        The subreddit that’s all about Android games! 
        Be part of an ever-growing community of gamers to geek out on various topics
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
</template>
<script>
import postCard from '../components/postCard.vue';

export default {
    components: {
      postCard
    }
}
</script>
<style lang="scss" scoped>
.post-card__image{
  width: 100%;
}
</style>