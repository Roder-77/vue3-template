import { createApp } from 'vue';
import Loading from '@/components/Loading.vue';

export default () => {
    const div = document.createElement('div');
    document.querySelector('body').appendChild(div);
    const element = createApp(Loading, { parentdom: div });
    const vm = element.mount(div);
    vm.show();

    return () => {
        vm.hide();
        element.unmount(div);
    };
};
