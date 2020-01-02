<template>
    <div>
       <p class="userDetail1">我是用户详情</p>
        <ul>
            <li v-for="item in list">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "userDetail",
        data(){
            return {
                list:[]
            }
        },
        created() {
            //在created中获取路由参数并发送请求:并发请求:同时发送多个请求并统一处理返回值
            this.$ajax.get('/data.json',{
                params:{id:1}
            }).then(res=>{
               this.list=res.data.data;
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
</script>

<style scoped>
    .userDetail1{
        color: #000;
        font-size: 0.36rem;
    }
</style>