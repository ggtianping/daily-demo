<template>
  <div>
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
      <div style="width: 60%">
        <h1>经销商名称</h1>
        <!-- section1 -->
        <div>
          <el-form ref="form" :model="form" :rules="rules">
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
                  v-model="value1"
                  type="daterange"
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                >
                </el-date-picker>
              </el-form-item>
            </div>
            <p>显示平台</p>
            <el-checkbox v-model="checked1">小程序</el-checkbox>
            <el-checkbox v-model="checked2">H5</el-checkbox>
          </el-form>
        </div>
        <el-divider></el-divider>
        <!-- section2 -->
        <div>
          <div class="prizeBox">
            <div style="padding-right: 20%">
              <img src="@/assets/prize.png" alt="" />
            </div>
            <h1>奖品顺序按图片表示填写</h1>
          </div>
          <div>
            <div>
              <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column type="index" width="50"> </el-table-column>
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址"> </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <!-- section3 拼团 -->
        <div>
          <div>
            <p>是否参与拼团<span class="red">*</span></p>
            <el-radio v-model="isGroup" label="1">参与</el-radio>
            <el-radio v-model="isGroup" label="2">不参与</el-radio>
          </div>
          <div>
            <p>拼团活动时间<span class="red">*</span></p>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
          <div>
            <h1>拼团商品-1</h1>
            <div>
              <div class="selectBox">
                <el-form :label-position="labelPosition">
                  <el-form-item label="拼团商品名称" prop="name">
                    <el-input
                      class="width"
                      v-model="postName"
                      placeholder="科勒c3-150智能坐便盖板"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="活动名称" prop="name">
                    <el-input
                      class="width"
                      v-model="agency_activeName"
                      placeholder="上海 维亚S600尊享款 五人团：1999元"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <!-- section4 裂变 -->
        <div>
          <div>
            <p>是否参与裂变<span class="red">*</span></p>
            <el-radio v-model="isDivide" label="1">参与</el-radio>
            <el-radio v-model="isDivide" label="2">不参与</el-radio>
          </div>
          <div>
            <h2>分享海报 -1</h2>
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
        <!-- section5 备注及附件 -->
        <div>
          <el-form
            :label-position="labelPosition"
            ref="form"
            :model="form"
            label-width="80px"
          >
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
          </el-form>
        </div>
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
      postName: "",
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
      rows: "5",
      labelPosition: "top",
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        city:[
          {required:true,message:"请选择活动城市"}
        ]
      },
      desc: "",
      radio: "1",
      isGroup: "1",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      checked1: false,
      checked2: true,
      value1: "",
      value2: "",
      agency_activeName: "",
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
    };
  },
  mounted() {
    // console.log(this.tableData);
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
</style>
