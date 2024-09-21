<template>
    <div class="loginBlock">
        <div id="loginOrRegister" class="flexWrap">
            <p class="loginOrRegisterBtn" @click="changeToLogin" :class="{ active: isLogin }">
                SIGN IN
            </p>
            <p class="loginOrRegisterBtn" @click="changeToRegister" :class="{ active: !isLogin }">
                SIGN UP
            </p>
        </div>
        <!-- 大容器，包含登入與註冊的內容 -->
        <div class="slider-container">
            <div class="slider" :style="{ transform: isLogin ? 'translateX(0)' : 'translateX(-50%)' }">
                <!-- 登入內容 -->
                <div class="slide-content">
                    <p class="title">Account</p>
                    <input type="email" v-model="accText" />
                    <p class="title">Password</p>
                    <input type="password" v-model="pwdText" />
                    <div id="accBlockBtn" class="flexWrap">
                        <p id="signInBtn">SIGN IN</p>
                        <p id="forgotPwd">forgot password?</p>
                    </div>
                </div>
                <!-- 註冊內容 -->
                <div class="slide-content">
                    <p class="title">Account</p>
                    <input type="email" v-model="regAccText" />
                    <p class="title">Password</p>
                    <input type="password" v-model="regPwdText" />
                    <p class="title">Confirm Password</p>
                    <input type="password" v-model="regPwdAgainText" />
                    <p class="title">E-mail</p>
                    <input type="email" v-model="regMailText" />
                    <div id="regBlockBtn" class="flexAllCenter">
                        <p id="signUpBtn">SING UP</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLogin = ref(true);

const accText = ref('');
const pwdText = ref('');
const regAccText = ref('');
const regMailText = ref('');
const regPwdText = ref('');
const regPwdAgainText = ref('');

const changeToLogin = () => {
    isLogin.value = true;
};

const changeToRegister = () => {
    isLogin.value = false;
};
</script>

<style scoped>
/* 一般登入區塊 */
.loginBlock {
    height: calc(100% - 40px);
    /* overflow: hidden; */
    /* overflow-y: scroll; */
    /* margin: 5px; */
    box-sizing: border-box;
}

.title {
    font-size: 13px;
    height: 20px;
    box-sizing: border-box;
    padding-left: 7%;
    margin-bottom: 2px;
}

/* 登入註冊選擇 */
#loginOrRegister {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
    box-sizing: border-box;
    position: relative;
}

.loginOrRegisterBtn {
    position: relative;
    width: 70px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    padding-bottom: 5px;
}

.loginOrRegisterBtn::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    transform: scaleX(0);
    transition: transform 0.5s ease;
}

.loginOrRegisterBtn.active::after {
    transform: scaleX(1);
}

input {
    font-size: 18px;
    height: 30px;
    width: 94%;
    padding: 3px;
    border: 1.5px solid var(--lightGray);
    border-radius: 4px;
    box-sizing: border-box;
    background-color: var(--lightGray);
    margin: 0% 3%;
    margin-bottom: 15px;
}

input:focus {
    outline: none;
    background-color: white;
    border-radius: 0px;
    border: none;
    border: 1.5px solid white;
    border-bottom: 1.5px solid black;
}

/* 登入 */
#accBlockBtn {
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 50px;
}

#signInBtn,#signUpBtn {
    background-color: var(--gray);
    box-sizing: border-box;
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    color: white;
}

#signInBtn:hover,#signUpBtn:hover,#signInBtn:active,#signUpBtn:active {
    background-color: var(--grayClick);
}

#forgotPwd {
    font-size: 14px;
    cursor: pointer;
    color: var(--gray);
}

#forgotPwd:hover,#forgotPwd:active {
    color: var(--grayClick);
}

/* 註冊 */
#regBlockBtn{
    margin-top: 30px;
    margin-bottom: 50px;
}

/* 滑動容器設定 */
.slider-container {
    width: 200%;
    height: 100%;
    /* overflow-y: scroll;  */
    /* overflow: hidden; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 大容器，包含登入與註冊內容 */
.slider {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
    height: 100%;
    /* overflow-y: scroll;  */
    /* overflow: hidden; */
}

/* 個別滑動內容設定 */
.slide-content {
    width: 100%;
    /* padding: 0px 5px; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* 設定為 auto 以便在需要時顯示滾動條 */
    height: 100%;
    overflow-y: scroll;
    overflow: scroll;
}
</style>