<template>
  <div id="app">
    <!--<keep-alive>-->
      <!--<router-view v-if="$route.meta.keepalive"></router-view>-->
    <!--</keep-alive>-->
    <router-view> </router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>

  import Footer from './base/Footer'

export default {
  name: 'App',
  components: {
    myfooter:Footer
  }
}
</script>

<style>
  *{margin: 0;padding: 0;}
  a{text-decoration: none}
  ul,li{list-style: none}
  html,body,#app{
    height: 100%;
    position: relative;
  }
</style>
