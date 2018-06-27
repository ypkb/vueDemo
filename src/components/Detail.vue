<template>
  <div>
    <myheader>
      <i></i>
      <div class="head">A L E X A N D E R &nbsp; M Q E E N</div>
    </myheader>
    <div class="content">
      <div class="box"></div>



          <router-link  tag="li" :to="{name:'detailtwo',params:{msg:$route.params.msg}}">
            <img :src="womenImg">
          </router-link>
          <router-link  tag="li" :to="{name:'detailtwo',params:{msg:$route.params.msg}}">
            <img :src="manImg">
          </router-link>

      <div class="box"></div>

    </div>
  </div>
</template>

<script>
  import DetailHeader from './DetailHeader'
  import {getBrand} from "../api/getData";
    export default {
      name: "Detail",
      components: {
        myheader: DetailHeader,
      },
      data() {
        return {
          manImg: '',
          womenImg: ''
        }
      },
      created() {
        this.getImages();
      },
      computed:{
        imgId(){
          return this.$route.params.bid
        }
      },
      methods: {
        getImages() {
          getBrand(this.imgId).then(res => {
            console.log(res.data[0].womenImg);
            console.log(res.data[0].manImg);
            // console.log(this.$route.params.msg);
            this.womenImg = res.data[0].womenImg;
            this.manImg = res.data[0].manImg;
          }).catch(err => {
            console.log(err);
          });
        },


      }
    }
</script>

<style scoped>
  .box{width: 100%;height: 50px;float: left}
  .head{clear: both;z-index: 10;font-size: 10px}
.content{position:relative;top: 0;  left: 0;  right: 0;  bottom: 0;z-index: 1;background: white}
  img {width: 100%;}
</style>
