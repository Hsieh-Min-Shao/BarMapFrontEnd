<template>
    <div id="sideBarDiv">
        <div id="searchDiv" class="flexWrap flexAllCenter">
            <input type="text" v-model="searchText">
            <img src="/pic/sideBar/blackSearch.svg" @click="handleSearch">
        </div>
        <div id="filterDiv">
            <div class="titleText">價錢區間：{{ priceRangeMin }} - {{ priceRangeMax }}</div>
            <div id="priceRangeInputDiv" class="flexWrap flexVerticalCenter inputCss">
                <input type="text" v-model="priceRangeMin">
                <div>&nbsp; - &nbsp;</div>
                <input type="text" v-model="priceRangeMax">
            </div>
            <div class="titleText">標籤</div>
            <div id="labelDiv" class="flexWrap">
                <div v-for="hashTag in hashTagList" :key="hashTag" @click="toggleSelection(hashTag)"
                    :class="{ label: true, labelSelected: isSelected(hashTag) }">
                    # {{ hashTag }}
                </div>
            </div>

            <!-- <div id="priceRangeInputDiv" class="flexWrap flexVerticalCenter">
            <p class="minNumber">100000</p>
            <input type="range" name="" id="">
            <p class="maxNumber">10000</p>
        </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const priceRangeMin = ref(0);
const priceRangeMax = ref(1000);
const searchText = ref('');

const hashTagList = reactive([
    "Cocktails", "HappyHour", "LiveMusic",
    "CraftBeers", "Mixology", "Nightlife",
    "BarFood", "SignatureDrinks", "WineSelection",
    "BartenderLife", "PubQuiz", "DanceNight",
    "RooftopBar", "Speakeasy", "SportsBar",
    "happy happy cat", "chipi chipi chapa chapa"
]);

const selectedTags = reactive(new Set());

function toggleSelection(tag) {
    if (selectedTags.has(tag)) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
        // console.log(tag); // 讀取被選中的標籤數據
    }
    console.log(Array.from(selectedTags))
}

function isSelected(tag) {
    return selectedTags.has(tag);
}
const emits = defineEmits(['search']);

function handleSearch() {
    const searchInfo = {
        searchText: searchText.value,
        selectedTags: Array.from(selectedTags),
        minPirce: priceRangeMin.value,
        maxPrice: priceRangeMax.value
    };
    emits('search', searchInfo);
}

</script>
<style></style>
<style scoped>
#sideBarDiv{
    height: calc(90% - 90px);
}

/* #BarMapText {
    font-family: Comic Sans MS;
    margin-bottom: 30px;
    font-size: 30px
} */

#searchDiv {
    height: 40px;
    margin-bottom: 30px;
}

#searchDiv input {
    font-size: 25px;
    height: 25px;
    width: 70%;
    border: 2px solid rgb(112, 112, 112);
    border-radius: 4px;

}

#searchDiv input:focus {
    outline: none;
    border: 2px solid black;

}

#searchDiv img {
    width: 25%;
    height: 25px;
    cursor: pointer;
}

#filterDiv {
    height: calc( 100% - 80px );
    margin-bottom: 15px;
    width: 100%;
    overflow: scroll;
}

.titleText {
    font-size: 20px;
    margin-bottom: 10px;
}

.inputCss input {
    font-size: 20px;
    height: 20px;
    border: 2px solid rgb(112, 112, 112);
    border-radius: 4px;
}

.inputCss input:focus {
    outline: none;
    border: 2px solid black;
}

#priceRangeInputDiv input {
    width: 40%;
}

input[type="range"] {
    -webkit-appearance: none;
    /* 移除默认外观 */
    appearance: none;
    /* width: 100%; 滑动条宽度 */
    height: 8px;
    /* 轨道高度 */
    border-radius: 4px;
    /* 轨道边角 */
    background: #e6e6e6;
    /* 轨道背景颜色 */
    outline: none;
    /* 移除轮廓 */
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    /* 滑块宽度 */
    height: 20px;
    /* 滑块高度 */
    border-radius: 50%;
    /* 圆形滑块 */
    background: #fff;
    /* 滑块背景颜色 */
    border: 1px solid #cccccc;
    /* 滑块边框颜色 */
    cursor: pointer;
    /* 鼠标样式 */
    margin-top: 0px;
    /* 对准轨道中心 */
}

input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #cccccc;
    cursor: pointer;
}

input[type="range"]::-ms-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #cccccc;
    cursor: pointer;
}

#priceRangeInputDiv {
    width: 100%;
    margin-bottom: 30px;
}

.minNumber {
    text-align: right;
    margin-right: 5px;
}

.maxNumber {
    margin-left: 5px;
}

#labelDiv {
    width: 100%;
    margin-bottom: 30px;
}

.label {
    font-size: 15px;
    border-radius: 50px;
    background-color: var(--lightGray);
    padding: 4px 8px;
    margin: 3px 5px;
    cursor: pointer;
}

.labelSelected {
    background-color: var(--darkBlue);
    /* 選中的標籤改變背景色 */
    color: white;
}
</style>