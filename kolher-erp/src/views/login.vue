<template>
  <div class="login">
    <div class="login_title">
      <!-- <img src="../assets/logo.png" alt=""> -->
      <h1>活动信息收集平台</h1>
    </div>
    <div class="login_box">
      <ul class="tabs">
        <!--eslint-disable-next-line-->
        <li
          class="li-tab"
          v-for="(item, index) in tabsParam"
          @click="toggleTabs(index)"
          :class="{ active: index != nowIndex }"
        >
          {{ item }}
        </li>
      </ul>
      <div class="divTab" v-show="nowIndex === 0">我是tab1</div>
      <div class="divTab" v-show="nowIndex === 1">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
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
            <el-button type="primary" @click="login('ruleForm')"
              >立即创建</el-button
            >
          </el-form-item>
        </el-form>
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
      tabsParam: ["经销商登录", "设计公司登录"], //（这个也可以用对象key，value来实现）
      nowIndex: 0, //默认第一个tab为激活状态
      ruleForm: {
        name: "123456",
        password: "123456",
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
        let{name,password} = this.ruleForm;
      this.$http({
        methods: "post",
        url: "/get_login",
        data: {
          user: name,
          password:password
        },
      }).then(res=>{
          console.log(res);
          let{code} = res.data;
          if(code == 200){
              sessionStorage.setItem('username',name);
              this.$router.push('/home');
          }
      });
    },
  },
};
</script>

<style>
.active {
  background: #eee;
}
.tabs {
  width: 200px;
  height: 20px;
  font: 0;
  padding: 0;
}
.li-tab {
  width: 50%;
  height: 100%;
  display: inline-block;
  text-align: center;
}
.divTab {
  width: 200px;
  height: 300px;
}
</style>
