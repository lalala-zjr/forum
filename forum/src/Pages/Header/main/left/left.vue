<template>
   <div id="left" ref="left">
       <div class="empty"></div>
       <div class="headShow">
           <div class="today">今日：{{today}}</div>
           <div class="yesterday">昨日：{{yesterday}}</div>
           <div class="sum">帖子：{{sum}}</div>
       </div>
       <div class="sort">
           <div class="sort1" ref="s1" @click="sort1()">{{s1}}</div>
           <div class="sort2" ref="s2" @click="sort2()">{{s2}}</div>
           <select id="Search">
               <option v-for="(year,index) in years" :key="index">{{year}}</option>
           </select>
       </div>
       <leftTitle v-for="(add,index) in adds" :ad="adds[index]" :key="index"></leftTitle>
        <!-- v-on:Into="see" -->
       <div class="pages">
           <div class="pageShow">
               <div class="back"><img src="../../../../assets/img/b1.png" alt="" @click="prev" :class="{'disabled':n==0}"></div>
               <div class="content">
                 <span :class="{'active':n==index}" v-for="(i,index) of pages" :key="index" @click="changP(index)">{{i}}</span>
               </div>
               <div class="forword"><img src="../../../../assets/img/b2.png" @click="next" :class="{'disabled':n==pages-1}"></div>
           </div>
       </div>
   </div>
</template>
<script>
import leftTitle from './leftTitle/leftTitle.vue'
import password from '../../../../assets/password.js'
export default{
  data () {
    return {
      today: 0,
      yesterday: 0,
      sum: 0,
      s1: '全部',
      s2: '热门',
      b: 123,
      adds: '',
      years: '',
      n: 0,
      pages: 0
    }
  },
  mounted () {
    password.$on('type', (data) => {
      console.log(data)
      if (data === 2) {
        this.$http.post('/api/article/list',
          this.qs.stringify({
            type: 2
          })
        ).then(res => {
          console.log(res)
          this.today = res.data.sum.today
          this.yesterday = res.data.sum.yesterday
          this.sum = res.data.sum.total
          this.adds = res.data.articles
          this.years = res.data.sum.years
          this.pages = res.data.totalPage
        })
      } else {
        this.$http.post('/api/article/list').then(res => {
          console.log(res)
          this.today = res.data.sum.today
          this.yesterday = res.data.sum.yesterday
          this.sum = res.data.sum.total
          this.adds = res.data.articles
          this.years = res.data.sum.years
          this.pages = res.data.totalPage
        })
      }
    })
  },
  components: {
    leftTitle
  },
  methods: {
    sort1 () {
      this.$refs.s1.style.color = '#005fbc'
      this.$refs.s2.style.color = 'black'
      this.$http.post('/api/article/list',
        this.qs.stringify({
          ishot: false
        })
      ).then(res => {
        console.log(23)
        console.log(res.data)
        this.today = res.data.sum.today
        this.yesterday = res.data.sum.yesterday
        this.sum = res.data.sum.total
        this.adds = res.data.articles
        this.years = res.data.sum.years
        this.pages = res.data.totalPage
      })
    },
    sort2 () {
      this.$refs.s2.style.color = '#005fbc'
      this.$refs.s1.style.color = 'black'
      this.$http.post('/api/article/list',
        this.qs.stringify({
          ishot: true
        })
      ).then(res => {
        console.log(23)
        console.log(res.data)
        this.today = res.data.sum.today
        this.yesterday = res.data.sum.yesterday
        this.sum = res.data.sum.total
        this.adds = res.data.articles
        this.years = res.data.sum.years
        this.pages = res.data.totalPage
      })
    },
    changP (index) {
      // this.$refs.left.style.scrollTop = 0
      this.n = index
      console.log(index)
      this.$http.post('/api/article/list',
        this.qs.stringify({
          page: index + 1
        })
      ).then(res => {
        console.log(res)
        this.today = res.data.sum.today
        this.yesterday = res.data.sum.yesterday
        this.sum = res.data.sum.total
        this.adds = res.data.articles
        this.years = res.data.sum.years
      })
    },
    prev () {
      if (this.n > 0) {
        this.n--
      }
      console.log(this.n)
      this.$http.post('/api/article/list',
        this.qs.stringify({
          page: this.n + 1
        })
      ).then(res => {
        console.log(res)
        this.today = res.data.sum.today
        this.yesterday = res.data.sum.yesterday
        this.sum = res.data.sum.total
        this.adds = res.data.articles
        this.years = res.data.sum.years
      })
    },
    next () {
      if (this.n < this.pages) {
        // if (this.n > 10) {
        //   this.pages
        // }
        this.n++
      }
      console.log(this.n)
      this.$http.post('/api/article/list',
        this.qs.stringify({
          page: this.n + 1
        })
      ).then(res => {
        console.log(res)
        this.today = res.data.sum.today
        this.yesterday = res.data.sum.yesterday
        this.sum = res.data.sum.total
        this.adds = res.data.articles
        this.years = res.data.sum.years
      })
    },
    see (data) {
      if (data === 1) {
        this.$emit('see', 1)
      }
      if (data === 2) {
        this.$emit('see', 2)
      }
    }
  }
}
</script>
<style scoped>
#left{
    background-color: #fff;
    width: 55%;
    margin-left: 10%;
    position: relative;
    height: 730px;
    top: 30px;
    bottom: 10px;
}
.disabled{
  color: #ccc;
  cursor: not-allowed;
}
.empty{
    width: 100%;
    height:20px;
    position: relative;
    background-color: white;
}
.headShow{
    position: relative;
    width: 80%;
    height: 30px;
    margin-top: 20px;
    left: 10%;
    box-sizing: border-box;
    background-color:#f0f0f0;
    border: 1px solid #d9d9d9;
}
.headShow div{
    position: absolute;
    width: 18%;
    height: 26px;
    top: 2px;
    text-align: center;
    line-height: 26px;
    font-size: 12px;
    border-right: 1px solid #c4c4c4;
}
.today{
    left: 0;
}
.yesterday{
    left: 18%;
}
.sum{
    left: 36%;
}
.sort{
    position: relative;
    width: 80%;
    box-sizing: border-box;
    height: 60px;
    /* top: 10px; */
    margin: 0 10%;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
}
.sort div{
    position: absolute;
    width: 10%;
    height: 26px;
    top: 17px;
    text-align: center;
    line-height: 26px;
    cursor: pointer;
}
.sort1{
    left: 0;
    border-right: 2px solid #ababab;
    color: #005fbc;
}
.sort2{
    left: 10%;
}
#Search{
    width: 20%;
    height: 26px;
    position: absolute;
    top: 17px;
    left: 30%;
}
.pages{
    width: 100%;
    height: 100px;
    position: absolute;
    background-color: white;
    bottom: 0;
}
.pageShow{
    width: 54%;
    height: 30px;
    position: absolute;
    left: 23%;
    margin-top: 14px;
    box-sizing: border-box;
}
.back{
    width: 8%;
    height: 30px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
}
.content{
    position: absolute;
    top: 0;
    left: 8%;
    width: 84%;
    height: 30px;
    overflow: hidden;
}
.content span{
    box-sizing: border-box;
    display: block;
    /* position: absolute; */
    float: left;
    width: 10%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
}
.active{
  background-color: #005fbc;
  color: white;
  border-radius: 2px;
}
.forword{
    position: absolute;
    width: 8%;
    height: 30px;
    top: 0;
    right: 0;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
}
</style>
