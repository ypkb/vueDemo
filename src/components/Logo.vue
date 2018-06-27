<template>
  <div>
  <myheader>
    <div class="h-name">品 牌</div>
  </myheader>
    <div>
      <ul>
        <router-link v-for="(msg,index) in logoMsg" :key="index" tag="li" :to="{name:'detail',params:{bid:msg.brandId,msg:msg}}">
          <img :src="msg.img">
        </router-link>
        <div class="box"></div>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '../base/Header'
  import {getBrand} from "../api/getData";

  export default {
        name: "Logo",
      components:{
        myheader:Header,
      },
    data(){
      return{
        logoMsg:[]
      }
    },
    created:function () {
      this.getImages();
    },
    methods:{
          getImages(){
            getBrand().then(res=>{
              this.logoMsg=res.data;
            }).catch(err=>{
              console.log(err);
            });
          },



    },
    }
</script>

<style scoped>
  .box{width: 100%;height: 50px;float: left}
  .h-name{font-size:22px;font-weight: lighter}
  li{width: 33%;float: left}
  li img{width: 100%}
</style>
