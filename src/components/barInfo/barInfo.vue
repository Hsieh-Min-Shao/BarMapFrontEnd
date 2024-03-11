<template>
    <div>
        <div id="barInfoDiv" class="flexWrap" :class="{ displayNone: !openBarInfoDiv }">
            <p class="closeBtn flexAllCenter" @click="closesBarInfoDiv">✕</p>
            <div id="barInfo" :class="{ width100: !havePic }">
                <div id="barName">{{ barName }}</div>
                <div id="scoreDiv" class="flexWrap flexVerticalCenter">
                    <p>{{ score }}</p> <img :src="starImg" alt="">
                </div>
                <div id="barInfoIntroduce">
                    1231212312312123123121231231212312312123123121231231212312312123123121231231212312312123123121231231212312312123123121231231212312312123123121231231212312312123123121231231212312312123123121231231212312312123123121231231212312312123
                </div>

                <div><BarInfoBlock :title="'評論'" :content="'評論'" :barId="1"></BarInfoBlock></div>
                <div><BarInfoBlock :title="'地點'" :content=barBlock1.content></BarInfoBlock></div>
                <div><BarInfoBlock :title="barBlock1.title" :content=barBlock1.content></BarInfoBlock></div>
                <div><BarInfoBlock :title="barBlock1.title" :content=barBlock1.content></BarInfoBlock></div>
                <div class="line"></div>

            </div>
            <div id="barImg" :class="{ width0: !havePic }">
                <img :src="barImage" alt="">
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import BarInfoBlock from './barInfoBlock.vue'
const openBarInfoDiv = ref(true);
const barName = ref("title");
const barImage = ref("/pic/test/barImg.png");
const havePic = ref(true);
const score = ref(3.5);
const starImg = ref("/pic/barInfo/star.png")

const closesBarInfoDiv = () => {
    openBarInfoDiv.value = false;
}

const barBlock1 = reactive({
    title:"介紹",
    content:"<div>dfjhgnkho31242142fhnienwfl2hoirijh23nlfojihgfeoiw</div><div>dfjhgnkho31242142fhnienwfl2hoirijh23nlfojihgfeoiw</div><div>dfjhgnkho31242142fhnienwfl2hoirijh23nlfojihgfeoiw</div><div>dfjhgnkho31242142fhnienwfl2hoirijh23nlfojihgfeoiw</div>"
})
</script>
<style></style>
<style scoped>
#barInfoDiv {
    background-color: rgb(255, 255, 255, 0.9);
    /* background-color: rgb(242, 243, 245); */
    /* background-color: var(--lightGray); */
    height: 94%;
    width: 90%;
    z-index: 2;
    position: absolute;
    top: 3%;
    left: 5%;
    border-radius: 30px;
}



#barImg {
    overflow: hidden;
    /* 確保圖片超出部分不會顯示 */
    width: 45%;
    height: 100%;
    border-radius: 0 30px 30px 0;
}

#barImg>img {
    width: 100%;
    /* 使圖片寬度等於容器的寬度 */
    height: 100%;
    /* 使圖片高度等於容器的高度 */
    object-fit: cover;
    /* 保持圖片的比例，並確保圖片覆蓋整個容器 */
}

.width100 {
    width: 100% !important;
}

.width0 {
    width: 0% !important;
}

.displayNone {
    display: none !important;
}

.closeBtn {
    color: var(--gray);
    position: absolute;
    right: 25px;
    top: 15px;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    /* border: 2px solid rgb(127, 127, 127); */
    font-size: 25px;
    background-color: whitesmoke;
}

.closeBtn:hover {
    transform: none;
    background-color: var(--gray);
    color: whitesmoke;
    /* border:2px solid white; */
    /* 輕微放大 */
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
}</style>