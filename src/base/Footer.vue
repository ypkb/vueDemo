<template>
  <div class="footer">
    <router-link class="link" to="/index"><i class="iconfont icon-shouyedianpujishishangcheng"></i><p>首页</p></router-link>
    <router-link class="link" to="/collect"><i class="iconfont icon-gouwuchetianjia"></i><p>购物车</p></router-link>
    <router-link class="link" to="/logo"><i class="iconfont icon-pinpai"></i><p>品牌</p></router-link>
    <router-link class="link" to="/category"><i class="iconfont icon-weibiaoti-"></i><p>分类</p></router-link>
    <router-link class="link" :to="classA"><i class="iconfont icon-wodeweijihuo-"></i><p>我的</p></router-link>
  </div>
</template>

<script>
    export default {
        name: "Footer",
      data(){
          return{
            classA:'/mine'
          }

      },
    }
</script>

<style scoped>
  .footer{width: 100%;background: #232321; height: 53px;position: fixed;display:flex;bottom: 0;z-index: 100}
  .link{width: 18%; text-align: center;margin-right: 3px;display:flex;flex: 1;flex-direction:column;color: #686867;font-weight: normal}
  .link i{font-size: 22px;margin: 3px auto;}
  .link p{font-size: 12px;}
  .icon-weibiaoti-{font-weight: bold}
  .router-link-active{color:#C0A369; }
</style>
