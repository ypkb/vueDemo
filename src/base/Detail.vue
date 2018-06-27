<template>
    <div>
      <class-header class="header">
        <div class="h-name">详情页</div>
      </class-header>
      <div class="info">
        <img :src="mag.imgSrc" >
        <h5>{{mag.goodTitle}}</h5><p>{{mag.title}}</p><span>￥{{mag.price}}</span>
        <br><p>商品描述︾</p></div>
      <article><img :src="lis" alt="" v-for="lis in mag.imgInfoSrc"></article>
      <div class="meaning" @click="show1">商品描述<span>{{case1}}</span>
        <img class="pensrc" :src="mag.imgDetailSrc" alt="" v-if="istrue1"></div>
      <div class="meaning" @click="show2">编辑笔记<span>{{case2}}</span>
      <img class="pensrc" :src="mag.imgPenSrc" alt="" v-if="istrue2"></div>
      <div class="meaning" @click="show3">尺码对照<span>{{case3}}</span>
        <img class="pensrc" :src="mag.imgSizeSrc" alt="" v-if="istrue3"></div>
      <div class="meaning" @click="show4">服务说明<span>{{case4}}</span>
        <dl v-if="istrue4">
          <img :src="mag.imgServerSrc" alt=""><dt>店铺发货&售后</dt><dd>
          由TOPLIFE发货，并提供售后服务。
        </dd>
          <img :src="mag.imgTuiSrc" alt=""><dt>七天退换</dt><dd>
          支持七天无理由退换。
        </dd>
        </dl>

      </div>
      <dl class="logo">
        <img :src="mag.imgBrandSrc" alt=""><dt>SAINT LAURENT官方旗舰店</dt><dd>
       377商品。
      </dd><span>></span></dl>
      <h4>相关推荐</h4>
      <div class="las"><img :src="lia" alt="" v-for="lia in mag.imgAlertSrc"></div>
      <footer @click="pop">{{buycar}}</footer>

      <aside v-if="istrue5">

       <div class="conter">
        <aside><img :src="mag.imgSrc" alt=""></aside>
       <i @click="istrue5=false">&times;</i>
          <h3><span>￥</span>{{mag.price}}</h3>
          <h3 class="bianh">商品编号:24565000214264</h3>
          <div class="adress">送至：<span>河南省郑州市高新区枫杨街</span><i>></i></div>

        <p>颜色分类</p>
        <div class="col">深红色</div><div class="col col1">天蓝色</div>
        <footer @click="add" class="result">确定</footer>
      </div>
      </aside>
    </div>

</template>

<script>
  import {getStoreById,addcollect} from "../api/getData";
  import ClassHeader from '../base/ClassHeader'

  export default {
      name: "Detail",
      data(){
          return{
            mag:'',
            istrue1:true,
            case1:'-',
            istrue2:true,
            case2:'-',
            istrue3:true,
            case3:'-',
            istrue4:false,
            case4:'+',
            istrue5:false,
            ic:'',
            buycar:'加入购物车'

          }
      },
    components:{
      ClassHeader
    },
      created(){
        let id=this.$route.params.bid;
        // console.log(id)
        getStoreById(id).then(res=>{
            this.mag=res.data;
          // console.log(res.data);
          if (this.mag.isOrNot){
            this.buycar='已添加,点击进入购物车'
          };
          this.ic=this.mag.isOrNot
        });

      },
    methods:{
        show1(){

          this.istrue1=!this.istrue1;
          if (this.case1=='+'){
            this.case1='－'
          }else {
            this.case1='+'
          }
        },
      show2(){
        this.istrue2=!this.istrue2;
        if (this.case2=='+'){
          this.case2='－'
        }else {
          this.case2='+'
        }
      },

      show3(){
        this.istrue3=!this.istrue3;
        if (this.case3=='+'){
          this.case3='－'
        }else {
          this.case3='+'
        }
      },
      show4(){
        this.istrue4=!this.istrue4;
        if (this.case4=='+'){
          this.case4='－'
        }else {
          this.case4='+'
        }
      },
      add(){

          this.istrue5=false;
        addcollect(this.mag.storeId,!this.mag.isOrNot).then(res=>{
           this.ic=res.data.isC;
           if (this.ic){
             this.buycar='已加入,点击进入购物车'
           }else{
             this.buycar='加入购物车'
           }
          console.log(this.ic)
        }).catch(res=>{console.log('cuowu ')});
      },
      pop(){
        if (this.ic){
         this.$router.push('Collect')
        }else{this.istrue5=true}

      }

    }
    }
