<template>
  <div class="sent">
    <div class="sent-1">

      <img src="//img11.360buyimg.com/jdphoto/s120x122_jfs/t5683/191/7076936752/5123/834e5571/596dd62bN7a8affc5.png" alt="" class="sent-2">
      <div class="sent-3">
        <p>admin</p>
        <span class="sent-3-1"><i></i>金牌</span><span class="sent-3-2"><i></i>京享值1234></span>
        <span class="sent-3-3">账户管理</span>
        <div class="sent-4"></div>
      </div>

    </div>
    <div class="sent-5">
      <ul>
        <li>
          <i></i>
          待付款
        </li>
        <li>
          <i></i>
          待收货
        </li>
        <li>
          <i></i>
          退换/售后
        </li>
        <li>
          <i></i>
          全部订单
        </li>
      </ul>
    </div>
    <div class="sent-6">
      <ul>
        <li>
          <i>0</i><br>
          京东券
        </li>
        <li>
          <i>11110</i><br>
          白条额度
        </li>
        <li>
          <i>115</i><br>
          京豆
        </li>
        <li>
          <i>0</i><br>
          礼品卡
        </li>
        <li>
          <i>0</i><br>
          <span>全部资产</span>
        </li>
      </ul>
    </div>
    <div class="sent-7">
      <ul>
        <li>
          <i>11</i>
          关注的店铺

        </li>
        <li>
          <i>255</i>
          关注的商品
        </li>
        <li>
          <i>33</i>
          我的足迹
        </li>
      </ul>
    </div>
    <div class="sent-8">
      <ul>
        <li>
          <img src="//img11.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png" alt="">
          <br>用户福利
        </li>
        <li>
          <img src="//img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png" alt="">
          <br>
          火车票
        </li>
        <li>
          <img src="//img13.360buyimg.com/jdphoto/jfs/t13864/56/1334572250/1269/e3b9acfa/5a1e9ef6Nb19cc444.png" alt="">
          <br>
          我的预约
        </li>
        <li>
          <img src="//img11.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png" alt="">
          <br>
          应用推荐
        </li>
        <li>
          <img src="//img12.360buyimg.com/jdphoto/jfs/t7711/100/3983515381/1466/1049e625/5a1e9f28N2460c691.png" alt="">
          <br>
          通信营业厅
        </li>
        <li>
          <img src="//img11.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png" alt="">
          <br>
          机票
        </li>
        <li>
          <img src="//img11.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png" alt="">
          <br>
          酒店
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "My"
  }
</script>

<style scoped>
  .sent{font-size: 14px;color: #777;background: #eee;}
  ul{background: white}
  .sent-1{
    width: 94%;height: 120px;background: #eb3c3c;border-radius: 5px;margin: 3%;position: relative;
  }
  .sent-2{
    width: 18%;border-radius: 5px;margin: 3%;position: absolute;top: 10px;left: 10px;
  }
  .sent-3{
    width: 65%;border-radius: 5px;margin: 3%;position: absolute;top: 10px;right: 10px;
    color: white;
  }
  .sent-1 span{border-radius: 15px;border: 1px #ccc solid;margin: 0 10px; padding: 0 3px;}
  .sent-3-1{line-height: 40px;padding-right: 5px;}
  .sent-3-1 i{background:url("//wq.360buyimg.com/fd/base/img/my/icon_vip.png") no-repeat -27px 0;
    width: 30px;height: 30px;display: inline-block;background-size: 450%;position: relative;
    top: 10px;}
  .sent-3-2 i{background:url("//wq.360buyimg.com/fd/base/img/my/icon_vip.png") no-repeat -53px 0;
    width: 30px;height: 30px;display: inline-block;background-size: 450%;position: relative;
    top: 10px;}
  .sent-1 .sent-3-3{position: absolute;top: -10px;right: -15px;line-height: 20px;padding: 0 10px;font-size: 14px;}
  .sent-4{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAASCAMAAACaR4u6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUxpcc+uac+uaNGvas+uac+uac+uaNCvadCuadGwa8+uaNGwatWxbtS1b9Cuada1bs+uaNvAdM6taFNM8fIAAAASdFJOUwCm80u3lOFdhyjTPBoTbg/GCYrnPAQAAAG/SURBVDjL1ZTRtuMgCEUVRcQYY/j/jx1Qk3Z68zJr3T7MeahNomyBo869hInct5VFZPsyY1OGpOMrsRPWMe7JIOIXMeJvQroIso5RpGwg0gZijv+sSndXz33pWJ0Qz00E2JH9hi5XdxhSUXnbRS9ruU9zBM26Yo8xXpGPAoJ3hz2aEuhDkEs2FZUyn84BkWz766AlLSu2izBHie5MfdfEIY8XXDqH5PcFmSYay3aRiBZ4TDwti9RAuntBNEF6hvDYmaNou/Upbyqf0MKTXxqsJMnVjCvlk5BOlpX1gjQJz5AjlbD8yK1SHmLWRQfdMooXqR/9o1k7gyAzUzJnP0G0JyDJh58WYIlhiIZh74gv3VyWFKPHtrsnyLQ7kx//1AAAcQjH9syxrO3wI5B8ngmr4Hu5Xh0ct4+MCh26rF5O4lmA9pYJ2vHYFsSBlA+332fyERJWt3XIbUGMtoGfDrc9VPV1EIjnEcccPXn7Z0vaAwRmHzUVyGFrYPljpC1kGFSAnBF9n4VhioWqOi7s62L0+V1qY16ni/iGBLogGiDn9cUsRbNqIWzM9XDNIGFNOEPL9834t+D378j+A5Ld/6c/VpwYZxvL3AgAAAAASUVORK5CYII=");
  }
  .sent-4{width: 130px;height: 50px;position: absolute;background-repeat: no-repeat;}
  .sent-5 ul{display: flex;flex: 1;margin-top: 20px;height: 60px;}
  .sent-5 ul li{display: flex;flex: 1;justify-items:center;
    flex-direction: column;align-items: center;justify-content: center
  }
  .sent-6 ul{display: flex;flex: 1;margin-top: 20px;height: 60px;}
  .sent-6 ul li{display: flex;flex: 1;justify-items:center;
    flex-direction: column;align-items: center;justify-content: center
  }
  /*.sent-6 ul li i{display: flex;flex:1;align-items: center;flex-direction: column;justify-items: center}*/
  /*.sent-6 ul li span{display: flex;flex:1;align-items: center;flex-direction: column;justify-items: center}*/
  .sent-7 ul{display: flex;flex: 1;margin-top: 20px;height: 60px}
  .sent-7 ul li{display: flex;flex: 1;justify-items:center;
    flex-direction: column;align-items: center;justify-content: center
  }
  .sent-8 ul{margin-top:20px; }
  .sent-8 ul li{width: 25%;float: left;text-align: center;height:100px;
  }
  i{font-style: normal;color: red}
</style>
