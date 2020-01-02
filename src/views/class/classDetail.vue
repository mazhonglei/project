<template>
    <div id="classDetail">
        <slot-name>
            <span slot="texts">详情</span>
        </slot-name>
        <span class="city">当前城市</span>
        <div class="currentCity">
            <router-link to="/classJoin" tag="div">
            {{city}}</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/login" tag="div">
                登录</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/element" tag="div">
                element</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/map" tag="div">
                地图</router-link>
        </div>
        <div class="currentCity">
        <router-link to="/classJoin1" tag="div">
        上海</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/todo" tag="div">
                todo</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/user/userDetail" tag="div">
                用户</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/userImg" tag="div">
                用户头像</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/userNum" tag="div">
                用户人数</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/history" tag="div">
                历史记录</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/userCommit" tag="div">
                表单提交</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/checkbox" tag="div">
                单选多选</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/cityList" tag="div">
                城市列表</router-link>
        </div>
        <div class="currentCity">
            <router-link to="/preview" tag="div">
                缩略图</router-link>
        </div>
        <span class="city">热门城市</span>
        <div class="head">
            <p  v-for="list in listCity"  :class="{active:listactive===list.city}" @click="select(list.city)">
              {{list.city}}
            </p>

        </div>
        <div class="headCon1" v-show="listactive==='北京'">你好</div>
        <div class="headCon2" v-show="listactive==='上海'">我好</div>
        <div class="headCon3" v-show="listactive==='广州'">  {{time | nowTime}}</div>
        <div class="person-wrap" ref="personWrap">
            <ul class="person-list clear" ref="personTab">
                <li class="person-item">1</li>
                <li class="person-item">2</li>
                <li class="person-item">3</li>
                <li class="person-item">4</li>
                <li class="person-item">5</li>
            </ul>
        </div>
        <div class="xingZuo">
            <input type="text" v-model="xing" placeholder="请输入星座" style="background: #cccccc;padding: 0.1rem" >
            <input type="button" @click="xingCon" value="确定" style="line-height: 0.56rem">
            <p v-html="htmlContent" style="font-size: 0.32rem"></p>
        </div>
        <input type="button" value="点击" @click="all()">
        <transition name="fadeAll">
            <div class="all" v-show="allShow">
                <input type="button" value="点击" @click="all()">
            </div>
        </transition>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    import {times} from '../../assets/js/time';
    import {mapState} from 'vuex';
    import SlotName from '../../components/slots'
    import {a} from '../../assets/js/random'
    export default {
        name: "classDetail",

        data(){
            return {
                listCity:[
                    {
                        city:'北京'
                    },
                    {
                        city:'上海'
                    },
                    {
                        city:'广州'
                    }
                ],
                cityType:1,
                htmlContent:'',
                time:Date.now(),
                listactive:'北京',
                allShow:false
            }
        },
        components:{
            SlotName
        },
        filters:{
        nowTime(value){
         var value1=new Date(value);
         let year=value1.getFullYear();
         let month=value1.getMonth()+1;
         let day=value1.getDate();
         return `今天是${year}年${month}月${day}日`;
        }
        },
        created(){ //获取路由参数并发送请求 数据已经初始化,dom还未生成
            this.$nextTick(() => {
                this.personScroll();
            });
        },
        mounted(){
            console.log(a);
        },
        computed:{
          xing:{
              get(){
                  return this.xingZuo;
              },
              set(v){
                  this.xingZuo=v;
              }
          },
            ...mapState(['city'])
        },

        methods:{
            all(){
              this.allShow=!this.allShow;
            },
            select(index){
                this.listactive=index;
            },
            xingCon(){
              switch (this.xingZuo) {
                  case '金牛座':
                      this.htmlContent='我是金牛座';break;
                  case '处女座':
                      this.htmlContent='我是处女座';break;
                  case '白羊座':
                      this.htmlContent='我是白羊座';break;
                  case '摩羯座':
                      this.htmlContent='我是摩羯座';break;
                  case '双鱼座':
                      this.htmlContent='我是双鱼座';break;
                  case '水瓶座':
                      this.htmlContent='我是水瓶座';break;
                  case '天秤座':
                      this.htmlContent='我是天秤座';break;
                  case '双子座':
                      this.htmlContent='我是双子座';break;
                  case '天蝎座':
                      this.htmlContent='我是天蝎座';break;
                  case '射手座':
                      this.htmlContent='我是射手座';break;
                  case '巨蟹座':
                      this.htmlContent='我是巨蟹座';break;
                  case '狮子座':
                      this.htmlContent='我是狮子座';break;
                  default :   this.htmlContent='请输入正确的星座';break;
              }
                this.xingZuo="";
            },
            activeCity(type){
            this.cityType=type;
            },
            personScroll(){
                if(!this.myScroll){
                    this.myScroll=new BScroll(this.$refs.personWrap,{
                        probeType: 3, //监听滚动的距离
                        startX: 0,
                        click: true, //点击事件生效
                        scrollX: true, //横向滚动
                        scrollY: false, //纵向滚动
                        disableMouse: true,
                        eventPassthrough: "vertical"
                    })
                }else{
                    this.myScroll.refresh();
                }
            },
        }
    }
</script>

<style lang="scss">
@import "../../assets/css/classDetail";
    .active1{
        background: red;
        color: #ffffff !important;
    }
.active2{
    background: darkgreen;
    color: #ffffff !important;
}
.active3{
    background: orange;
    color: #ffffff !important;
}
.person-wrap{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.person-list{
    width: 660px;
/*  border: solid 1px red;*/
    font-size: 0;
display: inline-block;
}
.person-item {
   display: inline-block;
    height: 50px;
    width: 120px;
    margin-right: 10px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    list-style: none;
}
    .all{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        position: fixed;
        left: 0;
        top: 0;
    }
    .fadeAll-enter,.fadeAll-leave-to{
        transform:translate3d(0,100%,0);
    }
    .fadeAll-enter-active,.fadeAll-leave-active{
        transition: all 0.5s;
    }
    .fadeAll-enter-to,.fadeAll-leave{
          transform:translate3d(0,0,0);
    }
</style>
