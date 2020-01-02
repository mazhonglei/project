<template>
    <div id="user">
        <div class="left">
          <ul>
              <li ><router-link to="/user/userDetail">用户详情</router-link></li>
              <li ><router-link to="/user/userList">用户列表</router-link></li>
          </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style scoped>
#user .left{
    width: 2rem;
    height: 13rem;
    border: solid 1px red;
    margin-top: 1rem;
    float: left;
}
#user .left ul li{
    font-size: 0.16rem;
    line-height: 0.64rem;
    text-align: center;
}
#user .right{
    width: 5rem;
    height: 13rem;
    border: solid 1px red;
    margin-top: 1rem;
    float: right;
}
</style>