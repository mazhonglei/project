<template>
    <div id="userNum">
      <ul class="ulList clear">
          <li class="active">1人</li>
          <li>2人</li>
          <li>3人</li>
          <li>4人</li>
      </ul>
        <div class="product">
            <ul>
                <li v-for="(item,index) in listBy " :key="index" @click="changeColor(index)" :class="{borderActive:act===index}">
                    <div class="list1"><span class="span1" :class="{'check':item.checked}" @click="checkRadio(item)"></span>商品单价{{item.productPrice}}</div>
                    <div class="list2">
                        <span @click="change(item,'reduce')">-</span><input type="text" value="0" disabled v-model="item.productNum">
                        <span @click="change(item,'add')">+</span></div>
                    <div class="list3">商品金额{{item.productPrice*item.productNum}}</div>
                </li>
                <a href="javascript:;" class="a1" @click="addMore()">more</a>
            </ul>
            <div class="list3" @click="changeRoute">商品数量:{{allLength}}</div>
            <div class="list3">商品总金额:{{allMoney}}</div>
            <div class="list4"  @click="selectAll()" :class="{'check':checkAll}" >全选</div>

        </div>
        <button class="mdShow" @click="mdShow=true">加入购物车</button>
        <modal :mdShow="mdShow" @close="change1()">
            <div slot="message">你好,需要我做什么?</div>
            <button slot="btns" @click="mdShow=false">确认</button>
            <button slot="btns" @click="mdShow=false">取消</button>
        </modal>
    </div>
</template>

<script>
    import Modal from '../../components/modal'

    export default {
        name: "userNum",
        data(){
            return {
                checkAll:false,
                mdShow:false,
                listNum:2,
                act:'',
                userNumber:'',
                list:[
                    {
                        productPrice:19,
                        productNum:0,
                        checked:false
                    },
                    {
                        productPrice:20,
                        productNum:0,
                        checked:false
                    },
                    {
                        productPrice:21,
                        productNum:0,
                        checked:false
                    },
                    {
                        productPrice:22,
                        productNum:0,
                        checked:false
                    }
                ],
                msg:''
            }
        },
        components:{
            Modal,
        },
        computed:{
          /*  checkAll(){
                return this.checkedCount === this.list.length;
            },
            checkedCount(){
                var i = 0;
                this.list.forEach((item)=>{
                    if(item.checked){
                        i++;
                    }

                });
                return i;
            },*/
            allLength(){
                let sum=0;
                this.list.forEach((item)=> {
                    if(item.checked){
                        sum+= item.productNum;
                    }
                });
                return sum;
            },

            allMoney : function (){
                let sum=0;
                this.list.forEach((item)=> {
                    if(item.checked){
                        sum+= item.productNum*item.productPrice;
                    }
                });
                return sum;
            },
            listBy(){
                return this.list.slice(0,this.listNum);
            }
        },
        methods:{
            changeRoute(){

                if(this.allLength===0){
                    this.$toast.show('请先选择商品',1000);
                    return false;
                }
                this.$router.push({path:'/classFree'});
            },
            change1(){
                this.mdShow=false;
            },
            selectAll(){
                this.checkAll=!this.checkAll;
                //方法1
                this.list.forEach((item)=>{
                    item.checked=this.checkAll;
                })
              //方法2
             /*   if(this.checkAll){
                    this.list.forEach((item)=>{
                        item.checked=true;
                    })
                }else{
                    this.list.forEach((item)=>{
                        item.checked=false;
                    })
                }*/
            /*  flag=!this.checkAll;
              this.list.forEach((item)=>{
                  item.checked=flag;
                  /!**!/
              })*/
            },
            checkRadio(item){
                item.checked=!item.checked;
                const checkLength=this.list.filter((item=>{
                    return item.checked;
                }));
                if(checkLength.length===this.list.length){
                    this.checkAll=true;
                }else{
                    this.checkAll=false;
                }
            },
            addMore(){
                if(this.listNum===2){
                    this.listNum=this.list.length;
                }else{
                    this.listNum=2;
                }

            },
            changeColor(index){
                this.act=index;
            },
            addChange(){
                let that=this;
                var user=document.querySelectorAll('.ulList li');
                for(var i=0;i<user.length;i++){
                    user[i].onclick=function () {
                        for(var j=0;j<user.length;j++){
                            user[j].className='';
                        }
                        this.className='active';
                        that.userNumber=this.innerHTML;
                        console.log(that.userNumber);
                    };

                }
            },
            change(item,flag){
                if(flag==='add'){
                    item.productNum++;
                }else if(flag==='reduce'){
                    if(item.productNum<=0){
                        return ;
                    }
                    item.productNum--;
                }
            },

        },
        mounted() {
            this.addChange(); //在mounted()中页面一加载就会刷新,在mounted()中页面一加载就会刷新,
        }
    }

</script>

<style scoped>
    #userNum ul {
        width: 100%;
        overflow: hidden;
    }
     #userNum .ulList li{
        width: 24%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        color: #000;
        font-size: 0.4rem;
        float: left;
         border: solid 1px #eee;
    }
    #userNum .ulList li:first-child{
        margin-left: 0.16rem;
    }
    .borderActive{
        border: solid 1px red!important;
    }
    .active{
           color: #ffffff;
           background-color: red;
       }
    .product{
        width: 100%;
    }
    .product ul li{
        padding-top: 0.4rem;
        overflow: hidden;
        background-color: #cccccc;
        margin-top: 0.1rem;
        border: solid 1px transparent;
    }
    .product ul li .span1{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        border: solid 1px red;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .check{
        background: red;
    }
    .product ul>a{
        color: #000;
        font-size: 0.4rem;
    }
    .product ul li div{
        float: left;
        color: #000;
        font-size: 0.32rem;
    }
    .product ul li .list1{
        margin-top: 0.16rem;
        margin-right: 1rem;
    }
    .product ul li .list2 span{
        color: #000;
    }
    .product ul li .list2 input{
        width: 1rem;
        height: 0.8rem;
        text-align: center;
        line-height: 0.8rem;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
    }
     .list3{
        float: right;
        margin-right: 1rem;
        margin-top: 0.16rem;
        color: #000;
        font-size: 0.32rem;
    }
    </style>
<!--get post put(更新数据：将所有数据提交到后台) patch(更新数据：将修改的数据提交到后台) delete(删除数据)-->
