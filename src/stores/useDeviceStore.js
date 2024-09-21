// stores/useDeviceStore.js
import { ref } from "vue";
import { defineStore } from "pinia";

export const useDeviceStore = defineStore("device", () => {
  const isSmallScreen = ref(false);
  const isMobile = ref(false);

  // 檢查是否為行動裝置
  const checkIfMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    isMobile.value =
      /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i.test(userAgent);
  };

  // 監聽視窗大小的變化
  const updateScreenSize = () => {
    isSmallScreen.value = window.innerWidth < 600;
  };

  // 初始化函數：用於設定監聽和狀態檢查
  const init = () => {
    updateScreenSize();
    checkIfMobile();
    window.addEventListener("resize", updateScreenSize);
  };

  // 清理函數：用於移除事件監聽
  const cleanup = () => {
    window.removeEventListener("resize", updateScreenSize);
  };

  return {
    isSmallScreen,
    isMobile,
    init,
    cleanup,
  };
});
