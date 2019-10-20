<template>
    <div id="main">
      <router-view/>
      <left></left>
      <div class="empty"></div>
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
.empty{
  width: 100%;
  height: 100px;
  background-color: #f0f0f0;
}
</style>
