<template>
    <div class="userCenterBolck">
        <form @submit.prevent="updateUserInfo">
            <div class="userCenterDataBlock">
                <p class="inputTitle">Name</p>
                <div class="flexWrap">
                    <input type="text" v-model="nameText" autocomplete="name" required class="input inputWithBtn"
                        :readonly="!isChangeName" @click="!isChangeName && notify('名稱請按旁邊EDIT按鈕修改', 'info')" />
                    <p class="inputsBtn flexAllCenter" @click="changeName" :class="{ btnActive: isChangeName }">
                        {{ isChangeName ? 'SAVE' : 'EDIT' }}</p>
                </div>
                <p class="inputTitle">Account</p>
                <input type="text" v-model="accText" autocomplete="username" required class="input" readonly
                    @click="notify('帳戶無法修改', 'error')" />
                <p class="inputTitle">Password</p>
                <div class="flexWrap">
                    <input type="password" v-model="pwdText" autocomplete="password" required readonly
                        @click="isChangePwd ? notify('請按旁邊SAVE按鈕存取修改', 'info') : notify('密碼請按旁邊EDIT按鈕修改', 'info')"
                        class="input inputWithBtn" />
                    <p class="inputsBtn flexAllCenter" @click="changePwd" :class="{ btnActive: isChangePwd }">{{
                        isChangePwd ? 'SAVE' : 'EDIT' }}</p>
                </div>
                <transition name="slide-fade">
                    <div v-if="isChangePwd">
                        <p class="inputTitle">New Password</p>
                        <input type="password" v-model="regPwdText" autocomplete="new-password" required
                            class="input" />
                        <p class="inputTitle">Confirm New Password</p>
                        <input type="password" v-model="regPwdAgainText" autocomplete="new-password" required
                            class="input" />
                    </div>
                </transition>
                <p class="inputTitle">E-mail</p>
                <div class="flexWrap">
                    <input type="email" v-model="mailText" autocomplete="email" required class="input inputWithBtn"
                        :readonly="!isChangeEmail"
                        @click="!isChangeEmail && notify(isChangeEmail ? '信箱請按旁邊EDIT按鈕修改' : '請先驗證信箱', isChangeEmail ? 'info' : 'error')" />
                    <p class="inputsBtn flexAllCenter" @click="changeEmail"
                        :class="{ btnActive: isChangeEmail, isEmailVerify: !isEmailVerify }">
                        {{ changeEmailBtn }}</p>
                </div>
            </div>

            <div class="btnBlock flexAllCenter">
                <button type="submit" id="signUpBtn" class="btn" @click="$emit('close')">CLOSE</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';

const nameText = ref('');
const accText = ref('');
const pwdText = ref('************');
const regPwdText = ref('');
const regPwdAgainText = ref('');
const mailText = ref('');
const isChangeName = ref(false);
const isChangePwd = ref(false);
const isChangeEmail = ref(false);
const isEmailVerify = ref(true);
const notify = window.notify;
const changeEmailBtn = ref('EDIT');

// 模擬使用者資料
const userData = reactive({
    userId: 1,
    account: 'user123',
    email: 'email@email.com',
    isEmailVerify: true,
});

accText.value = userData.account;
mailText.value = userData.email;
isEmailVerify.value = userData.isEmailVerify;

const changeName = () => {
    isChangeName.value = !isChangeName.value;
    if (!isChangeName.value) {
        notify('修改成功', 'success');
    }
}

const changePwd = () => {
    isChangePwd.value = !isChangePwd.value;
    if (isChangePwd.value) {
        regPwdText.value = '';
        regPwdAgainText.value = '';
    } else {
        if (regPwdText.value === '' && regPwdAgainText.value === '') {
            notify('密碼未變更', 'info');
        } else if (regPwdText.value === '') {
            notify('修改失敗，請輸入新密碼', 'error');
        } else if (regPwdAgainText.value === '') {
            notify('修改失敗，請再次輸入新密碼', 'error');
        } else if (regPwdText.value !== regPwdAgainText.value) {
            notify('修改失敗，兩次密碼不相同', 'error');
        } else {
            pwdText.value = regPwdText.value;
            window.notify('修改成功', 'success');
        }
    }
}

const changeEmail = () => {
    if (!isEmailVerify.value && !isChangeEmail.value) {
        notify('信箱尚未驗證，無法再次修改', 'error');
        return;
    }

    isChangeEmail.value = !isChangeEmail.value;

    if (!isChangeEmail.value) {
        if (mailText.value !== userData.email) {
            notify('修改成功，請到新信箱進行驗證', 'success');
            isEmailVerify.value = false;
            userData.email = mailText.value;
            changeEmailBtn.value = 'WAIT';
        } else {
            notify('信箱未變更', 'info');
            changeEmailBtn.value = 'EDIT';
        }
    } else {
        changeEmailBtn.value = 'SAVE';
    }
};


const updateUserInfo = () => {
    console.log(accText.value);

}
</script>
<style scoped>
.userCenterBolck {
    box-sizing: border-box;
    margin: 50px;
    height: calc(100% - 100px);
}

.userCenterBolck>form {
    height: 100%;
}



.userCenterDataBlock {
    height: calc(100% - 60px);

    overflow-y: auto;
    /* 隱藏 scrollbar */
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
    -webkit-overflow-scrolling: touch;
    /* iOS Safari */
}

.userCenterDataBlock::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
}

.inputTitle {
    font-size: 13px;
    height: 20px;
    box-sizing: border-box;
    padding-left: 15px;
    margin-bottom: 2px;
}

.input {
    font-size: 18px;
    height: 30px;
    width: 100%;
    /* padding: 3px; */
    border: 1.5px solid var(--lightGray);
    border-radius: 4px;
    box-sizing: border-box;
    background-color: var(--lightGray);
    margin-bottom: 15px;
}

.input:focus {
    outline: none;
    background-color: white;
    border-radius: 0px;
    border: none;
    border: 1.5px solid white;
    border-bottom: 1.5px solid black;
}


.inputsBtn {
    width: 40px;
    height: 30px;
    background-color: var(--gray);
    box-sizing: border-box;
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
    color: white;
    border: none;
    margin-bottom: 15px;
}

.input[readonly] {
    cursor: not-allowed;
    background-color: var(--lightGrayClick);

}

.input[readonly]:focus {
    font-size: 18px;
    height: 30px;
    width: 100%;
    border: 1.5px solid var(--lightGray);
    border-radius: 4px;
    box-sizing: border-box;
    background-color: var(--lightGrayClick);
    margin-bottom: 15px;
}


.inputWithBtn {
    width: calc(100% - 50px) !important;
    margin-right: 10px;
}

/* 登入方式按鈕 */
.btnBlock {
    height: 60px;
}

.btn {
    background-color: var(--gray);
    box-sizing: border-box;
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    color: white;
    border: none;
}

.btn:hover,
.btn:active {
    background-color: var(--grayClick);
    transition: background-color 0.3s ease;
}

.btnActive {
    background-color: var(--lightGray);
    transition: background-color 0.3s ease;
    border: 2px solid var(--gray);
    box-sizing: border-box;
    color: var(--gray);
    font-weight: 700;
}

.isEmailVerify {
    background-color: var(--removeRed);
}

/* 動畫：向下滑入與滑出 */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    max-height: 300px;
    opacity: 1;
    transform: translateY(0);
}
</style>