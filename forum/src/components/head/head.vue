<template>
    <div id="head">
        <div id="head1">
            <div class="word">{{word}}</div>
            <div class="nav">
                <div class="li1">
                    <div>{{nav1}}</div>
                </div>
                <div class="li2">
                    <div>{{nav2}}</div>
                </div>
                <div class="li3">
                    <div>{{nav3}}</div>
                </div>
            </div>
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
      t2: '登录'
    }
  }
}
</script>
<style scoped>
#head1{
    width: 100%;
    height: 40px;
    /* background-color: #cccccc; */
    margin-top: 15px;
    position: relative;
    top: 0;
}
#head2{
    width: 100%;
    height: 15px;
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
}
.li1{
    left: 0;
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
.search::-moz-placeholder{
    text-align: center;
}
.tail{
    width: 20%;
    height: 30px;
    /* background-color: skyblue; */
    position: absolute;
    right: 0;
    bottom: 0;
}
.tail1,.tail2{
    padding: 0;
    width: 60px;
    height: 30px;
    background-color: #fff;
    border: 1px solid black;
    line-height: 30px;
    text-align: center;
    margin-right: 20px;
    font-size: 14px;
    cursor: pointer;
}
.tail1:hover,.tail2:hover{
    border: 0;
    background-color:#478cce;
    color: white;
}
</style>
