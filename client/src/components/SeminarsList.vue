<template>
    <div class="flex flex-col items-center gap-2 w-100">
        <h1 class="text-3xl font-bold">Upcoming Seminars</h1>
        <template v-for="(seminar, index) in seminars" :key="seminar._id">
            <template v-if="shouldShowTimeHeader(index)">
                <TimeHeader :time="seminar.time" />
            </template>
            <SeminarItem :seminar="seminar"/>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SeminarItem from './SeminarItem.vue';
import TimeHeader from './TimeHeader.vue';

const seminars = ref([]);

onMounted(async () => {
    const response = await fetch('/api/seminars');
    const data = await response.json();
    seminars.value = data.sort((a, b) => a.time.localeCompare(b.time));
});

const shouldShowTimeHeader = (index) => {
    if (index === 0) return true;
    return seminars.value[index].time !== seminars.value[index - 1].time;
};
</script>