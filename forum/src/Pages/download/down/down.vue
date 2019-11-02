<template>
    <div id="down">
        <div class="word" @click="load">{{source.sourceTitle}}</div>
        <div class="auto">{{source.authorName}}</div>
        <div class="time">{{source.sourceCreate}}</div>
        <div class="watch">{{source.sourceClick}}{{index}}</div>
    </div>
</template>
<script>
export default {
  props: {
    source: '',
    index: ''
  },
  data () {
    return {
    //   word: 'lingo从入门到精通',
    //   auto: 'lalala',
    //   time: '2019-10-20 13:25:45',
    //   watch: 0
    }
  },
  methods: {
    load () {
      console.log(this.source.sourceId)
      this.$emit('show', this.source.sourceId)
    }
  }
}
</script>
<style scoped>
#down{
    width: 100%;
    height: 40px;
    border: #d9d9d9 1px solid;
    font-size: 12px;
    text-align: center;
    line-height: 40px;
    position: relative;
}
.word{
    text-align: left;
    width: 50%;
    height: 40px;
    padding-left: 2%;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
}
.word:hover{
    color: #0c66bf;
}
.auto{
    position: absolute;
    width: 15%;
    height: 40px;
    left: 50%;
    top: 0;
}
.time{
    position: absolute;
    width: 20%;
    height: 40px;
    left: 65%;
    top: 0;
    overflow: hidden;
}
.watch{
    position: absolute;
    width: 15%;
    height: 40px;
    right: 0;
    top: 0;
}
</style>
