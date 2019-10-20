<template>
   <div id="right">
       <div class="word">{{word}}</div>
       <div class="w1">排行榜</div>
   </div>
</template>
<script>
export default{
  data () {
    return {
      word: '发帖'
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
    position: absolute;
    margin-top: 20px;
    left: 10%;
    text-align: left;
    line-height: 30px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
}
</style>
