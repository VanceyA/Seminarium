<template>
    <p :class="pillClass">{{ item }}</p>
</template>

<script setup>
import { toRefs, computed } from 'vue';

const props = defineProps({
    item: String,
    desiredColor: String
});

const { item, desiredColor } = toRefs(props);

const pillClass = computed(() => {
    return `bg-${desiredColor.value} rounded-full px-2 py-1 text-white text-sm`;
});
</script>
