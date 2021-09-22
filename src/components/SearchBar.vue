<template>
    <form action="" method="post" @submit.prevent="onSubmit">
      <input class="searchbar" v-model="text" placeholder="Search Reddit" />
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
.searchbar{
    height: 3rem;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>