<template>
    <div id="sideBar" class="flexWrap">
        <!-- <div v-for="(bar, i) in barList" :key="i">
            {{ bar.name }} - {{ bar.local }}
        </div> -->
        <div id="barsDiv">
            <nav id="headerBarUserOperation">
                <input type="text" />
                <img id="headerBarUserOperationSearchIcon" @click="search" />
            </nav>
            <div class="bars">
                <div>名稱</div>
            </div>
        </div>
        <div id="sideBarBtnDiv">
            <div class="sideBarBtnDivBlank"></div>
            <div id="sideBarBtn"></div>
            <div class="sideBarBtnDivBlank"></div>
        </div>

    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const barList = reactive([
    { name: "1", local: "1" },
    { name: "2", local: "2" },
    { name: "3", local: "3" },
])
</script>
<style>
#sideBar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 290px;
    /* 側邊欄的寬度 */
    height: calc(100vh - 60px);
    /* 側邊欄的高度 */
    z-index: 10;
    /* 確保側邊欄在地圖上方 */

}
</style>
<style scoped>
#sideBarBtnDiv {
    height: 100%;
    width: 40px;
}

#sideBarBtn {
    height: 100px;
    border-radius: 0 10px 10px 0;
    background-color: rgb(242, 226, 211);
}

.sideBarBtnDivBlank {
    height: calc((100% - 100px) / 2);
}

#barsDiv {
    height: 100%;
    width: 250px;
    background-color: rgb(242, 226, 211);
}

#barSearch {
    height: 50px;
}



#headerBarUserOperationSearchIcon {
    width: 20px;
    height: 20px;
    position: relative;
    left: -30px;
    content: url("/pic/siderBar/blackSearch.svg");
    transition: transform 0.1s ease-in-out, left 0.2s ease-in-out;
    cursor: pointer;
}

#headerBarUserOperation input:focus+#headerBarUserOperationSearchIcon {
    content: url("/pic/siderBar/blackSearch.svg");
    transform: scale(1.1);
    left: -25px;
}

.bars {
    height: 90px;
}
</style>