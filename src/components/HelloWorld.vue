<script setup>
import { ref } from "vue";

defineProps({
    msg: {
        type: String,
        default: "",
    },
});

const count = ref(0);
</script>

<template>
    <h1 class="ml-1">
        {{ msg }}
        <svg-icon name="line" />
    </h1>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>1 of 3</b-col>
            <b-col>2 of 3</b-col>
            <b-col>3 of 3</b-col>
        </b-row>
    </b-container>

    <div class="card">
        <button
            type="button"
            @click="count++">
            count is {{ count }}
        </button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local">create-vue</a>, the official Vue +
        Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">
        Click on the Vite and Vue logos to learn more
    </p>
</template>

<style lang="scss" scoped>
.read-the-docs {
    color: $primary-color;
}
</style>
