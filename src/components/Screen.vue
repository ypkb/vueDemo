<template>
  <div class="choose">
    <div class="back">
      <div class="title">
        <router-link to="classify" class="iconfont icon-fanhui-copy" tag="i"></router-link>
        <span>筛选</span>
      </div>
      <div class="sort">
        <h4>排序</h4>
        <ul ref="sorts">
          <li><input type="radio" name="q" checked>综合</li>
          <li><input type="radio" name="q">最新</li>
          <li><input type="radio" name="q">价格(从高到低)</li>
          <li><input type="radio" name="q">价格(从低到高)</li>
        </ul>
      </div>
      <div class="server">
        <h4>服务</h4>
        <div><span>配送至：</span><i class="iconfont icon-map"></i>北京朝阳区管庄</div>
        <ul>
          <li><input type="radio" name="e"  checked/><span>货到付款</span></li>
          <li><input type="radio" name="e"/><span>京东配送</span></li>
          <li><input type="radio" name="e"/><span>仅看有货</span></li>
        </ul>
      </div>
      <div class="logo">
        <h4>品牌</h4>
        <i class="iconfont icon-xiajiantou"></i>
        <ul>
          <li><input type="checkbox"/><span>宝娜(La Perla)</span></li>
          <li><input type="checkbox"/><span>DEREK LAM</span></li>
          <li><input type="checkbox"/><span>DEREK</span></li>
          <li><input type="checkbox"/><span>SHIATZY CHEN</span></li>
        </ul>
      </div>
      <div class="price">
        <h4>价格</h4>
        <!--<input type="text"/>-->
        <div class="section">
          <input type="text" placeholder="最低价"/>
          <span>至</span>
          <input type="text" placeholder="最高价" class="max"/>
        </div>

      </div>
      <div class="classify">
        <h4>分类</h4>
        <span>全部</span>
      </div>
      <div class="footer">
        <button @click="">全部重置</button>
        <button @click="goChange">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Screen",
      methods:{
        goChange(){
          this.$router.push('/classify');
        },
        goBack(){

        }
      }
    }

</script>

<style scoped>
  ul li{width:45%; font-size: 14px; margin: 0 2.5%; display: inline-block; padding-bottom: 5px}
  ul li img{width: 100%}
  .choose{position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 300; background:rgba(0,0,0,0.8) }
  .back{position: fixed; padding-left:5px;top: 0; left: 10%; bottom: 0; right: 0; z-index: 30; width: 90%; background: #fff;}
  .back .title{width: 100%; height: 40px; border-bottom: 1px solid rgb(200,200,200); line-height: 40px; text-align: center}
  .back .title i{float: left; margin-left: 10px;}
  .back h4{margin: 5px 0px;}
  .back .sort{border-bottom: 1px solid rgb(200,200,200)}
  .back .sort ul{width:100%;font-size: 8px;}
  .back .sort ul li{width: 40%; font-size: 14px; margin-bottom: 5px; }
  .back .sort ul li input:checked{background: #333; border-color: #333;}
  .back .sort ul li input{border-radius: 15px;-webkit-appearance: none;width: 15px;height: 15px;margin-right: 10px;
    outline: none;border: 1px solid #666;}
  .back .sort ul li span{margin-right: 5px;}
  .back .server{border-bottom: 1px solid rgb(200,200,200)}
  .back .server li{width: 25%; height: 20px; text-align: center; line-height: 20px;
    margin: 20px 10px; position: relative;}
  /*.back .server li span{position: absolute; left: 10px;margin-top: -30px;}*/

  .back .server ul li input:checked{background: #333; border-color: #333;}
  .back .server ul li input{border-radius: 15px;-webkit-appearance: none;width: 15px;height: 15px;margin-right: 10px;
    outline: none;border: 1px solid #666;}
  .back li.bg{background: #000; color: #fff;}

  .back .logo{border-bottom: 1px solid rgb(200,200,200); height: 140px; overflow: hidden}
  .back .logo.show{height: auto;}

  .back .logo li{width: 40%; height: 20px; position: relative; text-align: center; line-height: 20px;
    margin: 10px; overflow: hidden; }
  .back .logo i{position: absolute;right: 10px;margin-top: -25px;}
  .back .logo li span{position: absolute; left: 18px;}
  .back .logo ul li input{-webkit-appearance: none;width: 120px;height: 25px;
    outline: none;border: 1px solid #666;}
  .back .logo li input:checked{background: #000;}
  .back .logo li input:checked+span{color: #fff;}

  .back .price{border-bottom: 1px solid rgb(200,200,200);}
  .back .price .section{margin: 20px; text-align: center}
  .back .price input{width: 35%; height: 20px; border: 1px solid gray; text-align: center; border-radius: 2px;}
  .back .price .max{float: right}
  .back .classify{border-bottom: 1px solid rgb(200,200,200); height: 80px;}
  .back .classify span{font-size: 12px; position: absolute;right: 10px;color: gray; margin-top: -20px;}
  .back .footer{position: fixed; bottom: 0; left: 10%;right: 0;}
  .back .footer button{width: 50%; height: 50px; float: left; border: none; background: #333; color: #fff;
    font-size: 16px; outline: none}
</style>
