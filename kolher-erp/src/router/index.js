import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'home'
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect:'/city',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
    children:[
      {
        path: '/index',  //首页
        name: 'index',
        meta:{title:'首页'},
        component: () => import( '../views/home/index/index.vue')
      },{
        path: '/city',  //千城千面
        name: 'city',
        meta:{title:'千城千面'},
        component: () => import( '../views/home/city/index.vue')
       
      },{
        path: '/hx_active',  //核销活动
        name: 'hx_active',
        meta:{title:'核销活动'},
        component: () => import( '../views/home/hx_active/index.vue')
      },
      {
        path: '/city/add',  //新增页面
        name: 'cityAdd',
        meta:{title:'新增'},
        component: () => import( '../views/home/city/add.vue')
      },
      {
        path: '/hx_active/add',  //新增页面
        name: 'hx_Add',
        meta:{title:'核销新增'},
        component: () => import( '../views/home/hx_active/add.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
});
// router.beforeEach(function(to,from,next){
//   if(!sessionStorage.getItem('username')){
//     if(to.path !=='/login'){
//       next('/login')
//     }
//   };
//   next();
// })

export default router
