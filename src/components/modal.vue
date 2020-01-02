<template>
    <div id="modal" v-if="mdShow">
        <div class="modal">
            <span class="close" @click="closeAll()">close</span>
            <div class="sure"><slot name="message"></slot></div>
           <div class="btn">
            <slot name="btns"></slot>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modal",
        data(){
            return {

            }
        },
        props:{
            mdShow:Boolean
        },
        methods:{
            closeAll(){
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
#modal{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
}
    .modal{
        width: 80%;
        height: 6rem;
        background: #ffffff;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
.modal .close{
    color: #000;
    font-size: 0.6rem;
    float: right;
}
.modal .sure{
    width: 100%;
    height: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.4rem;
}
    .btn{
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>
