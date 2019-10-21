<template>
    <div id="register">
        <div class="reg">
            <p>×</p>
            <div class="div1">登录</div>
            <div class="div2">
                <div class="message">短信登陆</div>
                <div class="password">密码登陆</div>
            </div>
            <div class="phone"></div>
            <div class="pass"></div>
            <div class="sure">登陆</div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
#register{
    width: 100%;
    height: 790px;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgba(200, 200, 200, 0.8);
    z-index: 10;
}
.reg{
    width: 400px;
    height: 340px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -200px;
}
p{
    margin: 0;
    width: 40px;
    height: 40px;
    font-size:30px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    color: #a6a6a6;
}
.div1{
    width: 80px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -40px;
    /* background-color: rebeccapurple; */
}
.div2{
    width: 180px;
    height: 30px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 50px;
    left: 110px;
    /* background-color: red; */
}
.div2 div{
    width: 50%;
    height: 24px;
    line-height: 20px;
    position: absolute;
    top: 3px;
}
.message{
    left: 0;
    border-right: 1px solid #ccc;
    color: #005fbc;
}
.password{
    left: 50%;
}
.phone,.pass{
    width: 70%;
    height: 50px;
    position: absolute;
    box-sizing: border-box;
    left: 15%;
    border-bottom: 1.5px solid #f2f2f2;
}
.phone{
    top: 100px;
}
.pass{
    top: 150px;
}
.sure{
    width: 70%;
    height: 50px;
    background-color: #005fbc;
    color: white;
    position: absolute;
    /* top: 220px; */
    bottom: 40px;
    left: 15%;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
}
</style>
