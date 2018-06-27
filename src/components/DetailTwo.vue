<template>
<div>
  <myheader><div>SAINT&nbsp;LAURENT</div></myheader>
  <div class="box"></div>
  <swiper-slide v-for="(img,index) in navImg" :key="index"><img :src="img"></swiper-slide>


  <ul>
    <router-link class="items" tag="li" v-for="(cls,index) in calssess" :key="index" :to="{name:'toDetail',params:{bid:index+1} }">
      <!--{{cls.storeId}}-->
      <div class="img"><img :src="cls.imgSrc" ></div>
      <div class="title">{{cls.goodTitle}}</div>
      <div class="introduce">{{cls.title}}</div>
      <b>￥{{cls.price*0.75}}</b>
      <div class="unsale">￥{{cls.price}}</div>
    </router-link>
  </ul>

  <div class="box"></div>
  <myfooter></myfooter>
</div>
</template>

<script>
  import DetailHeader from './DetailHeader'
  import {getBrand,getclassify} from "../api/getData"
  import DetailFooter from './DetailFooter'
  import Classify from './Classify'
  export default {
    name: 'DetailTwo',
    components: {
      myheader: DetailHeader,
      myfooter: DetailFooter,
      Classify
    },
    data(){
      return {
        swiperOption: {},
        calssess:[],
        navImg:[],
        newString:[],
      }
    },
    created(){
      this.getImg();
      this.getData();
    },
    methods:{
      getImg(){
        getBrand().then(res=>{
          this.navImg=res.data[0].women.navImg;
          this.newString= this.$route.params.msg;
          // console.log(res.data[0].man.navImg)
          // console.log(this.$route.params.msg);
        }).catch(err=>{
          console.log(err)
        });
      },
      getData(){
        getclassify().then(res=>{
          this.calssess=res.data;
          // console.log(res.data);
        }).catch(error=>{
          console.log(error);
        })
      },
    }

  }
</script>

<style scoped>
  ul li{width:45%; font-size: 14px; margin: 0 2.5%; display: inline-block; padding-bottom: 5px}
  ul li img{width: 100%}
  .img{height: 180px;}
  .img img {width: 100%}
  .introduce{height: 40px;}
  .unsale{color: #999; text-decoration: line-through}
  .title{color: #333; padding-bottom: 5px}
  .box{width: 100%;height: 50px;float: left}
  img {width: 100%}
  .items{box-sizing: border-box;margin-top: 3px;text-align: center}
</style>
