<template>
<div>
    <div class="tab" v-show="$route.meta.showFooter">
        <div class="tab_item" v-for="(item ,index) in tabBarImg" :key="index" @click="switchToTab(item.path)" >
            <img :src="$route.path === item.path ? item.icon : item.normal" alt="">
            <span :class="$route.path === item.path ? 'active' : ''">{{item.title}}</span>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "tabbar",
        data(){
            return {
                tabBarImg:[
                    {
                        path:'/classIndex',
                        normal:require('../assets/images/home.png'),
                        icon:require('../assets/images/active_home.png'),
                        title:'首页'
                    },
                    {
                        path:'/classDetail',
                        normal:require('../assets/images/car.png'),
                        icon:require('../assets/images/active_car.png'),
                        title:'详情'
                    },
                    {
                        path:'/classFree',
                        normal:require('../assets/images/me.png'),
                        icon:require('../assets/images/active_me.png'),
                        title:'我的'
                    },
                ]
            }
        },
        methods:{
            switchToTab(path){
                this.$emit('switchToTab',path);
         }
        }
    }
</script>

<style scoped>
     .tab{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .tab_item img{
        width: 0.6rem;
    }
</style>
