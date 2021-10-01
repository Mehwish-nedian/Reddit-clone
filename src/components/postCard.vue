<template>
    <q-card class="post-card q-mt-lg">
      <q-card-section>
          <the-vote></the-vote>
      </q-card-section>
      <q-card-section>
        <div class="post-card__upper-part text-h6 q-mb-xs">
            <div class="q-mr-sm post-card__profile">
                <q-btn round>
                    <q-avatar size="42px">
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-btn>
            </div>
            <h6 class="post-card__community">
                r/aww
            </h6>
            <h6 class="post-card__post-time"> &nbsp;Posted by Julie 3 hours ago</h6>
            <div class="join-btn"><q-btn class="" rounded color="primary" icon="add" label="Join" /></div>
        </div>
        <div class="post-card__title">
            <h3>The subreddit that’s all about Android games! 
                Be part of an ever-growing community of gamers to geek out on various topics</h3>
        </div>
      

      <img class="post-card__image" src="https://cdn.quasar.dev/img/mountains.jpg">
      
          <bottom-navigation></bottom-navigation>
      </q-card-section>  
    </q-card>
</template>
<script>
import bottomNavigation from './postCradBottomNavigation.vue';
import theVote from './theVote.vue';
export default {
    components: {
        bottomNavigation,
        theVote
    }
    
}
</script>
<style lang='scss' scoped>
.post-card{
    display: flex;
    &__upper-part{
        display: flex;
        align-items: center;
    }
    &__profile-photo{
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
    }
    &__title{
        font-size: 2rem;
        color: black;
        text-align: left;
        h3{
           font-size: inherit; 
        }
    }
    &__image{
        width: 100%;
        
    }
    .join-btn{
        button{
            font-size: 1rem;
        }
        margin-left: auto;
    }
    .bottom-navigation{
        button{
            text-transform: capitalize;
        }
    }
}
</style>