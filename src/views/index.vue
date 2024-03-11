<template>
    <div id="indexDiv" class="flexWrap">
        <div id="sideBar">
            <img id="logo" src="/pic/base/logo.png" alt="logo">
            <SiderBar @search="onSearch"></SiderBar>
            <div>user預留地</div>
        </div>
        <div id="map">
            <Map></Map>
            <SearchResults :searchInfo="currentSearchInfo" :updateFlag="updateFlag"></SearchResults>
            <BarInfo></BarInfo>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Map from "../components/map/map.vue"
import SearchResults from "../components/map/searchResults.vue";
import SiderBar from "../components/map/sideBar.vue"
import BarInfo from '../components/barInfo/barInfo.vue';

const currentSearchInfo = ref({});
const updateFlag = ref(0);


function onSearch(searchInfo) {
    currentSearchInfo.value = searchInfo;
    updateFlag.value++; // 增加标志以触发更新
}

</script>
<style>
/* 通用設定 開始 */


:root {
    --lightGray: rgb(245, 243, 243);
    --lightGrayClick: rgb(226, 226, 226);
    --gray: rgb(127, 127, 127);
    --grayClick: rgb(107, 107, 107);
    --btnGray:rgb(92,92,92);
    --btnGrayClick:rgb(67, 67, 67);
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
    margin :5px  0px;
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
    padding: 0px px;
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    z-index: 10;
}

#map {
    width: calc(100% - 300px);
    position: relative;
}
</style>
