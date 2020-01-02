<template>
    <div id="commit">
        <form action="#" @submit.prevent="commit">
        <h3>表单提交</h3>
        <input type="text" v-model="txt"><br>
        <input type="radio" value="0" v-model="sex"><label>男</label>
        <input type="radio" value="1" v-model="sex"> <label>女</label><br>
        <input type="checkbox" value="vue" v-model="skill"><label>vue</label>
        <input type="checkbox" value="java" v-model="skill"><label>java</label>
        <input type="checkbox" value="react" v-model="skill"><label>react</label><br>
        <select name="" id="" v-model="na">
            <option v-for='item in names' :value="item.age">{{item.name}}</option>
        </select><br>
        <button type="submit">提交</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "userCommit",
        data(){
            return {
                txt:'',
                sex:'1',
                skill:['vue'],
                na:'2',
                names:[
                    {'age':1,'name':'赵'},
                    {'age':2,'name':'钱'},
                    {'age':3,'name':'孙'},
                    {'age':4,'name':'李'}
                ]
            }
        },
        methods:{
            commit(){
                alert(this.txt+","+this.sex+","+this.skill+","+this.na);
                this.txt=""
            }
        }
    }
</script>

<style scoped>
    #commit{
        padding: 0.2rem;
    }
    #commit input[type=text]{
        border: solid 1px red;
    }
    h3{
        color: #333333;
        font-size: 0.4rem;
        text-align: center;
  }
    #commit label{
        font-size: 0.4rem;
    }
</style>