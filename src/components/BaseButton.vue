<template>
    <button @click="gotoPage">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: ['goto'],
   
    methods:{
        gotoPage(){
            this.$router.push('/'+this.goto);
        }
    }

}
</script>
<style lang="scss" scoped>

//;
button{
    background-color: $color-secondary;
    color: white;
    padding: 1.3% 4%;
    border: none;
}
</style>