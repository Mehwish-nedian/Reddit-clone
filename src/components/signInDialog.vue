<template>
    <q-card class="popup-card" style="width: 800px; max-width: 80vw;">
        <div class="popup__image">
            <img src="../assets/images/dialog-img.jpg" alt="">
        </div>
        <div  class="popup__content">
            <q-card-section class="row items-center q-pa-sm">
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup /> 
            </q-card-section>
            <q-card-section>
            <div class="popup__txt">    
                <h4 class="q-mb-sm">{{title}}</h4>
                <p>By continuing, you agree to our <a class="link" href="#">User Agreement</a> and <a class="link" href="#">Privacy Policy.</a></p>
                <form class="login-form q-mt-xl">
                    <q-input v-if="!signin" dense class="input q-my-md" outlined v-model="text" label="Email" ></q-input>
                    <q-input v-if="signin" dense class="input q-my-md" outlined v-model="text" label="Username" ></q-input>
                    <q-input v-if="signin" class="input" dense outlined v-model="text" label="Password"></q-input>
                    <q-btn class="btn q-my-md" unelevated rounded color="primary" :label="title"/>
                    <p v-if="signin" class="q-mb-xl q-mt-md"> Forgot your <a class="link" href="#">username</a> or <a class="link" href="#">password</a> ? </p>
                    <p v-if="signin" class="q-my-sm">New to redditor? <a href="#" @click="gotoSignup" class="link" >SIGN UP</a></p>
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
    methods: {
        gotoSignup(){
            this.$emit('signUp');
            console.log('Emit working...');
        }
    }
}
</script>
<style lang='scss' scoped>
.popup__image{ 
    height: 100%;
    clip-path: polygon(0 0, 90% 0, 90% 90%, 0 100%);
}
.btn{
        text-transform: capitalize;
        width: 100%;
    }
.popup-card{
    display: flex;  
    overflow: hidden;  
}
.link{
    color: $color-primary;
    text-decoration: none;
}
.popup{
    float: right;
   &__image{
       width: 30%;
       height: 190%;
       overflow: hidden;
   }
   &__content{
       flex-basis: 100%;
   }
   &__txt{
       display: flex;
       flex-direction: column;
   }
  
}

.login-form{
       width: 50%;
   }
</style>