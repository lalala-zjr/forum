<template>
    <div id="download">
        <Header></Header>
        <right></right>
        <div class="left">
            <div class="headShow">
                <div class="word1">{{word}}</div>
                <div class="word2">发帖数：{{word2}}</div>
            </div>
            <div class="sep"></div>
            <div class="title">
                <div class="auto">{{auto}}</div>
                <div class="time">{{time}}</div>
                <div class="watch">{{watch}}</div>
            </div>
            <div class="contend">
                <down v-for="(source,index) in sources" :source="sources[index]" :key="index" v-on:show="show">{{source}}</down>
            </div>
        </div>
    </div>
</template>
<script>
// import Header from '../../components/Header/Header.vue'
import right from '../../../components/right/right.vue'
import down from './down/down.vue'
export default {
  data () {
    return {
      word: '资料下载专区',
      word2: 120,
      contend: '作品',
      auto: '作者',
      time: '发布时间',
      watch: '下载量',
      sources: ''
    }
  },
  components: {
    // Header,
    right,
    down
  },
  methods: {
    show (data) {
      this.$http.get('/api/user/verify').then(res => {
        console.log(res)
        this.$router.push('/load/' + data)
      }).catch((e) => {
        alert('请先登录')
      })
    }
  },
  created () {
    this.$http.get('/api/source/list').then(res => {
      console.log(res.data)
      this.word2 = res.data.total
      this.sources = res.data.source
    })
  }
}
</script>
<style scoped>
#download{
  background-color: #f0f0f0;
  height: 850px;
}
.left{
    background-color: #fff;
    width: 55%;
    margin-left: 10%;
    position: relative;
    height: 730px;
    top: 20px;
    bottom: 10px;
}
.headShow{
    position: relative;
    width: 80%;
    height: 30px;
    top: 30px;
    left: 10%;
    box-sizing: border-box;
    background-color:#f0f0f0;
    border: 1px solid #d9d9d9;
}
.headShow div{
    position: absolute;
    width: 20%;
    height: 26px;
    top: 2px;
    text-align: center;
    line-height: 26px;
    font-size: 12px;
    border-right: 1px solid #c4c4c4;
}
.word2{
    left: 20%;
}
.sep{
    position: relative;
    width: 80%;
    height: 1px;
    left: 10%;
    top: 50px;
    background-color: #d9d9d9;
}
.title{
    position: relative;
    width: 80%;
    height: 30px;
    left: 10%;
    top: 70px;
    background-color: #d9d9d9;
    font-size: 12px;
    text-align: center;
    line-height: 30px;
    opacity: 0.5;
}
.contend{
    width: 80%;
    /* margin-left: 10%; */
    margin: 70px 10%;
}
.auto{
    position: absolute;
    width: 15%;
    height: 30px;
    left: 50%;
    top: 0;
}
.time{
    position: absolute;
    width: 20%;
    height: 30px;
    left: 65%;
    top: 0;
}
.watch{
    position: absolute;
    width: 15%;
    height: 30px;
    right: 0;
    top: 0;
}
</style>
