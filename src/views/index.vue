<template>
    <div id="indexDiv" class="flexWrap">
        <div id="sideBar">
            <img id="logo" src="/pic/base/logo.png" alt="logo">
            <SiderBar @search="onSearch"></SiderBar>
            <userBlock></userBlock>
        </div>
        <div class="width20px"></div>
        <div id="map">
            <Map></Map>
            <SearchResults :searchInfo="currentSearchInfo" :updateFlag="updateSearchInfoFlag"
                @searchResult="onSearchResult"></SearchResults>
            <BarInfo :searchInfo="currentSearchResultInfo" :updateFlag="updateSearchResultInfoFlag"></BarInfo>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Map from "../components/map/map.vue"
import SearchResults from "../components/sideBar/searchResults.vue";
import SiderBar from "../components/sideBar/sideBar.vue"
import userBlock from "../components/sideBar/userBlock.vue"
import BarInfo from '../components/barInfo/barInfo.vue';

const currentSearchInfo = ref({});
const currentSearchResultInfo = ref({});
const updateSearchInfoFlag = ref(0);
const updateSearchResultInfoFlag = ref(0);


function onSearch(searchInfo) {
    currentSearchInfo.value = searchInfo;
    updateSearchInfoFlag.value++; // 增加标志以触发更新
}
function onSearchResult(searchResultInfo) {
    currentSearchResultInfo.value = searchResultInfo;
    updateSearchResultInfoFlag.value++; // 增加标志以触发更新
}



</script>
<style>
/* 通用設定 開始 */


:root {
    --lightGray: rgb(245, 243, 243);
    --lightGrayClick: rgb(226, 226, 226);
    --gray: rgb(127, 127, 127);
    --grayClick: rgb(107, 107, 107);
    --btnGray: rgb(92, 92, 92);
    --btnGrayClick: rgb(67, 67, 67);
    --darkBlue: rgb(19, 58, 78);
}

.flexWrap {
    display: flex;
    flex-wrap: wrap;
}

.flexHorizontalCenter {
    display: flex;
    justify-content: center;
}

.flexVerticalCenter {
    display: flex;
    align-items: center;
}

.flexAllCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

body {
    font-family: "Noto Sans TC", sans-serif;

}

.line {
    width: 100%;
    height: 1px;
    border-top: solid var(--gray) 1px;
    margin: 5px 0px;
}

/* 通用設定 結束 */
</style>
<style scoped>
#indexDiv {
    /* width: 100vh; */
    height: 95vh;
    padding: 20px;
}

#logo {
    height: 70px;
    margin-bottom: 10px;
}

#sideBar {
    padding: 0px 0px;
    width: calc(300px - 20px);
    height: 100%;
    box-sizing: border-box;
    z-index: 10;
    position: relative;

}

.width20px {
    width: 20px;
}


#map {
    width: calc(100% - 300px);
    position: relative;
}

@media (max-width:600px) {
    #sideBar {
display: none;    }

    #map {
        width: 100%;
    }

    .width20px {
        width: 0px;
    }
}

</style>
