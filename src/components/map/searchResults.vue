<template>
    <div id="searchResultsDiv" :class="{ displayNone: isSearch }">
        <div id="searchResultsTitle" class="flexWrap">
            <p id="searchResultsText" class="flexVerticalCenter">搜尋結果</p>
            <p class="closeBtn flexAllCenter" @click="closesearchResult">×</p>
            <div>暫時放搜尋在這，之後會串API</div>
            <div>{{ searchInfo.searchText }} </div>
            <div> {{ searchInfo.selectedTags }}</div>
            <div> {{ searchInfo.minPirce }}</div>
            <div> {{ searchInfo.maxPrice }}</div>
        </div>
        <div class="oneBarDiv">
            <div class="barName">名字</div>
            <div class="barScore flexAllCenter">2.5 &nbsp; <img src="/pic/searchResults/star.png" alt=""></div>
            <div class="barLocation">city site road city site road city site road city site road city site road city site road city site road city site road city site road </div>
        </div>

    </div>
</template>

<script setup>
import { ref, reactive, watch ,defineProps} from 'vue';

const isSearch = ref(false)
const closesearchResult = () => {
    isSearch.value = false;
}

const props = defineProps({
    searchInfo: {
        searchText: String,
        selectedTags: Array,
        minPirce: Number,
        maxPrice: Number,
    },
    updateFlag: Number
});

// 直接根據 updateFlag 的變化來觸發更新
watch(() => props.updateFlag, () => {
    // 這裡可以執行更新搜尋結果的邏輯
    isSearch.value = true;
});
</script>
<style>
#searchResultsDiv {
    background-color: rgba(255, 255, 255, 0.95);
    height: calc(100% - 20px);
    width: 300px;
    margin: 10px 15px;
    position: absolute;
    top: 0;
    /* left: -315px; */
    z-index: 0;
    border-radius: 30px;
    padding: 20px;
    box-sizing: border-box;
    /* display: none; */
    opacity: 0;
    /* 初始透明度設為 0 */
    transform: translateX(-200px);
    /* 初始位置向左偏移 */
    transition: opacity 0.3s, transform 0.3s;
    /* 添加過渡效果 */
}

.displayNone {
    /* display: block !important; */
    /* left: 0 !important; */
    z-index: 5 !important;
    opacity: 1 !important;
    /* 完全不透明 */
    transform: translateX(0) !important;
    /* 回到原位 */
}

#searchResultsTitle {
    width: 100%;
    margin-bottom: 20px;
}

#searchResultsText {
    width: calc(100% - 45px);
    font-size: 22px;

}

.closeBtn {
    width: 45px;
    font-weight: 300;
    font-size: 30px;
    cursor: pointer;
    transition: transform 0.2s;
    /* 添加平滑過渡效果 */

}

.closeBtn:hover {
    transform: scale(1.5);
    /* 輕微放大 */
}
.oneBarDiv{
    background-color: rgb(217, 217, 217,0.5);
    height: 130px;
    width: 100%;
    border-radius: 10px;
    padding: 8px 10px;
    box-sizing: border-box;
    overflow: scroll;
}
.barName{
    font-size: 20px;
    margin-bottom: 5px;
}
.barScore{
    background: white;
    width: fit-content;
    padding: 2px 10px;
    box-sizing: border-box;
    border-radius: 50px;
    margin-bottom: 5px;
}
.barLocation{
    font-weight: 100;
}
</style>
<style scoped></style>