</script>

<style scoped>
  .header{position: fixed;top: 0;}
  .h-name{font-size:22px;font-weight: lighter;position: fixed;top: 0;left: 45%;}

  *{margin: 0;padding: 0}
  .info{ width: 90%;height: auto;margin:30px auto;text-align: center}
  .info img{width: 100%;margin: 20px auto}
  .info p{ font-size: 16px;margin: 10px}
  .info span{line-height: 50px;font-size: 20px}
  article img{width: 95%;height: auto;display: block;margin: 0 auto}
  .meaning{width: 93%;height:auto;border-bottom: 1px solid #aaa;line-height: 60px;
  margin: 0px auto;overflow: hidden}
  .meaning span{float: right;color: #999;font-size: 25px;font-weight: bold;height: 60px;
    display: inline-block}
  .pensrc{width: 100%}
   dl{width: 100%}
   dl img{width: 13%;float: left}
   dt{width: 60%;float: left;height: 20px;margin-top: -12px;padding-left: 25px;font-size: 15px}
   dd{width: 70%;float: left;padding-left: 25px;font-size: 14px;color: #444}
  .logo{width: 93%;height:80px;margin:20px auto;border-bottom: 1px solid #ccc;overflow: hidden}
  .logo dt{margin-top:10px;width: 50%}
  .logo dd{width: 50%}
  .logo img{width:30% }
  .logo span {margin-top: -15px; font-size: 25px;float: right;color: #aaa}
  h4{width: 93%;margin: 0 auto;font-size: 17px;color: #444}
  .las{width: 85%;margin: 0 auto; }
  .las img{width: 30%;float: left;margin:30px 1%;margin-bottom: 80px}
  footer{width: 100%;height: 50px;background: #222;color:#fff;line-height: 50px;text-align: center
  ;position: fixed;bottom: 0;font-weight: bold;z-index: 200}
  aside{position: fixed;bottom: 0;width: 100%;height: 4000px;background: rgba(0,0,0,0.6);z-index: 500}
  aside .conter{width: 100%;height: 300px;background: #fff;position: fixed;bottom: 50px;z-index: 100}
  .conter i{display:block;float: right;width:50px;font-style:normal;font-size: 35px;color: #888}
  .conter h3{width: 100px; height: 30px;font-size: 20px;margin: 30px auto;font-weight: normal}
  .conter h3 span{font-size: 15px}
  .conter .bianh{font-size: 14px;width: 220px;margin-left: 160px;color: #888;margin-top: -30px}
  .conter .adress{width: 87%;height: 60px;margin: -10px auto;border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;line-height: 60px}
  .conter .adress span{font-size: 14px;color: #999}
  .conter .adress i{width:25px;color: #aaa }
  .conter p{width: 87%;height: 60px;margin: 30px auto; }
  .conter .col{width: 100px; height: 45px;background: red;color: white;line-height: 45px;
    text-align: center;margin: -50px 0 0 30px}
  .conter .col1{margin: -44px 0 0 150px;background: skyblue}
  .conter aside{width: 110px; height: 110px; background: white;position: fixed;left:7%;
  bottom: 280px;border: 1px solid #E1DF7B;}
  .conter aside img{width: 80%;margin: 10px 0 0 12px}
  .result{z-index: 1000}
</style>
