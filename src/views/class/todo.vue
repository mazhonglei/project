<template>
    <div id="todo">
        <div class="todoList">
            <input type="text" placeholder="请输入" class="input1" v-model="todo"><input type="button" value="点击" class="input2" @click="add()">
        </div>
       <ul class="todoList1">
           <li v-for="(item,index) in filterTodo" :key="index">
               <img src="../../assets/images/duihao.png" alt="" v-show="item.checked" @click="isShow(item)">
               <img src="../../assets/images/duihaoLight.png" alt="" v-show="!item.checked" @click="isHide(item)">
              <p v-show="item.checked===true">{{item.title}}</p>
              <p :class="{line:item.checked===false}" v-show="item.checked===false">{{item.title}}</p>
           </li>
           <div class="todoList2" >
               <div v-for="(states,index) in state" :key="index" @click="changeCheck(states)" :class="{act6:filter===states}">{{states}}</div>
           </div>
       </ul>
        <p>{{totalList}}</p>
    </div>
</template>

<script>
    export default {
        name: "todo",
        data(){
            return {
                todoList:"",
                list:[],
                state:['all','active','completed'],
                filter:'all'
            }
        },
        computed:{
            todo:{
                get(){
                    return this.todoList;
                },
                set(v){
                     this.todoList=v;
                }
            },
            totalList(){
               return this.list.filter((item)=>item.checked===true
                ).length;
            },
            filterTodo(){
                if(this.filter==='all'){
                    return this.list;
                }
                let check=this.filter==='completed';
                return this.list.filter(item=>check===item.checked);
            }
        },
        methods:{
            changeCheck(states){
             this.filter=states;
            },

            add(){
                this.list.push({
                    title:this.todoList,
                    checked:true
                });
                this.todoList="";
            },
            isShow(item){
                item.checked=false;
            },
            isHide(item){
                item.checked=true;
            }
        }
    }
</script>

<style scoped>
    .act6{
        border: solid 1px red;
    }
    .line{
        text-decoration: line-through;
    }
    .todoList{
        width: 100%;
        overflow: hidden;
    }
    .todoList .input1{
        width: 70%;
        height: 1rem;
        background-color: #cccccc;
        font-size: 0.36rem;

        margin-top: 0.1rem;
    }
    .todoList .input2{
        width: 20%;
        height: 1rem;
        color: #000;
        font-size: 0.36rem;
        margin-top: 0.1rem;
    }
    .todoList1 li{
        width: 100%;
        overflow: hidden;
        margin-top: 0.1rem;
    }
    .todoList1 li p {
        color: #000;
        font-size: 0.24rem;
        overflow: hidden;
        float: left;
        line-height: 0.4rem;
    }
    .todoList1 li img{
        width: 0.4rem;
        float: left;
        margin-right: 0.1rem;
    }
    .todoList2{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .todoList2>div{
        width: 20%;
        color: #000;
        font-size: 0.36rem;
        text-align: center;
    }
</style>
