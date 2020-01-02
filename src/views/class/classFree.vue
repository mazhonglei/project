<template>
    <div>
    <div id="classFree">
        <slot-name>
            <span slot="texts">我的</span>
        </slot-name>
        <h6 align="center">二级联动</h6>
        <div class="list">
        <div class="listLeft" ref="wrapper">
            <ul>
                <li v-for="(item,index) in list"
                    :key="index" @click="select(index)"
                    :class="{active:current===index}"
                    ref="menuList"
                >{{item}}</li>
            </ul>
        </div>
            <div class="listRight" ref="wrapper1">
            <ul>
                <li class="listRight1" v-for="list in listRight" ref="listC">
                    <h6 style="font-size: 0.4rem">{{list.title}}</h6>
                    <div class="listRight2 clear" v-for="list1 in list.content">
                        <div class="listRight2Con"></div>
                        <div class="listRight2Con1">
                            <p>{{list1.name}}</p>
                            <p>{{list1.num}}</p>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        <h6 align="center">todoList</h6>
        <div class="todo">
            <input type="text" placeholder="请输入" v-model="keyWords " >
            <button @click="add">确定</button>
        </div>
        <div class="todoList">
            <ul>
                <h5 style="font-size: 0.32rem">进行中</h5>
                <li v-for="(item,index) in todoList" :key="index" v-show="item.checked">
                    <input type="checkbox" v-model="item.checked">
                    {{index}}&nbsp;&nbsp;{{item.title}} <span style="font-size: 0.4rem;float: right" @click="reduce(index)">删除</span>
                </li>
                <h5 style="font-size: 0.32rem">已完成</h5>
                <li v-for="(item,index) in todoList"  v-show="!item.checked">
                    <input type="checkbox" v-model="item.checked"> {{item.title}} <span style="font-size: 0.4rem;float: right" @click="reduce(index)">删除</span>
                </li>
            </ul>
        </div>
        <div class="box">
            <input type="text" v-model="sele" style="width: 3rem;height: 1rem;background: #cccccc">{{sele|upper}}
    </div>
        <div class="box1">
            <select v-model="selectData">
                <option>5</option>
                <option value="1">你好</option>
                <option value="2">我好</option>
                <option value="3">大家好</option>
            </select>
            <p>{{selectsData}}</p>
        </div>
    </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll';
    import SlotName from '../../components/slots'
    export default {
        name: "classFree",
        data(){
            return{
                list:"ABCDEFGHIJK".split(''),
                listRight:[
                    {
                        title:'热销',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'优惠',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'甜蜜套餐',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'聚划算套餐',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'风味意大利面',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'特色炒饭',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'七寸披萨',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'九寸披萨',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'春香奶茶',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'品牌介绍',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'单人套餐',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    },
                    {
                        title:'甜蜜套餐',
                        content:[
                            {
                                name:'奶酪鸡块',
                                num:'月售299'
                            },
                            {
                                name:'原味奶茶',
                                num:'月售333'
                            }
                            ,
                            {
                                name:'意大利肉酱面',
                                num:'月售190'
                            }
                        ]
                    }

                ],
                listHeight:[],
                scrollY:0,
                todoList:[],
                keyWord:'',
              sele:'',
                ji:'',
                selectsData:'',
                step:false,
                num:0,
            }
        },
        components:{
            SlotName
        },
        watch:{
            sele(newVal,oldVal){
                console.log(newVal+":"+oldVal);
            }
        },
        filters:{
          upper(value){
              return value.split('').reverse().join('');
          }
        },
        computed:{
            selectData:{
                    get(){
                        return this.selectsData;
                    } ,
                    set(v) {
                        this.selectsData = v;
                    }
            },
            jiSuan:{
                get(){
                    return this.ji;
                },
                set(v){
                    this.ji=v;
                }
            },
            keyWords:{
              get(){
                  return this.keyWord;
              },
                set(v){
                  this.keyWord=v;
                }
            },
            current(){
                return this.listHeight.findIndex((item,index)=>{
                    this._leftScroll(index);
                    return this.scrollY>=item&&this.scrollY<this.listHeight[index+1];
                })
                /*for(let i=0;i<this.listHeight.length;i++){
                    let height1=this.listHeight[i];
                    let height2=this.listHeight[i+1];
                    if(!height2||this.scrollY>=height1&&this.scrollY<height2){
                        return i;
                    }
                }  return 0;*/
            }
        },
        methods:{
            _leftScroll(index){
                let el=this.$refs.menuList;
                this.myScroll.scrollToElement(el[index],300);
            },
            add(){
                this.todoList.push({
                    title:this.keyWord,
                    checked:true
                });
                this.keyWord='';
            },
            reduce(index){
                this.todoList.splice(index,1);
            },
           select(index){
               let ele=this.$refs.listC;
               this.scroll.scrollToElement(ele[index],300);
           },
            select1(){
               this.step=true;
            },
            select2(e){
                if(this.step){
                  console.log(e.touches[0].clientY);
                }
              /*  let ele=this.$refs.listC;
                this.scroll.scrollToElement(ele[index],300);*/
            },
            select3(){
                this.step=false;
            },

        },
        mounted() {
            if(!this.myScroll){
                this.myScroll=new Bscroll(this.$refs.wrapper,{
                        click:true,
                        probeType: 3
                });
            }else{
               this.myScroll.refresh();
            }
            if(!this.scroll){
                this.scroll=new Bscroll(this.$refs.wrapper1,{ //只对第一个子元素有用,且子元素的高度要大于父元素
                    click:true,
                    probeType: 3
                })
            }else{
                this.scroll.refresh();
            }

            this.scroll.on('scroll',(position)=>{
                this.scrollY=Math.abs(Math.round(position.y));
            });
            let element=this.$refs.listC;
            let temArr=[];
            let height=0;
            temArr.push(height);
            for(let i=0;i<element.length;i++){
             height+=element[i].clientHeight;
             temArr.push(height);
        }
            this.listHeight=temArr;
        }
    }
