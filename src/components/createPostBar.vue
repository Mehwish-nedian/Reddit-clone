<template>
    <div class="create-post bg-grey-1 q-my-md">
       <div class="create-post__icon create-post__icon--posts"> 
            <q-icon size="4rem" name="bi bi-reddit"/>
        </div>       
        <div class="q-ml-xl create-post__input">
            <search-bar placeholder="Create Post" focus></search-bar>
        </div>
        <q-icon class="create-post__icon create-post__icon--image q-ml-lg" size="3rem" name="image"/>
        <q-icon class="create-post__icon create-post__icon--clip q-ml-sm" size="3rem" name="attach_file"/>
    </div>
</template>
<script>
import SearchBar from './SearchBar.vue';
export default {
    components: {
        SearchBar
    },
    methods: {
        someFunc(){
            console.log('Hello');
        }
    }
}
</script>
<style lang='scss' scoped>
.create-post{
    display: flex;
    height: 5rem;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1rem;
    flex-grow: 1;
    
    &__icon{
        z-index: 1000;
        opacity: .4;
        cursor: pointer;
        &--posts{
            position: absolute;
            left: -17.5rem;
        }
        &--clip{
            transform: rotate(40deg);
        }
        
    }
    &__input{
        flex-basis: 80%;
        opacity: .4;
    }
}
</style>