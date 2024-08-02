<template>
    <button class="hidden md:block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-4 rounded text-nowrap" @click="handClick()">
        Remove from schedule
    </button>
    <button class="block md:hidden bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-4 rounded text-nowrap" @click="handClick()">
        Remove
    </button>
</template>

<script setup>
const emit = defineEmits(['click']);
const handClick = () => {
    emit('click');
}
</script>