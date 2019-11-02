<template>
    <div id="load">
        <div class="baidu1">百度网盘链接：{{bai1}}</div>
        <div class="baidu2">提取码：{{bai2}}</div>
        <div class="github">{{github}}</div>
        <p>123123</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      bai1: 'https://pan.baidu.com/s/1C2v0XvDvP-dTeKKJoGDdMA',
      bai2: 'xv7i',
      github: 'https://github.com/lalala-zjr/forum'
    }
  }
}
</script>
<style scoped>
#load{
    width: 80%;
    height: 850px;
    margin-left: 10%;
}
.baidu1{
    width: 80%;
    height: 40px;
    margin-top: 80px;
    margin-left: 10%;
}
.baidu2{
    width: 80%;
    height: 40px;
    margin-top: 50px;
    margin-left: 10%;
}
.github{
    width: 80%;
    height: 40px;
    margin-top: 50px;
    margin-left: 10%;
}
</style>
