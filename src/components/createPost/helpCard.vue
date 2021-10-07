<template>
    <q-card class="my-card q-pa-md">
        <div class="my-card__links">
            <div class="left">
                <div><a href="#">Help</a></div>
                <div><a href="#">Reddit Coins</a></div>
                <div><a href="#">Reddit Premium</a></div>
                <div><a href="#">Reddit Gifts</a></div>
            </div>
            <div class="right q-mr-md">
                <div><a href="#">About</a></div>
                <div><a href="#">Careers</a></div>
                <div><a href="#">Press</a></div>
                <div><a href="#">Advertise</a></div>
                <div><a href="#">Blog</a></div>
                <div><a href="#">Terms</a></div>
                <div><a href="#">Content Policy</a></div>
                <div><a href="#">Privacy Policy</a></div>
                <div><a href="#">Mod Policy</a></div>
            </div>
        </div>
        <div class="copyright q-mt-md">Reddit Inc © 2021 . All rights reserved</div>
    </q-card>
</template>
<script>
export default {
    
}
</script>
<style lang='scss' scoped>
.my-card{
    display: flex;
    flex-direction: column;
    &__links{
        display: flex;
        justify-content: space-around;
        line-height: 1.7; 
    }
    .left, .right{
        flex-basis: 50%;
        font-size: 1.3rem;
        a{
            text-decoration: none;
            color: $color-grey-dark;
        }
    }
    .copyright{
        font-size: 1.3rem;
    }
    
}
</style>