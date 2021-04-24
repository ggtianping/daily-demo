<template>
  <div>
    <!-- 无子级 -->
      <el-menu-item :index="item.url">
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
  </div>
     
</template>

<script>
export default {
  name:'NavItem',
  data(){
    return {
      items:[]
    }
  },
  props:['item','url']  //父传子参数
}
</script>

<style>

</style>