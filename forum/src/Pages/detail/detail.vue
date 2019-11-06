<template>
    <div id="detail">
        <!-- <Header></Header> -->
        <right></right>
        <div id="detail2">
            <div class="head">
                <div class="headTitle">{{title}}</div>
                <div class="headInformation">{{time}}</div>
            </div>
            <div class="content">{{con}}</div>
            <div class="like">
                <div class="likeNum">+{{cnt}}</div>
                <img src="../../assets/img/like1.png" title="一天只能点赞一次哦！" class="likeImg" v-show="l1" @click="like1">
                <img src="../../assets/img/like2.png" alt="" class="likeImg" v-show="l2">
            </div>
            <div class="comment">
                <input type="text" placeholder="说点什么？" ref="re1" maxlength="24">
                <div @click="review1">快速评论</div>
            </div>
            <div class="commentContend">
                <div class="word">评论区</div>
                <div class="commentAll">
                    <detailComment v-show="c1" v-for="(con,index) in content" :c="content[index]" :key="index"></detailComment>
                    <img src="../../assets/img/jian.png" alt="" class="pic" v-show="c3">
                </div>
                <div class="hollow" v-show="c2">快来抢沙发！！</div>
            </div>
            <div class="userCom">
                <div class="userN">
                    <img src="../../assets/img/user.png" class="userPic" alt="">
                    <div class="userName">{{user}}</div>
                    <div class="lengthCom">小于200字</div>
                </div>
                <textarea placeholder="说点什么？" maxlength="200" ref="re2"></textarea>
                <div class="ComSend" @click="review2">发表评论</div>
                <div class="emp2"></div>
            </div>
        </div>
        <div class="emp"></div>
    </div>
</template>
<script>
// import Header from '../../components/Header/Header.vue'
import detailComment from './detailComment/detailComment.vue'
import right from '../../components/right/right.vue'
export default {
  data () {
    return {
      user: '我',
      l1: true,
      l2: false,
      id: this.$route.params.id,
      con: '',
      time: '',
      cnt: 0,
      title: '',
      c1: false,
      c2: true,
      c3: false,
      content: ''
    }
  },
  created () {
    this.$http.get('/api/article/' + this.id,
      this.qs.stringify({
        id: this.id
      })
    ).then(res => {
      console.log(res.data)
      //   this.user = res.data.authorName
      this.con = res.data.content
      this.time = res.data.create
      this.cnt = res.data.like
      this.title = res.data.title
      if (res.data.comments.length > 0) {
        this.c1 = true
        this.c2 = false
        this.c3 = true
        this.content = res.data.comments
        console.log(1)
      } else {
        console.log(0)
      }
    })
  },
  methods: {
    like1 () {
      this.$http.put('/api/like', {
        type: 1,
        toId: this.id
      }).then(res => {
        console.log(res)
        this.l2 = true
        this.l1 = false
      }).catch((e) => {
        if (e.response.status === 400) {
          this.e = true
        }
      })
    },
    review1 () {
      console.log(this.$refs.re1.value)
      console.log(Number(this.id))
      this.$http.post('/api/comment', {
        type: 1,
        content: this.$refs.re1.value,
        toId: Number(this.id)
      }).then(res => {
        console.log(res)
        this.$refs.re1.value = ''
      })
    },
    review2 () {
      this.$http.post('/api/comment', {
        type: 1,
        content: this.$refs.re2.value,
        toId: Number(this.id)
      }).then(res => {
        console.log(res)
        this.$refs.re2.value = ''
      })
    }
  },
  components: {
    detailComment,
    right
    // Header
  }
}
</script>
<style scoped>
#detail{
    background-color: #f0f0f0;
}
#detail2{
    background-color: #fff;
    /* height: 1000px; */
    width: 55%;
    margin-left: 10%;
    position: relative;
    top: 30px;
    bottom: 10px;
}
.hollow{
    width: 80%;
    height: 50px;
    /* background-color: red; */
    margin-left: 10%;
    font-size: 12px;
    line-height: 50px;
    text-align: center;
    color: #ccc;
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
    box-sizing: border-box;
    padding: 1%;
    border: 1px solid #ccc;
    position: relative;
    left: 10%;
    top: 5%;
    font-size: 14px;
    text-indent: 2em;
    overflow: auto;
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
    background-color: #f0f0f0;
}
.emp2{
    width: 100%;
    height: 50px;
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
.lengthCom{
    width: 80px;
    height: 30px;
    /* background-color: rebeccapurple; */
    position: absolute;
    right: 6%;
    top: 6px;
    font-size: 12px;
    line-height: 45px;
    text-align: right;
    color: #ccc;
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
