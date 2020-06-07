<template>
  <div class="login_content">
      <div class="login">
        <el-form  label-width="0px" class="form_login" ref="loginFormRef111" :model="login_form" :rules="loginFormRules">
        <el-form-item prop="userName">
          <el-input prefix-icon="el-icon-circle-plus-outline" v-model="login_form.userName"></el-input>
        </el-form-item>
         <el-form-item prop="passWord">
          <el-input  prefix-icon="el-icon-circle-plus-outline" v-model="login_form.passWord"></el-input>
        </el-form-item>
       <el-form-item class="btn_box">
         <el-button type="primary">登录</el-button>
         <el-button type="info" @click="rest">重置</el-button>
       </el-form-item>
        </el-form>
      </div>
  </div>
  
</template>

<script>

// var tem={template:"<li>niap</li>"}

import {req,test} from "../api/api"
export default {
  data () {
    return {
      login_form:{
        userName:"12",
        passWord:"123"
      },
      loginFormRules:{
         userName: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          passWord:[
             { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
      }
    }
  },

  methods:{
    async getData(){
       let data =  await req()
       console.log(data)
    },
     async get(){
         let data =  await test()
         console.log(data)
     },
     rest(){
      //  console.log(this)
       this.$refs.loginFormRef111.resetFields()
     }
  },
}
</script>
<style scoped>
  .login_content{
    width: 100%;
    height:100%;
    background-color: #2b4b6b;
  }
  .login{
    width: 450px;
    height:300px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .form_login{
    position: absolute;
    bottom: 0;
    width:100%;
    padding: 20px;
    box-sizing: border-box;
  }
  .btn_box{
    display: flex;
    justify-content: center;
  }
</style>
