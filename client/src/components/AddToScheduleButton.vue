<template>
    <button class="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded text-nowrap" @click="handClick()">
        Add to Schedule +
    </button>
    <button class="block md:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl h-20 w-24 py-2 ml-4 rounded text-nowrap text-center" @click="handClick()">
        Add +
    </button>
</template>

<script setup>
const emit = defineEmits(['click']);
const handClick = () => {
    emit('click');
}
</script>