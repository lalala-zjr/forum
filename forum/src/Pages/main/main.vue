<template>
    <div id="main">
      <router-view v-on:personShow="listen"></router-view>
      <left v-show="flag1"></left>
      <right v-show="flag2"></right>
      <person v-show="flag3"></person>
      <div class="empty"></div>
    </div>
</template>
<script>
import left from './left/left.vue'
import right from './right/right.vue'
import person from './person/person.vue'
export default{
  data () {
    return {
      flag1: true,
      flag2: true,
      flag3: false
    }
  },
  components: {
    left,
    right,
    person
  },
  methods: {
    listen (data) {
      if (data === 3) {
        this.flag3 = true
        this.flag1 = false
        this.flag2 = false
      } else {
        this.flag1 = true
        this.flag2 = true
        this.flag3 = false
      }
    }
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
