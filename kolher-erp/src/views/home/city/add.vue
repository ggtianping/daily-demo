<template>
  <div class="add_container">
    <div class="content_header">
      <Breadcrumb />
      <div>
        <el-button type="primary" round @click="saveNew"
          >保存并继续新增</el-button
        >
        <el-button @click="saveBack" type="primary" round>保存</el-button>
      </div>
    </div>
    <div class="content_box">
      <div style="width:80%;">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :label-position="labelPosition"
      >
        <h1>经销商名称</h1>
        <div class="selectBox">
          <el-form-item label="城市">
            <el-select
              class="width"
              v-model="form.phonecity"
              placeholder="请选择"
              @change="changeSelect"
            >
              <el-option
                v-for="(item, index) in cityOptions"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="展厅">
            <el-select
              v-model="form.phoneType"
              placeholder="请选择"
              class="width"
            >
              <el-option
                v-for="(item, index) in typeOptions"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </div>
        <div class="selectBox">
          <el-form-item label="活动名称" prop="name">
            <el-input
              class="width"
              v-model="agency_activeName"
              placeholder="请输入活动名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-date-picker
              v-model="act_time1"
              type="daterange"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <div class="check_show">
          <p>显示平台(多选)<span class="red">*</span></p>
          <el-checkbox v-model="isMiniprogram">小程序</el-checkbox>
          <el-checkbox v-model="isH5">H5</el-checkbox>
        </div>
        <el-divider></el-divider>
        <div class="prize_all">
          <div class="prizeBox">
            <div style="padding-right: 20%">
              <img src="@/assets/prize.png" alt="" />
            </div>
            <h1>奖品顺序按图片表示填写</h1>
          </div>
          <div>
            <div class="prizeItem">
              <div class="align"></div>
              <div class="width1">
                <p class="middle">大转盘奖品名称<span class="red">*</span></p>
                <p class="gray small">示例：戴森吹风机HD01戴森吹</p>
              </div>
              <div class="width1">
                <p class="middle">奖品描述</p>
                <p class="gray small">示例：消费满30,000元可领取</p>
              </div>
              <div class="width2">
                <p class="middle">库存数量<span>*</span></p>
                <p class="gray small">最小为1</p>
              </div>
              <div class="width2">
                <p class="middle">中奖概率<span>*</span></p>
                <p class="gray small">概率0-100</p>
              </div>
            </div>
            <div v-for="(item, index) in prizeList" :key="index">
              <div class="prizeItem">
                <div class="align">{{ index + 1 }}.</div>
                <el-input
                  class="width1"
                  placeholder="请输入内容"
                  v-model="prizeList.prizeName"
                  clearable
                ></el-input>
                <el-input
                  class="width1"
                  placeholder="请输入内容"
                  v-model="prizeList.prizeName"
                  clearable
                ></el-input>
                <el-input
                  class="width2"
                  placeholder="100"
                  v-model="prizeList.prizeName"
                ></el-input>
                <el-input
                  class="width2"
                  placeholder="100"
                  v-model="prizeList.prizeName"
                ></el-input>
              </div>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="groupBox">
          <div style="margin-bottom:20px;">
            <p>是否参与拼团<span class="red">*</span></p>
            <el-radio v-model="isGroup" label="1">参与</el-radio>
            <el-radio v-model="isGroup" label="2">不参与</el-radio>
          </div>
          <div>
            <p>拼团活动时间<span class="red">*</span></p>
            <el-date-picker
              v-model="groupTime"
              type="daterange"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
          <div class="groupItem">
            <p>拼团商品名称-1</p>
            <div>

            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div>
          <div>
            <p>是否参与裂变<span class="red">*</span></p>
            <el-radio v-model="isDivide" label="1">参与</el-radio>
            <el-radio v-model="isDivide" label="2">不参与</el-radio>
          </div>
          <div>
            <p>分享海报 -1</p>
            <el-form :label-position="labelPosition">
              <div class="selectBox">
                <div class="shareItems">
                  <div class="share_input">
                    <p>活动名称<span class="red">*</span></p>
                    <span class="small">示例：上海 维亚S600尊享款</span>
                  </div>
                  <input
                    class="width el-input__inner"
                    type="text"
                    v-model="postName"
                    placeholder="上海 维亚S600尊享款"
                  />
                </div>
                <div class="shareItems">
                  <div class="share_input">
                    <p>活动名称<span class="red">*</span></p>
                    <span class="small"
                      >示例：上海 维亚S600尊享款五人团：1999元</span
                    >
                  </div>
                  <input
                    class="width el-input__inner"
                    type="text"
                    v-model="postName"
                    placeholder="上海 维亚S600尊享款 五人团：1999元"
                  />
                </div>
              </div>
              <el-button class="addPost" @click="addPost" round
                >添加分享海报</el-button
              >
            </el-form>
          </div>
        </div>
        <el-divider></el-divider>
        <!-- 附件 -->
        <div>
            <el-form-item label="备注">
              <el-input
                placeholder="请填写信息"
                type="textarea"
                :rows="5"
                v-model="desc"
              ></el-input>
            </el-form-item>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              multiple
              :limit="3"
              :file-list="fileList"
            >
              <p>附件</p>
              <el-button class="upload_btn" size="small" type="primary"
                >点击上传</el-button
              >
            </el-upload>
        </div>
      </el-form>
    </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "./../Breadcrumb.vue";
