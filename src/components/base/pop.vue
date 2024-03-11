<template>
    <Teleport to="body" v-if="isPop">
        <div class="popDiv">
            <div class="popBox" :style="boxStyle">
                <div class="popBoxMsg flexAllCenter">{{ props.data.msg }} {{ props.data.commemtId }}</div>
                <div class="popBoxBtn flexAllCenter">
                    <div class="confirmBtnDiv flexAllCenter" @click="colsePopBox">
                        <div class="decideBtn confirmBtn flexAllCenter">確認</div>
                    </div>
                    <div v-if="props.data.needDecide" class="cancelBtnDiv flexAllCenter" @click="colsePopBox">
                        <div class="decideBtn cancelBtn flexAllCenter">取消</div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
const isPop = ref(false);
const props = defineProps(
    {
        isPopFlag: Number,
        data: {
            commemtId:Number,
            height: Number,
            width: Number,
            msg: String,
            needDecide: Boolean,
            apiUrl: String,
            apiData: Object
        }
    });

/*

彈窗選填文字匡 needReason，可已寫好後送出時塞在apiData.reason裏面

*/

watch(() => props.isPopFlag, () => {
    isPop.value = true;
    // console.log(props.isPopFlag);
})

const colsePopBox = () => {
    isPop.value=false;
}

const emits = defineEmits(['search']);

const boxStyle = reactive({
    height: props.data.height + "px",
    width: props.data.width + "px"
});

</script>
<style></style>
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
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid var(--lightGray);
    border-radius: 4px;
    z-index: 20;
}

.popBoxMsg {
    height: calc(100% - 50px);
    font-size: 22px;
}

.popBoxBtn {
    height: 50px;
}

.confirmBtnDiv {
    width: 50%;
}
.cancelBtnDiv{
    width: 50%;
}
.decideBtn{
    height: 40px;
    width: 80px;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
}
.confirmBtn{
    color: white;
    background-color: var(--gray);
}
.confirmBtn:hover{
    background-color: var(--grayClick);
}
.cancelBtn{
    background-color: var(--lightGray);
}
.cancelBtn:hover{
    background-color: var(--lightGrayClick);
}
</style>