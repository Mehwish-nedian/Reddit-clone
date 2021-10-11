<template>
    <q-card class="popup-card" style="width: 800px; max-width: 80vw; height: 700px;">
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
                <h4 v-if="signIn" class="q-mb-sm">Login</h4>
                 <h4 v-else class="q-mb-sm">Sign up</h4>
                <p>By continuing, you agree to our <a class="link" href="#">User Agreement</a> and <a class="link" href="#">Privacy Policy.</a></p>               
                <form class="login-form q-mt-xl">
                    <q-btn class="q-mb-md q-py-sm continue_btn" outline color="primary" label="Continue with google" icon="thumb_up" />
                    <q-btn class="q-mb-md q-py-sm continue_btn" outline color="primary" label="Continue with apple" icon="thumb_up" />
                    <q-input v-if="!signIn" dense class="input q-my-md" outlined v-model="text" label="Email" ></q-input>
                    <q-input v-if="signIn" dense class="input q-my-md" outlined v-model="text" label="Username" ></q-input>
                    <q-input class="input" dense outlined v-model="text" label="Password"></q-input>
                    <q-btn class="btn q-my-md" unelevated rounded color="primary" :label="title"/>
                    
                    <p v-if="signIn" class="q-mt-md"> Forgot your <a class="link" href="#">username</a> or <a class="link" href="#">password</a> ? </p>
                    <p v-else>Already have an account <q-btn unelevated class="q-px-xs link"  @click="gotoLoginScreen">Log in</q-btn></p>
                    <p v-if="signIn" class="txt q-my-sm">New to redditor? <q-btn  unelevated @click="gotoSignup" class="q-px-xs link" >SIGN UP</q-btn></p>
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
    data(){
        return {
            signIn: this.signin,
            
        }
    },
    created(){
        console.log(this.signin);
        console.log(this.signIn);
    },
    methods: {
        gotoSignup(){
            this.$emit('signUp');
            this.signIn = false;
        },
        gotoLoginScreen(){
            this.signIn = true;
        }
    }
}
</script>
<style lang='scss' scoped>
.popup__image{ 
    height: 200px;
    clip-path: polygon(0 0, 90% 0, 90% 90%, 0 100%);
}
.btn{
        text-transform: capitalize;
        width: 100%;
    }
.txt{
    font-size: 1rem;
}
.popup-card{
    display: flex;  
    overflow: hidden;  
}
.link{
    color: $color-primary;
    text-decoration: none;
}
.link:hover{
    background-color: white !important;
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
       .continue_btn{
           width: 30rem;
       }
       .continue_btn:hover{
           background-color: $color-primary !important;
           color: white !important;
       }
   }
</style>