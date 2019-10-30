<template>
    <div id="forget">
        <div class="for">
            <p @click="cancel">×</p>
            <div class="div1">忘记密码</div>
            <div class="phone">
                <div class="p1">0086</div>
                <input type="text" placeholder="手机号" class="p2" ref="f1">
            </div>
            <div class="pass" v-show="s">
                <input type="text" placeholder="请输入验证码" class="p3" ref="f2">
                <button class="p4" ref="get" @click="send">{{time}}</button>
            </div>
            <div class="error" ref="e" v-show="e">手机号或者验证码出错</div>
            <div class="sure" @click="save">确定</div>
        </div>
    </div>
</template>
<script>
import password from '../../assets/password.js'
export default{
  data () {
    return {
    //   error: true
      time: '获取验证码',
      s: true,
      p: false,
      timer: 0,
      f: true,
      e: false
    }
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
      this.$http.post('/api/code/send',
        this.qs.stringify({
          phone: this.$refs.f1.value
        })
      ).then(res => {
        console.log(res)
      })
    },
    mess () {
      this.$refs.mes.style.color = '#005fbc'
      this.$refs.pas.style.color = 'black'
      this.s = true
      this.p = false
      this.f = false
    },
    pass () {
      this.$refs.mes.style.color = 'black'
      this.$refs.pas.style.color = '#005fbc'
      this.s = false
      this.p = true
      this.f = true
    },
    cancel () {
      this.time = '获取验证码'
      window.clearTimeout(this.timer)
      this.$refs.f1.value = ''
      this.$refs.f2.value = ''
      this.$emit('can', 5)
    },
    save () {
      password.$emit('phone', this.$refs.f1.value)
      // this.time = '获取验证码'
      // window.clearTimeout(this.timer)
      // this.$refs.f1.value = ''
      // this.$refs.f2.value = ''
      // this.$emit('can', 6)
      this.$http.get('/api/code/check', {
        params: {
          phone: this.$refs.f1.value,
          code: this.$refs.f2.value
        }
      }).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.$router.push('/forget2')
        }
      }).catch(error => {
        console.log(error)
        if (error.response.status >= 400) {
          this.e = true
        } else {
          this.e = false
        }
      })
    }
  }
}
</script>
<style scoped>
#forget{
    width: 100%;
    height: 790px;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgba(200, 200, 200, 0.8);
    z-index: 10;
}
.for{
    width: 400px;
    height: 320px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 80px;
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
    width: 80px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: -40px;
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
    left: 15%;
    top: 80px;
    font-size: 12px;
    color: red;
}
.phone{
    top: 100px;
}
.pass{
    top: 150px;
}
.sure{
    width: 70%;
    height: 46px;
    background-color: #005fbc;
    color: white;
    position: absolute;
    bottom: 40px;
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
.p4{
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
</style>
