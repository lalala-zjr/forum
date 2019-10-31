<template>
    <div id="login">
        <div class="log">
            <p @click="cancel">×</p>
            <div class="div1">密码重置</div>
            <div class="pass2">
                <input type="password" placeholder="请输入新密码" class="p5" ref="q3">
                <div class="t1">8-20个字符</div>
            </div>
            <div class="pass3">
                <input type="password" placeholder="确认密码" class="p5" ref="q4">
                <div class="t2">8-20个字符</div>
            </div>
            <div class="sure" @click="save">确定</div>
        </div>
    </div>
</template>
<script>
import password from '../../assets/password.js'
export default{
  data () {
    return {
      phone: ''
    }
  },
  mounted () {
    var self = this
    password.$on('phone', (data) => {
      self.phone = data
      console.log(this.phone)
    })
  },
  methods: {
    cancel () {
      this.$refs.q3.value = ''
      this.$refs.q4.value = ''
      this.$emit('can', 7)
    },
    save () {
    //   this.$refs.q3.value = ''
    //   this.$refs.q4.value = ''
    //   this.$emit('can', 8)
      if (this.$refs.q3.value === this.$refs.q4.value) {
        // console.log(123)
        console.log(this.phone)
        this.$http.put('/api/user/',
          this.qs.stringify({
            phone: this.phone,
            code: this.$refs.q3.value
          })
        ).then(res => {
          console.log(res)
          if (res.status === 200) {
            this.$router.push('/')
          } else if (res.status === 500) {
            this.$router.back()
          }
        })
      }
    }
  }
//   beforeDestroy () {
//     password.$off()
//   }
}

</script>
<style scoped>
#login{
    width: 100%;
    height: 790px;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgba(200, 200, 200, 0.8);
    z-index: 10;
}
.log{
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
    width: 120px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: -60px;
}
.pass2{
    width: 70%;
    height: 50px;
    position: absolute;
    box-sizing: border-box;
    left: 15%;
    top: 100px;
    border-bottom: 1.5px solid #f2f2f2;
}
.pass3{
    width: 70%;
    height: 50px;
    position: absolute;
    box-sizing: border-box;
    left: 15%;
    top: 150px;
    border-bottom: 1.5px solid #f2f2f2;
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
.t1,.t2{
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
