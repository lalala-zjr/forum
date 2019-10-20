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
       <div class="rightSort">
           <div class="sort1">
               <p>1</p>
           </div>
           <div class="sort2">
               <p>2</p>
           </div>
           <div class="sort3">
               <p>3</p>
           </div>
           <div class="sort4">
               <p>4</p>
           </div>
           <div class="sort5">
               <p>5</p>
           </div>
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
    text-align: left;
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
.rightSort{
    margin-top: 10px;
    position: relative;
    top: 0;
    left: 10%;
    width: 80%;
    height: 200px;
}
.rightSort div{
    width: 100%;
    height: 40px;
    position: relative;
    box-sizing: border-box;
    border-bottom:1px solid #ccc;
    font-size: 14px;
    line-height: 40px;
    text-align: left;
}
p{
    margin: 0;
    position: absolute;
    top: 8px;
    width: 10%;
    height: 24px;
    text-align: center;
    line-height: 24px;
}
.sort1 p{
    background-color: red;
}
.sort2 p{
    background-color: #ff8d1a;
}
.sort3 p{
    background-color: #ffeb3b;
}
</style>
