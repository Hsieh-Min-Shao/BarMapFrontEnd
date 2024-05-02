<template>
    <div class="barBlockDiv">
        <div class="line"></div>
        <div class="barBlockTitleDiv flexWrap" @click="toggleRotation">
            <div class="barBlockTitle">{{ props.title }}</div>
            <div class="expandBtn">
                <div class="horizontalLine"
                    :class="{ 'vertical': turnOffFirst, 'turnHorizontal': turnOff, 'turnVertical': turnOn }"></div>
                <div class="horizontalLine"></div>
            </div>
        </div>
        <div ref="content" class="barBlockContentHide" :style="contentStyle">
            <div class="thisContent">
                <div v-if="props.title === '評論' && props.content === '評論'">
                    <BarComment :bar-id="props.barId"></BarComment>
                </div>
                <div v-else-if="props.title === '地點' && props.content === '地點'">
                    <BarLocation :bar-id="props.barId"></BarLocation>
                </div>
                <div v-else>
                    <div v-html="props.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch, nextTick } from 'vue'
import BarComment from './barInfoBlockContents/barComment.vue';
import BarLocation from './barInfoBlockContents/barLocation.vue';
const props = defineProps({
    title: String,
    content: String,
    barId: Number
});

const turnOffFirst = ref(true);
const turnOff = ref(true); // 初始狀態為垂直
const turnOn = ref(false); // 追踪旋轉狀態
const content = ref(null); // 參考內容元素
const contentStyle = ref({}); // 內容的動態樣式


function toggleRotation() {
    turnOffFirst.value = false;
    turnOn.value = !turnOn.value; // 切換旋轉狀態
    if (!turnOn.value) {
        // 如果當前是要恢復原狀，我們需要將`vertical`類重新加上
        // 因為動畫完成後會停留在-90度，所以需要將它手動重設回0度
        turnOff.value = true; // 重置為垂直狀態
        contentStyle.value = { maxHeight: '0', transition: 'max-height 0.5s ease' };
    } else {
        turnOff.value = false; // 移除垂直狀態，以開始旋轉
        const height = content.value.scrollHeight + 'px';
        contentStyle.value = { maxHeight: height, transition: 'max-height 0.5s ease' };
    }
}

// 監控內容變化以動態調整高度
watch(() => props.content, () => {
    if (turnOn.value) {
        nextTick(() => {
            const height = content.value.scrollHeight + 'px';
            contentStyle.value = { maxHeight: height };
        });
    }
});


</script>
<style></style>
<style scoped>
.barBlockDiv {
    width: 100%;
    z-index: 10;
}

.barBlockTitleDiv {
    height: 30px;
    cursor: pointer;
}

.barBlockTitle {
    font-size: 23px;
    width: calc(100% - 30px);
}

.expandBtn {
    width: 30px;
    position: relative;
    cursor: pointer;
}

.horizontalLine {
    width: 70%;
    position: absolute;
    top: 15px;
    height: 0px;
    border-top: solid black 1px;
    border-bottom: solid black 1px;
}

.vertical {
    /* 使div元素旋轉90度 */
    transform: rotate(90deg) !important;
    /* 選擇性設置，確保旋轉的中心是元素的中心 */
    transform-origin: center !important;
}



.turnVertical {
    animation: rotate-anticlockwise 0.3s forwards !important;
}

.turnHorizontal {
    animation: rotate-back-anticlockwise 0.3s forwards !important;
}


@keyframes rotate-anticlockwise {
    from {
        transform: rotate(90deg);
    }

    to {
        transform: rotate(0deg);
    }
}

@keyframes rotate-back-anticlockwise {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(90deg);
    }
}

.barBlockContentHide {
    transition: max-height 0.5s ease;
    overflow: hidden;
    max-height: 0;
    /* 開始時為收回狀態 */
}

.thisContent {
    margin: 10px;
}
</style>