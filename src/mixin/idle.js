import { useRoute } from "vue-router";

export default {
    data: () => ({
        idleSecond: 0,
    }),
    mounted () {
        const ignoreRouteNames = [''];
        const route = useRoute();

        // ignore execution
        if (!route.name || ignoreRouteNames.includes(route.name.toLowerCase()))
            return;

        const vm = this;

        window.onclick = vm.resetidleSecond;
        window.oninput = vm.resetidleSecond;
        window.onscroll = vm.resetidleSecond;

        vm.setTimer();
    },
    beforeDestroy () {
        this.clearTimer();
    },
    computed: { },
    methods: {
        resetidleSecond () {
            this.idleSecond = 0;
        },
        clearTimer () {
            clearInterval(window.idleTimer);
            window.idleTimer = null;
        },
        setTimer () {
            const vm = this;
            vm.idleSecond = 0;

            if (!window.idleTimer)
                window.idleTimer = setInterval(vm.checkIdle, 1000);
        },
        checkIdle () {
            const vm = this;
            // set limits
            const idleTime = 10 * 60;
            vm.idleSecond += 1;

            if (vm.idleSecond !== idleTime)
                return;

            // ToDo
        },
    },
};
