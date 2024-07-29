<template>
    <div class="flex flex-col items-center gap-2 w-100">
        <h1 class="text-3xl font-bold">My Schedule</h1>
        <template v-for="(seminar, index) in seminars" :key="seminar._id">
            <template v-if="shouldShowTimeHeader(index)">
                <TimeHeader :time="seminar.time" />
            </template>
            <SeminarItem :seminar="seminar"/>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SeminarItem from './SeminarItem.vue';
import TimeHeader from './TimeHeader.vue';

const seminars = ref([
    {
        _id: 1,
        title: "Exploring the Ethics of Generative AI in Higher Ed.",
        description: "This is the first seminar",
        time: "12:00 PM",
        fields: ["All CSET Majors"],
        presenter: ["John Smith"],
        room: "SET 301",
        type: "Lecture"
    },
    {
        _id: 3,
        title: "Level Unlocked: Tech Based Internships",
        description: "This is the third seminar",
        time: "12:00 PM",
        fields: ["Computer Science"],
        presenter: ["Bob Johnson"],
        room: "SET 422",
        type: "Panel"
    }
]);

seminars.value.sort((a, b) => a.time.localeCompare(b.time));

const shouldShowTimeHeader = (index) => {
    if (index === 0) return true;
    return seminars.value[index].time !== seminars.value[index - 1].time;
};
</script>