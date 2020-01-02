<template>
<div>
    <ul>
        <button @click="sort1">排序</button>
        <li v-for="a in arr1" style="font-size: 0.24rem">{{a}}</li>
    </ul>
    <button @click="sorts(flag)">排序</button>
    <div class="ibox-content">
        <li v-for="(rangeItem,index) in rangeList" :key="index" class="rankLi" style="list-style: none">
            <span class="rankSpan">{{rangeItem.price}}</span>
            <a class="rankA">{{rangeItem.name}}</a>
          <!--  <div class="progress progress-striped active">
                <div class="progress-bar" :style="{width:rangeItem.percent+'%'}"
                     aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" role="progressbar">
                    <span class="sr-only"></span>
                </div>
            </div>-->
            <span class="proPercent">{{rangeItem.percent}}%</span>
        </li>
    </div>
    <div>****************************************</div>
    <table class="recommend_table" cellspacing="0">
        <tr>
            <th>股票</th>
            <th @click="sort('in_price')">入选价</th>
            <th @click="sort('now_price')">最新价</th>
            <th @click="sort('increase')">模拟涨跌幅</th>
        </tr>
        <tr v-for="(item,index) in recommendlist" :key="index">
            <td>
                <div class="recommend_name">{{item.name}}</div>
                <div class="recommend_num">{{item.bn}}</div>
            </td>
            <td>{{item.in_price}}</td>
            <td>{{item.now_price}}</td>
            <td>{{item.increase}}%</td>
        </tr>
    </table>
    <div class="sortType">
        <ul>
            <li v-for="item in sortValue" @click="sortProduct(item.key)">{{item.value}}</li>
        </ul>
    </div>
    <div class="product">
        <ul>
            <li v-for="item in product">
                <h3>商品名称：{{item.name}}</h3>
                <div style="overflow: hidden">
                <span style="float:left;">商品价格：{{item.price | pri}}</span>
                <span style="float: right;">商品销量：{{item.sale}}</span>
                </div>
              <div style="overflow: hidden">
                <span style="float:left;">商品好评：{{item.goods}}</span>
                <span style="float: right;">商品优惠：{{item.discount}}</span>
             </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>

    export default {
        name: "history",
        data(){
            return {
                arr1:[2,5,1,3,10],
                rangeList: [
                    { name: "TP001", percent: "75",price:'100' },
                    { name: "TP002", percent: "30" ,price:'10'},
                    { name: "TP003", percent: "20",price:'20' },
                    { name: "TP004", percent: "15",price:'50' },
                    { name: "TP005", percent: "80" ,price:'200'},
                    { name: "TP006", percent: "35" ,price:'500'},
                ],
                flag:true,
                recommendlist: [
                    { name:'高科石化', bn:'002778', in_price: 20.68, now_price: 28.68, increase: 10.01 },
                    { name:'中孚信息', bn:'300659', in_price: 19.46, now_price: 17.46, increase: 9.06 },
                    { name:'永福股份', bn:'300712', in_price: 17.68, now_price: 32.68, increase: 2.01 }
                ],
                sortType: 'in_price',
                sortValue:[
                    {value:"价格排序",key:'price'},
                    {value:"销量排序",key:'sale'},
                    {value:"好评排序",key:'goods'},
                    {value:"优惠排序",key:'discount'}
                ],
                product:[
                    {id:1,name:'空调',price:'2500',sale:'1500',goods:'100',discount:'20%'},
                    {id:2,name:'洗衣机',price:'1500',sale:'100',goods:'10',discount:'30%'},
                    {id:3,name:'冰箱',price:'3000',sale:'500',goods:'200',discount:'10%'},
                ]
            }

        },
        filters:{
          pri(value){
              return value+'元'
          }
        },
        methods:{
            sortProduct(type){
              this.product.sort((a,b)=>{
                  console.log(a);
                  console.log(a[type]);
                  return a[type]-b[type];
              })
            },
            sort(type) {
                this.sortType = type;
                this.recommendlist.sort(this.compare(type));
                // switch(type){
                // case 'in_price':
                //  this.sortType = 'in_price';
                //  this.recommendlist.sort(this.compare('in_price'));
                //  break;
                // case 'now_price':
                //  this.sortType = 'now_price';
                //  this.recommendlist.sort(this.compare('now_price'));
                //  break;
                // case 'increase':
                //  this.sortType = 'increase';
                //  this.recommendlist.sort(this.compare('increase'));
                //  break;
                // }
            },
            compare(attr) {
                return function(a,b){
                    var val1 = a[attr];
                    var val2 = b[attr];
                    return val2 - val1;
                }
            },
            sort1(){
                this.arr1.sort((a,b)=>{
                    console.log(a);

                    return a-b
                })
            },
            sorts(){
              this.flag=!this.flag;
                if(this.flag){
                    this.rangeList.sort((a, b) => a.percent - b.percent);
                }else{
                    this.rangeList.sort((a, b) => a.percent - b.percent).reverse();
                }
            }
        },
        computed: {
            range: function () {
                return this.rangeList.sort((a, b) => a.percent - b.percent);//升序
            },
            rangeDown(){
                return this.rangeList.sort((a, b) => a.percent - b.percent).reverse(); //降序
            }
        }
    }
</script>

<style scoped>
table{
    font-size: 0.28rem;
}
table tr td:first-child{
    width: 2.8rem;
}
table tr td{
    width: 1.8rem;
}
    .sortType{
        width: 100%;
    }
.sortType ul {
    overflow: hidden;
}
.sortType ul li{
    list-style: none;
    float: left;
    width: 25%;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #000;
    cursor: pointer;
    border: solid 1px red;
}
    .product{
        width: 100%;
    }
.product ul li{
    width: 100%;
    list-style: none;
    color: #000;
    font-size: 0.28rem;
}
</style>
