<template>
    <form class="search" action="" method="post" @submit.prevent="onSubmit">
      <q-icon v-if="icon" class="search__icon" name="search"/>
      <input :class="{addPadding: icon, search__input: true}" v-model="text" :placeholder= placeholder :onfocus='goToCreatePost'/>
    </form>
</template>
<script>
export default {
    props: {
        placeholder: String,
        icon: Boolean,
        focus: Boolean
    },
    data(){
        return{
            text:''
        }
    },
    methods:{
        onSubmit(){
            console.log('Submit');
        },
        goToCreatePost(){
            if(this.focus){
                console.log(this.$router);
                this.$router.push('/submit')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.search{
    position: relative;
    display: flex;
    min-width: 100px;
    &__input{
        border-radius: 5px;
        height: 35px;
        width: 90%;
        padding: 2px 23px 2px 10px;
        background-color: #F6F7F8;
        border: 1px solid #ddd;
         
    }
    .addPadding{
        padding: 2px 23px 2px 50px;
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