<template>
   <div id="left">
       <div class="headShow">
           <div class="today">今日：{{today}}</div>
           <div class="yesterday">昨日：{{yesterday}}</div>
           <div class="sum">帖子：{{sum}}</div>
       </div>
   </div>
</template>
<script>
export default{
  data () {
    return {
      today: 150,
      yesterday: 160,
      sum: 1500
    }
  }
}
</script>
<style scoped>
#left{
    width: 55%;
    height: 600px;
    margin-left: 10%;
    /* background-color:#eee; */
    position: relative;
    top: 80px;
    border: 1px solid black;
}
.headShow{
    position: absolute;
    width: 80%;
    height: 30px;
    top: 10px;
    left: 10%;
    background-color:#f0f0f0;
    border: 1px solid #d9d9d9;
}
.headShow div{
    position: absolute;
    width: 18%;
    height: 26px;
    top: 2px;
    text-align: center;
    line-height: 26px;
    font-size: 12px;
    border-right: 1px solid #c4c4c4;
}
.today{
    left: 0;
}
.yesterday{
    left: 18%;
}
.sum{
    left: 36%;
}
</style>
