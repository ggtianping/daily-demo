<template>
  <div class="login">
    <div class="login_title">
      <img src="../assets/KOHLER.png" alt="">
      <h1>活动信息收集平台</h1>
    </div>
    <div class="login_box">
      <ul class="tabs">
        <!--eslint-disable-next-line-->
        <li
          class="li-tab"
          v-for="(item, index) in tabsParam"
          @click="toggleTabs(index)"
          :class="{ active: index == nowIndex }"
        >
          {{ item }}
        </li>
      </ul>
      <div class="divTab" v-show="nowIndex === 0">
        <div class="qrcode_box">
          <img :src='qrcode' alt="">
        </div>
        <p>使用微信扫一扫</p>
      </div>
      <div class="divTab" v-show="nowIndex === 1">
        <div class="pwd_box">
            <el-form
          :label-position="labelPosition"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入您的账号"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="请输入您的密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" @click="login('ruleForm')"
              >登录</el-button>
          </el-form-item>
        </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login",
  data() {
    return {
      labelPosition: "top",
      qrcode:require('../assets/qrcode.png'),
      tabsParam: ["经销商登录", "设计公司登录"], //（这个也可以用对象key，value来实现）
      nowIndex: 0, //默认第一个tab为激活状态
      ruleForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          { required: true, message: "请输入您的账号", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入您的密码", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    toggleTabs: function (index) {
      this.nowIndex = index;
    },
    login() {
      this.$router.push('/home');
      // let{name,password} = this.ruleForm;
      // this.$http({
      //   methods: "post",
      //   url: "/get_login",
      //   data: {
      //     user: name,
      //     password:password
      //   },
      // }).then(res=>{
      //     console.log(res);
      //     let{code} = res.data;
      //     if(code == 200){
      //         sessionStorage.setItem('username',name);
      //         this.$router.push('/home');
      //     }
      // });
    },
  },
};
</script>

<style>
.login{
  width:350px;
  margin: 0 auto;
  padding-top: 7%;
}
.login_title{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
}
.login_title h1{
  font-size: 25px;
  font-weight: 300;
}
.login_title img{
  height:25px;
}
.active {
  background:#4284F4;
  color:#fff;
}
.tabs {
  color: #4284F4;
    margin: 0;
    padding: 0;
    display: block;
    width: 90%;
    margin: 0 auto;
}
.li-tab {
    width:50%;
    display: inline-block;
    text-align: center;
    padding: 10px 0;
    white-space: nowrap;
    border-radius: 10px 10px 0 0;
}
.divTab{
  width: 100%;
  /* padding: 30px 15px; */
  box-sizing: border-box;
  /* height: 300px; */
}
.divTab .qrcode_box,.pwd_box{
      border: 1px solid #4284F4;
    display: block;
    border-radius: 7px;
}
.pwd_box{
  padding: 20px;
}
.el-form--label-top .el-form-item__label{
  padding:0 !important;
}
.divTab .qrcode_box img{
  display: block;
  margin: 40px auto;
}
.divTab p{
  text-align: center;
}
.login_box{
  background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 15px;
    border-radius: 3px;
}
.login_btn{
  width:100%;
  border-radius: 30px;
}
</style>
