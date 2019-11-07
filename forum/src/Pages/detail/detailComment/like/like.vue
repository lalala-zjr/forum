<template>
    <div id="like">
        <div class="name">{{com.toRepAuthorName}}回复{{com.repAuthorName}}：</div>
        <div class="time">{{com.repCreate}}</div>
        <div class="content">{{com.repContent}}</div>
    </div>
</template>
<script>
export default {
  props: {
    com: ''
  }
}
</script>
<style scoped>
#like{
    width: 80%;
    margin-left: 10%;
    /* border-bottom: 1px solid #ccc; */
    position: relative;
    /* margin-bottom: 10px; */
}
.name{
    width: 50%;
    height: 30px;
    font-size: 14px;
}
.time{
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 30px;
    font-size: 12px;
    text-align: right;
    line-height: 30px;
}
.content{
    width: 80%;
    margin-left: 10%;
}
</style>
