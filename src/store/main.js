import { defineStore } from 'pinia';
import loading from '@/utils/loading';

export default defineStore('main', {
    state: () => ({
        test: '123',
        loading: loading(),
    }),
    getters: {
    },
    actions: {
    },
});
