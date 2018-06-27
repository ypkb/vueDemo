<template>
  <div class="myheader">
    <slot></slot>
<router-link to="/mysearch">
    <i class="iconfont icon-sousuo" v-if="back"></i>
</router-link>
    <router-link to="/collect" class="iconfont icon-gouwuche"></router-link>
  </div>
</template>

<script>
    export default {
        name: "Header",
      props:['back'],
    }
</script>

<style scoped>
  .h-name{position: fixed;top: 0;left: 0;right: 0;background: white;z-index: 100}
  .myheader{width: 100%;height: 40px;background: #fff;line-height: 40px;text-align: center;z-index: 100}
  .icon-gouwuche{position: fixed;top: 2px;right: 10px;font-size: 30px;z-index: 100}
  .icon-sousuo{position: fixed;top: 2px;left: 20px;font-size: 25px;z-index: 100}
</style>
