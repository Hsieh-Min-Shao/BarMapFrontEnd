<template>
    <Teleport to="body">
      <div v-if="visible" class="popDiv" @click.self="close">
        <transition name="expand-fade" appear>
          <div class="popBox" :style="{ width, height }">
            <component
              :is="contentComponent"
              v-bind="contentProps"
              @close="close"
              @confirm="confirm"
            />
          </div>
        </transition>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  import { ref, shallowRef } from 'vue';
  
  const visible = ref(false);
  const height = ref('150px');
  const width = ref('300px');
  const contentComponent = shallowRef(null);
  const contentProps = ref({});
  let confirmCallback = null;
  
  const confirm = () => {
    visible.value = false;
    if (confirmCallback) confirmCallback();
  };
  
  const close = () => {
    visible.value = false;
  };
  
  const show = ({ component, props = {}, onConfirm, width: w = 300, height: h = 150 }) => {
    contentComponent.value = component;
    contentProps.value = props;
    confirmCallback = onConfirm || null;
    width.value = typeof w === 'number' ? `${w}px` : w;
    height.value = typeof h === 'number' ? `${h}px` : h;
    visible.value = true;
  };
  
  defineExpose({ show });
  </script>
  
  <style scoped>
  .popDiv {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.5);
    z-index: 19;
  }
  
  .popBox {
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid var(--lightGray);
    border-radius: 4px;
    z-index: 20;
    opacity: 1;
  }
  
  .expand-fade-enter-active,
  .expand-fade-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .expand-fade-enter-from {
    transform: translate(-50%, -50%) scaleY(0);
    opacity: 0;
  }
  
  .expand-fade-enter-to {
    transform: translate(-50%, -50%) scaleY(1);
    opacity: 1;
  }
  </style>
  