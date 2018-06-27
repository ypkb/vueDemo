<template>
    <div class="myheader">
      <slot></slot>
      <i class="iconfont icon-fanhui-copy" @click="goBack" ></i>
    </div>
</template>

<script>
    export default {
        name: "DetailHeader",
        // props:['back'],
      methods:{
        goBack(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .myheader{width: 100%;height: 40px;background: #fff;line-height: 40px;text-align: center;
    position: fixed;top: 0;left: 0;right: 0;z-index: 100}
  .icon-fanhui-copy{position: absolute;top: 2px;left: 20px;font-size: 25px;}

</style>