export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      ruleForm: {
        name: "",
        city: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        city: [{ required: true, message: "请选择活动城市" }],
      },
      labelPosition: "top",
      dealer: "经销商名称-1",
      cityOptions: ["上海", "苏州", "杭州"],
      cityObj: {
        上海: ["展厅1", "展厅2", "展厅3"],
        苏州: ["展厅1", "展厅2", "展厅3"],
        杭州: ["展厅1", "展厅2", "展厅3"],
      },
      typeOptions: [],
      form: {
        phonecity: "",
        phoneType: "",
      },
      act_time1: "",
      act_time2: "",
      isMiniprogram: true,
      isH5: false,
      prizeList: [
        {
          prizeName: "戴森吹风机HD01戴森吹",
          prizeDesc: "消费满30,000元可领取",
          prizeNum: "1000",
          prizeRate: "100",
        },
        {
          prizeName: "戴森吹风机HD01戴森吹",
          prizeDesc: "消费满30,000元可领取",
          prizeNum: "1000",
          prizeRate: "100",
        },
        {
          prizeName: "戴森吹风机HD01戴森吹",
          prizeDesc: "消费满30,000元可领取",
          prizeNum: "1000",
          prizeRate: "100",
        },
        {
          prizeName: "戴森吹风机HD01戴森吹",
          prizeDesc: "消费满30,000元可领取",
          prizeNum: "1000",
          prizeRate: "100",
        },
        {
          prizeName: "戴森吹风机HD01戴森吹",
          prizeDesc: "消费满30,000元可领取",
          prizeNum: "1000",
          prizeRate: "100",
        },
        {
          prizeName: "戴森吹风机HD01戴森吹",
          prizeDesc: "消费满30,000元可领取",
          prizeNum: "1000",
          prizeRate: "100",
        },
      ],
      isGroup: "1",
      groupTime:'',

      // 裂变
      isDivide:'1',
      rows:'5',
      desc:'',
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    addPost() {
      console.log("add");
    },
    saveBack() {
      // 保存并返回
      this.$router.push("/city");
    },
    saveNew() {
      // 保存且停留
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    changeSelect() {
      this.form.phoneType = "";
      for (const k in this.cityOptions) {
        if (this.form.phonecity === this.cityOptions[k]) {
          this.typeOptions = this.cityObj[this.form.phonecity];
        }
      }
    },
  },
};
</script>
<style>
.addPost {
  color: #409eff;
  background: #fff;
  border: 1px solid #409eff;
}
.width5 {
  width: 100%;
}
.share_input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shareItems {
  margin-right: 15px;
  margin-bottom: 15px;
}
.share_input .small {
  font-size: 9px;
  color: #8d8d8d;
}
.upload_btn {
  width: 100%;
  background: #fff;
  color: #409eff;
  display: block;
  padding: 20px;
}
.el-upload {
  width: 100%;
}
.el-range-editor.el-input__inner {
  width: 300px;
}
.width {
  width: 300px;
}
.content_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content_box {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 1px 0px 16px 0px #ddd;
  margin-top: 20px;
}
.prizeBox {
  display: flex;
  align-items: center;
}
.selectBox {
  display: flex;
}
.prizeItem {
  width: 80%;
  display: flex;
  justify-content: start;
  align-content: center;
  margin-bottom: 8px;
}
.prizeItem .el-input {
  margin-right: 8px;
}
.width1 {
  width: 300px;
}
.width2 {
  width: 80px;
}
</style>
