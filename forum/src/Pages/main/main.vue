<template>
    <div id="main">
      <router-view/>
      <left></left>
    </div>
</template>
<script>
import left from './left/left.vue'
export default{
  data () {
    return {
      a: 10
    }
  },
  components: {
    left
  }
}
</script>
<style scored>
#main{
  background-color: #f0f0f0;
}
</style>
