<template>
    <div id="load">
        <Header></Header>
        <right></right>
        <div class="left">
          <div class="headShow">
              <div class="word1">{{word}}</div>
              <div class="word2">{{title}}</div>
          </div>
          <div class="head">{{name}} {{w}} {{time}}
            <!-- <div class="inf"></div> -->
          </div>
          <div class="baidu1">百度网盘链接：{{bai1}}</div>
          <div class="baidu2">提取码：{{bai2}}</div>
          <div class="github">github链接：{{github}}</div>
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header/Header.vue'
import right from '../../components/right/right.vue'
export default {
  data () {
    return {
      title: '',
      bai1: '',
      bai2: '',
      github: '',
      word: '资料下载专区',
      name: '',
      time: '',
      w: '发表于',
      id: this.$route.params.id
    }
  },
  created () {
    console.log(this.id)
    this.$http.get('/api/source/detail/' + this.id,
      this.qs.stringify({
        id: this.id
      })
    ).then(res => {
      console.log(res.data)
      this.bai1 = res.data.baiduyun
      this.bai2 = res.data.code
      this.github = res.data.github
      this.title = res.data.sourceTitle
      this.name = res.data.authorName
      this.time = res.data.sourceCreate
    })
  },
  components: {
    Header,
    right
  }
}
</script>
<style scoped>
#load{
    width: 100%;
    height: 850px;
    background-color: #f0f0f0;
}
.left{
    width: 55%;
    margin-left: 10%;
    position: relative;
    height: 730px;
    top: 30px;
    bottom: 10px;
    border: 1px solid white;
    background-color: white;
}
.baidu1{
    width: 80%;
    height: 40px;
    margin-top: 80px;
    margin-left: 10%;
    font-size: 14px;
}
.baidu2{
    width: 80%;
    height: 40px;
    margin-top: 30px;
    margin-left: 10%;
    font-size: 14px;
}
.github{
    width: 80%;
    height: 40px;
    margin-top: 30px;
    margin-left: 10%;
    font-size: 14px;
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
.head{
    position: relative;
    width: 80%;
    height: 30px;
    top: 30px;
    left: 10%;
    box-sizing: border-box;
    border-bottom: 1px solid #d9d9d9;
    line-height: 40px;
    font-size: 12px;
}
.inf{
  position: absolute;
  height: 26px;
}
.headShow div{
    position: absolute;
    height: 26px;
    top: 2px;
    text-align: center;
    line-height: 26px;
    font-size: 13px;
}
.word1{
  width: 20%;
  border-right: 1px solid #c4c4c4;
}
.word2{
    width: 80%;
    left: 20%;
}
</style>
