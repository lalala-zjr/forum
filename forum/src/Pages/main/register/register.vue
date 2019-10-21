<template>
    <div id="register">
        <div class="reg">
            <p>×</p>
            <div class="div1">登录</div>
            <div class="div2">
                <div class="message">短信登陆</div>
                <div class="password">密码登陆</div>
            </div>
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
    height: 300px;
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
</style>
