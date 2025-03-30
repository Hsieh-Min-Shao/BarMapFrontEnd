<template>
    <div class="popBoxWrapper">
      <div class="popBoxMsg flexAllCenter">{{ msg }} {{ commemtId }}</div>
      <div class="popBoxBtn flexAllCenter">
        <div class="confirmBtnDiv flexAllCenter" @click="$emit('confirm')">
          <div class="decideBtn confirmBtn flexAllCenter">確認</div>
        </div>
        <div v-if="needDecide" class="cancelBtnDiv flexAllCenter" @click="$emit('close')">
          <div class="decideBtn cancelBtn flexAllCenter">取消</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    msg: String,
    commemtId: Number,
    needDecide: Boolean
  });
  </script>
  
  <style scoped>
  .popBoxWrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .popBoxMsg {
    height: calc(100% - 50px);
    font-size: 22px;
  }
  
  .popBoxBtn {
    height: 50px;
  }
  
  .confirmBtnDiv,
  .cancelBtnDiv {
    width: 50%;
  }
  
  .decideBtn {
    height: 40px;
    width: 80px;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
  }
  
  .confirmBtn {
    color: white;
    background-color: var(--gray);
  }
  
  .confirmBtn:hover,
  .confirmBtn:active {
    background-color: var(--grayClick);
  }
  
  .cancelBtn {
    background-color: var(--lightGray);
  }
  
  .cancelBtn:hover,
  .cancelBtn:active {
    background-color: var(--lightGrayClick);
  }
  </style>
  