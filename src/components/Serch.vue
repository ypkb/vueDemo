<template>
<div>


      <div class="hed">
        <div class="input" @keyup.enter="add"><i class="iconfont icon-suosou"></i>
        <input type="text" placeholder="输入品牌或关键词进行搜索" v-model="osech"></div>
        <aside @click="back">取消</aside></div>
    <h3>热门搜索</h3>
  <ul class="hsech">
    <li v-for="ho in hotsech">{{ho}}</li>
  </ul>
  <h3>搜索历史</h3>
  <ul class=" oldsech">
    <li v-for="ho in allsech">{{ho}}</li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "Serch",
      methods:{
          back(){
            this.$router.go(-1)
          },
          add(){
            this.allsech.push(this.osech);
            console.log(this.allsech,this.osech);
            this.osech=''
          }
      },
      data(){
          return{
            hotsech:['流苏链条','纹理钱包','鳄鱼压花纹','廓型运动鞋','耳机','box bag','凉鞋','山羊皮'],
            osech:'',
            allsech:[]
          }
      }
    }
</script>

<style scoped>
  *{margin: 0;padding: 0}
.hed{width: 100%;height: 35px;margin-top: 30px;padding-bottom:10px;border-bottom: 1px solid #ccc;
position: relative}
  .hed .input{width: 75%;margin-left:20px;background: #f0f0f0;height: 35px}
.hed .input i{font-size: 17px;display: inline-block;margin: 0 9px}
.hed .input input{width:85% ;height: 20px;border: none;background: #f0f0f0;margin-top: 7px;
 outline: none;font-size: 16px}
  .oldsech li[data-v-2b038736]{float: left;width: auto;border: 1px solid #ccc;border-radius: 5px;margin: 5px;height: 35px;line-height: 35px;
  text-align: center;padding:0 3px}
.hed .input[data-v-2b038736] {border-radius: 5px;}
.hed  aside{width:70px; height:40px; line-height: 40px;
text-align: center;background: white;color: #666;position:absolute;cursor: pointer;z-index: 1000;
right: 10px;top:0px}
  h3{padding-left: 20px;clear: both}
  .hsech{width: 90%;height: auto;margin: 20px auto;margin-left: 15px}
.hsech li{width: auto; height: 30px; line-height: 30px; text-align: center;padding: 0 5px;
border: 1px solid #aaa;float: left;font-size: 15px;list-style: none;margin-right: 15px;
  margin-bottom:15px }
.oldsech{width: 100%;height: auto;list-style: none ;padding-left: 15px}
.oldsech li{width: 100%;height: 50px;border: none;border-bottom: 1px solid #aaa;list-style: none;
line-height: 50px;padding-left: 20px;box-sizing: border-box;font-size:18px; }
</style>
