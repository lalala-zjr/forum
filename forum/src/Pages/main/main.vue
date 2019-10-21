<template>
    <div id="main">
      <router-view/>
      <left></left>
      <right></right>
      <div class="empty"></div>
    </div>
</template>
<script>
import left from './left/left.vue'
import right from './right/right.vue'
export default{
  data () {
    return {
      a: 10
    }
  },
  components: {
    left,
    right
  }
}
</script>
<style scored>
#main{
  background-color: #f0f0f0;
}
.empty{
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
}
</style>
