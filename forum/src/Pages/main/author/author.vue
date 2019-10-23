<template>
   <div id="author">
       <p class="inf">&emsp;&emsp;&emsp;&emsp;&emsp;作者资料页</p>
       <div class="peronShow">
         <div class="user">
           <p class="Pword">用户名</p>
           <div class="Pinput">可怜且轩轩</div>
         </div>
         <div class="userRea">
           <p class="Pword">真实姓名</p>
           <div class="Pinput">张金蕊</div>
         </div>
         <div class="phone">
           <p class="Pword">手机号</p>
           <div class="Pinput">18009240559</div>
         </div>
         <div class="Birth">
           <p class="Pword">生日</p>
           <div class="Pinput">10.22</div>
         </div>
         <div class="college">
           <p class="Pword">学院</p>
           <div class="Pinput">理学院</div>
         </div>
         <div class="major">
           <p class="Pword">专业</p>
           <div class="Pinput">信息与计算科学</div>
         </div>
         <div class="emil">
           <p class="Pword">邮箱</p>
           <div class="Pinput">1365351516@qq.com</div>
         </div>
         <div class="like">
           <p class="Pword">兴趣</p>
           <div class="Pinput">Coding</div>
         </div>
         <button class="save" @click="turn">返回</button>
       </div>
   </div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  methods: {
    turn () {
      this.$emit('turn', 1)
    }
  }
}
</script>
<style scoped>
#author{
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
  position: absolute;
  border-radius: 5px;
  width: 50%;
  height: 30px;
  line-height: 30px;
  left: 30%;
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
