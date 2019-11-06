<template>
    <div id="login">
        <!-- <Header></Header> -->
        <div class="log">
            <p @click="cancel">×</p>
            <div class="div1">论坛账号注册</div>
            <div class="phone">
                <div class="p1">0086</div>
                <input type="text" placeholder="请输入常用手机号" class="p2" ref="q1" @click="phone">
            </div>
            <div class="error" v-show="e">该手机号已注册</div>
            <div class="pass">
                <input type="text" placeholder="请输入验证码" class="p3" ref="q2">
                <button class="p4" ref="get" @click="send">{{time}}</button>
            </div>
            <div class="pass2">
                <input type="password" placeholder="密码" class="p5" ref="q3">
                <div class="t1">8-20个字符</div>
            </div>
            <div class="pass3">
                <input type="password" placeholder="确认密码" class="p5" ref="q4">
                <div class="t2">8-20个字符</div>
            </div>
            <div class="sure" @click="save">注册</div>
        </div>
    </div>
</template>
<script>
// import Header from '../../components/Header/Header.vue'
export default{
  data () {
    return {
      time: '获取验证码',
      timer: 0,
      f: '',
      e: false
    }
  },
  components: {
    // Header
  },
  methods: {
    send: function () {
      var t = 59
      var this2 = this
      this2.time = t + 's'
      this2.$refs.get.disabled = false
      var timer = window.setInterval(function () {
        this2.time = --t + 's'
        if (t === 0) {
          this2.time = '获取验证码'
          window.clearTimeout(timer)
          this2.$refs.get.disabled = 'disabled'
        }
      }, 1000)
      this.timer = timer
      this.$http.get('/api/user/check', {
        params: {
          phone: this.$refs.q1.value
        }
      }).then(res => {
        console.log(res.status)
        if (res.status === 200) {
          this.$http.post('/api/code/send',
            this.qs.stringify({
              phone: this.$refs.q1.value
            })
          ).then(res => {
            console.log(res)
          })
        }
      }).catch((error) => {
        if (error.response.status === 400) {
          this.e = true
        }
      })
    },
    cancel () {
      // this.time = '获取验证码'
      // window.clearTimeout(this.timer)
      // this.$refs.q1.value = ''
      // this.$refs.q2.value = ''
      // this.$refs.q3.value = ''
      // this.$refs.q4.value = ''
      // this.$emit('can', 3)
      this.$router.push('/')
    },
    phone () {
      this.e = false
    },
    save () {
      // this.time = '获取验证码'
      // window.clearTimeout(this.timer)
      // this.$refs.q1.value = ''
      // this.$refs.q2.value = ''
      // this.$refs.q3.value = ''
      // this.$refs.q4.value = ''
      // this.$emit('can', 4)
      // user/register
      if (this.$refs.q3.value === this.$refs.q4.value) {
        this.$http.post('/api/user/register',
          this.qs.stringify({
            phone: this.$refs.q1.value,
            code: this.$refs.q2.value,
            password: this.$refs.q3.value
          })
        ).then(res => {
          if (res.status === 201) {
            this.$router.push('/')
          }
        })
      } else {
        console.log('错误')
      }
    }
  }
}
</script>
<style scoped>
#login{
    width: 100%;
    height: 790px;
    position: absolute;
    /* top: 60px; */
    left: 0;
    background-color: rgba(200, 200, 200, 0.8);
    z-index: 10;
}
.log{
    width: 400px;
    height: 380px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 60px;
    margin-left: -200px;
}
p{
    margin: 0;
    width: 40px;
    height: 40px;
    font-size:30px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    color: #a6a6a6;
    cursor:pointer;
}
.div1{
    width: 120px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -60px;
}
.phone,.pass{
    width: 70%;
    height: 50px;
    position: absolute;
    box-sizing: border-box;
    left: 15%;
    border-bottom: 1.5px solid #f2f2f2;
}
.error{
  position: absolute;
  top: 120px;
  left: 15%;
  font-size: 12px;
  color: red;
}
.phone{
    top: 70px;
}
.pass{
    top: 120px;
}
.pass2{
    width: 70%;
    height: 50px;
    position: absolute;
    box-sizing: border-box;
    left: 15%;
    top: 170px;
    border-bottom: 1.5px solid #f2f2f2;
}
.pass3{
    width: 70%;
    height: 50px;
    position: absolute;
    box-sizing: border-box;
    left: 15%;
    top: 220px;
    border-bottom: 1.5px solid #f2f2f2;
}
.sure{
    width: 70%;
    height: 46px;
    background-color: #005fbc;
    color: white;
    position: absolute;
    bottom: 30px;
    left: 15%;
    font-size: 16px;
    text-align: center;
    line-height: 46px;
}
.p1{
    width: 15%;
    height: 50px;
    box-sizing: border-box;
    position:absolute;
    top: 0;
    left: 5%;
    font-size: 14px;
    line-height:50px;
}
.p2{
    width: 70%;
    height: 40px;
    box-sizing: border-box;
    padding: 5px;
    position: absolute;
    top: 5px;
    right: 0;
    border: 0;
    line-height: 40px;
}
.p3{
    width: 60%;
    height: 30px;
    border: 0;
    padding: 0;
    position: absolute;
    bottom: 0;
}
.p4,.t1,.t2{
    width: 35%;
    height: 30px;
    border: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #327ec9;
    cursor: pointer;
    background-color: white;
}
.p5{
    width: 60%;
    height: 30px;
    border: 0;
    padding: 0;
    position: absolute;
    bottom: 0;
}
</style>
