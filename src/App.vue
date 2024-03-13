<template>
    <RouterView></RouterView>

</template>
<script setup>
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
</script>
<style scoped></style>
