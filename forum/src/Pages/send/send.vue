<template>
    <div id="send">
      <Header></Header>
      <div class="contend">
        <input class="title" placeholder='请填写标题' ref="title"/>
        <textarea ref="content"></textarea>
        <input type="radio" name="title" class="type1" value="数模论文" ref="type1" @click="t1"/>数模论文
        <input type="radio" name="title" value="技术文" ref="type2" @click="t2"/>技术文
        <br/>
        <input type="file" name="img" id="file" class="oimg" multiple title="注意: 若要选择多个文件，则选择第一个图片之后，选择其他照片需要按住ctrl键">
        <div class="save" @click="save">保存并退出</div>
      </div>
    </div>
</template>
<script>
import Header from '../../components/Header/Header.vue'
export default {
  data () {
    return {
      type: 0
    }
  },
  created () {
  },
  methods: {
    t1 () {
      this.type = 1
    },
    t2 () {
      this.type = 2
    },
    save () {
      if (this.type !== 0) {
        this.$http.post('/api/article/post', {
          type: this.type,
          content: this.$refs.content.value,
          title: this.$refs.title.value
        }).then(res => {
          console.log(res)
          if (res.status === 201) {
            this.$router.push('/')
          }
        })
      }
    }
  },
  components: {
    Header
    // Editor,
    // tinymce
  },
  mounted () {
    // tinymce.init({})
  }
}
</script>
<style scoped>
#send{
    width: 100%;
    margin-top: 30px;
    height: 1200px;
    background-color: #f0f0f0;
}
.contend{
  width: 80%;
  /* height: 700px; */
  margin-top: 30px;
  margin-left: 10%;
  background-color: white;
  overflow: auto;
}
.zhuyi{
  margin-left: 7%;
  color: red;
  font-size: 12px;
}
.title{
  width: 60%;
  height: 30px;
  box-sizing: border-box;
  padding: 0 1%;
  /* position: relative; */
  border: 1px solid #ccc;
  margin-top: 30px;
  margin-left: 20%;
  border-radius: 10px;
  text-align: center;
}
.oimg{
  margin-left: 7%;
  margin-top: 30px;
}
.type1{
  margin-left: 7%;
}
textarea{
  width: 86%;
  height: 700px;
  display: black;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 20px 7%;
  resize: none;
  overflow: auto;
}
.save{
    width: 30%;
    height: 40px;
    background-color: #005fbc;
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    margin: 50px 35%;
    border-radius: 40px;
    cursor: pointer;
}
/* .tox{
  visibility: visible;
  border: 1px solid black;
}
.tox-editor-container{
  width: 80%;
  margin-left: 10%;
  border: 1px solid red;
} */
</style>
