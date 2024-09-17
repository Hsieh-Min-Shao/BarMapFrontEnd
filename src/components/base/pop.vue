<template>
    <!-- Teleport 將彈窗放置到 body 並顯示 -->
    <Teleport to="body" v-if="isPop">
        <!-- 使用 transition 來控制進入和離開 -->
        <div class="popDiv" @click.self="colsePopBox">
            <transition name="expand-fade" appear>
                <!-- 彈窗內容 -->
                <div class="popBox" :style="boxStyle">
                    <div class="popBoxMsg flexAllCenter">{{ data.msg }} {{ data.commemtId }}</div>
                    <div class="popBoxBtn flexAllCenter">
                        <div class="confirmBtnDiv flexAllCenter" @click="colsePopBox">
                            <div class="decideBtn confirmBtn flexAllCenter">確認</div>
                        </div>
                        <div v-if="data.needDecide" class="cancelBtnDiv flexAllCenter" @click="colsePopBox">
                            <div class="decideBtn cancelBtn flexAllCenter">取消</div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </Teleport>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';

// 是否顯示彈窗
const isPop = ref(false);

const props = defineProps({
    isPopFlag: Number,
    data: {
        commemtId: Number,
        height: Number,
        width: Number,
        msg: String,
        needDecide: Boolean,
        decideSusMsg:String,
        apiUrl: String,
        apiData: Object
    }
});

// 監聽 isPopFlag 的變化來控制彈窗
watch(() => props.isPopFlag, () => {
    isPop.value = true;
    boxStyle.height = props.data.height + "px";
    boxStyle.width = props.data.width + "px";
});

//動作
const confirmActuve = () => {}

// 關閉彈窗
const colsePopBox = () => {
    isPop.value = false;
};

// 彈窗樣式
const boxStyle = reactive({
    height: props.data.height + "px",
    width: props.data.width + "px"
});
</script>

<style scoped>
/* 彈窗背景 */
.popDiv {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.5);
    /* 背景半透明 */
    z-index: 19;
}

/* 彈窗樣式 */
.popBox {
    background-color: white;
    position: fixed;
    top: 50%;
    /* 水平和垂直居中 */
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid var(--lightGray);
    border-radius: 4px;
    z-index: 20;
    opacity: 1;
}

/* 過渡動畫 */
.expand-fade-enter-active,
.expand-fade-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

/* 進入時的狀態 */
.expand-fade-enter-from {
    transform: translate(-50%, -50%) scaleY(0);
    /* 初始垂直壓縮 */
    opacity: 0;
}

/* 進入完成狀態 */
.expand-fade-enter-to {
    transform: translate(-50%, -50%) scaleY(1);
    /* 展開 */
    opacity: 1;
}


.popBoxMsg {
    height: calc(100% - 50px);
    font-size: 22px;
}

.popBoxBtn {
    height: 50px;
}

.confirmBtnDiv {
    width: 50%;
}

.cancelBtnDiv {
    width: 50%;
}

.decideBtn {
    height: 40px;
    width: 80px;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
}

.confirmBtn {
    color: white;
    background-color: var(--gray);
}

.confirmBtn:hover {
    background-color: var(--grayClick);
}

.cancelBtn {
    background-color: var(--lightGray);
}

.cancelBtn:hover {
    background-color: var(--lightGrayClick);
}
</style>
