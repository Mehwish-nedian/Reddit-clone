<template>
    <q-card class="my-card">
        <div class="my-card__image">
            <div class="my-card__heading q-ml-lg">Top News Communities</div> 
        </div>
        
    <q-card-section class="q-pt-none">
        <card-list></card-list>
        <q-btn class="my-card-btn q-mx-auto q-my-sm" unelevated rounded color="primary" label="View all" />
        
    </q-card-section>
    
</q-card>
</template>
<script>
import cardList from './sideCardList.vue';
export default {
    components:{
      cardList
    }
}
</script>
<style lang='scss'>
.my-card{
    margin-right: auto;
    &__image{
        height: 80px;
        background-image: url('../assets/images/bluebg.jpeg');
    }
    &__heading{
        position: absolute;
        top: 50px;
        left: 2rem;
        color: white;
    }
    &__list-item{
      display: flex;
      align-items: center;
    }
    &__icon{
      display: inline-block;
      height: 3rem;
      border-radius: 100%;
    }
    &__expand-icon{
      height: 1.5rem;
      color: lightgreen;
      display: flex;
      align-items: center;
    }
    &-btn{
      width: 100% !important;
    }
    .bottom-navigation{
      &-btn{
        font-size: 1rem;
      }
    }
}
</style>