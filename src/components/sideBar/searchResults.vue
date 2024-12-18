<template>
    <div id="searchResultsDiv" :class="{ displayNone: isSearch }">
        <div id="searchResultsTitle" class="flexWrap">
            <p id="searchResultsText" class="flexVerticalCenter">搜尋結果</p>
            <p class="closeBtn flexAllCenter" @click="closesearchResult">×</p>
            <div>暫時放搜尋在這，之後會串API</div>
            <div>篩選結果</div>
            <div>{{ searchInfo.searchText }} </div>
            <div> {{ searchInfo.selectedTags }}</div>
            <div> {{ searchInfo.minPirce }}</div>
            <div> {{ searchInfo.maxPrice }}</div>
        </div>
        <div v-for="bar in barList" :key="bar.barId" @click="handleSearchResult(bar.barId)" class="oneBarDiv"
            :class="{ cursorPointer: isSearch }">
            <div class="barName">{{bar.barName}}</div>
            <div class="flexWrap">
                <div class="barScore flexAllCenter">{{bar.barScore}} &nbsp; <img src="/pic/searchResults/star.png" alt=""></div>
                <!-- 新增營業時間顯示，動態設定顏色 -->
                <div :class="getStatusClass(bar.todayHours)">{{ bar.todayHours }}</div>
            </div>
            <div class="barLocation">{{bar.barLocation}}</div>
        </div>
        <div>
        </div>

    </div>
</template>

<script setup>
import { ref, reactive, watch, defineProps, onMounted } from 'vue';

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

// 定義星期的對應
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// 每則店家範例矩陣
const barList = reactive([
    {
        barId: 1,
        barScore: 3,
        barName: "名字1",
        barLocation: "店員臉太臭店員臉太臭店員臉太臭...",
        businessHours: {
            Sun:"09:00-17:00",
            Mon: "09:00-18:00",
            Tue: "09:00-18:00",
            Wed: "09:00-18:00",
            Thu: "09:00-18:00",
            Fri: "09:00-18:00",
            Sat: "10:00-16:00"
        },
        todayHours: ""
    },
    {
        barId: 2,
        barScore: 2.5,
        barName: "名字2",
        barLocation: "city site road city site road city site road city site road city site road city site road city site road city site road",
        businessHours: {
            Sun: "休息",
            Mon: "09:00-18:00",
            Tue: "09:00-18:00",
            Wed: "09:00-18:00",
            Thu: "09:00-18:00",
            Fri: "09:00-18:00",
            Sat: "10:00-16:00"
        },
        todayHours: ""
    }
]);

// 直接根據 updateFlag 的變化來觸發更新
watch(() => props.updateFlag, () => {
    isSearch.value = true;
});

const emits = defineEmits(['searchResult']);
function handleSearchResult(barId) {
    if (isSearch.value) {
        const searchResultInfo = {
            barId: barId,
        };
        emits('searchResult', searchResultInfo);
        isSearch.value = false;
    }
}

// 當組件載入時，設定今天的營業時間
onMounted(() => {
    const todayIndex = new Date().getDay(); // 取得今天的星期索引 (0 表示星期日)
    const todayDay = daysOfWeek[todayIndex]; // 使用 daysOfWeek 取得星期的英文縮寫

    // 設定每個店家今天的營業時間
    barList.forEach(bar => {
        bar.todayHours = bar.businessHours[todayDay];
    });
});

// 根據營業時間設定狀態顯示的顏色
const getStatusClass = (todayHours) => {
    if (todayHours === '休息') {
        return 'closed';
    } else {
        const now = new Date();

        if (!todayHours.includes('-')) {
            return 'open'; // 預設營業中
        }

        const [openTime, closeTime] = todayHours.split('-').map(time => {
            const [hour, minute] = time.split(':');
            return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
        });

        const oneHourBeforeClose = new Date(closeTime.getTime() - 60 * 60 * 1000);

        if (now >= oneHourBeforeClose && now < closeTime) {
            return 'closingSoon'; // 即將打烊
        } else if (now >= closeTime) {
            return 'closed'; // 打烊
        } else {
            return 'open'; // 營業中
        }
    }
};
</script>

<style>
#searchResultsDiv {
    background-color: rgba(255, 255, 255, 0.95);
    height: calc(100% - 20px);
    width: 300px;
    margin: 10px 15px;
    position: absolute;
    top: 0;
    z-index: 0;
    border-radius: 30px;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateX(-200px);
    transition: opacity 0.3s, transform 0.3s;
    overflow: scroll;
}

.displayNone {
    z-index: 5 !important;
    opacity: 1 !important;
    transform: translateX(0) !important;
}

.cursorPointer {
    cursor: pointer !important;
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
}

.closeBtn:hover {
    transform: scale(1.5);
}

.oneBarDiv {
    background-color: rgb(217, 217, 217, 0.5);
    height: 130px;
    width: 100%;
    border-radius: 10px;
    padding: 8px 10px;
    box-sizing: border-box;
    overflow: scroll;
    margin-bottom: 15px;
    cursor: default;
}

.barName {
    font-size: 20px;
    margin-bottom: 5px;
}

.barScore {
    background: white;
    width: fit-content;
    padding: 2px 10px;
    box-sizing: border-box;
    border-radius: 50px;
    margin-bottom: 5px;
}

.barLocation {
    font-weight: 100;
}

/* 狀態顯示顏色 */
.open {
    background-color: green;
    color: white;
}

.closingSoon {
    background-color: orange;
    color: white;
}

.closed {
    background-color: red;
    color: white;
}
</style>
