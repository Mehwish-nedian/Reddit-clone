<template>
    <post-container>
    <template v-slot:posts>
        <post-card>
      <template v-slot:title>
        The subreddit that’s all about Android games!
      </template>
      <template v-slot:post-image>
        <img src="../assets/images/mountain.jpeg" class="post-card__image">
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