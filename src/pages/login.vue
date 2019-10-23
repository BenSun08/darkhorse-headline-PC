<template>
  <div class="login">
    <div class="login-container">
      <div class="avatar">
        <img src="../assets/images/avatar.jpg" alt="">
      </div>
      <div class="form-container">
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="icon-user-check"
              placeholder="请输入用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" prefix-icon="icon-key"
              type="password" placeholder="请输入密码"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginHandler(loginForm)">登录</el-button>
          </el-form-item>
        </el-form>
    ` </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/users.js'

export default {
  data () {
    return {
      loginForm: {
        username: '123456',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /\w/, message: '请输入合法用户ing', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在6~16个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginHandler (loginForm) {
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          login(loginForm)
            .then(rsp => {
              if (rsp.status === 200 && rsp.data.data) {
                localStorage.setItem('dh_user_token_PC', rsp.data.data.token)
                localStorage.setItem('dh_user_id_PC', rsp.data.data.user.id)
                this.$router.push(`/`)
              }
            })
        } else {
          this.$message.error('数据输入不合法')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  position: relative;
  .login-container{
    position: absolute;
    left: 50%;
    top: 248px;
    transform: translate(-50%, 0);
    width: 600px;
    height: 330px;
    background-color: #ffffff;
    .avatar{
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #ffffff;
      box-shadow: 0 0 5px #cccccc;
      img{
        width: 126px;
        height: 126px;
        border-radius: 50%;
      }
    }
    .form-container{
      position: absolute;
      left: 50%;
      top: 80px;
      transform: translate(-50%, 0);
      width: 500px;
      .el-form{
        /deep/.el-input{
          input{
            height: 50px;
            text-indent: 5px;
            font-size: 16px;
            color: black;
            background-color: #e8f0fe;
          }
          span{
            font-size: 24px;
          }
        }
        .el-button{
          width: 100%;
          height: 50px;
          font-size: 18px;
          font-family: "Microsoft YaHei";
        }
      }
    }
  }
}
</style>
