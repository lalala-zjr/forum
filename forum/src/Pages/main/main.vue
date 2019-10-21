<template>
    <div id="main">
      <router-view/>
      <left v-show="flag1"></left>
      <right v-show="flag2"></right>
      <!-- <person></person> -->
      <div class="empty"></div>
    </div>
</template>
<script>
import left from './left/left.vue'
import right from './right/right.vue'
export default{
  data () {
    return {
      flag1: true,
      flag2: true
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
