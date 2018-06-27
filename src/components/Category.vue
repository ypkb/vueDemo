<template>
  <div>
    <my-header :back="true">
      <div class="h-name">分 类</div>
    </my-header>
    <div class="content">
      <div class="show" v-for="(ctg,index) in allcategorys" :key="index">
        <img :src="ctg.img" alt="">
        <div class="list">
          <img :src="ctg.img01" alt="">
          <ul>
            <li>
              <router-link v-for="(content,index) in ctg.contents" to="/classify" tag="span" :key="index">{{content}}</router-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Header from "../base/Header"
  import {getcategory} from "../api/getData";

  export default {
    name: "Category",
    components:{
      MyHeader:Header
    },
    data(){
      return {
        allcategorys:[]
      }
    },
    created:function () {
      this.getData();
    },
    methods:{
      getData(){
        getcategory().then(res=>{
          this.allcategorys=res.data;
          // console.log(res.data);
        }).catch(error=>{
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  .h-name{font-size:22px;font-weight: lighter}
  .content div{font-size: 0;}
  .content{margin-bottom: 50px;}
  .show{position: relative}
  .show img{width: 100%}
  .list{position: absolute; left: 5%; top: 5%; }
  .list img{width: 60%}
  ul li{width: 70px}
  ul{margin-top: 6%; font-size: 1rem; color: #fff;}
  span{margin: 10px 0; display: block}

</style>
