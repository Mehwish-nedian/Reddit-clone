<template>
    <div class="voting">
        <div class="voting__icon voting__icon-up">
            <q-icon name="arrow_upward" />
        </div>
        <div class="voting__number">
            2.1k
        </div>
        <div class="voting__icon voting__icon-down">
            <q-icon name="arrow_downward" />
        </div>
    </div>
</template>
<style lang='scss' scoped>
.voting{
    display: flex;
    flex-direction: column;
    &__icon{
        font-size: 3rem;
        cursor: pointer;
    }
    &__icon-up:hover{
        color: orangered
    }
    &__icon-down:hover{
        color: #027BE3;
    }
}
</style>