<template>
    <q-card class="my-card">
        <div class="my-card__image">
            <div class="my-card__heading">Top News Communities</div> 
        </div>
        <!--<img class="my-card__image" src="../assets/images/bluebg.jpeg">-->
        

    <q-card-section class="q-pt-none">
        <q-list >
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>

        <q-item-section>Icon as avatar</q-item-section>
      </q-item>
    <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="teal" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>Avatar-type icon</q-item-section>
      </q-item>
    <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded color="purple" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>Rounded avatar-type icon</q-item-section>
      </q-item>
    <q-separator />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            R
          </q-avatar>
        </q-item-section>

        <q-item-section>Letter avatar-type</q-item-section>
      </q-item>

      <q-separator />
    </q-list>
    </q-card-section>
</q-card>
</template>
<script>
export default {
    
}
</script>
<style lang='scss' scoped>
.my-card{
    margin-right: auto;
    
    &__image{
        height: 80px;
        background-image: url('../assets/images/bluebg.jpeg');
    }
    &__heading{
        position: absolute;
        top: 50px;
        color: white;
    }
}
</style>