<template>
    <div class="my-card q-my-md">
        <slot name="image"></slot>
        <div class="q-pl-md q-pt-xl my-card__text">
            <slot name="text"></slot>
            <div class="q-mr-sm post-card__profile">
                <q-btn round>
                    <q-avatar size="25px">
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-btn>
                <span class="my-card__readmore">r/news and more</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        imageLink: String
    }
}
</script>
<style lang='scss' scoped>
.my-card{   
    position: relative;
    text-align: left;
    border-radius: 1rem;
    overflow: hidden;
    &__image{
       width: 100%;
       height: 100%;
    }
    &__text{
        overflow: hidden;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        background-image: linear-gradient(to    bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 1));       
        z-index: 20;
        color: white;
        
    }
    &__readmore{
        font-size: 1.3rem;
    }
    }
</style>