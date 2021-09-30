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
@import '../assets/scss/_variables.scss';
button{
    background-color: $color-primary;
    color: white;
    width: 100px;
    padding: 5% 7%;
    border: none;
    border-radius: 30%;
}
</style>