<template>
    <div class="userBlock" :class="{ expanded: changeHeight }">
        <div class="userControllerLogin flexWrap">
            <div class="loginBtn flexAllCenter" @click="toggleHeight"><img src="/pic/userCenter/user.png" alt=""></div>
            <div class="loginBtn flexAllCenter"><img src="/pic/userCenter/google.png" alt=""></div>
            <div class="loginBtn flexAllCenter"><img src="/pic/userCenter/line.png" alt=""></div>
        </div>
        <!-- 這裡可以用成組建去拆分成登入和註冊 -->
        <div class="loginBlock">
            <div class="login">
                <div id="loginOrRegister" class="flexWrap">
                    <p>登入</p>
                    <p>註冊</p>
                </div>
                <div id="accBlock" class="flexWrap flexAllCenter">
                    <p>信箱:</p><input type="text" v-model="mailText">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const mailText = ref('');

const changeHeight = ref(false);

// 切換高度狀態
const toggleHeight = () => {
    changeHeight.value = !changeHeight.value;
};
</script>

<style scoped>
/* 設置初始狀態高度為 10% 並固定在底部 */
.userBlock {
    position: absolute;
    /* 絕對定位 */
    bottom: 0;
    /* 固定在父容器的底部 */
    left: 0;
    right: 0;
    height: 40px;
    /* 初始高度為10% */
    background-color: white;
    transition: height 0.5s ease;
    /* 使用 height 過渡效果 */
    overflow: hidden;
    /* 隱藏內容 */
    padding: 5px;
    box-sizing: border-box;
}

/* 展開時高度變為90% */
.expanded {
    height: calc(100% - 140px);
    /* 當展開時，變為父容器的90%高度 */
}

.userControllerLogin {
    height: 40px;
    justify-content: space-between;
}
/* 登入方式按鈕 */
.loginBtn {
    height: 30px;
    width: 80px;
    border: 1.5px solid var(--lightGrayClick);
    padding: 2px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
}

.loginBtn:hover {
    background-color: var(--lightGray);
    border: none
}

.loginBtn>img {
    height: 100%;
}
/* 一般登入區塊 */
.loginBlock {
    height: calc(100% - 40px);
    /* background-color: lightblue; */
    overflow: scroll;
    padding: 5px;
    box-sizing: border-box;
}

/* 登入註冊選擇 */

#loginOrRegister{
    justify-content: space-evenly;
}

/* 信箱輸入區 */
#accBlock>p {
    font-size: 20px;
    height: 25px;
}

input {
    font-size: 20px;
    height: 25px;
    width: 70%;
    border: none;
    border-bottom: 2px solid rgb(112, 112, 112);
    /* border-radius: 3px; */
    box-sizing: border-box;

}

input:focus {
    outline: none;
    /* border: 2px solid black; */

}
</style>
