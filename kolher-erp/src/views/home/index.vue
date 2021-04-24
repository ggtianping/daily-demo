<template>
  <div class="home">
    <el-container>
      <!-- 左侧导航栏 -->
      <el-aside width="200px">
        <Nav />
      </el-aside>
      <el-container>
        <!-- header -->
        <el-header>
          <h1>活动信息收集平台</h1>
          <el-button type="primary" round @click="exit">退出登录</el-button>
        </el-header>
        <!-- content -->
        <el-main>
          <div class="content_header">         
          </div>
          <div class="home_content">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Nav from "./Nav";
export default {
  data() {
    return {};
  },
  components: {
    Nav
  },
  methods: {
    exit() {
      this.$router.push("/login");
    },
    open() {
      this.$message.error("cuo");
    },
  },
};
</script>


<style>
.el-form-item {
  margin-right: 15px;
}
.el-form--label-top .el-form-item__label {
  padding: 0 0 10px;
}
.content_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-header {
  background: #fff;
  border: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: none;
}
.el-header {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  border: 1px solid #dddddd;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
  height: calc(100vh);
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.home_logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-menu-item {
  position: relative;
}
.el-menu-item.is-active {
  background: #f4f8f9;
}
.el-menu-item.is-active::after {
  content: "";
  display: block;
  width: 3px;
  height: 100%;
  background: #409eff;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 3px 0 0 3px;
}
.el-page-header__content {
  border-bottom: 2px solid #409eff;
  font-size: 14px;
}

.el-table .cell {
  white-space: pre-line;
}
.content_box {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 1px 0px 16px 0px #ddd;
  margin-top: 20px;
}
.red {
  color: red;
}
.gray {
  color:#B7B7B7;
}
.align{
  width:20px;
  display: flex;
  align-items: center;
  margin-right: 5px;
}
.small{
  font-size: 10px;
}
.middle{
  font-size: 12px;
}
input::placeholder{
		font-size:13px;
	} 
</style>