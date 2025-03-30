<template>
    <div class="barInfoPageWrapper">
      <!-- 左側 -->
      <div class="sideBar">
        <div class="sideItem">
          <img class="logo" src="/pic/base/logo.png" alt="Logo" @click="goHome" />
        </div>
        <div class="sideItem">
          <button class="iconBtn" @click="toggleFavorite">
            <span :class="['starIcon', { active: isFavorite }]">★</span>
          </button>
        </div>
      </div>
  
      <!-- 主內容 -->
      <div class="mainContent">
        <slot />
      </div>
  
      <!-- 右側空白 -->
      <div class="rightSpace"></div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  const router = useRouter();
  const isFavorite = ref(false);
  
  const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value;
  };
  
  const goHome = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  .barInfoPageWrapper {
    display: flex;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
  }
  
  /* 左側欄 */
  .sideBar {
    width: 5%;
    min-width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding-top: 20px;
    box-sizing: border-box;
    position: fixed;
  }
  
  .sideItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo {
    width: 70%;
    cursor: pointer;
  }
  
  .iconBtn {
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
  }
  
  .starIcon {
    color: gray;
    transition: 0.3s;
  }
  
  .starIcon.active {
    color: gold;
  }
  
  /* 主內容中間 */
  .mainContent {
    width: 95%;
    box-sizing: border-box;
    margin-left: 5%;
  }
  
  /* 右側空白 */
  .rightSpace {
    width: 0%;
  }
  </style>
  