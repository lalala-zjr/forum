<template>
   <div id="left">
       <div class="empty"></div>
       <div class="headShow">
           <div class="today">今日：{{today}}</div>
           <div class="yesterday">昨日：{{yesterday}}</div>
           <div class="sum">帖子：{{sum}}</div>
       </div>
       <div class="sort">
           <div class="sort1">{{s1}}</div>
           <div class="sort2">{{s2}}</div>
           <select id="Search">
               <option value="1">2019</option>
               <option value="2">2018</option>
               <option value="3">2017</option>
               <option value="4">2016</option>
           </select>
       </div>
       <leftTitle></leftTitle>
       <leftTitle></leftTitle>
       <leftTitle></leftTitle>
   </div>
</template>
<script>
import leftTitle from './leftTitle/leftTitle.vue'
export default{
  data () {
    return {
      today: 150,
      yesterday: 160,
      sum: 1500,
      s1: '全部',
      s2: '热门'
    }
  },
  components: {
    leftTitle
  }
}
</script>
<style scoped>
#left{
    background-color: #fff;
    width: 55%;
    height: 600px;
    margin-left: 10%;
    position: relative;
    top: 30px;
    /* border: 1px solid black; */
}
.empty{
    width: 100%;
    height:20px;
    position: relative;
    background-color: white;
}
.headShow{
    position: relative;
    width: 80%;
    height: 30px;
    margin-top: 20px;
    left: 10%;
    box-sizing: border-box;
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
.sort{
    position: relative;
    width: 80%;
    box-sizing: border-box;
    height: 60px;
    /* top: 10px; */
    margin: 0 10%;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
}
.sort div{
    position: absolute;
    width: 10%;
    height: 26px;
    top: 17px;
    text-align: center;
    line-height: 26px;
    cursor: pointer;
}
.sort1{
    left: 0;
    border-right: 2px solid #ababab;
}
.sort2{
    left: 10%;
}
#Search{
    width: 20%;
    height: 26px;
    position: absolute;
    top: 17px;
    left: 30%;
}
</style>
