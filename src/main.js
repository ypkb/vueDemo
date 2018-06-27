// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import index from './components/index'
import Collect from './components/Collect'
import Logo from './components/Logo'
import Category from './components/Category'
import Mine from './components/Mine'
import Detail from './components/Detail'
import DetailTwo from './components/DetailTwo'
import Classify from './components/Classify'
import Search from './components/Serch'
import MyDetail from './base/Detail'
import guest from './components/Guest'
import Screen from './components/Screen'
import Success from './components/Success'
import Qq from './components/Qq'





import VueRouter from 'vue-router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper,);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router =new VueRouter({
  routes:[
    {path:'/index',component:index},
    {path:'/collect',component:Collect},
    {path:'/logo',component:Logo},
    {path:'/category',component:Category},
    {path:'/classify',component:Classify},
    {path:'/mine',component:Mine},
    {path:'/mysearch',component:Search},
    {path:'/mydetail',component:MyDetail,name:'toDetail',/* meta:{keepalive:true}*/},
    {path:'/detail/:bid',component:Detail,name:'detail'},
    {path:'/detailtwo',component:DetailTwo,name:'detailtwo'},
    {path:'/guest',component:guest},
    {path:'/qq',component:Qq},
    {path:'/screen',component:Screen},
    {path:'/success',component:Success},
    {path:'/',redirect:'/index'}
  ]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});
