<template>
    <div>
      <class-header class="header">
        <router-link to="/mysearch" class="search">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="请输入商品" disabled>
        </router-link>
      </class-header>
      <div class="content">
        <div class="screen">
          <span>共{{this.calssess.length}}件商品</span>
          <router-link to="screen" tag="button">筛选</router-link>
        </div>
        <ul>
          <router-link  tag="li" v-for="(cls,index) in calssess" :key="index" :to="{name:'toDetail',params:{bid:index+1} }">
            <!--{{cls.storeId}}-->
            <div class="img"><img :src="cls.imgSrc" alt=""></div>
            <div class="title">{{cls.goodTitle}}</div>
            <div class="introduce">{{cls.title}}</div>
            <b>￥{{cls.price*0.75}}</b>
            <div class="unsale">￥{{cls.price}}</div>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
  import ClassHeader from "../base/ClassHeader"
  import {getclassify} from "../api/getData";

  export default {
        name: "Classify",
      components:{
        ClassHeader
      },
      data(){
        return {
          calssess:[],
          isShow:false,

        }
      },
      created () {
        this.getData();
      },
      mounted(){

      },
      methods:{
          getData(){
            getclassify().then(res=>{
              this.calssess=res.data;
              // console.log(res.data)
            }).catch(error=>{
              console.log(error);
            })
          },

      }
    }
</script>

<style scoped>
  .content{position:relative; width: 100%; left: 0; top: 40px; right: 0; bottom: 0; z-index: 10;background: #fff;}
  .header{position: fixed;left: 0; top: 0; z-index: 20;}
  ul li{width:45%; font-size: 14px; margin: 0 2.5%; display: inline-block; padding-bottom: 5px}
  ul li img{width: 100%}
  .search{width:60%; height: 30px; background: white; float: left; margin-left: 10%; margin-top: 5px; border-radius: 5px;
  line-height: 30px;}
  .img{height: 180px;}
  .introduce{height: 40px;}
  .title{color: #333; padding-bottom: 5px}
  .unsale{color: #999; text-decoration: line-through}
  .icon-sousuo{float: left; margin-left: 10px}
  input{position: absolute;width:80px;top: 5px;left:110px; margin:7px 0px 0px 10px; border: none; outline: none; background: #fff}
  .screen{width:100%; height: 50px; border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;line-height: 50px;
    text-align: center}
  .screen button{width: 50px; height: 26px; float: right; background: #fff; outline: none; border:1px solid #ddd;
    margin: 12px 10px;}
</style>
