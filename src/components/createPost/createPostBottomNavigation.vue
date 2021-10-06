<template>
    <div class="bottomBar__navigation q-px-md">
        <q-btn class="q-mr-md" outline rounded color="grey" label="OC"  icon="add"/>
        <q-btn class="q-mr-md" outline rounded color="grey" label="Spoiler"  icon="add"/>
        <q-btn class="q-mr-md" outline rounded color="grey" label="NSFW"  icon="add"/>
        <q-btn class="q-mr-md" outline rounded color="grey" label="FLAIR"  icon="add"/>
    </div>
    <div class="post__btns">
        <q-btn class="q-mr-md" outline rounded color="grey" label="Save Draft"/>
        <q-btn class="q-mr-md" outline rounded color="grey" label="Post"/>
    </div>
    <div bg-grey-4 class="bottomBar__notifications">
        <input class="q-ml-md q-mr-md" type="checkbox" id="show-notifications" name="show-notifications" value="show-notifications">
        <label for="show-notifications">Send me post reply notifications</label><br>
        <a class="bottomBar__connect q-ml-md q-mt-lg" href="#">Connect accounts to share your posts</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang='scss' scoped>
.bottomBar{
    
    &__connect{
        font-weight: bold; 
        text-decoration: none;
    }
}
.post__btns{
    display: flex;
    justify-content: flex-end;
}

    
</style>