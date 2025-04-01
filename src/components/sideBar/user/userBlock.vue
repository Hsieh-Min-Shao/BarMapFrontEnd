<template>
    <div class="userBlock" :class="{ expanded: changeHeight }">
        <div v-if="!isLogin"><!--這裡是登入前-->
            <div class="userCenterBlock flexWrap">
                <div class="loginBtn flexAllCenter" @click="toggleHeight"><img src="/pic/userCenter/user.png" alt="">
                </div>
                <div class="loginBtn flexAllCenter"><img src="/pic/userCenter/google.png" alt=""></div>
                <div class="loginBtn flexAllCenter"><img src="/pic/userCenter/line.png" alt=""></div>
            </div>
            <!-- 這裡可以用成組建去拆分成登入和註冊 -->
            <login></login>
        </div>
        <div v-else>
            <div class="userCenterBlock flexWrap flexVerticalCenter">
                <div class="userImg"><img src="/pic/userCenter/user.png" alt=""></div>
                <div class="userName ">使用者名稱</div>
                <div class=" userBtn flexAllCenter" @click="toggleHeight">
                    <Icon icon="material-symbols:bookmark-outline" class="iconBtn" />
                </div>
                <div class="loginBtn userBtn flexAllCenter" @click="editUserInfo">
                    <Icon icon="material-symbols:settings-outline" class="iconBtn" />
                </div>
            </div>
            <favorite :userId="userData.userId" @searchResult="onSearchResult"></favorite>
        </div><!--這裡是登入後-->
    </div>
</template>
<script setup>
import { ref } from 'vue'
import login from "./login.vue"
import favorite from './favorite.vue';
import userCenter from './userCenter.vue';
import { Icon } from '@iconify/vue';


// 判斷是否登入
const isLogin = ref(true);
// const isLogin = ref(false);

const changeHeight = ref(false);

// 切換高度狀態
const toggleHeight = () => {
    changeHeight.value = !changeHeight.value;

};

const editUserInfo = () => {
    // 編輯使用者資訊的邏輯
    window.showPop({
        component: userCenter,
        props: {
            userId: userData.userId,
        },
        width: 500,
        height: "70%",
        onConfirm: () => {
            console.log('✅ 檢舉留言 ID:', commemtId);
            // 呼叫 API 可放這裡
            window.notify('已檢舉留言', 'success');
        }
    });
};

const userData = ref({
    userName: "使用者名稱",
    userImg: "/pic/userCenter/user.png",
    userId: 12
});

const emit = defineEmits(['searchResult']);

const onSearchResult = (searchResultInfo) => {
    emit('searchResult', searchResultInfo);
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
    /* overflow-y: scroll; */
    /* 隱藏內容 */
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

/* 展開時高度變為90% */
.expanded {
    height: calc(100% - 140px) !important;
    /* 當展開時，變為父容器的90%高度 */
}

.userBlock>div {
    height: 100%;
    /* 讓子元素填滿父元素 */
}

.userCenterBlock {
    height: 40px;
    /* border: 1px solid var(--lightGrayClick); */
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

.loginBtn:hover,
.loginBtn:active {
    background-color: var(--lightGray);
    border: none
}

.loginBtn>img {
    height: 100%;
}

.userImg {
    height: 30px;
    /* width: 30px; */
    box-sizing: border-box;
    border-radius: 10%;
    overflow: hidden;
    border: 2px solid var(--lightGrayClick);
}

.userImg>img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.userName {
    width: calc(100% - 120px);
}

.userBtn {
    height: 30px;
    border: 1.5px solid var(--lightGrayClick);
    padding: 2px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    width: 30px;
}

.userBtn:active,
.userBtn:hover {
    background-color: var(--lightGray);
    border: none
}

.iconBtn {
    width: 24px;
    height: 24px;
    color: gray;
    transition: transform 0.2s, color 0.2s;
}
</style>
