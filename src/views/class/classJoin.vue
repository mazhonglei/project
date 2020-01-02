<template>
    <div>
        <div class="money">
            <input type="text" placeholder="单个金额" v-model="yuan" >
        </div>
        <div class="money">
            <input type="text" placeholder="红包个数" v-model="count">
        </div>
        <div class="totalCount">&yen;{{totalMoney}}</div>
        <div class="wallet" :class="{active:setCount>0}">塞钱进红包</div>
        <p style="font-size: 0.36rem;margin-top: 1rem" @click="sex1()"> <span style="margin-right: 1rem;margin-left: 1rem" >性别</span>{{sex}}</p>
        <transition name="bigFade">
        <div class="sex1" v-show="isShow"></div>
        </transition>
        <transition name="smallFade">
        <div class="sex2" v-show="isTrue">
           <span style="margin-right: 1rem;margin-left: 1rem">男</span> <input type="radio" value="男" v-model="sex" @click="sex2()"><br>
            <span  style="margin-right: 1rem;margin-left: 1rem">女</span><input type="radio" value="女" v-model="sex" @click="sex2()">
        </div>
        </transition>

        <mt-button type="primary" @click="open()">primary</mt-button>
       <router-link tag="a" to="/classJoinDetail"><mt-button type="danger">danger</mt-button></router-link>
        <div class="imgs">
            <ul>
                <li v-for="item in imgList">
                    <a href="#">
                        <img v-lazy="item.imgSrc" alt="" >
                    </a>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    export default {
        name: "classJoin",
        data(){
            return{
                setMoney:'',
                setCount:'',
                sex:'男',
                isTrue:false,
                isShow:false,
                imgList:[
                    {
                        imgSrc:require('../../assets/images/zd_type1.png')
                    },
                    {
                        imgSrc:require('../../assets/images/zd_type2.png')
                    },
                    {
                        imgSrc:require('../../assets/images/zd_type3.png')
                    },
                    {
                        imgSrc:require('../../assets/images/zd_type4.png')
                    },
                    {
                        imgSrc:require('../../assets/images/zd_type5.png')
                    },
                    {
                        imgSrc:require('../../assets/images/zd_type6.png')
                    }

                ]
            }
        },
        methods:{
          sex1(){
              this.isShow=!this.isShow;
              this.isTrue=!this.isTrue;
          },
            sex2(){
                this.isShow=!this.isShow;
                this.isTrue=!this.isTrue;
            },
            open(){
                Indicator.open('加载中...');
                setTimeout(()=>{
                    Indicator.close();
                },500)
            }
        },
        computed:{
            yuan:{
                get(){
                    return this.setMoney;
                },
                set(v){
                    this.setMoney=v;
                }
            },
            count:{
                get(){
                    return this.setCount;
                },
                set(v){
                    this.setCount=v;
                }
            },
            totalMoney(){
                let total=0;
                if(Number(this.setMoney)>0||Number(this.setCount)>0){
                    total+=this.setMoney*this.setCount;
                }
                return total;
            },
        }
    }
</script>

<style lang="scss">
    .active{
        background: red !important;
    }
.money{
    width: 100%;
  padding-left: 0.25rem;
    padding-right: 0.25rem;
}
.money input[type=text]{
    width: 100%;
    height: 1.2rem;
    background: #cccccc;
    padding-left: 0.3rem;

}
    input{
        caret-color:red;
    }

  input::-webkit-input-placeholder {
      /* placeholder颜色  */
      color: #ffffff;
      /* placeholder字体大小  */
      font-size: 0.4rem;
  }
    .totalCount{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.4rem;
        color: #000;
        text-align: center;
    }
    .wallet{
        width: 3rem;
        height: 1rem;
        line-height: 1rem;
        background: peachpuff;
        color: #ffffff;
        text-align: center;
       font-size: 0.36rem;
        margin: auto;
    }
    .sex1{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0,0,0,0.3);
    }
    .sex2{
        width: 50%;
        height: 4rem;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: rgba(255,255,255,1);
        z-index: 100;
    }
    .bigFade-enter,.bigFade-leave-to{
        opacity: 0;
    }
    .bigFade-enter-active,.bigFade-leave-active{
        transition: all 0.3s;
    }
    .smallFade-enter,.smallFade-leave-to{
        opacity: 0;
    }
    .smallFade-enter-active,.smallFade-leave-active{
        transition: all 0.3s;
    }
    .imgs{
        width: 100%;
    }
    .imgs ul li{
        width: 33.33%;
        height: 2.4rem;
        float: left;
    }
    .imgs ul li a{
        display: block;
        width: 100%;
    }
    .imgs ul li a img{
        display: block;
        width: 100%;
        height: 2.3rem;
    }
    /*computed计算属性监听数据的变化并返回指定的数据显示在页面上可以是对象计算方法名当成变量名使用
       watch监听单一数量的变化有旧值和新值计算变量名当成方法名 v-if v-show v-else :class :style可以绑定字符串 数组 对象 表达式
       input{
            caret-color:red;
       }
       input::-webkit-input-placeholder{
             color:red;
             font-size:0.2rem;
       }
       嵌套路由:
       router:{
           path:'/home',
           name:'home',
           component:home ,
            children:{
                [
                path:'homeDetail',
                name:'homeDetail',
                component:homeDetail
                ]
            }
            左边:<router-link :to='/home/homeDeatil'></router-link>
            右边:渲染出口 <router-view></router-view>
       }
       非父子组件传值:
        先创建vue实例:
        const vueEvent= new Vue();
        export default vueEvent;
        在组件中引入:
        import vueEvent from ../../vueEvent;
        this.$emit(name,data);
        接收:
        this.$on(name,function(data){
            console.log(data);
        })
        父组件向子组件传值
            在子组件定义props:{
                自定义属性名:{
                    type:Array,
                    default:[]
                }
            }
         子组件向父组件传值:
        在子组件中this.$emit('showMessage',data);
            @showMessage=receive;
            methods:{
                receive(data){
                    console.log(data);
                }
            }
    */
</style>
