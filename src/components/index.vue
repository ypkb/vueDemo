<template>
    <div class="div">
      <vue-pull-refresh :on-refresh="onRefresh">
      <myheader>
        <div class="h-name">T O P L I F E</div>
      </myheader>
      <router-link to="/mysearch" class="serch" >
        <span class="iconfont icon-sousuo"></span>
        &nbsp;&nbsp;探索你的精致生活
      </router-link>


      <!--轮播-->
      <swiper  class="swiper-container" :options="swiperOption">
        <!--<div class="swiper-wrapper" >-->
          <swiper-slide class="swiper-slide" v-for="(li,index) in lis" :key="index"><img :src="li" ></swiper-slide>

      </swiper >

      <article class="lef" @click="homei"><img :src="baseimg.newPerson" ></article>
      <article class="rig" @click="homei"><p>登录即享1500元优惠礼券</p><span>领券专区</span></article>
      <img class="newShangshi" :src="baseimg.newShangshi" >
      <ul class="opt">
        <li>男士</li>
        <li>女士</li>
        <li>更多</li>
      </ul>
      <!--轮播two-->
      <swiper class="swiper-container slide2" :options="swiperOption">

          <swiper-slide class="swiper-slide" v-for="(li,index) in newstore" :key="index"><img :src="li.titleImg" >
            <div class="newbtm" v-for="(li1,index) in li.content" :key="index"><img :src="li1.imgSrc" >
              <p>{{li1.brand}}</p><span>￥{{li1.price}}</span>
            </div>
          </swiper-slide>

      </swiper>


      <img class="newShangshi" :src="baseimg.YearDazhe01" >
      <img class="newShangshi" :src="baseimg.YearDazhe" >
      <img class="newShangshi" :src="baseimg.newStore" >
      <!--轮播three-->
      <swiper class="swiper-container slide2" :options="swiperOption">

          <swiper-slide class="swiper-slide" v-for="(li,index) in dayslides" :key="index"><img :src="li"></swiper-slide>

        </swiper>


      <img class="newShangshi" :src="baseimg.styleList">
      <div v-for="msg in stylelist" class="trerow">
        <article class="lef"><img :src="msg.img" ></article>
        <article class="rig"><p>{{msg.title}}</p><span>{{msg.content}}</span></article>
      </div>
      <img class="newShangshi" :src="baseimg.goodProduct" alt="">
      <router-link v-for="(sto,index) in storeinfo" class="info" :key="index" tag="div" :to="{name:'toDetail',params:{bid:sto.storeId}}">
        <img :src="sto.imgSrc" alt="">
      <h5>{{sto.goodTitle}}</h5><p>{{sto.title}}</p><span>￥{{sto.price}}</span></router-link>


      </vue-pull-refresh>
    </div>
</template>

<script>
  import Swiper from 'swiper';
  import Header from '../base/Header'
  import VuePullRefresh from 'vue-pull-refresh';



  import {getslide,getbaseimg,getnewstore,getdayslides,getstylelist,getstoreinfo} from "../api/getData";

  export default {
        name: "index",
        data(){
          return{
            lis:[],
            baseimg:{},
            newstore:[],
            dayslides:[],
            stylelist:[],
            storeinfo:[],

            swiperOption: {

              autoplay:true

            }
          }
        },
    components:{
      myheader:Header,
      'vue-pull-refresh': VuePullRefresh
    },
      mounted(){
        new Swiper ('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          paginationClickable :true,
          observer: true
        })
      },
      created(){
          getslide().then(res=>{
            this.lis=res.data;

          });
          getbaseimg().then(res=>{
            this.baseimg=res.data
          });
          getnewstore().then(res=>{
            this.newstore=res.data
          });
          getdayslides().then(res=>{
            this.dayslides=res.data
          });
        getstylelist().then(res=>{
          this.stylelist=res.data
          });
        getstoreinfo().then(res=>{
          this.storeinfo=res.data
        })
      },
      methods:{
        homei(){
          this.$router.push('guest')
        },
        onRefresh: function() {
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve();
            }, 1000);
          });
        }
      }
    }
</script>

<style scoped>
  .div{ overflow-x: hidden; overflow-y: auto;}
  /*body,html{ }*/
  .h-name{font-size:22px;font-weight: lighter;}
  *{margin: 0;padding: 0}
.serch{display: block;width:95%;background: #eee;height: 35px;border-radius: 4px;line-height: 35px;
font-size: 15px;text-align: center;margin: 50px auto;text-decoration: none;color: #999}
.serch span{font-size: 20px;display: inline-block;width: 20px;}
.swiper-container {
  width: 100%;
  height: auto;
  margin: 5px auto;margin-top: -40px;
}
  .swiper-container .swiper-slide,.swiper-container img{width: 100%;height: auto}
  .swiper-pagination{width: 20px; height: 20px; background: black;z-index: 100;display: block}
  article{width:50%;float: left;}
  article.lef img{width: 100%}
  article.rig{width: 50%;height: 117.36px;background: #f0f0f0;}
  article.rig p{ display: block; width: 80%;margin: 15px auto;}
  article.rig span{display: block;padding-left: 60%;font-size: 15px; color: #ffbe3c}
  .newShangshi{width: 100%}
  .opt{width: 88%;margin: 0 auto;height: 40px}
  .opt li{list-style: none;width: 33%;height: 40px;line-height: 40px;float: left;text-align: center;
  font-size: 14px}
  .slide2{margin-top: 0px}
  .newbtm{width: 33%;height:150px;float: left;text-align: center }
  .newbtm img{width:70% }
  .newbtm p{clear: left;font-size: 12px;margin: 7px auto}
  .newbtm span{font-size: 15px}
  .trerow{width: 100%;height: 117.36px;border: 1px solid white;margin-top: 5px}
  .info{ width: 40%;height: auto;float: left;margin-left: 7%;border: 1px solid #ccc
  ;margin-bottom: 20px;text-align: center}
  .info img{width: 80%;margin: 20px auto}
  .info p{ font-size: 14px;margin: 10px}
  .info span{line-height: 50px}
</style>
