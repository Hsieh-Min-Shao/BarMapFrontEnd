<template>
    <RouterView></RouterView>
    <Notification></Notification>
    <GlobalPop ref="popRef" />

</template>
<script setup>
import GlobalPop from './components/base/pop.vue'
import Notification from '@/components/base/notification.vue'
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import { useWindowStore } from './stores/windowSize'


//======窗口大小監聽======
const store = useWindowStore()

// 更新窗口大小的函數
const updateSize = () => {
    store.updateSize()
}

onMounted(() => {
    window.addEventListener('resize', updateSize)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateSize)
})


const popRef = ref()

// 全域註冊方法
onMounted(() => {
  window.showPop = (options) => {
    popRef.value?.show(options)
  }
})
</script>
<style scoped></style>
