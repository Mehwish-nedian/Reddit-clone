<template>
    <h2>Trending Today</h2>
    <div class="trending-cards">
        <div class="q-mr-lg trending-card">
            <trending-card>
                <template v-slot:image>
                    <img class="my-card__image" src="../assets/images/mountain.jpeg">
                </template>
                <template v-slot:text>
                    <h4 class="q-ml-xs q-mr-sm ">California school vaccine mandate</h4>
                    <p class="q-ml-xs q-mr-sm ">California to require all schoolchildren to get COVID...</p>
                </template>
            </trending-card>
        </div>

        <div class="q-mr-lg trending-card">
            <trending-card>
                <template v-slot:image>
                    <img class="my-card__image" src="../assets/images/mountain.jpeg">
                </template>
                <template v-slot:text>
                    <h4 class="q-ml-xs q-mr-sm ">California school vaccine mandate</h4>
                    <p class="q-ml-xs q-mr-sm ">California to require all schoolchildren to get COVID...</p>
                </template>
            </trending-card>
        </div>

        <div class="q-mr-lg trending-card">
            <trending-card>
                <template v-slot:image>
                    <img class="my-card__image" src="../assets/images/mountain.jpeg">
                </template>
                <template v-slot:text>
                    <h4 class="q-ml-xs q-mr-sm ">California school vaccine mandate</h4>
                    <p class="q-ml-xs q-mr-sm ">California to require all schoolchildren to get COVID...</p>
                </template>
            </trending-card>
        </div>

        <div class="q-mr-lg trending-card">
            <trending-card>
                <template v-slot:image>
                    <img class="my-card__image" src="../assets/images/mountain.jpeg">
                </template>
                <template v-slot:text>
                    <h4 class="q-ml-xs q-mr-sm ">California school vaccine mandate</h4>
                    <p class="q-ml-xs q-mr-sm ">California to require all schoolchildren to get COVID...</p>
                </template>
            </trending-card>
        </div>
    </div>
    
</template>
<script>
import trendingCard from './trendingCard.vue';
export default {
    components: {
        trendingCard
    }
}
</script>
<style lang='scss' scoped>
.my-card{
    &__image{
       width: 100%;
       height: 100%;
    }
    h4{
        font-size: 1.7rem;
        line-height: 1.2;
    }
    p{
        font-size: 1.2rem;
        line-height: 1.5;
    }
}
h2{
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.7;
}
p{
    font-size: .9rem;
}
.trending-cards{
    display: flex;
    width: 96%;
}
</style>