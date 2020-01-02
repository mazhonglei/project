<template>
    <div>
        <div id="city" ref="wrappers">
        <div class="wrapper">
            <div class="search">
                <input type="text" placeholder="请输入城市名" v-model="cityName">
            </div>
        <div class="current_city">当前城市</div>
        <div class="city_select"> <div>北京</div> </div>
        <div class="current_city">热门城市</div>
        <div class="city_select">
            <div>北京</div>
            <div>上海</div>
            <div>广州</div>
            <div>深圳</div>
            <div>三亚</div>
            <div>西安</div>
            <div>沈阳</div>
            <div>杭州</div>
            <div>南京</div>
        </div>
        <div class="city" >
               <ul >
                   <li v-for="(item,key) in list" :key="index" >
                       <div class="current_city" ref="ziMu">{{key}}</div>
                       <div class="city1" v-for="items in item">{{items.name}}</div>
                   </li>
               </ul>

        </div>
    </div>
    </div>
        <div class="zimu">
        <ul>
            <li v-for="(item,index) in list2" :key="index" @click="sel(index)">{{item}}</li>
        </ul>
    </div>
        <div class="searchList" v-show="cityName">
            <ul>
                <li v-for="item in searchList"  @click="selectCity(item)">{{item.name}}</li>
                <p class="searchFalse" v-show="!searchList.length">没有搜索到</p>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll';
    import {mapMutations} from 'vuex';
    export default {
        name: "cityList",
        data(){
            return {
                list2:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
                list:[],
                cityName:'',
                searchList:[],
                tiemr:null
            }
        },
        created(){
            this.$ajax.get('/city.json').then(response=>{
                    const resp=response.data;
                    this.list=resp.data.cities;
            }).catch(err=>{
                console.log(err);
            })
        },
        mounted() {
            if(!this.my){
                this.my=new Bscroll(this.$refs.wrappers,{
                    click:true,
                    probeType: 3
                })
            }else{
                this.my.refresh();
            }
        },
        methods:{
            ...mapMutations(['addCity']),
            sel(index){
                const ele=this.$refs.ziMu;
                this.my.scrollToElement(ele[index],300);
            },
            selectCity(city){
                this.addCity(city.name);
                this.$router.push('/classDetail');
            }
        },
        watch:{
           cityName(){
               if(this.timer){
                   clearInterval(this.timer);
               }
               this.timer=setTimeout(()=>{
                   const result=[];
                   for(let i in this.list){
                       this.list[i].forEach((item)=>{
                           if(item.name.indexOf(this.cityName)!==-1||item.spell.indexOf(this.cityName)!==-1){
                               result.push(item);
                           }
                       })
                   }
                   this.searchList=result;
               },100)
           }
        }
    }
</script>

<style scoped>
.current_city{
    margin-top: 0.1rem;
    width: 100%;
    line-height: 0.4rem;
    background: #cccccc;
    color: #fff;
    font-size: 0.28rem;
    padding: 0.1rem;
}
.search{
    width: 100%;
}
.search input{
    width: 100%;
    padding: 0.2rem 0.1rem;
    text-align: center;
    color: #000;
    font-size: 0.28rem;
    background: #cccccc;
}
    .city_select{
        width: 100%;
        padding: 0.1rem;
        overflow: hidden;
    }
.city_select>div{
    width: 30%;
    float: left;
    margin: 0.1rem;
    color: #000000;
    font-size: 0.28rem;
    text-align: center;
    padding: 0.1rem;
    border: solid 2px #cccccc;
}
    #city{
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0.3rem;
        overflow: hidden;
    }

    .city ul li{
         line-height: 0.8rem;
         color: #000;
         font-size: 0.28rem;

     }
        .city ul li .city1{
            padding-left: 0.1rem;
            border-bottom: solid 1px #ccc;
        }

            .zimu>ul{
                position: fixed;
                top: 50%;
                right: 0.2rem;
                transform: translateY(-50%);
            }
        .zimu>ul li{
            width: 1rem;
            line-height: 0.32rem;
            text-align: center;
            color: #000;
            font-size: 0.28rem;
        }
            .searchList{
                position: absolute;
                top: 1.6rem;
                left: 0;
                right: 0;
                bottom: 0;
                z-index:100;
                background: #ccc;
            }
                .searchList>ul li{
                    width: 100%;
                    line-height: 0.32rem;
                    text-align: left;
                    color: #000;
                    font-size: 0.28rem;
                    background: #fff;
                }
            .searchFalse{
                color: #000;
                font-size: 0.28rem;
                background: #fff;
            }
    /*
            methods:{
                changeActive(item){
                    this.filter=item;
                }
            }
            computed:{
                计算属性监听数据的变化并返回指定的数据显示在页面上
                    change(){
                        if(this.filter==='all'){
                            return this.list;
                        }
                        var check=this.filter='complete',
                        return this.list.filter((item)=>{
                            check===item.checked
                        })
                    }
            }
    */
</style>
