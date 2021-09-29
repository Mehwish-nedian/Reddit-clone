<template>
    <div class="navigation bg-grey-1 text-blue-grey-9">
        <nav class="navigation__bar">
            <ul class="navigation__list">
                <router-link to="/hot" class="navigation__item">
                <q-btn unelevated rounded class='navigation__btn' icon="local_fire_department" label="Hot" />
                </router-link>
                <router-link to="/new" class="navigation__item">
                <q-btn unelevated rounded class='navigation__btn' icon="brightness_5" label="New" />
                </router-link>
                <router-link to="/top" class="navigation__item">
                <q-btn unelevated rounded class='navigation__btn' icon="file_upload" label="Top" />
                </router-link>
                <router-link to="/rising" class="navigation__item">
                <q-btn unelevated rounded class='navigation__btn' icon="moving" label="Rising" />
                </router-link>
            </ul>
      </nav> 
    </div>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
@import '../../assets/scss/_variables.scss';
.navigation{
    //margin-top: 2rem;
    width: 100%;
    &__bar{      
        margin: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    &__list{    
        list-style: none;
        display: flex;
    }
    &__item{
        text-decoration: none;
        display: inline-block;
        color: grey;
        padding: 0.75rem 1.5rem;
        border-radius: 10px;
        border: none;
        box-shadow: none;
    }
    &__btn{
        border: none;
    }
    .router-link-active{
        color: $color-primary;
    }
}

</style>