<template>
    <div id="main" ref="main">
      <!-- <register></register> -->
      <!-- <left></left> -->
      <router-view></router-view>
      <right></right>
      <div class="empty"></div>
    </div>
</template>
<script>
// import left from './left/left.vue'
import right from '../../../components/right/right.vue'
import register from '../register/register.vue'
import login from '../login/login.vue'
// import password from '../../../assets/password.js'
export default{
  data () {
    return {
    }
  },
  components: {
    // left,
    right,
    register,
    login
  }
  // created () {
  //   this.$router.push('/:0')
  // }
}
</script>
<style scored>
#main{
  background-color: #f0f0f0;
  /* height: 850px; */
}
.empty{
  width: 100%;
  height: 80px;
  background-color: #f0f0f0;
}
</style>
