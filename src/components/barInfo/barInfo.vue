<template>
  <div v-if="openBarInfoDiv" id="barInfoDiv" class="flexWrap fadeIn">
    <!-- 關閉按鈕 -->
    <p class="closeBtn flexAllCenter" @click="closesBarInfoDiv" title="關閉">✕</p>

    <!-- 放大按鈕 -->
    <p class="expandBtn flexAllCenter" @click="goToFullPage" title="查看全頁">⛶</p>

    <!-- Bar 詳細內容 -->
    <BarInfoContent :barId="props.searchInfo.barId" :isPage="false" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import BarInfoContent from '@/components/barInfo/BarInfoContent.vue';
import { useDeviceStore } from '@/stores/useDeviceStore';

const router = useRouter();
const deviceStore = useDeviceStore();

const props = defineProps({
  searchInfo: {
    barId: Number,
  },
  updateFlag: Number,
});

const openBarInfoDiv = ref(false);

const closesBarInfoDiv = () => {
  openBarInfoDiv.value = false;
};

const goToFullPage = () => {
  router.push(`/bar/${props.searchInfo.barId}`);
};

watch(
  () => props.updateFlag,
  () => {
    openBarInfoDiv.value = true;
  }
);

onMounted(() => {
  deviceStore.init();
});

onBeforeUnmount(() => {
  deviceStore.cleanup();
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  animation: fadeIn 0.25s forwards;
  z-index: 10;
}

#barInfoDiv {
  background-color: rgb(255, 255, 255, 1);
  height: 94%;
  width: 90%;
  position: absolute;
  top: 3%;
  left: 5%;
  border-radius: 30px;
  border: 3px solid whitesmoke;
}

.closeBtn,
.expandBtn {
  color: var(--gray);
  position: absolute;
  top: 15px;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  font-size: 20px;
  background-color: whitesmoke;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
}

.closeBtn {
  right: 25px;
}

.expandBtn {
  right: 65px;
}

.closeBtn:hover,
.closeBtn:active {
  background-color: var(--gray);
  color: whitesmoke;
  transform: scale(1.3);
}

.expandBtn:hover,
.expandBtn:active {
  background-color: var(--gray);
  color: whitesmoke;
  transform: scale(1.5);
}
</style>
