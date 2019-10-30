<template>
    <div id="main" ref="main">
      <Header></Header>
      <!-- <router-view v-on:personShow="listen"></router-view> -->
      <left v-show="flag1" v-on:see="go"></left>
      <right v-show="flag2" v-on:sendWord="sendW"></right>
      <!-- <person v-show="flag3"></person>
      <detail v-show='d'></detail>
      <send v-show="send"></send>
      <author v-show="auth"></author> -->
      <!-- <register v-show="reg" v-on:can="cancel"></register> -->
      <!-- <login  ></login> -->
      <!-- <router-view v-show="log"></router-view> -->
      <!-- <forget v-show="f" v-on:can="cancel"></forget> -->
      <!-- <forget2 v-show="f2" v-on:can="cancel"></forget2> -->
      <div class="empty"></div>
    </div>
</template>
<script>
import Header from '../../components/Header/Header.vue'
import left from './left/left.vue'
import right from './right/right.vue'
// import person from './person/person.vue'
// import register from './register/register.vue'
// import login from './login/login.vue'
// import forget from './forget/forget.vue'
// import detail from './detail/detail.vue'
// import send from './send/send.vue'
// import author from './author/author.vue'
// import forget2 from './forget2/forget2.vue'
// import qs from 'qs'
export default{
  data () {
    return {
      flag1: true,
      flag2: true
      // flag3: false,
      // reg: false,
      // log: true,
      // f: false,
      // f2: false
      // d: false,
      // send: false,
      // auth: false,
    }
  },
  components: {
    Header,
    left,
    right
    // person,
    // register,
    // login,
    // forget,
    // forget2
    // detail,
    // send,
    // author
  },
  methods: {
    // listen (data) {
    //   if (data === 3) {
    //     this.flag3 = true
    //     this.flag1 = false
    //     this.flag2 = false
    //   } else if (data === 5) {
    //     this.reg = true
    //     this.log = false
    //   } else if (data === 4) {
    //     this.reg = false
    //     this.log = true
    //   } else {
    //     this.flag1 = true
    //     this.flag2 = true
    //     this.flag3 = false
    //   }
    //   this.d = false
    //   this.auth = false
    // },
    // turn () {
    //   this.$router.go(-1)
    // },
    sendW (data) {
      if (data === 1) {
        this.flag1 = false
        this.flag2 = false
        this.flag3 = false
        this.d = false
        this.send = true
      }
    },
    cancel (data) {
      switch (data) {
        case 0: { // 点击登录的忘记密码
          this.reg = false
          this.f = true
          break
        }
        case 1: //  登陆取消
        case 2: { //  登陆保存
          this.reg = false
          break
        }
        case 3: //  注册取消
        case 4: {
          //  注册保存
          this.log = false
          break
        }
        case 5: { //  重置密码 取消
          this.f = false
          break
        }
        case 6: { //  重置密码 确定
          this.f = false
          this.f2 = true
          break
        }
        case 7: { //  重置密码2 取消
          this.f2 = false
          break
        }
        case 8: { //  重置密码2 确定
          this.f2 = false
          break
        }
      }
    },
    go (data) {
      if (data === 1) {
        this.flag1 = false
        this.d = true
      }
      if (data === 2) {
        // this.auth = true
        this.flag1 = false
        this.flag2 = false
        this.$router.push({
          path: '/author'
        })
      }
    }
  }
}
</script>
<style scored>
#main{
  background-color: #f0f0f0;
  /* height: 850px; */
}
.empty{
  width: 100%;
  height: 80px;
  background-color: #f0f0f0;
}
</style>
