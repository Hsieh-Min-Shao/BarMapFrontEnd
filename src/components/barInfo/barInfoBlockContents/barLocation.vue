<template>
    <div ref="mapContainer" class="map2"></div>
    <div> 當前視窗大小：寬度 {{ store.width }}px，高度 {{ store.height }}px
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import "leaflet/dist/leaflet.css";

import L from 'leaflet';

import { useWindowStore } from '@/stores/windowSize'

const store = useWindowStore()

const props = defineProps({
    barId: Number
});

const mapContainer = ref(null);

onMounted(() => {
    if (mapContainer.value) {
        const map = L.map(mapContainer.value).setView([25.03746, 121.564558], 13);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 18,
            attribution: '© OpenStreetMap contributors, © CARTO',
        }).addTo(map);
    }
});
</script>
<style scoped>
.map2 {
    height: 200px;
    width: 100%;
    z-index: 1;
    border-radius: 10px;
}
</style>
