import { createApp } from 'vue';
import Loading from '@/components/Loading.vue';
import Toast from '@/components/Toast.vue';

const createInstance = component => {
    const div = document.createElement('div');
    document.querySelector('body').appendChild(div);

    const element = createApp(component, { parentdom: div });
    return element.mount(div);
};

export function useLoading() {
    const vm = createInstance(Loading);

    return { ...vm };
}

export function useToast() {
    const vm = createInstance(Toast);

    return { ...vm };
}
