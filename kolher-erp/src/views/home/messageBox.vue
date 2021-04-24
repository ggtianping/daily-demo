<template>
  <div>
    <div>
      <div>
        <p>*如需修改图片文件，请重新打包上传覆盖(全量覆盖)</p>
        <i class="el-icon-circle-close" @click="closeMesbox"></i>
      </div>
      <div>
        <div>
          <p>千城千面</p>
          <div>
            <p>千城千面千城千面</p>
            <el-progress
              :percentage="percentage"
              :color="customColor"
            ></el-progress>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传 .zip</el-button>
            </el-upload>
          </div>
          <div>
            <el-button size="small" type="primary">上  传</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popup: 0,
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
    handlemove() {},
    closeMesbox() {},
  },
};
</script>
