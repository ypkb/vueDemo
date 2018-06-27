<template>
  <div class="content">
    <header>登录</header>
    <article :class="{active:isActive1}" @click="chenge1">账号密码登录</article>
    <article :class="{active:isActive2}" @click="chenge2">短信验证码登录</article>
    <div CLASS="logo">TOP LIFE</div>

    <div class="zhanghao" v-if="inp">
      <div class="name"><span class="iconfont icon-wodeweijihuo-"></span>
        <input type="text" placeholder="用户名/邮箱/已验证手机" v-model="usename" @click="focus">
        <i class="iconfont icon-chahao" @click="empt"></i></div>
      <div class="word"><span class="iconfont icon-mima"></span>
        <input :type="typ" placeholder="请输入密码"  v-model="pwd" @keyup="abcli" @click="focus">
        <i :class="eye" @click="view"></i></div>
      <p class="about" ref="about">{{msg}}</p>

    </div>


    <div class="duanxin" v-else>
      <div class="name"><span >+86▼</span>
        <input type="text" placeholder="请输入手机号" v-model="usename" @click="focus">
        <i class="iconfont icon-chahao" @click="empt"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;获取验证码</div>
      <div class="word"><span></span>
        <input type="password" placeholder="请输入收到的验证码" v-model="pwd" @keyup="abcli" @click="focus"></div></div>

    <div :class="{btn,abcli:isabcli}" @click="jump">登录</div>
    <p class="le">忘记密码</p><p class="ri">手机快速注册</p>
    <h5>--&nbsp;&nbsp;&nbsp;其他登录方式&nbsp;&nbsp;&nbsp;--</h5>
    <b class="qq iconfont icon-qq" @click="qqq"></b><b class="weixin iconfont icon-weixin"></b>

    <p class="txt">登陆即代表您已同意<a href="#">京东隐私政策</a></p>
  </div>
</template>


<script>
    export default {
        name: "Mine",
      methods:{
          qqq(){
            this.$router.push('/qq')
          },
          focus(){
            this.msg='';
          },
        jump(){
          if(this.usename==='admin'&&this.pwd==='123456'){
            this.$router.push('success');
          }else{
            this.msg='*账户或密码不正确'
          }

        },
        back(){
          this.$router.go(-1)
        },
        chenge1(){
          this.isActive1=true;
          this.isActive2=false;
          this.inp=true
        },
        chenge2(){
          this.isActive1=false;
          this.isActive2=true;
          this.inp=false
        },
        empt(){
          this.usename=''
        },
        view() {
          if (this.typ == 'password') {
            this.typ = 'text';
            this.eye='iconfont icon-faxian-yanjing'
          }else{
            this.typ = 'password';
            this.eye='iconfont icon-guanbi-yanjing'
          }
        },
        abcli(){
          if (this.usename!=''&&this.pwd!='') {
            this.isabcli=true
          }else {
            this.isabcli=false
          }
        }

      },
      data(){
        return{
          isActive1:true,
          isActive2:false,
          inp:true,
          usename:'',
          pwd:'',
          typ:'password',
          eye:'iconfont icon-guanbi-yanjing',
          isabcli:false,
          btn:'btn',
          msg:'',
        }
      }

    }
</script>

<style scoped>
  header{width: 100%;height: 45px;border-bottom: 1px solid #ccc;
    top: 0;text-align: center;line-height: 45px;font-size: 18px;color: #555;}

  article{width: 50%;height: 45px;line-height: 45px;text-align: center;float: left;
    border-bottom: 1px solid #ccc;color: #aaa;font-size: 16px}
  .active{color: #333;border-bottom: 1px solid #111}
  .logo{width: 100%;height: 120px;line-height: 120px;text-align: center;font-size: 25px;color:#aaa;
    overflow: hidden}
  .zhanghao,.duanxin{width: 85%;height: 100px;margin: 0 auto}
  .zhanghao div,.duanxin div{width: 100%;height: 49px;line-height: 50px;border-bottom: 1px solid #ccc;}
  .zhanghao input{height: 20px;font-size: 14px;margin-left: 30px;border: none;outline: none}
  .zhanghao  span{width: 20px; height: 22px;font-size: 20px;color: #000}
  .zhanghao  i,.duanxin i{width: 20px; height: 22px;font-size: 20px;margin-left: 99px;color: #777}
  .duanxin{font-size: 15px;color: #999}
  .duanxin input{height: 20px;font-size: 14px;margin-left: 3px;border: none;outline: none}
  .duanxin i{margin-left: -15px;color: #ccc}
  .btn{width: 85%;height: 50px;margin: 30px auto;background: #ddd;line-height: 50px;text-align: center;
    color: white}
  .abcli{background: #333}
  .le,.ri{width: 42%;height: 40px;line-height: 40px;font-size: 12px;float: left;
    margin:-30px 0 0 8%}
  .ri{text-align: right;margin:-30px 0 0 0}
  h5{width: 100%;height: 50px;line-height: 50px;text-align: center;overflow: hidden;font-size: 15px;
    color: #555}
  b{font-size: 25px;margin-left: 35%;color: skyblue}
  b.weixin{margin-left:17%;color: lawngreen }
  .txt{display: inline-block; width:100%;margin: 10px auto;font-size: 14px;text-align: center}
  .txt a{color: black;text-decoration: underline;}
  .content{background: url("https://plogin.m.jd.com/st_new/img/toplife/images/bg.png") no-repeat;height: 100%;}
  .about{color: red;}

  /*.duanxin input:focus .about{display: none}*/
</style>
