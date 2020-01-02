<template>
<div>
    <ul>
        <li>
            <input type="checkbox" @change="checkAllHandle" v-model="checkedAll" />全选
        </li>
        <li v-for="(item,i) in people" :key="i">
            <input type="checkbox" @change="setOneCheckstate()" :checked="item.checked" />{{ item.name }}
        </li>
    </ul>
    <ul class="box_over">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
   <!-- <span>{{tit}}</span>-->
    <span @mouseout="start" @mouseover="stop">{{text}}</span>
    <span class="iconfont iconcart-full"></span>
    <input type="text" v-model="search" placeholder="请输入关键字"style="border: solid 1px red;color: #000;">
    <ul v-if="products.length > 0">
        <li v-for="item in filterBy(search)" style="font-size: 0.28rem"><input type="checkbox" v-model="item.check">种类：{{item.category}}：{{item.name}},价格：￥{{item.price}}</li>
    </ul>
    <div v-else>暂无数据</div>
    <label for="agree"></label>
    <input type="checkbox" id="agree" v-model="isAgree" ><span :class="{acts:isAgree}">同意协议</span>
    <button :disabled="!isAgree" :class="{acts:isAgree}">下一步</button><br>
    <input type="checkbox" value="足球" v-model="hobbies"><span>足球</span>
    <input type="checkbox" value="篮球" v-model="hobbies"><span>蓝球</span>
    <input type="checkbox" value="排球" v-model="hobbies"><span>排球</span><br>
    <span>您选择的爱好是{{hobbies}}</span>
</div>
</template>

<script>
    export default {
        name: "checkBox",
        data(){
            return {
                hobbies:[],
                isAgree:false,
                checkedAll: false,
                people: [
                    {
                        checked: false,
                        id: 1,
                        name: '沈剑心'
                    },
                    {
                        checked: true,
                        id: 2,
                        name: '小明'
                    },
                    {
                        checked: false,
                        id: 3,
                        name: '小智'
                    },
                    {
                        checked: false,
                        id: 4,
                        name: '皮卡丘'
                    }
                ],
                text:'project还有谁',
                ID:null,
                tit:document.title,
                search: '',
                products: [
                    {
                    name: '苹果',
                    price: 25,
                    category: "水果"
                },
                    {
                    name: '香蕉',
                    price: 15,
                    category: "水果"
                },
                    {
                    name: '雪梨',
                    price: 65,
                    category: "水果"
                },
                    {
                    name: '宝马',
                    price: 2500,
                    category: "汽车"
                }, {
                    name: '奔驰',
                    price: 10025,
                    category: "汽车"
                }, {
                    name: '柑橘',
                    price: 15,
                    category: "水果"
                },
                    {
                    name: '奥迪',
                    price: 25,
                    category: "汽车"
                }]
            }
        },
        mounted(){
          this.TitleScrolling();
          this.start();
          this.products.forEach((item)=>{
              item.check=true;
          })
        },
        methods: {
            TitleScrolling (){
                setInterval(() => { //ES6箭头函数
                    // 截取首字符串(第一个)
                    var head = this.tit.substring(0,1);
                    // 截取除首字符串外所有字符串(除第一个所有)
                    var foot = this.tit.substring(1);
                    // 头尾拼接后赋给data => tit属性
                    this.tit = foot + head;
                    // 最后赋给最终显示的标题(标题)
                    document.title = this.tit;
                },400)
            },
            filterBy(search){
                return this.products.filter((item)=>{ //过滤掉不符合条件的元素
                    if(item.name.indexOf(search)!==-1||item.category.indexOf(search)!==-1){
                        return item;
                    }
                })
            },
            // 开始滚动
            start() {
                this.ID = setInterval(() => {
                    // 截取首个字符
                    var head = this.text.substring(0, 1);
                    // 截取除首个字符外的所有字符
                    var foot = this.text.substring(1);
                    // 拼接后重新渲染text属性值
                    this.text = foot + head;
                }, 500)
            },
                // 停止滚动
                stop() {
                    // 清除定时器
                    clearInterval(this.ID);
                },
            checkAllHandle() {
                this.people.forEach((item, i) => {
                    this.people[i].checked = this.checkedAll;
                })
            },
            setOneCheckstate() {
                this.people.forEach(function (item) {
                    item.checked=!item.checked;
                });
                // if (
                //     this.people.filter(item => item.checked).length ==
                //     this.people.length
                // ) {
                //     this.checkedAll = true;
                // } else {
                //     this.checkedAll = false;
                // }
                const selectedPeople = this.people.filter(function (item) {
                    return item.checked;
                });
                // 判断一下选中的数据的长度是否等于总数据的长度
                if (selectedPeople.length === this.people.length) {
                    this.checkedAll = true;
                } else {
                    this.checkedAll = false;
                }
            },

        },
        computed: {

        }
    }
</script>

<style scoped>
.box_over{
    width: 100%;
    padding: 0 0.2rem;
    overflow-x: scroll;
    white-space: nowrap;
}
.box_over li{
    border: solid 1px red;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    margin-right: 0.2rem;
}
    .acts{
        color: red!important;
    }
</style>
<!---->
