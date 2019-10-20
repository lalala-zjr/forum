<template>
   <div id="right">
       <div class="word">{{word}}</div>
       <div class="w1">{{word1}}</div>
       <div class="w2">{{word2}}</div>
       <div class="w3">
           <div class="day">{{d1}}</div>
           <div class="week">{{d2}}</div>
           <div class="month">{{d3}}</div>
       </div>
   </div>
</template>
<script>
export default{
  data () {
    return {
      word: '发帖',
      word1: '排行榜',
      word2: '热搜排名',
      d1: '今日',
      d2: '本周',
      d3: '本月'
    }
  }
}
</script>
<style scoped>
#right{
    position: absolute;
    top: 80px;
    right: 4%;
    width: 28%;
    height: 700px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 20px;
}
.word{
    width: 80%;
    height: 120px;
    position: relative;
    margin-top: 30px;
    left: 10%;
    border-radius: 20px;
    background-color: #478cce;
    color: white;
    font-size: 30px;
    text-align: center;
    line-height: 120px;
    cursor: pointer;
}
.w1{
    width: 80%;
    height: 30px;
    position: relative;
    margin-top: 20px;
    left: 10%;
    text-align: left;
    line-height: 30px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
}
.w2{
    width: 80%;
    height: 24px;
    position: relative;
    left: 10%;
    text-align: left;
    line-height: 24px;
    font-size: 14px;
}
.w3{
    width: 80%;
    height: 24px;
    position: relative;
    left: 10%;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
}
.w3 div{
    position: absolute;
    top: 0;
    width: 14%;
    height: 24px;
    cursor: pointer;
}
.day{
    left: 0;
}
.week{
    left: 14%;
}
.month{
    left: 28%;
}
</style>
