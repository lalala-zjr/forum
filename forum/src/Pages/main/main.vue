<template>
    <div id="main" ref="main">
      <router-view v-on:personShow="listen"></router-view>
      <left v-show="flag1"></left>
      <right v-show="flag2"></right>
      <person v-show="flag3"></person>
      <div class="empty"></div>
      <register v-show="reg" v-on:can="cancel"></register>
      <login v-show="log" v-on:can="cancel"></login>
      <forget v-show="f" v-on:can="cancel"></forget>
    </div>
</template>
<script>
import left from './left/left.vue'
import right from './right/right.vue'
import person from './person/person.vue'
import register from './register/register.vue'
import login from './login/login.vue'
import forget from './forget/forget.vue'
export default{
  data () {
    return {
      flag1: true,
      flag2: true,
      flag3: false,
      reg: false,
      log: false,
      f: false
    }
  },
  components: {
    left,
    right,
    person,
    register,
    login,
    forget
  },
  methods: {
    listen (data) {
      if (data === 3) {
        this.flag3 = true
        this.flag1 = false
        this.flag2 = false
      } else if (data === 5) {
        this.reg = true
        this.log = false
      } else if (data === 4) {
        this.reg = false
        this.log = true
      } else {
        this.flag1 = true
        this.flag2 = true
        this.flag3 = false
      }
    },
    cancel (data) {
      switch (data) {
        case 0: {
          this.reg = false
          this.f = true
          break
        }
        case -1: {
          this.reg = false
          this.f = false
          break
        }
      }
      if (data === 1 || data === 2) {
        this.reg = false
      }
      if (data === 3 || data === 4) {
        this.log = false
      }
    }
  }
}
</script>
<style scored>
#main{
  background-color: #f0f0f0;
  height: 850px;
}
.empty{
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
}
</style>
