<template>
  <div id="headerDiv" class="flexWrap">
    <div id="icon" class="flexAllCenter">BarMap</div>
    <div id="headerBlank"></div>
    <div id="headerUserCenter">
      <img id="headerUserIcon" :src="headerUserIcon" alt="headerUserIcon">
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const headerUserIcon = ref("/pic/base/headerUserIcon.png")

</script>
<style>
body {
  font-family: "Noto Sans TC", sans-serif;
}

/* 通用設定 開始 */
.flexWrap {
  display: flex;
  flex-wrap: wrap;
}

.flexHorizontalCenter {
  display: flex;
  justify-content: center;
}

.flexVerticalCenter {
  display: flex;
  align-items: center;
}

.flexAllCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  font-family: "Noto Sans TC", sans-serif;

}

/* 通用設定 結束 */
#headerDiv {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 60px;
  /* background-color: rgb(152, 112, 77); */
  flex-wrap: wrap;
  z-index: 10;
}
</style>
<style scoped>
#icon {
  width: 30%;
  font-family: Comic Sans MS;
  font-size: 30px;
  color: rgb(219, 191, 154);
}

#headerBlank {
  width: 50%;
}

#headerUserCenter {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#headerUserIcon {
  /* Set width and height to 30px */
  width: 40px;
  height: 40px;

  /* Make it a circle */
  border-radius: 50%;

  /* Ensure the image covers the area without distortion */
  object-fit: cover;

  background-color: rgb(0, 0, 0);
}
</style>