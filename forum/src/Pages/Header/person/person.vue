<template>
   <div id="person">
     <!-- <Header></Header> -->
       <p class="inf">&emsp;&emsp;&emsp;&emsp;&emsp;个人信息</p>
       <div class="peronShow">
         <div class="user">
           <p class="Pword">用户名</p>
           <input type="text" placeholder="输入内容" class="Pinput" value="" ref="Username">
         </div>
         <div class="userRea">
           <p class="Pword">真实姓名</p>
           <input type="text" placeholder="输入内容" class="Pinput" value="" ref="name">
           <select name="" id="">
             <option value="1">公开</option>
             <option value="2">保密</option>
           </select>
         </div>
         <div class="phone">
           <p class="Pword">手机号</p>
           <input type="text" placeholder="输入内容" class="Pinput" value="" readonly ref="phone">
           <select name="" id="">
             <option value="1">公开</option>
             <option value="2">保密</option>
           </select>
         </div>
         <div class="Birth">
           <p class="Pword">生日</p>
           <input type="date" placeholder="输入内容" class="Pinput" ref="birth">
           <select name="" id="">
             <option value="1">公开</option>
             <option value="2">保密</option>
           </select>
         </div>
         <div class="college">
           <p class="Pword">学院</p>
           <input type="text" placeholder="输入内容" class="Pinput" value="" ref="college">
           <select name="" id="">
             <option value="1">公开</option>
             <option value="2">保密</option>
           </select>
         </div>
         <div class="major">
           <p class="Pword">专业</p>
           <input type="text" placeholder="输入内容" class="Pinput" value="" ref="major">
           <select name="" id="">
             <option value="1">公开</option>
             <option value="2">保密</option>
           </select>
         </div>
         <div class="emil">
           <p class="Pword">邮箱</p>
           <input type="text" placeholder="输入内容" class="Pinput" value="" ref="email">
           <select name="" id="">
             <option value="1">公开</option>
             <option value="2">保密</option>
           </select>
         </div>
         <div class="like">
           <p class="Pword">兴趣</p>
           <input type="text" placeholder="输入内容" class="Pinput" value="" ref="like">
           <select name="" id="">
             <option value="1">公开</option>
             <option value="2">保密</option>
           </select>
         </div>
         <button class="save" @click="save">保存</button>
       </div>
   </div>
</template>
<script>
// import Header from '../../components/Header/Header.vue'
export default{
  data () {
    return {
    }
  },
  components: {
    // Header
  },
  created () {
    this.$http.get('/api/user/detail').then(res => {
      console.log(res)
      if (res.data.hobby === null) {
        this.$refs.like.value = ''
      } else {
        this.$refs.like.value = res.data.hobby
      }
      if (res.data.username == null) {
        this.$refs.Username.value = ''
      } else {
        this.$refs.Username.value = res.data.username
      }
      if (res.data.realname === null) {
        this.$refs.name.value = ''
      } else {
        this.$refs.name.value = res.data.realname
      }
      if (res.data.email === null) {
        this.$refs.email.value = ''
      } else {
        this.$refs.email.value = res.data.email
      }
      if (res.data.college === null) {
        this.$refs.college.value = ''
      } else {
        this.$refs.college.value = res.data.college
      }
      if (res.data.profession === null) {
        this.$refs.major.value = ''
      } else {
        this.$refs.major.value = res.data.profession
      }
      if (res.data.birth === null) {
        this.$refs.birth.value = ''
      } else {
        this.$refs.birth.value = res.data.birth
      }
      this.$refs.phone.value = res.data.phone
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    save () {
      this.$http.put('/api/user/detail', {
        username: this.$refs.Username.value,
        realname: this.$refs.name.value,
        phone: this.$refs.phone.value,
        birth: this.$refs.birth.value,
        college: this.$refs.college.value,
        profession: this.$refs.major.value,
        email: this.$refs.email.value,
        hobby: this.$refs.like.hobby
      }).then(res => {
        console.log(res)
        if (res.status === 204) {
          this.$router.replace('/person')
        }
      })
    }
  }
}
</script>
<style scoped>
#person{
    width: 100%;
    height: 750px;
}
.inf{
    width: 100%;
    height: 50px;
    line-height: 75px;
    border-bottom: 1px solid #ccc;
    margin: 0;
}
.peronShow{
    width: 70%;
    height: 700px;
    position: relative;
    left: 15%;
    background-color: white;
}
.user,.userRea,.phone,.Birth,.college,.major,.emil,.like{
  position: relative;
  width: 60%;
  height: 30px;
  left: 20px;
}
.user{
  top: 5%;
}
.userRea{
  top: 10%;
}
.phone{
  top: 15%;
}
.Birth{
  top: 20%;
}
.college{
  top: 25%;
}
.major{
  top: 30%;
}
.emil{
  top: 35%;
}
.like{
  top: 40%;
}
.Pword{
  width: 16%;
  height: 30px;
  /* background-color: red; */
  left: 4%;
  margin: 0;
  position: absolute;
  font-size: 16px;
  line-height: 30px;
  text-align: left;
}
.Pinput{
  box-sizing: border-box;
  padding: 5px;
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
  height: 30px;
  line-height: 15px;
  left: 20%;
}
.save{
  position: absolute;
  bottom: 10%;
  left: 50%;
  width: 100px;
  height: 40px;
  margin-left: -40px;
  background-color: #005fbc;
  border: 1px solid #cccccc;
  color: white;
  border-radius: 10px;
}
select{
  width: 15%;
  height: 20px;
  position: absolute;
  top: 5px;
  right: -40%;
  text-align: center;
}
</style>
