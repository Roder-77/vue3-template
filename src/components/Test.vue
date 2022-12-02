<script setup>
import { ref } from 'vue';

defineProps({
    foo: {
        type: String,
        default: 'good bye',
    },
});

const emit = defineEmits(['userName']);
const clickName = ref('Ann');

const getUserName = username => {
    clickName.value = username;
    emit('userName', username);
};

</script>

<template>
    <h1>{{ foo }}, {{ clickName }}</h1>
    <hr>
    <button @click="getUserName('mike')">
        mike
    </button>
    <button @click="getUserName('jacky')">
        jacky
    </button>
    <button @click="getUserName('andy')">
        andy
    </button>
    <button @click="getUserName('scars')">
        scars
    </button>
    <button @click="getUserName('ash')">
        ash
    </button>
</template>
