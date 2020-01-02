<template>
    <div id="login">
        <h3 align="center">短信登录</h3>
        <div class="login">
            <input type="tel" maxlength="11" placeholder="请输入手机号" v-model="loginPhone">
            <button :class="{loginActive:loginPhone.length===11}" @click="timeNum">{{time>0?`请发送${time}s `:'获取验证码'}}</button>
        </div> <div id="mask" v-if="areMask" @click="showMask"></div>
        <transition name="fade">
                <p v-if="isMask" class="maskCon">请先登录</p>
        </transition>
        <transition
            name="sale"
            enter-active-class="animated swing"
            leave-active-class="animated bounce"
        >
        <p v-show="hello" style="font-size: 0.28rem">HELLO WORLD</p>
        </transition>
        <button @click="hello=!hello" style="padding: 0.2rem">动画</button>
        <p class="text" :class="{moreContent:more}">
            一句“革命尚未成功，同志仍须努力”促使了我的南京总统府之旅，当然对于这座中国近代史博物馆，我是向往已久。
            前往总统府不建议自驾，因为想在附件找一个车位真的不容易。您可乘坐地铁2号线或3号线至大行宫站下车，
            步行600米左右即可到达；当然最方便就是乘坐公交至总统府站下车，站台旁即是总统府门楼。
            总统府凭票进入，售票厅就在门楼西侧50米处，票价40元/人，特定人员或团体享有优惠政策，园区开放时间通常是7:30-18:00。
            值得一提的是总统府的门票也是一张明信片，在园内多个指定地点均可以投寄哦；还有园区内有免费WIFI覆盖，真是棒棒哒。
            入园后有讲解服务供游客选择，可选电子讲解器或真人导游，当然需要支付一定费用啦，不过我建议不要讲解，自己走进去，
            用心去感受才最珍贵嘛。另外总统府内每日游客量很大，请看管好自己的随身物品，以免丢失。
            门楼是总统府的标志性建筑，气势雄伟，从此进入就是中区。一座中式建筑的大堂，横梁上是孙中山手书的“天下为公”匾额。
            一直往前，有总统府文物史料展馆。最北端则是蒋介石、李宗仁等曾经办公的地方。
            门楼的东边是东苑，有国民政府行政院、陶林二公祠、马厩等各时期的建筑。这里还有太平天国展馆，重现了天朝宫殿的昔日辉煌。
            若从门楼进去往西走，最先看到的则是煦园，亭台楼阁、小桥流水，里面保留着许多著名遗址景点。继续往里走，
            就是孙中山的临时大总统办公室、起居室，还有孙中山展馆。
            总统府园区内有很多地方出售一些特色纪念品，如孙中山的Q版公仔，写着“天下为公”的总统府扇子、各类书籍、明信片等。
            一座总统府，半部民国史。身处其中，我只想时间过得再慢一点，让我再多看一看，再多感受一番...
        </p>
        <button @click="more=true" v-show="!more">更多</button>
        <button @click="more=false" v-show="more">返回</button>
        <ul class="selectType">
            <li v-for="(item,index) in obj" :key="index" @click="enter(item.type)" :class="{typeActive:kind===item.type}">
                {{item.name}}
                <span>></span>
            </li>
        </ul>
        <div class="selectDetail" v-if="kind">
            <template v-for="(item,index) in currentDetail.childs">
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="v in item.child">{{v}}</span>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                more:false,
                hello:true,
                areMask:false,
                isMask:false,
                loginPhone:'',
                time:0,
                regxuser: /^1[0-9]\d{9}$/,
                autoTime:'',
                kind:"",
                obj:[
                    {   type:"waiMai",
                        name:"外卖",
                        childs:[
                            {
                                title:"外卖",
                                child:["优惠券","火锅","快餐"]
                            }
                        ]
                    },
                    {   type:"jiuDian",
                        name:"酒店",
                        childs:[
                            {
                                title:"酒店",
                                child:["经济型","豪华型"]
                            }
                        ]
                    },

                ]
            }
        },
        mounted(){
            setTimeout(()=>{
                this.areMask=true;
                this.maskMethods();
            },1000)

        },
        computed:{
            currentDetail(){
                if(this.kind===""){
                    return this.obj;
                }
               return this.obj.filter((item)=>
                  item.type===this.kind
                )[0];
              /*  console.log(newObj.childs);*/
            }
        },
        methods:{
            enter(item){
              this.kind=item;
            },
            maskMethods(){
                    this.isMask=true
            },
            showMask(){
                this.areMask=false;
                this.isMask=false
            },
            timeNum(){
                if (this.loginPhone === '' || !this.regxuser.test(this.loginPhone)) {
                    this.$toast.show('请输入正确的手机号',1000);
                    return false;
                }
                if(!this.time){
                    this.time=30;
                    this. autoTime=setInterval(()=> {
                        this.time--;
                        if(this.time<10){
                            this.time=this.time.toString().padStart(2,'0');
                        }
                        if(this.time===0){
                            clearInterval(this.autoTime);
                        }
                    },1000)

                }
                //然后发送请求获取验证码；
                if(res.data.code===1){
                    this.$toast.show(res.data.msg);
                    if(this.time){
                        clearInterval(this.autoTime);
                        this.time=null
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .typeActive{
        color: red!important;
    }
    .selectType{
        width: 100%;
    }
    .selectType li{
        width: 50%;
        line-height: 1rem;
        color: #000;
        font-size: 0.3rem;
    }
    .selectDetail{
        width: 100%;
    }
    .selectDetail h4{
        font-size: 0.3rem;
        line-height: 0.4rem;
    }
    .selectDetail span{
        font-size: 0.3rem;
        display: inline-block;
        margin-right: 0.1rem;
    }
.login{
    width: 100%;
    height: 1rem;
    position: relative;
    font-size: 0;
}
.login input{
    width: 100%;
    height: 1rem;
    border: solid 1px #cccccc;
    box-sizing: border-box;
}
.login button{
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: #cccccc;
    font-size: 0.28rem;
    cursor: pointer;
}
    .loginActive{
        color: #000!important;
    }
    #mask{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0,0,0,0.5);

    }
 .maskCon{
    width: 3rem;
    height: 1rem;
    background: #cccccc;
    text-align: center;
    position: fixed;
     left: 0;
     top: 0;
     right: 0;
     bottom: 0;
    margin: auto;
    z-index: 100;
     font-size: 0.28rem;
     color: #ffffff;
}
.fade-enter,.fade-leave-to{
    transform: translateY(1000%);
}
.fade-enter-to,.fade-leave{
    transform: translateY(0);
}
.fade-enter-active,.fade-leave-active{
transition: all 1s;
}
    @keyframes sca {
        0%{transform: scale(0);}
        50%{transform: scale(1.5);}
       100%{transform: scale(1);}
    }
.sale-enter-active{
    transform-origin: left center;
    animation: sca 1s;
}
.sale-leave-active{
    transform-origin: left center;
    animation: sca 1s reverse;
}
    .text{
        font-size: 0.28rem;
        color: #000;
        line-height: 0.34rem;
        word-break: break-all;
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }
    .moreContent{
        height: auto!important;
        text-overflow: ellipsis!important;
        display: -webkit-box!important;
        -webkit-line-clamp: 1000!important;
        -webkit-box-orient: vertical!important;
    }
</style>
