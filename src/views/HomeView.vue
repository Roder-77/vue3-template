<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png">
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
