<template>
    <div class="sl">
        <div class="slot">
            <slot name="texts"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slot"
    }
</script>

<style scoped>
.sl{
    width: 100%;

}
.sl .slot{
    width: 100%;
    height: 1rem;
    background: red;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    font-size: 0.28rem;
}
</style>
