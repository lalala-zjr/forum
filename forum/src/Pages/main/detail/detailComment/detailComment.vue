<template>
    <div id="detailComment">
        <div class="head">
            <img src="../../../../assets/img/user.png" alt="">
            <div class="headword">扬扬叉会腰</div>
        </div>
        <div class="body">写的写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错真不错</div>
        <div class="foot"></div>
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
#detailComment{
    width: 100%;
    /* height: 120px; */
    border-bottom: 1px solid #ccc;
}
.head{
    width: 100%;
    height: 40px;
    /* background-color: red; */
    position: relative;
    line-height: 40px;
}
img{
    width: 6%;
    height: 30px;
    position: absolute;
    left: 2%;
    top: 5px;
}
.headword{
    width: 88%;
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
}
.body{
    width: 88%;
    position: relative;
    font-size: 14px;
    top: 0;
    left: 12%;
}
.foot{
    width: 100%;
    height: 40px;
    position: relative;
    bottom: 0;
    left: 0;
    /* background-color: red; */
}
</style>
