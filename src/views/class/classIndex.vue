<template>
    <div>
        <div id="classIndex" >
            <slot-name>
                <span slot="texts">首页</span>
            </slot-name>
            <ly-tab
                    v-model="selectedId"
                    :items="items"
                    :options="options"
                    @change="changeRoutes"
            >
            </ly-tab>
            <p class="nanJing">南京</p>
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img src="@/assets/images/recovery_img1.png" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="@/assets/images/recovery_img2.png" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="@/assets/images/recovery_img3.png" alt="">
                </mt-swipe-item>
            </mt-swipe>
        <div class="classIndex_1">
            <span class="span1" @click="method2" v-show="this.count>0">-</span>
            {{count}}
            <span class="span2" @click="method1(2)">+</span>
        </div>
            <div>
            <img src="@/assets/images/duihao.png" alt="" style="width: 0.5rem" v-show="isHide" @click="select">
            <img src="@/assets/images/duihaoLight.png" alt="" style="width: 0.5rem" v-show="!isHide" @click="select">
            </div>
            <div class="index_2">
                <ul>
                    <li v-for="(item,index) in indexList" :key="index"  @click="selectColor(item.title,index)" :class="{active1:isActive===index}" >{{item.title}}</li>

                </ul> <span style="color: #000;">{{types}}</span>
            </div>
            <div class="index_3">
                <ul>
                    <li v-for="(item,index) in indexList1" :key="index"  @click="selectCon(item,index)" :class="{active:istive===index} "  >{{item.name}}</li>
                        <span>{{con}}</span>
                </ul> <span style="color: #000;">{{types}}</span>
            </div>
            <!--jjj-->
            <div class="inputLine">
                <span>所在区域</span>
                <select name="" v-model="countryName" @change="selectCountry">
                    <option :value="item" v-for="(item,index) in area">
                        {{item.country}}
                        <svg class="icon icon-arrow-bottom" aria-hidden="true">
                            <use xlink:href="#icon-arrow-bottom"></use>
                        </svg>
                    </option>
                </select>
                <select name="" v-model="cityName">
                    <option :value="item" v-for="(item,index) in countryName.city " :key="index">
                        {{item}}
                        <svg class="icon icon-arrow-bottom" aria-hidden="true">
                            <use xlink:href="#icon-arrow-bottom"></use>
                        </svg>
                    </option>
                </select>
            </div>
            <div class="eye">
                <input :type="pwdText" placeholder="请输入密码">
                <div class="eyeImg" @click="imgShow()">
                    <img src="assets/images/eyepwd.png" alt="" v-if="pwd">
                    <img src="../../assets/images/eyetext.png" alt="" v-else>
                </div>
            </div>
            <div class="shopCar" @click="pos">
                <div class="shopLeft" :class="{act:count>0}">
                    <div class="shopLeftCon1" v-show="count>0">{{count}}</div>
                </div>
            </div>
            <div class="mask" v-show="isShow" @click="pos">
            </div>
            <transition name="fade">
            <div class="maskContent" v-show="isTrue"></div>
            </transition>
        </div>

    </div>
