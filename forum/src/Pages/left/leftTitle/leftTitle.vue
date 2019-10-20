<template>
   <div id="leftTitle">
       <img src="../../../assets/img/user.png" alt="">
       <div class="title">数学建模的应用场景</div>
       <div class="information">

       </div>
   </div>
</template>
<script>
export default{
  data () {
    return {
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
    width: 8%;
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
    /* background-color: skyblue; */
    text-align: left;
    line-height: 40px;
    font-size: 16px;
}
.title:hover{
    color: #005fbc;
    cursor: pointer;
}
.information{
    width: 50%;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid black;
}
</style>
