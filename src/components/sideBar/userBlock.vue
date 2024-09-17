<template>
    div
  <div class="userBlock" :class="{ expanded: changeHeight }" @click="toggleHeight">
<div>213</div>

</div>
</template>

<script setup>
import { ref } from 'vue'

const changeHeight = ref(false);

// 切換高度狀態
const toggleHeight = () => {
  changeHeight.value = !changeHeight.value;
};
</script>

<style scoped>
/* 設置初始狀態高度為 10% 並固定在底部 */
.userBlock {
  position: absolute; /* 絕對定位 */
  bottom: 0; /* 固定在父容器的底部 */
  left: 0;
  right: 0;
  height: 10%; /* 初始高度為10% */
  background-color: lightblue;
  transition: height 0.5s ease; /* 使用 height 過渡效果 */
  overflow: hidden; /* 隱藏內容 */
}

/* 展開時高度變為90% */
.expanded {
  height: calc(100% - 80px); /* 當展開時，變為父容器的90%高度 */
}
</style>
