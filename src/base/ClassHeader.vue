<template>
  <div class="header">
    <i class="iconfont icon-fanhui-copy" @click="goBack"></i>
    <router-link  to="/search" tag="div">
      <slot></slot>
    </router-link>
    <router-link class="iconfont icon-gouwuche" to="collect"></router-link>
  </div>
</template>

<script>
    export default {
        name: "ClassHeader",
      methods:{
          goBack(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>
  .header{width: 100%; height: 40px; line-height: 40px;text-align: center;background: rgba(240,240,240,0.9);
    border-radius: 2px}
  .icon-fanhui-copy{float: left; margin-left: 5% ;font-size: 25px}
  .icon-gouwuche{float: right; margin-right: 5%;font-size: 25px}
</style>
