<template>
    <div class="toastcover" v-if="isShow">
        <span class="toast">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data(){
            return {
                isShow:false,
                message:''
            }
        },
        methods:{
            show(message='默认文字',duration=1000){
                this.isShow=true;
                this.message = message;
                setTimeout(()=>{
                    this.isShow=false;
                    this.message=''
                },duration)
            }
        }
    }
</script>

<style scoped>
    .toastcover {
        position:absolute;
        left: 50%;
        top: 6rem;
        transform: translateX(-50%);
        z-index: 999;
    }

    .toast {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        padding: 5px 15px;
        border-radius: 0.1rem;
        color: #fff;
        background: rgba(0, 0, 0, .6);
        font-size: 14px;
    }
</style>
