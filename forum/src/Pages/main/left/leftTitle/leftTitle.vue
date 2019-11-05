<template>
   <div id="leftTitle">
       <img src="../../../../assets/img/user.png" alt="" class="user" @click="watch">
       <div class="title" @click="enter">{{ad.title}}</div>
       <div class="information">
           <div class="username">{{ad.authorName}}</div>
           <div class="time">{{ad.create}}</div>
       </div>
       <div class="eye">
           <img src="../../../../assets/img/eye.png" alt="" class="eyeShow">
           <div class="eyeCount">{{ad.click}}</div>
       </div>
        <div class="com">
            <img src="../../../../assets/img/com.png" alt="" class="comShow">
            <div class="comCount">{{ad.commentCount}}</div>
        </div>
   </div>
</template>
<script>
export default{
  props: {
    ad: '',
    index: ''
  },
  data () {
    return {
    }
  },
  methods: {
    enter () {
    //   this.$emit('Into', 1)
      this.$router.push('/detail/' + this.ad.id)
    },
    watch () {
    //   this.$emit('Into', 2)
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
.user{
    width: 8%;
    height: 40px;
    z-index: 5;
    position: absolute;
    top: 15px;
    left: 1%;
}
.title{
    width: 50%;
    height: 40px;
    position: absolute;
    left: 14%;
    text-align: left;
    line-height: 40px;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
}
.information .time{
    width: 60%;
    height: 20px;
    position: absolute;
    top: 5px;
    left: 40%;
}
.eye{
    position: absolute;
    width: 10%;
    height: 16px;
    right: 20%;
    bottom: 5px;
    /* background-color: yellow; */
}
.com{
    position: absolute;
    width: 10%;
    height: 16px;
    right: 8%;
    bottom: 5px;
    /* background-color: red; */
}
.eyeShow,.comShow{
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 16px;
    z-index: 5;
    text-align: right;
    /* background-color: aquamarine; */
}
.eyeCount,.comCount{
    position: absolute;
    width: 60%;
    height: 16px;
    top: 0;
    left: 40%;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
}
</style>
