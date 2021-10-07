<template>
    <q-card flat bordered class="my-card q-pa-md">
      <q-card-section class="my-card__header">
        <img class="my-card__img" src="../../assets/images/reddit-alien.png" alt="">
        <div class="q-ml-md text-h5">Posting to Reddit</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none rules-list">
        <ol>
          <li class="q-py-sm" v-for="rule in rules" :key="rule">
            {{rule}}
            <q-separator />
          </li>
        </ol> 
      </q-card-section>
    </q-card>
</template>
<script>
export default {
    data(){
      return {
        rules: [
          'Remember the human',
          'Behave like you would in real life',
          'Look for the original source of content',
          'Search for duplicates before posting',
          "Read the community's rules"
        ]
      }
    }
}
</script>
<style lang='scss' scoped>
.my-card{
  &__img{
    height: 3rem;
    align-self: flex-end;
  }
  &__header{
    display: flex;
    align-items: center;  
    
    color: black;
    font-weight: bold;  
  }
  .rules-list{
    color: black;
    font-weight: 400;
    ol{
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.7;
    }
  }
}
</style>