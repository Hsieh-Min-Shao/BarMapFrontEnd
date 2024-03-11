<template>
  <div></div>
  <div ref="mapContainer" class="map"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import "leaflet/dist/leaflet.css";

import L from 'leaflet';

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
.map {
  height: 100%;
  width: 100%;
  z-index: 1;
  border-radius: 10px;

}
</style>