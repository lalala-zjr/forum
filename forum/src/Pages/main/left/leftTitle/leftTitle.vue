<template>
   <div id="leftTitle">
       <img src="../../../../assets/img/user.png" alt="">
       <div class="title">数学建模的应用场景</div>
       <div class="information">
           <div class="username">{{name}}</div>
           <div class="time">{{time}}</div>
       </div>
       <div class="eye"></div>
        <div class="com"></div>
   </div>
</template>
<script>
export default{
  data () {
    return {
      name: 'Angel 肆^',
      time: '2019-10-20 13:19'
    }
  }
}
</script>
<style scoped>
#leftTitle{
    width: 80%;
    height: 70px;
    left: 10%;
    position: relative;
    border-bottom: 1px solid #ccc;
}
img{
    width: 7%;
    height: 40px;
    z-index: 5;
    position: absolute;
    top: 15px;
    left: 1%;
}
.title{
    width:50%;
    height: 40px;
    position: absolute;
    left: 14%;
    text-align: left;
    line-height: 40px;
    font-size: 16px;
    /* background-color: aqua; */
}
.title:hover{
    color: #005fbc;
    cursor: pointer;
}
.information{
    width: 50%;
    height: 30px;
    position: absolute;
    bottom: 0;
    text-align: center;
    left: 14%;
    font-size: 12px;
    line-height: 20px;
}
.information .username{
    width: 40%;
    height: 20px;
    position: absolute;
    top: 5px;
    left: 0;
    border-right: 1px solid #ccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* background-color: red; */
}
.information .time{
    width: 60%;
    height: 20px;
    position: absolute;
    top: 5px;
    left: 40%;
    /* background-color: rebeccapurple; */
}
.eye{
    position: absolute;
    width: 10%;
    height: 20px;
    right: 20%;
    bottom: 5px;
    background-color: #005fbc;
}
.com{
    position: absolute;
    width: 10%;
    height: 20px;
    right: 10%;
    bottom: 5px;
    background-color: red;
}
</style>
