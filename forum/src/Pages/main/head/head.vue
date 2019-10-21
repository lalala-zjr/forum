<template>
    <div id="head">
        <div id="head1">
            <div class="word">{{word}}</div>
            <div class="nav">
                <div class="li1">
                    <div ref="nav1" @click="navChoose1">{{nav1}}</div>
                </div>
                <div class="li2">
                    <div ref="nav2" @click="navChoose2">{{nav2}}</div>
                </div>
                <div class="li3">
                    <div ref="nav3" @click="navChoose3">{{nav3}}</div>
                </div>
            </div>
            <svg v-show="flag" t="1571489495935" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2545" width="16" height="16"><path d="M446.836364 723.781818c-160.581818 0-290.909091-130.327273-290.909091-290.909091S286.254545 141.963636 446.836364 141.963636s290.909091 130.327273 290.909091 290.909091-130.327273 290.909091-290.909091 290.909091z m0-558.545454c-146.618182 0-267.636364 121.018182-267.636364 267.636363s121.018182 267.636364 267.636364 267.636364 267.636364-121.018182 267.636363-267.636364S593.454545 165.236364 446.836364 165.236364zM877.381818 875.054545c-2.327273 0-6.981818 0-9.309091-2.327272l-232.727272-232.727273c-4.654545-4.654545-4.654545-11.636364 0-16.290909s11.636364-4.654545 16.290909 0l232.727272 232.727273c4.654545 4.654545 4.654545 11.636364 0 16.290909 0 0-4.654545 2.327273-6.981818 2.327272z" p-id="2546"></path></svg>
            <input type="search" class="search" placeholder="搜贴">
            <div class="tail">
                <button class="tail1">{{t1}}</button>
                <button class="tail1">{{t2}}</button>
            </div>
        </div>
        <div id="head2"></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      word: 'xusm论坛',
      nav1: '数模论文',
      nav2: '技术文',
      nav3: '个人信息',
      t1: '注册',
      t2: '登录',
      flag: true
    }
  },
  methods: {
    navChoose1 () {
      this.$refs.nav1.style.color = 'white'
      this.$refs.nav1.style.backgroundColor = '#005fbc'
      this.$refs.nav2.style.color = 'black'
      this.$refs.nav2.style.backgroundColor = 'white'
      this.$refs.nav3.style.color = 'black'
      this.$refs.nav3.style.backgroundColor = 'white'
    },
    navChoose2 () {
      this.$refs.nav2.style.color = 'white'
      this.$refs.nav2.style.backgroundColor = '#005fbc'
      this.$refs.nav1.style.color = 'black'
      this.$refs.nav1.style.backgroundColor = 'white'
      this.$refs.nav3.style.color = 'black'
      this.$refs.nav3.style.backgroundColor = 'white'
    },
    navChoose3 () {
      this.$refs.nav3.style.color = 'white'
      this.$refs.nav3.style.backgroundColor = '#005fbc'
      this.$refs.nav2.style.color = 'black'
      this.$refs.nav2.style.backgroundColor = 'white'
      this.$refs.nav1.style.color = 'black'
      this.$refs.nav1.style.backgroundColor = 'white'
    }
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
    background-color: #f0f0f0;
    margin-top: 4px;
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
    /* background-color:beige; */
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
    width: 33.33%;
    height: 30px;
    position: absolute;
    top: 10px;
    font-size: 14px;
    line-height: 30px;
    color: #0c66bf;
    text-align: center;
    border-right: 1px solid #ccc;
}
.li3 div:hover,.li2 div:hover,.li1 div:hover{
    color: white;
    background-color:#005fbc;
}
.li3 div,.li2 div,.li1 div{
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
.li1 div{
    color: white;
    background-color: #005fbc;
}
.li2{
    left: 33.33%;
}
.li3{
    left: 66.66%;
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
