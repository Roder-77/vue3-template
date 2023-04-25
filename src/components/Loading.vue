<script setup>
import { ref } from 'vue';

const isLoading = ref(false);
const show = () => isLoading.value = true;
const hide = () => isLoading.value = false;

defineExpose({
    show,
    hide,
});

</script>

<template>
    <Transition name="fade" mode="out-in">
        <div v-if="isLoading" class="text-center transparent-background">
            <b-spinner />
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
.transparent-background {
    background:	rgb(220,220,220,0.5);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
