<template>
   <div id="right">
       <div class="word" @click="send">{{word}}</div>
       <div class="w1">{{word1}}</div>
       <div class="w2">{{word2}}</div>
       <div class="w3">
           <div class="day" @click="border1()" ref="b1">{{d1}}</div>
           <div class="week" @click="border2()" ref="b2">{{d2}}</div>
           <div class="month" @click="border3()" ref="b3">{{d3}}</div>
       </div>
       <div class="rightSort">
           <div class="sort1">
               <p>1</p>
               <div class="sort1Word">{{w1}}</div>
           </div>
           <div class="sort2">
               <p>2</p>
               <div class="sort2Word">{{w2}}</div>
           </div>
           <div class="sort3">
               <p>3</p>
               <div class="sort3Word">{{w3}}</div>
           </div>
           <div class="sort4">
               <p>4</p>
               <div class="sort4Word">{{w4}}</div>
           </div>
           <div class="sort5">
               <p>5</p>
               <div class="sort5Word">{{w5}}</div>
           </div>
       </div>
       <!-- <div class="footer"> -->
           <img src="../../assets/img/weixin.jpg" alt="" class="footer">
       <!-- </div> -->
       <div class="FootWord">数模协会</div>
   </div>
</template>
<script>
export default{
  data () {
    return {
      word: '发帖',
      word1: '排行榜',
      word2: '热搜排名',
      d1: '今日',
      d2: '本周',
      d3: '本月',
      w1: '',
      w2: '',
      w3: '',
      w4: '',
      w5: ''
    }
  },
  created () {
    this.$http.get('/api/article/ranklist').then(res => {
      this.w1 = res.data.titles[0]
      this.w2 = res.data.titles[1]
      this.w3 = res.data.titles[2]
      this.w4 = res.data.titles[3]
      this.w5 = res.data.titles[4]
      console.log(res)
    })
  },
  methods: {
    border1 () {
      this.$refs.b1.style.borderBottom = '2px solid #478cce'
      this.$refs.b2.style.borderBottom = '0'
      this.$refs.b3.style.borderBottom = '0'
      this.$http.get('/api/article/ranklist').then(res => {
        console.log(111)
        console.log(res.data)
        this.w1 = res.data.titles[0]
        this.w2 = res.data.titles[1]
        this.w3 = res.data.titles[2]
        this.w4 = res.data.titles[3]
        this.w5 = res.data.titles[4]
      })
    },
    border2 () {
      this.$refs.b2.style.borderBottom = '2px solid #478cce'
      this.$refs.b1.style.borderBottom = '0'
      this.$refs.b3.style.borderBottom = '0'
      this.$http.get('/api/article/ranklist',
        this.qs.stringify({
          date: 2
        })
      ).then(res => {
        console.log(222)
        console.log(res.data)
        this.w1 = res.data.titles[0]
        this.w2 = res.data.titles[1]
        this.w3 = res.data.titles[2]
        this.w4 = res.data.titles[3]
        this.w5 = res.data.titles[4]
      })
    },
    border3 () {
      this.$refs.b3.style.borderBottom = '2px solid #478cce'
      this.$refs.b2.style.borderBottom = '0'
      this.$refs.b1.style.borderBottom = '0'
      this.$http.get('/api/article/ranklist',
        this.qs.stringify({
          date: 3
        })
      ).then(res => {
        console.log(333)
        console.log(res.data)
        this.w1 = res.data.titles[0]
        this.w2 = res.data.titles[1]
        this.w3 = res.data.titles[2]
        this.w4 = res.data.titles[3]
        this.w5 = res.data.titles[4]
      })
    },
    send () {
      this.$http.get('/api/user/verify').then(res => {
        console.log(res)
        this.$router.push('/send')
      }).catch((e) => {
        alert('请先登录')
      })
    }
  }
}
</script>
<style scoped>
#right{
    position: absolute;
    top: 104px;
    right: 4%;
    width: 28%;
    height: 730px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 20px;
}
.word{
    width: 80%;
    height: 120px;
    position: relative;
    margin-top: 30px;
    left: 10%;
    border-radius: 20px;
    background-color: #478cce;
    color: white;
    font-size: 30px;
    text-align: center;
    line-height: 120px;
    cursor: pointer;
}
.w1{
    width: 80%;
    height: 30px;
    position: relative;
    margin-top: 20px;
    left: 10%;
    text-align: left;
    line-height: 30px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
}
.w2{
    width: 80%;
    height: 24px;
    position: relative;
    left: 10%;
    text-align: left;
    line-height: 24px;
    font-size: 14px;
}
.w3{
    width: 80%;
    height: 24px;
    position: relative;
    left: 10%;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
}
.w3 div{
    position: absolute;
    top: 0;
    width: 12%;
    height: 24px;
    cursor: pointer;
}
.day{
    left: 0;
    border-bottom: 2px solid #478cce;
}
.week{
    left: 17%;
}
.month{
    left: 34%;
}
.rightSort{
    margin-top: 10px;
    position: relative;
    top: 0;
    left: 10%;
    width: 80%;
    height: 200px;
}
.sort1,.sort2,.sort3,.sort4,.sort5{
    width: 100%;
    height: 40px;
    position: relative;
    box-sizing: border-box;
    border-bottom:1px solid #ccc;
    font-size: 14px;
    line-height: 40px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
p{
    margin: 0;
    position: absolute;
    top: 8px;
    width: 10%;
    height: 24px;
    text-align: center;
    line-height: 24px;
}
.sort1 p{
    background-color: red;
}
.sort2 p{
    background-color: #ff8d1a;
}
.sort3 p{
    background-color: #ffeb3b;
}
.sort1Word,.sort2Word,.sort3Word,.sort4Word,.sort5Word{
    position: absolute;
    width: 85%;
    height: 40px;
    top: 0;
    left: 15%;
    cursor: pointer;
}
.footer{
    margin-top: 10px;
    width: 70%;
    margin-left: 15%;
    height: 220px;
    /* border: black 1px solid; */
}
.FootWord{
    width: 80%;
    height: 16px;
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    margin-left: 10%;
}
</style>
