<template>
    <div id="detail">
        <div class="head">
            <div class="headTitle">数学建模的应用场景</div>
            <div class="headInformation">2019 10-22</div>
        </div>
        <div class="content"></div>
        <div class="like">
            <div class="likeNum">+1985</div>
            <img src="../../../assets/img/like1.png" alt="" class="likeImg" v-show="l1" @click="like1">
            <img src="../../../assets/img/like2.png" alt="" class="likeImg" v-show="l2" @click="like2">
        </div>
        <div class="comment">
            <input type="text" placeholder="说点什么？" maxlength="24">
            <div>快速评论</div>
        </div>
        <div class="commentContend">
            <div class="word">评论区</div>
            <detailComment></detailComment>
            <detailComment></detailComment>
            <img src="../../../assets/img/jian.png" alt="" class="pic">
        </div>
        <div class="userCom">
            <div class="userN">
                <img src="../../../assets/img/user.png" class="userPic" alt="">
                <div class="userName">{{user}}</div>
            </div>
            <textarea placeholder="说点什么？" maxlength="200"></textarea>
            <div class="ComSend">发表评论</div>
        </div>
        <div class="emp"></div>
    </div>
</template>
<script>
import detailComment from './detailComment/detailComment.vue'
export default {
  data () {
    return {
      user: '可怜且轩轩',
      l1: true,
      l2: false
    }
  },
  methods: {
    like1 () {
      this.l2 = true
      this.l1 = false
    },
    like2 () {
      this.l2 = false
      this.l1 = true
    }
  },
  components: {
    detailComment
  }
}
</script>
<style scoped>
#detail{
    background-color: #fff;
    /* height: 1000px; */
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
    line-height: 60px;
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
.like{
    width: 80%;
    height: 50px;
    position: relative;
    left: 10%;
    top: 6%;
    font-size: 20px;
    line-height: 50px;
    /* background-color: red; */
}
.likeNum{
    width: 50%;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    text-align: right;
}
.likeImg{
    height: 40px;
    position: absolute;
    right: 40%;
    top: 5px;
}
.comment{
    width: 70%;
    height: 40px;
    position: relative;
    left: 15%;
    top: 7%;
    /* background-color: red; */
}
.comment input{
    width: 74%;
    height: 30px;
    position: absolute;
    padding: 0 1%;
    left: 0;
    top: 5px;
    border: 1px solid #ccc;
    /* background-color: skyblue; */
}
.comment div{
    width: 22%;
    height: 30px;
    position: absolute;
    right: 0;
    top: 5px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    background-color: #005fbc;
    color: white;
    cursor: pointer;
}
.commentContend{
    width: 80%;
    /* height: 400px; */
    position: relative;
    left: 10%;
    top: 10%;
}
.word{
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    line-height: 44px;
}
.emp{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    background-color: white;
}
.pic{
    width: 30px;
    height: 30px;
    position: relative;
    top: 5px;
    left: 50%;
    margin-left: -15px;
}
.userCom{
    width: 90%;
    /* border: 1px solid rosybrown; */
    margin:5% 5%;
    position: relative;
}
.userN{
    width: 100%;
    height: 36px;
    line-height: 36px;
    color: #005fbc;
}
.userPic{
    width: 6%;
    height: 36px;
    position: relative;
    top: 2px;
    left: 0;
}
.userName{
    width: 94%;
    height: 36px;
    position: absolute;
    left: 8%;
    top: 0;
    line-height: 36px;
}
textarea{
    width: 86%;
    margin-left: 8%;
    height: 100px;
    box-sizing: border-box;
    margin-top: 5px;
    font-size: 14px;
    resize: none;
    padding: 1% 4px;
}
.ComSend{
    width: 14%;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    text-align:center;
    background-color: #005fbc;
    color: white;
    margin: 5px 80%;
    border-radius: 12px;
    cursor: pointer;
}
</style>
