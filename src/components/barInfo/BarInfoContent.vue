<template>
    <div :class="['barInfoContainer', { pageLayout: props.isPage }]">
      <!-- 頁面模式：圖片在上方 -->
      <div v-if="props.isPage" id="barImgTop">
        <img :src="barImage" alt="bar image" />
      </div>
  
      <!-- 彈窗模式：內容與圖片左右排列 -->
      <div class="contentAndImg flexWrap" v-else>
        <div id="barInfo" :class="{ width100: !havePic }">
          <div id="barName">{{ props.barId }}</div>
          <div id="scoreDiv" class="flexWrap flexVerticalCenter">
            <p>{{ score }}</p>
            <img :src="starImg" alt="star" />
          </div>
          <div id="barInfoIntroduce">這裡是介紹內容... 營業時間，日期</div>
          <div v-for="(block, index) in barInfoBlocks" :key="index">
            <BarInfoBlock :title="block.title" :content="block.content" :barId="block.barId" />
          </div>
          <div class="line"></div>
        </div>
  
        <div id="barImg" :class="{ width0: !havePic }">
          <img :src="barImage" alt="bar image" />
        </div>
      </div>
  
      <!-- 頁面模式：內容在圖片下方 -->
      <div v-if="props.isPage" id="barInfo">
        <div id="barName">{{ props.barId }}</div>
        <div id="scoreDiv" class="flexWrap flexVerticalCenter">
          <p>{{ score }}</p>
          <img :src="starImg" alt="star" />
        </div>
        <div id="barInfoIntroduce">這裡是介紹內容... 營業時間，日期</div>
        <div v-for="(block, index) in barInfoBlocks" :key="index">
          <BarInfoBlock :title="block.title" :content="block.content" :barId="block.barId" />
        </div>
        <div class="line"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import BarInfoBlock from './barInfoBlock.vue';
  
  const props = defineProps({
    barId: Number,
    isPage: Boolean,
  });
  
  const barImage = ref('/pic/test/barImg.png');
  const havePic = ref(true);
  const score = ref(3.5);
  const starImg = ref('/pic/barInfo/star.png');
  
  const barInfoBlocks = computed(() => [
    { title: '評論', content: '評論', barId: props.barId },
    { title: '地點', content: '地點', barId: props.barId },
    { title: '介紹', content: '介紹內容...' + props.barId, barId: props.barId },
    { title: '介紹', content: '介紹內容...', barId: props.barId },
  ]);
  </script>
  
  <style scoped>
  .barInfoContainer {
    width: 100%;
    height: 100%;
  }
  
  .pageLayout #barInfo {
    padding: 20px;
    width: 100%;
  }
  
  #barImgTop {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
  
  #barImgTop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .contentAndImg {
    width: 100%;
    height: 100%;
  }
  
  #barImg {
    overflow: hidden;
    width: 45%;
    height: 100%;
    border-radius: 0 30px 30px 0;
  }
  
  #barImg > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .width100 {
    width: 100% !important;
  }
  
  .width0 {
    width: 0% !important;
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
  
  #scoreDiv > p {
    margin-right: 10px;
  }
  
  #scoreDiv > img {
    height: 20px;
    width: 20px;
  }
  </style>
  