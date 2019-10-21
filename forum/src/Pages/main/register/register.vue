<template>
    <div id="register">
        <div class="reg">
            <p @click="cancel">×</p>
            <div class="div1">登录</div>
            <div class="div2">
                <div class="message" @click="mess" ref="mes">短信登陆</div>
                <div class="password" @click="pass" ref="pas">密码登陆</div>
            </div>
            <div class="phone">
                <div class="p1">0086</div>
                <input type="text" placeholder="手机号" class="p2">
            </div>
            <!-- <div class="error" v-show="error">输入格式出错</div> -->
            <div class="pass" v-show="s">
                <input type="text" placeholder="请输入验证码" class="p3">
                <button class="p4" ref="get" @click="send">{{time}}</button>
            </div>
            <div v-show="p" class="pass2">
                <input type="password" placeholder="请输入密码" class="p3">
            </div>
            <div class="sure" @click="save">登录</div>
        </div>
    </div>
</template>
<script>
export default{
  data () {
    return {
    //   error: true
      time: '获取验证码',
      s: true,
      p: false,
      timer: 0
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
    },
    mess () {
      this.$refs.mes.style.color = '#005fbc'
      this.$refs.pas.style.color = 'black'
      this.s = true
      this.p = false
    },
    pass () {
      this.$refs.mes.style.color = 'black'
      this.$refs.pas.style.color = '#005fbc'
      this.s = false
      this.p = true
    },
    cancel () {
      this.time = '获取验证码'
      window.clearTimeout(this.timer)
      this.$emit('can', 1)
    },
    save () {
      this.time = '获取验证码'
      window.clearTimeout(this.timer)
      this.$emit('can', 2)
    }
  }
}
</script>
<style scoped>
#register{
    width: 100%;
    height: 790px;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgba(200, 200, 200, 0.8);
    z-index: 10;
}
.reg{
    width: 400px;
    height: 340px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 100px;
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
    top: 20px;
    left: 50%;
    margin-left: -40px;
}
.div2{
    width: 180px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 70px;
    left: 110px;
}
.div2 div{
    width: 50%;
    height: 24px;
    line-height: 20px;
    position: absolute;
    top: 3px;
}
.message{
    left: 0;
    border-right: 1px solid #ccc;
    color: #005fbc;
    cursor: pointer;
}
.password{
    left: 50%;
    cursor: pointer;
}
.phone,.pass{
    width: 70%;
    height: 50px;
    position: absolute;
    box-sizing: border-box;
    left: 15%;
    border-bottom: 1.5px solid #f2f2f2;
}
.phone{
    top: 120px;
}
.pass{
    top: 170px;
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
.sure{
    width: 70%;
    height: 50px;
    background-color: #005fbc;
    color: white;
    position: absolute;
    bottom: 40px;
    left: 15%;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
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
/* .error{
    width: 70%;
    height: 15px;
    color: red;
    font-size: 12px;
    position: absolute;
    top: 170px;
    left: 35%;
} */
</style>
