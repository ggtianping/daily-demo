<template>
  <div class="left_nav">
    <div class="home_logo">
      <img src="@/assets/KOHLER.png" alt="" />
    </div>
     <!-- 左侧导航 --> 
      <el-menu
        :default-active="$route.path"  exact
        class="el-menu-vertical-demo" router>
       <NavItem v-for="v in items" :key="v.url" :item="v" :path="v.url"/>
      </el-menu>
  </div>
     
</template>
<style>
.left_nav{
  height:calc(100vh);
}
</style>

<script>
import NavItem from './NavItem'
export default {
  data(){
    return {
     items:[{
        name:'千城千面',
        url:'/city'
      },{
        name:'核销活动',
        url:'/hx_active'
      }]
    }
  },
  components:{
    NavItem
  },
  // mounted(){
  //   this.getNav();
  // },
  methods:{
    // getNav(){
    //   this.$http.get('/get_nav').then(res=>{
    //     console.log(res);
    //     let {code,result} = res.data;
    //     if(code == '200'){
    //       this.items = result;
    //     }
    //   })
    // }
  }
}
</script>

<style>

</style>