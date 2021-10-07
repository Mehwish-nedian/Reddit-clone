<template>
    <q-card class="my-card q-px-sm">
        <div class="my-card__bg-img">
            <div class="my-card__icon">
                <img src="../assets/images/reddit-alien.png" alt="" >
            </div>
        </div>
      

      <q-card-section>
        <div class="my-card__title q-ml-xl text-h6"><strong>Home</strong></div>

      </q-card-section>

      <q-card-section class="my-card__text q-pt-none">
        Your personal Reddit frontpage. Come here to check in with your favorite communities.
      </q-card-section>
      <q-btn class="my-card__btn q-mb-sm" unelevated rounded color="primary" label="Create Post" />
      <q-btn class="my-card__btn q-mb-sm" outline unelevated rounded color="primary" label="Create Community" />
    </q-card>
</template>
<script>
export default {
    
}
</script>
<style lang='scss' scoped>
.my-card{
    text-align: left;
    &__bg-img{
        height: 4rem;
        background-image: url('../assets/images/bluebg.jpeg');
    }
    &__icon{
        img{
        position: absolute;
        width: 4rem;
        top: 2rem;
        left: 1rem;
        }
    }
    &__text{
        font-size: 1.3rem;
        color: black;
    }
    &__btn{
        width: 100%;
        text-transform: capitalize;
    }
}
</style>