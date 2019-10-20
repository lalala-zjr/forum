<template>
    <div id="main">
      <head></head>
      <div>{{a}}</div>
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
  methods: {
  },
  components: {
    head
  }
}
</script>
<style scored>
#main{
  background-color:#f0f0f0;
}
</style>
