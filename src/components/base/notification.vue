<!-- Notification.vue -->
<template>
    <Teleport to="body">
      <transition name="fade">
        <div v-if="visible" class="notification" :class="type">
          {{ message }}
        </div>
      </transition>
    </Teleport>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const visible = ref(false);
  const message = ref('');
  const type = ref('');
  
  const show = (msg, t = 'info') => {
    message.value = msg;
    type.value = t;
    visible.value = true;
    setTimeout(() => {
      visible.value = false;
    }, 2000);
  };
  
  // 給全域調用
  window.notify = show;
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    color: white;
    font-size: 14px;
  }
  
  .notification.info {
    background-color: rgba(64, 64, 64, 0.6);
  }
  .notification.success {
    background-color: rgba(0, 128, 0, 0.6);
  }
  .notification.error {
    background-color: rgba(255, 0, 0, 0.6);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  