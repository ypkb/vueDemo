<template>
    <div class="container">
      <i class="iconfont icon-fanhui-copy" @click="goBack"></i>
      <img :src="hom1"  v-for="(hom1,index) in homeimg" :key="index">
      <div class="box"></div>
    </div>
</template>

<script>
  import {gethomeimg} from "../api/getData";

  export default {
        name: "Guest",
      created(){
        gethomeimg().then(res=>{
          this.homeimg=res.data;
          console.log(this.homeimg)
        })
      },
      data(){
          return{
            homeimg:[]
          }
      },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
    }


    }
</script>

<style scoped>
  *{margin: 0;padding: 0;}
  img{width: 100%;margin-bottom: -5px}
  .icon-fanhui-copy{position: fixed;top: 10px; left: 10px;font-size: 28px;}
  .box{width: 100%;height: 50px;float: left}
  .container{ overflow-x: hidden; overflow-y: auto;}
</style>
