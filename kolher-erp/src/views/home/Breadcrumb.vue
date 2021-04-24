<template>
  <div class="breadCrumb">
    <el-page-header @back="goBack" content="列表"> </el-page-header>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
