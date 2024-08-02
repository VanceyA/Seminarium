<template>
    <div class="flex flex-col items-center gap-2 w-100">
        <h1 class="text-3xl font-bold">My Schedule</h1>
        <template v-for="(seminar, index) in schedule" :key="seminar._id">
            <template v-if="shouldShowTimeHeader(index)">
                <TimeHeader :time="seminar.time" />
            </template>
            <SeminarItem :seminar="seminar"/>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import SeminarItem from './SeminarItem.vue';
import TimeHeader from './TimeHeader.vue';

const schedule = ref([]);

onMounted(async () => {
    const response = await fetch('/api/schedule', {
        headers: {
            'Authorization': `Bearer ${inject('globalUserData').jwt}`
        }
    });
    const data = await response.json();
    schedule.value = data.sort((a, b) => a.time.localeCompare(b.time));
});

const shouldShowTimeHeader = (index) => {
    if (index === 0) return true;
    return schedule.value[index].time !== schedule.value[index - 1].time;
};
</script>