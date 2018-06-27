<template>
    <div>

      <div class="top1"> <i class="iconfont icon-qq1"></i>QQ登陆</div>
      <span>亿万用户已选择QQ账号登陆</span>
  <div class="qq1">
    <input type="text" placeholder="支持QQ/邮箱/手机号登陆" v-model="usename" @click="focus">
    </div>
   <div class="word1" >
    <input type="text" placeholder="密码" v-model="pwd" @click="focus"></div>

  <div class="btn" @click="land">登陆</div>
      <div class="wap1">
        京东商城将获得以下权限：
      </div>
        <div class="wap2">√访问你的详细资料(必选)</div>
        <div class="wap3">√访问你的基础资料(必选)</div>

    </div>
</template>

<script>
    export default {
        name: "Qq",
      data(){
       return{
         usename:'',
         pwd:'',
         msg:'',
       }
      },
      methods:{
        land(){
          if(this.usename==='123456789'&&this.pwd==='123456'){
            this.$router.push('success');
          }else{
            this.msg='*账户或密码不正确'
          }
        },

      focus(){
        this.msg='';
      }
      }
    }
</script>

<style scoped>
  .top1{font-size: 30px;margin-top: 10px;margin-left: 20px}
  span{font-size: 13px;color: #666;margin-top: 5px;margin-left: 20px}
input{width: 85%;height: 47px;margin-left:7.5%;margin-top: 20px;font-size: 23px;outline: none;border:none;border-bottom:1px solid #aaa }
.btn{width: 85%;height: 40px;margin-left:7.5%;margin-top: 20px;font-size: 18px;line-height: 40px;color: white; text-align: center;background: deepskyblue;border-radius: 5px}
.wap1{width: 85%;height: 40px;margin-left:7.5%;margin-top: 35px;font-size: 15px; }
.wap2,.wap3{width: 85%;height: 38px; line-height:38px;margin-left:7.5%;font-size: 12px;padding-left:10px;color: #aaa;border: 1px solid #aaa; border-radius: 5px}
  .wap2{border-bottom: none}
  .icon-qq1{font-size: 50px;color: deepskyblue}
</style>
