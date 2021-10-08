<template>
    <q-card class="popup-card" style="width: 700px; max-width: 80vw;">
        <div>
            <q-card-section class="popup items-center q-py-sm">
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup /> 
            </q-card-section>
            <q-card-section class="popup__content">
            <div class="popup__txt">    
                <h4 class="q-mb-sm">{{title}}</h4>
                <p>By continuing, you agree to our <a class="link" href="#">User Agreement</a> and <a class="link" href="#">Privacy Policy.</a></p>
                <form class="q-mt-xl">
                    <q-input v-if="!signin" dense class="q-my-md" outlined v-model="text" label="Email" ></q-input>
                    <q-input v-if="signin" dense class="q-my-md" outlined v-model="text" label="Username" ></q-input>
                    <q-input v-if="signin" dense outlined v-model="text" label="Password"></q-input>
                    <q-btn class="btn q-my-md" unelevated rounded color="primary" :label="title"/>
                    <p v-if="signin" class="q-mb-xl q-mt-md"> Forgot your <a class="link" href="#">username</a> or <a class="link" href="#">password</a> ? </p>
                    <p v-if="signin" class="q-my-sm">New to redditor? <a class="link" href="#">SIGN UP</a></p>
                    <p v-else>Already have an account <a class="link" href="#">Log in</a></p>
                </form>
            </div>
            </q-card-section>
        </div>
      </q-card>
</template>
<script>

export default {
    props: {
        icon : String,
        signin: Boolean,
        title: String
    },
}
</script>
<style lang='scss' scoped>
.popup__image{
    position: fixed;
    width: 20%;
    background-image: url('../assets/images/bluebg.jpeg');
}
.btn{
        text-transform: capitalize;
        padding: .4rem 20rem;
    }
.popup__card{
    display: flex;
    flex-direction: row;
    
}
.link{
    color: $color-primary;
    text-decoration: none;
}
.popup{
    float: right;
   &__content{
       display: flex;
   }
   &__image{
       width: 30%;
       height: 190%;
       overflow: hidden;
   }
}
</style>