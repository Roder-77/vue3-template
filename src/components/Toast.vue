<script setup>
import { ref } from 'vue';

const text = ref('');
const isShow = ref(false);
const show = (val, duration = 3) => {
    text.value = val;
    isShow.value = true;

    setTimeout(() => isShow.value = false, duration * 1000);
};

defineExpose({
    show,
});
</script>

<template>
    <Transition name="fade" mode="out-in">
        <div v-if="isShow" class="toast">
            <span class="toast-text-color">{{ text }}</span>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.toast {
    position: absolute;
    top: 75vh;
    left: 50%;
    margin: 0 auto;
    padding: 5px;
    width: fit-content;
    transform: translate(-50%);
    background-color: rgba(0, 0, 0, 0.75);
    display: block !important;
}

.toast-text-color {
    color: white;
}
</style>
