<template>
  <div class="index">
    <el-container>
      <el-header>
        <div class="logo"></div>
        <div class="title">
          <span class="icon-menu title-left"></span>
          <span class="title-middle">黑马头条后台管理系统</span>
          <div class="admin">
            <span>欢迎你：{{user.nickname}}</span>
            <span>退出</span>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span slot="title">个人资料</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                <span slot="title">我的关注/收藏</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-menu"></i>
                <span slot="title">文章列表</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-menu"></i>
                <span slot="title">文章发布</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>栏目管理</span>
              </template>
              <el-menu-item index="3-1">
                <i class="el-icon-menu"></i>
                <span slot="title">栏目列表</span>
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-menu"></i>
                <span slot="title">栏目管理</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <h2>欢迎你使用后台管理系统</h2>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getUserDetails } from '@/api/users.js'

export default {
  mounted () {
    let userId = localStorage.getItem('dh_user_id_PC')
    if (!userId) {
      this.$router.push('/login')
    } else {
      getUserDetails(userId)
        .then(rsp => {
          if (rsp.status === 200) {
            this.user = { ...rsp.data.data }
          }
        })
    }
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  }
}
</script>

<style lang="less">
*{
  box-sizing: border-box;
}
.index{
  height: 100%;
  >.el-container{
    height: 100%;
    .el-header{
      padding: 0;
      background-color: #545c64;
      display: flex;
      height: 76px !important;
      .logo{
        width: 250px;
        height: 76px;
        background-image: url('../assets/images/logo.png');
        background-repeat: no-repeat;
        background-size: 430px 76px;
        background-color: #ffffff;
      }
      .title{
        width: 80%;
        height: 76px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        .title-left{
          width: 76px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 46px;
        }
        .title-middle{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 34px;
          font-weight: bold;
        }
        .admin{
          width: 200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 22px;
        }
      }
    }
    >.el-container{
      height: 100%;
      .el-aside{
        background-color: #545c64;
        .el-menu{
          .el-submenu__title{
            height: 70px;
          }
          span{
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
      .el-main{
        background-color: #ffffff;
        h2{
          text-align: left;
          font-family: "Microsoft Yahei";
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
}
.el-menu{
  text-align: left;
}
</style>
