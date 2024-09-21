<template>
    <div>
        <!-- 使用 CSS 控制顯示和動畫 -->
        <div id="barInfoDiv" class="flexWrap" :class="{ fadeIn: openBarInfoDiv, fadeOut: !openBarInfoDiv }">
            <p class="closeBtn flexAllCenter" @click="closesBarInfoDiv">✕</p>

            <!-- 根據視窗大小或是否為行動裝置渲染不同順序 -->
            <template v-if="deviceStore.isSmallScreen || deviceStore.isMobile">
                <div id="barImg" :class="{ width0: !havePic }">
                    <img :src="barImage" alt="" />
                </div>
                <div id="barInfo" :class="{ width100: !havePic }">
                    <div id="barName">{{ props.searchInfo.barId }}</div>
                    <div id="scoreDiv" class="flexWrap flexVerticalCenter">
                        <p>{{ score }}</p>
                        <img :src="starImg" alt="" />
                    </div>
                    <div id="barInfoIntroduce">這裡是介紹內容... 營業時間，日期</div>
                    <div>
                        <BarInfoBlock :title="'評論'" :content="'評論'" :barId="1" />
                    </div>
                    <div>
                        <BarInfoBlock :title="'地點'" :content="'地點'" :barId="1" />
                    </div>
                    <div>
                        <BarInfoBlock :title="barBlock1.title" :content="barBlock1.content" />
                    </div>
                    <div>
                        <BarInfoBlock :title="barBlock1.title" :content="barBlock1.content" />
                    </div>
                    <div class="line"></div>
                </div>
            </template>

            <template v-else>
                <div id="barInfo" :class="{ width100: !havePic }">
                    <div id="barName">{{ props.searchInfo.barId }}</div>
                    <div id="scoreDiv" class="flexWrap flexVerticalCenter">
                        <p>{{ score }}</p>
                        <img :src="starImg" alt="" />
                    </div>
                    <div id="barInfoIntroduce">這裡是介紹內容... 營業時間，日期</div>
                    <div>
                        <BarInfoBlock :title="'評論'" :content="'評論'" :barId="1" />
                    </div>
                    <div>
                        <BarInfoBlock :title="'地點'" :content="'地點'" :barId="1" />
                    </div>
                    <div>
                        <BarInfoBlock :title="barBlock1.title" :content="barBlock1.content" />
                    </div>
                    <div>
                        <BarInfoBlock :title="barBlock1.title" :content="barBlock1.content" />
                    </div>
                    <div class="line"></div>
                </div>
                <div id="barImg" :class="{ width0: !havePic }">
                    <img :src="barImage" alt="" />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, watch, defineProps } from 'vue';
import BarInfoBlock from './barInfoBlock.vue';
import { useDeviceStore } from '@/stores/useDeviceStore'; // 確認引入的路徑正確

// 使用 store
const deviceStore = useDeviceStore(); // 直接使用 store 物件來存取狀態

const props = defineProps({
    searchInfo: {
        barId: Number,
    },
    updateFlag: Number,
});

const openBarInfoDiv = ref(false);
const barName = ref('title');
const barImage = ref('/pic/test/barImg.png');
const havePic = ref(true);
const score = ref(3.5);
const starImg = ref('/pic/barInfo/star.png');
// const isSmallScreen = ref(false);
// const isMobile = ref(false);

const closesBarInfoDiv = () => {
    openBarInfoDiv.value = false;
};

// 監聽 updateFlag 變化，打開信息顯示
watch(() => props.updateFlag, () => {
    openBarInfoDiv.value = true;
});

// 初始化與監聽視窗大小和裝置判斷
onMounted(() => {
  deviceStore.init(); // 正確呼叫 store 中的 init 函數
//   console.log('Init called:', { isSmallScreen: deviceStore.isSmallScreen, isMobile: deviceStore.isMobile });
});

// 清理監聽
onBeforeUnmount(() => {
  deviceStore.cleanup(); // 正確呼叫 store 中的 cleanup 函數
});

const barBlock1 = reactive({
    title: '介紹',
    content: '<div>介紹內容...</div>',
});
</script>

<style scoped>
/* 定義淡入淡出的動畫 */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

.fadeIn {
    animation: fadeIn 0.25s forwards;
    /* 淡入效果 */
    z-index: 2;
}

.fadeOut {
    animation: fadeOut 0.25s forwards;
    /* 淡出效果 */
    z-index: 0;
}

#barInfoDiv {
    background-color: rgb(255, 255, 255, 0.9);
    height: 94%;
    width: 90%;
    position: absolute;
    top: 3%;
    left: 5%;
    border-radius: 30px;
    border: 3px solid whitesmoke;
}

#barImg {
    overflow: hidden;
    width: 45%;
    height: 100%;
    border-radius: 0 30px 30px 0;
}

#barImg>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.width100 {
    width: 100% !important;
}

.width0 {
    width: 0% !important;
}

.closeBtn {
    color: var(--gray);
    position: absolute;
    right: 25px;
    top: 15px;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    font-size: 25px;
    background-color: whitesmoke;
}

.closeBtn:hover,
.closeBtn:active {
    background-color: var(--gray);
    color: whitesmoke;
}

#barInfo {
    width: 55%;
    padding: 40px;
    box-sizing: border-box;
    height: 100%;
    overflow: scroll;
}

#barName {
    font-size: 45px;
    margin-bottom: 15px;
    word-wrap: break-word;
}

#barInfoIntroduce {
    word-wrap: break-word;
    margin-bottom: 15px;
}

#scoreDiv {
    font-size: 25px;
    background-color: var(--lightGray);
    box-sizing: border-box;
    padding: 3px 8px;
    border-radius: 15px;
    width: fit-content;
    font-family: Bradley Hand, cursive;
    font-weight: 1100;
    margin-bottom: 15px;
}

#scoreDiv>p {
    margin-right: 10px;
}

#scoreDiv>img {
    height: 20px;
    width: 20px;
}
</style>