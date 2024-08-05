<template>
    <div class="fade-transition fixed bottom-4 right-4 z-50 flex items-center p-4 bg-opacity-90 rounded-lg" :class="[type === 'success' ? 'bg-green-500 text-white' : 'bg-neutral-700 text-white']">
        <div class="flex grow font-bold">{{ message }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    message: String,
    type: String
});

</script>