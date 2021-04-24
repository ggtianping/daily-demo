<template>
  <div>
    <div class="content_header">
      <Breadcrumb />
      <div>
        <el-button type="primary" round @click="add">
          <i class="el-icon-plus"></i>新增
        </el-button>
        <!-- <el-button @click="open" type="primary" round
                ><i class="el-icon-plus"></i>保存</el-button
              > -->
      </div>
    </div>
    <div class="content_box">
      <!-- <Table /> -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :cell-class-name="addClass"
      >
        <template v-for="(item, index) in bace_tile">
          <el-table-column
            :label="item.label"
            :key="index"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              {{ scope.row[item.prop] ? scope.row[item.prop] : "-" }}
            </template>
          </el-table-column>
        </template>
        <el-table-column fixed="right" label="操作" width="100">
          <template>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
// import Table from "./../Table.vue";
import Breadcrumb from "./../Breadcrumb.vue";
export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      bace_tile: [
        { label: "ID", prop: "id", type: "show" },
        { label: "活动时间", prop: "date", type: "show" },
        { label: "城市", prop: "city", type: "show" },
        { label: "活动类型", prop: "act_type", type: "show" },
        { label: "活动名称", prop: "act_name", type: "show" },
        { label: "状态", prop: "stats", type: "show" },
      ],
      tableData: [
        {
          id: "12345555",
          date: "2016-05-02~2016-05-02",
          city: "上海；杭州；苏州",
          act_type: "满额福利",
          act_name: "2020春季促销千城千面",
          isGroup: "是",
          isDivide: "是",
          divideTime: "2016-05-02~2016-05-02",
          miniProgram: "是",
          H5: "是",
          stats: "等待审核",
        },
        {
          id: "12345555",
          date: "2016-05-02~2016-05-02",
          city: "上海；杭州；苏州",
          act_type: "满额福利",
          act_name: "2020春季促销千城千面",
          isGroup: "是",
          isDivide: "是",
          divideTime: "2016-05-02~2016-05-02",
          miniProgram: "是",
          H5: "是",
          stats: "等待审核",
        },
        {
          id: "12345555",
          date: "2016-05-02~2016-05-02",
          city: "上海；杭州；苏州",
          act_type: "满额福利",
          act_name: "2020春季促销千城千面",
          isGroup: "是",
          isDivide: "是",
          divideTime: "2016-05-02~2016-05-02",
          miniProgram: "是",
          H5: "是",
          stats: "等待审核",
        },
        {
          id: "12345555",
          date: "2016-05-02~2016-05-02",
          city: "上海；杭州；苏州",
          act_type: "满额赠",
          act_name: "2020春季促销千城千面",
          isGroup: "是",
          isDivide: "是",
          divideTime: "2016-05-02~2016-05-02",
          miniProgram: "是",
          H5: "是",
          stats: "等待审核",
        },
      ],
    };
  },
  mounted() {
    // console.log(this.tableData);
  },
  methods: {
    add() {
     this.$router.push("/hx_active/add");
    },
    addClass({ row, columnIndex }) {
      if (columnIndex == 5) {
        if (row.stats == "等待审核") {
          return "red";
        } else if (row.stats == "已通过") {
          console.log("123");
          return "gray";
        }
      }
    },
  },
};
</script>

<style>
.content_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