</script>
<style lang="scss">
    .active{
        background: red !important;
        color: #ffffff !important;
    }
.listLeft{
    width: 1.6rem;
    height: 8rem;
    border: solid 1px red;
    overflow: hidden;
    float: left;
    li{
        width: 100%;
        height: 0.8rem;
        border: solid 1px red;
        font-size: 0.28rem;
        color: #000;
        text-align: center;
        line-height: 0.8rem;
    }
}
.listRight {
    width: 6rem;
    height: 8rem;
    border: solid 1px red;
    overflow: hidden;
    float: right;
    .listRight2Con{
        width: 1.2rem;
        height: 1.2rem;
        background: #411E60;
        float: left;
        overflow: hidden;
    }
    .listRight2Con1{
        width: 4rem;
        height: 1.2rem;
        background: darkgreen;
        float: right;
        p{
            font-size: 0.4rem;
            line-height: 0.5rem;
        }
    }
}
    .todo{
        width: 100%;
        height: 1rem;
        border: solid 1px red;
        font-size: 0;
    }
    .todo input{
        width: 4rem;
        height: 100%;
        background: #cccccc;
        font-size: 0.4rem;
    }
    .todo button{
        width:1rem;
        height: 100%;
        color: red;
        font-size: 0.4rem;
        text-align: center;
        line-height: 1rem;
    }
    .todoList{
        width: 100%;
    }
    .todoList li{
        line-height: 0.8rem;
        color: #000000;
        font-size: 0.4rem;
    }
    .box{
        width: 100%;
        height: 6rem;
        border: solid 1px red;
    }
    .box label,span{
        font-size: 0.4rem;
    }

</style>
<!--叙述一下二级联动 绑定的属性是在data里面定义好的
当点击左边的时候:@click=select(index)
获取右边的this.$refs.listData;
this.myscroll.scrollToElement(listData[index],100);
先获取右边每个li的高度:
for(var i=0;i<listData.length;i++){
    var listHeight+=listData[i].offsetHeight;
    ...mapState([]) 可以是数组或对象。
    ...mapState({})
    this.$store.state.count;
    this.$store.getters.get();
    this.$store.commit('');
    this.$store.dispatch('');

}
-->
