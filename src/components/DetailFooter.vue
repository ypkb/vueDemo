<template>
    <div class="footer">
      <router-link class="link" to=""><p>全部</p></router-link>
      <router-link class="link" to=""><p>服饰</p></router-link>
      <router-link class="link" to=""><p>鞋履</p></router-link>
      <router-link class="link" to=""><p>配饰</p></router-link>
    </div>
</template>

<script>
    export default {
        name: "DetailFooter"
    }
</script>

<style scoped>
  .footer{width: 100%;background: #232321; height: 50px;line-height:50px; position: fixed;display:flex;bottom: 0;z-index: 1000}
  .link p{font-size: 12px;color:white;}

  .link{width: 18%; text-align: center;margin-right: 3px;display:flex;flex: 1;flex-direction:column;color: #686867;font-weight: normal}
</style>
