<template>
    <div class="favoriteWrapper">
        <div v-for="(favorite, index) in favoriteList" :key="favorite.barId"
            class="favoriteBar flexWrap flexVerticalCenter" :class="{ first: index === 0 }"
            @click="clickFavorite(favorite.barId)">
            <div class="favoriteBarName">{{ favorite.barName }}</div>
            <div class="flexAllCenter copyIconBlock" @click.stop @click="copyLink(favorite.barId)">
                <Icon icon="mdi:link-variant" class="copyIcon" />
            </div>
            <div class="flexAllCenter removeFavoriteIconBlock" @click.stop @click="removeFavorite(favorite.barId)">
                <Icon icon="mdi:bookmark-remove-outline" class="removeFavoriteIcon" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
    userId: Number,
});

// 模擬收藏資料
const favoriteList = reactive([
    { barId: 1, barName: '名字1' },
    { barId: 2, barName: '名字2' },
    { barId: 3, barName: '名字3' },
    { barId: 4, barName: '名字4' },
    { barId: 5, barName: '名字5' },
    { barId: 6, barName: '名字6' },
    { barId: 7, barName: '名字7' },
    { barId: 8, barName: '名字8' },
    { barId: 9, barName: '名字9' },
    { barId: 10, barName: '名字10' },
]);

const emits = defineEmits(['searchResult']);
const clickFavorite = (id) => {
    const searchResultInfo = {
        barId: id,
    };
    emits('searchResult', searchResultInfo);
};

const copyLink = (id) => {
    const url = window.location.href + "bar/" + id;
    navigator.clipboard.writeText(url)
        .then(() => {
            window.notify('連結已複製', 'success');
        })
        .catch((err) => {
            window.notify('連結複製失敗', 'error');
        });
};

const removeFavorite = (id) => {
    const index = favoriteList.findIndex(favorite => favorite.barId === id);
    if (index !== -1) {
        favoriteList.splice(index, 1);
        window.notify('已移除收藏', 'info');
    }
};

</script>

<style scoped>
.favoriteWrapper {
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    overflow-y: auto;
    height: calc(100% - 40px);
    /* 隱藏 scrollbar */
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
    -webkit-overflow-scrolling: touch;
    /* iOS Safari */
}

.favoriteWrapper::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Edge */
}

.favoriteBar {
    padding: 10px;
    border-bottom: 1px solid var(--lightGrayClick);
    box-sizing: border-box;
}

.favoriteBar.first {
    border-top: 1px solid var(--lightGrayClick);
}

.favoriteBarName {
    font-size: 16px;
    width: calc(100% - 70px);
}

.favoriteBar:hover {
    background-color: var(--lightGray);
    transition: color 0.3s ease;
    cursor: pointer;
}

.copyIconBlock {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    background-color: var(--lightGray);
    margin-right: 10px;
}

.copyIcon {
    font-size: 20px;
    color: var(--gray);
    transform: scale(1);
    transition: transform 0.3s ease;
}

.copyIconBlock:hover {
    background-color: var(--lightGrayClick);
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.copyIconBlock:hover .copyIcon {
    color: var(--btnGrayClick);
    transition: color 0.3s ease;
}

.removeFavoriteIconBlock {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    background-color: var(--lightGray);
    cursor: pointer;
}

.removeFavoriteIcon {
    font-size: 20px;
    color: var(--removeRed);
    transform: scale(1);
    transition: transform 0.3s ease;
}

.removeFavoriteIconBlock:hover {
    background-color: var(--lightGrayClick);
}

.removeFavoriteIconBlock:hover .removeFavoriteIcon {
    color: var(--removeRedClick);
    transition: color 0.3s ease;
}
</style>