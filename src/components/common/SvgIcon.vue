<template>
    <svg
        class="svg-icon"
        aria-hidden="true">
        <use
            :href="symbolId"
            :fill="color" />
    </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    prefix: {
        type: String,
        default: 'icon',
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#333',
    },
    size: {
        type: String,
        default: '20px',
    },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);

</script>

<style lang="scss" scoped>
.svg-icon {
	width: rfs-value(v-bind(size));
	height: rfs-value(v-bind(size));
	fill: $primary-color;
	overflow: hidden;

	@include media-breakpoint-up(md) {
		fill: v-bind(color);
	}
}
</style>