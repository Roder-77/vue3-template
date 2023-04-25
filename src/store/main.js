import { defineStore } from 'pinia';
import { useLoading, useToast } from '@/utils/globalComponent';

export default defineStore('main', {
    state: () => ({
        test: '123',
        loading: useLoading(),
        toast: useToast(),
    }),
    getters: {
    },
    actions: {
    },
});
