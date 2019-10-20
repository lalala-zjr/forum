<template>
    <div id="main">
      <head></head>
      <div>123</div>
    </div>
</template>
<script>
import head from '../../components/head/head.vue'
export default{
  data () {
    return {
      a: 10
    }
  },
  component: {
    head
  }
}
</script>
<style scored>
#main{
  background-color:#f0f0f0;
}
</style>
