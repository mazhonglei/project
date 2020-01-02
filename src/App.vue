<template>
  <div>
    <div id="head">
<tabbar @switchToTab="switchToTab"></tabbar>
   <!-- <div class="isShow" v-if="headerShow">
      <div >
        <router-link to="/classIndex" tag="div">
        页面一
        </router-link>
      </div>

      <div  >
        <router-link to="/classDetail" tag="div">
          页面二
        </router-link>
      </div>
      <div >
        <router-link to="/classFree" tag="div">
          页面三
        </router-link>
      </div>
    </div>-->
    </div> <transition :name="transitionName" >
      <router-view></router-view>
    </transition>

  </div>
</template>
<script>
  import {mapState,mapMutations} from 'vuex';
  import tabbar from '../src/components/tabbar'
  import '../src/assets/js/lead'
  export default{
  data(){
    return {
      transitionName:'',

    }
  },
    components:{
    tabbar
    },

    methods:{

      switchToTab(path){
        console.log(path);
        this.$router.push(path);
      }
    },

    watch: {
    $route(to,from){

      // 切换动画
      let isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
      this.$router.isBack = false;
    }
    }
  }
</script>

<style>
  @import './assets/css/main.scss';
  @import './assets/css/animate.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/

}
  .isShow{
    width: 100%;
    height: 0.6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .isShow>div{
    width: 30%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.28rem;
    color: #fff;
    background: #cccccc;
  }
  .router-link-active{
    background: aqua!important;
  }
  #head{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    font-size: 0;
    background: #cccccc;
  }

  .slide-left-enter, .slide-right-leave-to {
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
  }

  .slide-left-leave-to, .slide-right-enter {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
    transition: all 0.5s ease;
  }


</style>
