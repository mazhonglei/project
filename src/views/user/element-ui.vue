<template>
    <div id="element">
        <el-steps :active="activeData" align-center >
            <el-step title="步骤1" description="这是1"></el-step>
            <el-step title="步骤2" description="这是2"></el-step>
            <el-step title="步骤3" description="这是3"></el-step>
            <el-step title="步骤4" description="这是4"></el-step>
        </el-steps>
        <el-tabs :tab-position="tabPosition" style="height: 200px;" v-model="activeName" @tab-click="handClick" :before-leave="changeTab">
            <el-tab-pane label="用户管理" name="0" >
                用户管理
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="1" >配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="2" >角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="3">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "element-ui",
        data(){
            return {
                activeData:0,
                tabPosition: 'left',
                activeName:"0",
                input:""
            }
        },
        methods:{
            handClick(tab){
                this.activeData=tab.name - 0;
                console.log(tab.name);
            },
            changeTab(activeName, oldActiveName){
                if(oldActiveName==="0"&&!this.input){
                    this.$message({
                        type:'error',
                        message:"请先输入内容"
                    });
                    return false;
                }
                this.input="";
            }
        }
    }
</script>

<style scoped>

</style>
