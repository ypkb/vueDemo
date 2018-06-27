<template>
    <div class="con">
      <div class="header">
        <i class="iconfont icon-shouyedianpujishishangcheng" @click="goBack"></i>
        <p>购物车</p>
      </div>
      <div class="box"></div>
      <ul>
        <li v-for="store in collect">

          <i @click="del(store.storeId)" class="del">移除</i>
          <div class="con-2">{{store.goodTitle}}</div>
          <div  class="con-3">
            <input type="checkbox" :class="[classA]" @click="change(store.storeId,store.isFalse)" :checked=store.isFalse>
            <span>选中</span>
          </div>
          <img :src="store.imgSrc" alt="">
          <div class="con-4">
            <h4>{{store.title}}</h4>
            <span>￥{{store.price}}</span>
            <div>
              <input type="button" value="-" @click="jian(store.storeId,store.count)">
              <input type="text" v-model="store.count" disabled>
              <input type="button" value="+" @click="sum(store.storeId,store.count)"></div>

          </div>
          <div class="con-7">
            <div class="con-7-2">总价(￥<span>{{pay}}</span>)<br>
              <span>不含运费</span>
            </div>
            <div class="con-7-1">结算(<span>{{payCount}}</span>)</div>
          </div>
        </li>
      </ul>
      <div class="con-1">
        <img src="//static.360buyimg.com/tp-statics/2018-6-22/m/img/banner@2x.png" alt="">
      </div>




    </div>
</template>

<script>
  import {getCollect,delData,getCollectPay,getCollectPayCount,getInfo,getCollectPayOrCount} from "../api/getData";

  export default {
        name: "Collect",
    data(){
      return{
        collect:[],
        count:1,
        classA:'classa',
        pay:0,
        payCount:0,
        checked:'checked'
      }
    },
      methods:{
        goBack(){
          // this.$router.go(-1);
          this.$router.push('index')
        },
          getData(){
            getCollect().then(res=>{
              this.collect=res.data;
              // console.log(this.collect);
              //
              // this.collect.forEach((i)=>{
              //   this.pay=0;this.payCount=0;
              //   this.pay=this.pay+i.price*i.count;
              //   this.payCount=this.payCount+i.count;
              //
              // });

              // console.log(this.pay)
            }).catch(err=>{});
            getInfo().then(res=>{})
          },
         getPay(){
            getCollectPayOrCount().then(res=>{
              this.pay=res.data.pay;
              this.payCount=res.data.payCount;
            })
         },
        del(id){
            delData(id).then(res=>{}).catch();
          this.getData();
          this.getPay();
        },
        sum(id,count){
          count=count+1;
          getCollectPayCount(id,count).then(res=>{}).catch();
          this.getData();
          this.getPay();

        },
        jian(id,count){
            if(count==1){return}
          count=count-1;
          getCollectPayCount(id,count).then(res=>{
          }).catch();
          this.getData();
          this.getPay();
        },
        change(id,or){
            getCollectPay(id,!or).then(res=>{
              // this.checked=res.data.isFalse?'':'checked'
            }).catch();
          this.getData();
          this.getPay();
        }
      },
      created(){
          this.getData();
        this.getPay();
      },



    }
</script>

<style scoped>
  .con{background: #eee;padding-top: 10px;}
li{padding: 5px 10px;background: white;width: 91%;margin-left: 2%;margin-right: 4%;
  margin-top: 3%;
  position: relative;}
  li .con-2{text-align: center;line-height: 40px;border-bottom: 1px solid #ccc;margin-bottom: 30px;}
li img{width: 20%;}
  li:last-child{margin-bottom: 20px;}
  .con-1{float: left}
  .con-4{float: right;padding: 0 10px;}
  .con-1 img{width: 100%;}
  .con-3 {
    line-height: 40px;color:#999;font-size: 14px;}
  .con-3 input:checked{background: red;}
  .con-3 input{background: gray;}
  .con-3 input{border-radius: 15px;-webkit-appearance: none;width: 15px;height: 15px;margin-right: 10px;
    outline: none;border: none}
  .con-4 span{
    position: absolute;bottom: 10px;left:30%;color: red}
  .con-4 input[type='button']{width: 20px;height: 30px;background:none;outline: none;border: none}
  .con-4 input[type='text']{width: 40px;height: 30px;border: none;background: white;padding: 0;
    text-align: center;outline: none;}
  .con-4 div{position: absolute;bottom: 10px;right: 20px;border: 1px solid #eee;
    border-radius: 10px;background: #eee;}
  i{position: absolute;top: 2px;right: 10px;}

  .con-7{width: 100%;position: fixed;height: 70px;background: #333;z-index: 1111;
    bottom: 0;
    left: 0;}
  .con-7-1{float: right;line-height: 70px;width: 35%;border-left: #ccc 1px solid;padding-left:3%;
  background: #c0a369;font-size: 16px;
    text-align: center;}
  .con-7-2{float: left;line-height: 35px;width: 55%;
    padding-left:3%;font-size: 16px;color: white;
    text-align: center;}
  .con-7-1 span{color: red;padding: 0 5px;font-size: 20px;}
  .icon-shouyedianpujishishangcheng{position: fixed;top: 10px; right: 20px;font-size: 24px;width: 20px}
  .del{margin-top: 5px;font-style: normal}
  .header{width: 100%;height: 40px;background:#fff;position: fixed;top: 0;left: 0;z-index: 300;}
  .header p{width: 100%;height: 100%;text-align: center;line-height: 40px;font-size: 20px;}
  .box{width: 100%;height: 30px;}
</style>
