<template>
  <BarLayout>
    <BarInfoContent :barId="parseInt(barId)" :isPage="true" />
  </BarLayout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import BarLayout from '@/components/layouts/BarLayout.vue'
import BarInfoContent from '@/components/barInfo/BarInfoContent.vue'

const route = useRoute()
const barId = route.params.barId
</script>
