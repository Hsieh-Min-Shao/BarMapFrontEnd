<template>
    <div id="barCommentDiv">
        <div id="myCommemt" class="flexWrap">
            <textarea v-model="myCommemtText" name="" id="myCommemtText" cols="30" rows="10"
                placeholder="撰寫評論"></textarea>
            <div id="myCommemtBlank"></div>
            <div id="myCommemtSubmit" class="flexAllCenter">Send</div>
        </div>
        <!-- 檢舉彈窗 -->
        <Pop :data="reportBox" :isPopFlag="isReportBoxPopFlag"></Pop>
        <!-- 刪除彈窗 -->
        <Pop :data="binBox" :isPopFlag="isBinBoxPopFlag"></Pop>
        <div class="line"></div>
        <div v-for="otherComment in otherCommentList" :key="otherComment.commemtId" class="otherComment flexWrap">
            <div class="otherCommentImg"><img :src="otherComment.imgSrc" alt=""></div>
            <div class="otherCommentMessage">
                <div class="flexWrap">
                    <div class="otherCommentMessageName">{{ otherComment.name }}</div>
                    <div @click="reportBoxPopUp(otherComment.commemtId)"
                        class="otherCommentMessageIcon flexVerticalCenter"><img src="/pic/barInfo/warning.png" alt="">
                    </div>
                    <div v-if="otherComment.userId === userId" @click="binBoxPopUp(otherComment.commemtId)"
                        class="otherCommentMessageIcon flexVerticalCenter">
                        <img src="/pic/barInfo/bin.png" alt="">
                    </div>
                </div>
                <div class="otherCommentMessageText">{{ otherComment.message }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Pop from "../../base/pop.vue";

const props = defineProps({
    barId: Number
});

const myCommemtText = ref("");

// 每則評論範例矩陣
const otherCommentList = reactive([
    {
        commemtId: 1,
        userId: 123,
        imgSrc: "/pic/base/logo.png",
        name: "匿名使用者",
        message: "店員臉太臭店員臉太臭店員臉太臭..."
    },
    {
        commemtId: 2,
        userId: 12,
        imgSrc: "/pic/base/logo.png",
        name: "匿名使用者",
        message: "店員臉太臭店員臉太臭店員臉太臭..."
    }
]);

// 彈窗 -> 檢舉用格式
const reportBox = reactive({
    commemtId: 0,
    height: 250,
    width: 500,
    msg: "確定要檢舉該則訊息？",
    apiUrl: "",
    needDecide: true,
    decideSusMsg: "檢舉",
    apiData: {
        id: 2313213
    }
});

// 彈窗 -> 刪除用格式
const binBox = reactive({
    commemtId: 0,
    height: 250,
    width: 500,
    msg: "確定要刪除該則訊息？",
    apiUrl: "",
    needDecide: true,
    decideSusMsg: "刪除",
    apiData: {
        id: 2313213
    }
});

// 用來識別可以刪除本身留言的useId
const userId = 123;

// 單純計數用來彈出警告視窗
const isReportBoxPopFlag = ref(0);  // 控制檢舉彈窗
const isBinBoxPopFlag = ref(0);     // 控制刪除彈窗

// 彈窗 -> 觸發檢舉彈窗
const reportBoxPopUp = (commemtId) => {
    isReportBoxPopFlag.value++;
    reportBox.commemtId = commemtId;
};

// 彈窗 -> 觸發刪除彈窗
const binBoxPopUp = (commemtId) => {
    isBinBoxPopFlag.value++;
    binBox.commemtId = commemtId;
};
</script>

<style scoped>
#myCommemt {
    height: 30px;
    width: 100%;
    margin-bottom: 15px;
}

#myCommemtBlank {
    width: 10px;
}

#myCommemtText {
    width: calc(100% - 60px - 10px);
    resize: none;
    font-size: 18px;
    height: 30px;
    box-sizing: border-box;
    border-radius: 10px;
}

#myCommemtText:focus {
    outline: none;
}

#myCommemtSubmit {
    width: 60px;
    border-radius: 10px;
    color: white;
    background-color: var(--btnGray);
    margin: 0 0px;
    cursor: pointer;
}

#myCommemtSubmit:hover {
    background-color: var(--btnGrayClick);
}

.otherComment {
    width: 100%;
    margin-bottom: 20px;
}

.otherCommentImg {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 3px;
    border: 1.5px solid black;
}

.otherCommentImg>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.otherCommentMessage {
    width: calc(100% - 50px);
    padding-left: 10px;
    box-sizing: border-box;
}

.otherCommentMessageName {
    font-weight: 700;
    width: calc(100% - 40px);
}

.otherCommentMessageIcon {
    cursor: pointer;
    margin-right: 5px;
}

.otherCommentMessageIcon>img {
    width: 15px;
    height: 15px;
}
</style>
