<template>
    <div id="detail">
        <div class="head">
            <div class="headTitle">数学建模的应用场景</div>
            <div class="headInformation">2019 10-22</div>
        </div>
        <div class="content"></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
#detail{
    background-color: #fff;
    height: 1000px;
    width: 55%;
    margin-left: 10%;
    position: relative;
    top: 30px;
    bottom: 10px;
}
.head{
    width: 80%;
    height: 80px;
    position: relative;
    left: 10%;
    top: 2%;
}
.headTitle{
    width: 100%;
    height: 40px;
    /* background-color: hotpink; */
    position: absolute;
    font-size: 20px;
    line-height: 40px;
    text-align: left;
    top: 0;
    left: 0;
}
.headInformation{
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    /* background-color: skyblue; */
    position: absolute;
    font-size: 12px;
    line-height: 40px;
    text-align: left;
    bottom: 0;
    left: 0;
}
.content{
    width: 80%;
    height: 600px;
    /* background-color: yellow; */
    border: 1px solid #ccc;
    position: relative;
    left: 10%;
    top: 5%;
}
</style>
