<template>
    <div id="header">
        <div id="head1">
            <div class="word">{{word}}</div>
            <div class="nav">
                <div class="li1">
                    <div ref="nav1" @click="nav11">{{nav1}}</div>
                </div>
                <div class="li2">
                    <div ref="nav2" @click="nav22">{{nav2}}</div>
                </div>
                <div class="li3">
                    <div ref="nav3" @click="nav33">{{nav3}}</div>
                </div>
                <div class="li4">
                    <div ref="nav4" @click="nav44">{{nav4}}</div>
                </div>
            </div>
            <input type="search" class="search" placeholder="搜贴">
            <div class="tail">
                <router-link to="/login">
                    <button class="tail1">{{t1}}</button>
                </router-link>
                <router-link to="register">
                    <button class="tail2" :forget="forget">{{t2}}</button>
                </router-link>
            </div>
        </div>
        <div id="head2"></div>
        <router-view></router-view>
    </div>
</template>
<script>
import password from '../../assets/password.js'
export default {
  data () {
    return {
      word: 'xysm论坛',
      nav1: '数模论文',
      nav2: '技术文',
      nav3: '个人信息',
      nav4: '下载专区',
      t1: '注册',
      t2: '登录',
      flag: true
    }
  },
  mounted () {
    password.$emit('type', 1)
    // this.$router.push('/')
  },
  methods: {
    nav33 () {
      this.$http.get('/api/user/verify').then(res => {
        console.log(res)
        this.$router.push('/person')
      }).catch((e) => {
        alert('请先登录')
      })
    },
    nav11 () {
      password.$emit('type', 1)
      this.$router.push('/')
    },
    nav22 () {
      password.$emit('type', 2)
      this.$router.push('/')
    },
    nav44 () {
      this.$router.push('/download')
    },
    forget (data) {
      console.log(data)
      this.$router.replace('/forget')
    }
    // tail1 () {
    //   this.$router.push('/login')
    // },
    // tail2 () {
    //   this.$router.push('/register')
    // }
  }
}
</script>
<style scoped>
#head1{
    width: 100%;
    height: 40px;
    background-color: #fff;
    margin-top: 15px;
    position: relative;
    top: 0;
}
#head2{
    position: relative;
    width: 100%;
    height: 5px;
    box-sizing: border-box;
    background-color: #f0f0f0;
    border-bottom: 1px solid #c5c5c5;
}
.word{
    position: absolute;
    top: 0;
    left: 0;
    width: 16%;
    height: 40px;
    font-size: 30px;
    line-height: 40px;
    color: #0c66bf;
    text-align: center;
}
.nav{
    position: absolute;
    left: 16%;
    top: 0;
    width: 24%;
    height: 40px;
}
.nav div{
    width: 25%;
    height: 30px;
    position: absolute;
    top: 10px;
    font-size: 14px;
    line-height: 30px;
    color: #0c66bf;
    text-align: center;
    border-right: 1px solid #ccc;
}
.li4 div,.li3 div,.li2 div,.li1 div{
    width: 80%;
    height: 90%;
    position: absolute;
    top: 5%;
    left: 10%;
    border: 0;
    cursor: pointer;
}
.li1{
    left: 0;
}
/* .li1 div{
    color: white;
    background-color: #005fbc;
} */
.li1 div:hover,.li2 div:hover,.li3 div:hover,.li4 div:hover{
    color: white;
    background-color: #005fbc;
}
.li2{
    left: 25%;
}
.li3{
    left: 50%;
}
.li4{
    left: 75%;
}
.search{
    width: 30%;
    height: 24px;
    position: absolute;
    bottom: 3px;
    left: 40%;
    margin: 0 5%;
    text-decoration: none;
    background-color: #e7e7e7;
    padding: 0;
}
svg{
    position: absolute;
    left: 57%;
    bottom: 6px;
    z-index: 5;
    display: block;
}
.search::-moz-placeholder{
    text-align: center;
    background-image: '/../assets/img/search.png'
}
.search::-webkit-input-placeholder{
    text-align: center;
    background-image: '/../assets/img/search.png'
}
.tail{
    width: 20%;
    height: 30px;
    position: absolute;
    right: 0;
    bottom: 0;
}
.tail1,.tail2{
    padding: 0;
    width: 60px;
    height: 30px;
    background-color: #fff;
    border: 0;
    line-height: 30px;
    text-align: center;
    margin-right: 10px;
    font-size: 14px;
    overflow: hidden;
}
.tail1:hover,.tail2:hover{
    background-color:#478cce;
    color: white;
}
</style>
