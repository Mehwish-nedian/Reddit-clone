<template>
    <form class="search" action="" method="post" @submit.prevent="onSubmit">
      <q-icon class="search__icon" name="search" />
      <input class="search__input" v-model="text" placeholder="Search Reddit" />
    </form>
</template>
<script>
export default {
    data(){
        return{
            text:''
        }
    },
    methods:{
        onSubmit(){
            console.log('Submit');
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
$bg-classroom: #232323;
.search{
    position: relative;
    display: flex;
    min-width: 100px;
    &__input{
        border-radius: 5px;
        height: 35px;
        width: 30vw;
        padding: 2px 23px 2px 50px;
        outline: 0;
        background-color: #DAE0E6;
         
    }
    &__input:hover, &__input:focus{
        border: 1.5px solid $color-primary;
        background-color: white;
    }
    &__icon{
        position: absolute;
        top: 6px;
        left: 8px;
        font-size: 30px;
    }
}

</style>