<template>
    <div class="home">
        <a
            href="https://vitejs.dev"
            target="_blank">
            <img
                src="/vite.svg"
                class="logo"
                alt="Vite logo">
        </a>
        <a
            href="https://vuejs.org/"
            target="_blank">
            <img
                src="../assets/vue.svg"
                class="logo vue"
                alt="Vue logo">
        </a>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import useStore from '@/store/main';
import { apiPath, callAPI, httpMethod } from '@/utils/api';

const store = useStore();
console.log(store.$state.test);

onBeforeMount(() => {
    callAPI(httpMethod.get, apiPath.member)
        .then(rsp => {
            console.log(rsp);
        });
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
