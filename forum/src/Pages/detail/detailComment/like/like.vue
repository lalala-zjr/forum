<template>
    <div id="like">
    </div>
</template>
<script>
export default {
//   data () {
//     return {
//       like: false
//     }
//   },
//   methods: {
//     tit () {
//       this.$http.put('/api/like', {
//         type: 2,
//         toId: Number(this.c.id)
//       }).then(res => {
//         console.log(res)
//       })
//     },
//     likeC () {
//       if (this.c.repCount !== 0) {
//         this.like = false
//       }
//     }
//   }
}
</script>
<style scoped>
#like{
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
.user{
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
.like,.com{
    width: 12%;
    height: 26px;
    position: absolute;
    bottom: 6px;
    /* background-color: skyblue; */
}
.like{
    right: 15%;
}
.com{
    right: 2%;
}
.likeC{
    width: 30%;
    height:20px;
    position: absolute;
    top: 3px;
    left: 0px;
}
.likeWord{
    width: 64%;
    height: 26px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    line-height: 26px;
}
</style>