</template>
<!--v-if v-else v-show :class :style可以绑定字符串 数组 对象 表达式-->
<script>
    import {mapState,mapMutations} from 'vuex'
    import SlotName from '../../components/slots'
    export default {
        name: "classindex",
        data(){
            return {
                selectedId: 0,
                items: [
                    {label: '首页',id:0},
                    {label: '推荐',id:1},
                    {label: 'Android',id:2},
                    {label: '前端',id:3},
                    {label: '后端',id:4},
                    {label: 'iOS',id:5},
                    {label: '产品',id:6},
                    {label: '人工智能',id:7},
                    {label: '设计',id:8}
                ],
                options: {
                    activeColor: '#1d98bd'
                    // 可在这里指定labelKey为你数据里文字对应的字段
                },
                pwdText:'password',
                pwd:true,
                isShow:false,
                isTrue:false,
                isHide:true,
                index1:'',
                con:'不辣',
                isActive:0,
                istive:0,
                indexList:[
                    {
                        title:'不辣'
                    },
                    {
                        title:'微辣'
                    },
                    {
                        title:'中辣'
                    },
                    {
                        title:'重辣'
                    }
                ],
                indexList1:[
                    {
                        name:'不辣'
                    },
                    {
                        name:'微辣'
                    },
                    {
                        name:'中辣'
                    },
                    {
                        name:'重辣'
                    }
                ],
                countryName:{},
                cityName:"请选择城市",
                area:[
                    {
                        "country":"美国",
                        "city":[
                            "纽约",
                            "洛杉矶",
                            "旧金山",
                            "西雅图",
                            "波士顿",
                            "休斯顿",
                            "圣地亚哥",
                            "芝加哥",
                            "其它",
                        ]
                    },
                    {
                        "country":"加拿大",
                        "city":[
                            "温哥华",
                            "多伦多",
                            "蒙特利尔",
                            "其它"
                        ]
                    },
                    {
                        "country":"澳大利亚",
                        "city":[
                            "悉尼",
                            "墨尔本",
                            "其它"
                        ]
                    },
                    {
                        "country":"新加坡",
                        "city":[
                            "新加坡"
                        ]
                    },
                    {
                     "country":"中国",
                     "city":[
                     "北京市",
                      "南京市",
                     "上海市",
                     "深圳市"
                     ]
                     },
                ],
            }
        },

        computed:{
            ...mapState(['count','types'])
        },
        components:{
            SlotName
        },
        methods:{
            changeRoutes(item){
                    console.log(item);
            },
            imgShow(){
                 this.pwdText=this.pwdText==='password' ? 'text' : 'password';
                 this.pwd=!this.pwd;
            },
            selectCountry(){
                this.cityName=this.countryName.city[0];
            },
            ...mapMutations(['add','reduce']),
            ...mapMutations(['addType']),
            selectColor(type,index){
                this.isActive=index;
                this.addType(type);
            },
            selectCon(item,index){
                this.istive=index;

            console.log(item);
            },

            pos(){
                this.isShow=!this.isShow;
                this.isTrue=!this.isTrue;
            },
            select(){
                this.isHide=!this.isHide;

            },
            method1(index1){
             this.add(index1)
            },
            method2(){
                this.reduce(2)
            }
        },
        mounted(){ //页面一刷新就会加载
           this.selectColor();
        },
    }
    /*v-if v-else v-show :class :style可以绑定字符串数组对象表达式
    * 非父子组件传值:先创建vue实例: const vueEvent=new Vue();
    *   发送数据:vueEvent.$emit(name,data);
    *   接收数据:vueEvent.$on(name,function(data){});
    *   父组件主动获取子组件里的数据和方法
    *    this.$refs.map.方法名数据
    *   子组件主动获取父组件里的数据和方法
    *    this.$parent.数据和方法
    *    嵌套路由
    *    routes:{
    *       path:'/info',
    *       name:'info',
    *       component:info,
    *       children:[
              {
                path:'infoDetail',
                name:'infoDetail',
                component:infoDetail
               }
    *
    *       ]
    *    }
    *    左边:<router-link to='/info/infoDetail'></router-link>
    *    右边:<router-view></router-view>渲染出口
    *    父组件向子组件传值:谁用谁谁就是父组件
    *      在子组件里定义:props:{
    *       sortMessage:{
    *           type:Array,
    *           default:[]
    *       }
    *      }
    *      在父组件中:
    *      <child :sortMessage='data'></child>
    *      add(){
    *       vue.filter(function(val){
    *           return val.split().reverse().join();
    *       })
    *      }
    *   vuex count city 3种tab切换 input双向数据绑定v-model computed:{}watch:{} better-scroll todoList 二级联动 星座 分类 下拉加载更多 搜索功能实现 mint-ui element-ui
       <div v-show='isTrue' @click='isTrue=!isTrue'></div>
       <div v-show='!isTrue' @click='isTrue=!isTrue'></div>
       <div v-if='isShow' @click='isShow=!isShow'></div>
       <div v-else @click='isShow=!isShow'></div>
     */

</script>

<style lang="scss">
    @import "../../assets/css/classIndex";
.active1{
    background: darkgreen !important;
}
.nanJing:hover{
    color: green;
}
.eyeImg{
    width: 40px;
    height: 1rem;
    border: solid 1px red;
    float: left;
}
.eyeImg img{
    vertical-align: middle;
    display: block;
}
.eye{
    width: 100%;
    height: 1rem;
}
.eye input{
    width: 50%;
    height: 1rem;
    border: solid 1px red;
    float: left;
}
.act{
    background: darkgreen !important;
}
    .fade-enter,.fade-leave-to{
        transform: translateY(100%);
    }
.fade-enter-to,.fade-leave{
    transform: translateY(0);
}
.fade-enter-active,.fade-leave-active{ //进入的动画或过渡
    transition: all 0.5s;
}
</style>
