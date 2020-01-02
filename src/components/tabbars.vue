<template>
    <div id="tabbars" v-show="$route.meta.showFooter">
        <div @click="changeRoute('/classIndex')" :class="{routerColor:'/classIndex'===$route.path}">
            <i class="iconfont iconcart-full"></i>
            <p>哈哈哈</p>
        </div>
        <div  @click="changeRoute('/classDetail')" :class="{routerColor:'/classDetail'===$route.path}">
            <i class="iconfont iconarrow-lift"></i>
            <p>呵呵呵</p>
        </div>
        <div  @click="changeRoute('/classFree')" :class="{routerColor:'/classFree'===$route.path}">
            <i class="iconfont iconjiantou"></i>
            <p>嘿嘿嘿</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "tabbars",
        data(){
            return {}
        },
        methods:{
            changeRoute(routes){
                this.$emit('changeRoute',routes);
            }
        }
    }
</script>

<style scoped>
#tabbars{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: solid 1px #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.28rem;
    color: #000;
}
    .routerColor{
        color: red!important;
    }
</style>
