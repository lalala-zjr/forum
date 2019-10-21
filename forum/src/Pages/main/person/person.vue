<template>
   <div id="person">
       <p>&emsp;&emsp;&emsp;&emsp;&emsp;个人信息</p>
       <div class="peronShow"></div>
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
#person{
    width: 100%;
    height: 750px;
}
p{
    width: 100%;
    height: 50px;
    line-height: 75px;
    border-bottom: 1px solid #ccc;
    margin: 0;
}
.peronShow{
    width: 70%;
    height: 700px;
    position: relative;
    left: 15%;
    background-color: white;
}
</style>
