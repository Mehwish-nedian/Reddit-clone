<template>
    <q-card class="my-card">
    <div class="my-card__upper-part">
      <q-icon class="my-card__icon" color="deep-orange-13" size="3.5rem" name="workspace_premium" />     
      <q-card-section class="my-card__text">
        <strong><h6 >Reddit Premium</h6></strong>
        <p>The best Reddit experience, with monthly Coins</p>     
      </q-card-section>
    </div>
     <q-card-actions class="my-card__btn">
        <q-btn unelevated rounded color="deep-orange-13" label="Try Now" />
    </q-card-actions>
    </q-card>
</template>

<style lang='scss' scoped>
.my-card{
    &__upper-part{
    text-align: left;
    display: flex;
    }
    &__icon{
        margin: auto .6rem auto .5rem;
    }
    &__text{
        color: black;
        padding-left: .2rem;
        p{
            font-size: 1.2rem;
        }
    }
    &__btn{
        button{
        width: 100%;
        text-transform: capitalize;
        }
    }
}
</style>