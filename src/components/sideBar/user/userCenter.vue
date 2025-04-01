<template>
    <div class="userCenterBolck">
        <form @submit.prevent="updateUserInfo">
            <p class="inputTitle">Account使用者</p>
            <input type="text" v-model="accText" autocomplete="username" required />
            <button type="submit" id="signUpBtn">SIGN UP</button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const accText = ref('');

const updateUserInfo = () => {
    console.log(accText.value);

}
</script>
<style scoped>
.userCenterBolck {
    box-sizing: border-box;
    margin: 50px;
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
    margin: 0% 3%;
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
</style>