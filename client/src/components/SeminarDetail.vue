<template>
    <div class="flex flex-col items-center gap-2 w-100">

        <div class="flex flex-row justify-between w-5/6">
            <h1 class="text-3xl font-bold">{{ seminar.title }}</h1>
            <AddToScheduleButton />
        </div>

        <div class="flex flex-col w-5/6">
            <p class="text-md text-zinc-300 text-nowrap">{{ seminar.room }}</p>
            <p>{{ seminar.description }}</p>
            <p>{{ seminar.time }}</p>
            <p>{{ seminar.fields }}</p>
            <p>{{ seminar.presenter }}</p>
            <p>{{ seminar.type }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AddToScheduleButton from './AddToScheduleButton.vue';

const route = useRoute();
const id = parseInt(route.params.id);
console.log(id);

const testSeminar = ref({
    _id: 1,
    title: "Exploring the Ethics of Generative AI in Higher Ed.",
    description: "This is the first seminar",
    time: "12:00 PM",
    fields: ["All CSET Majors"],
    presenter: "John Smith",
    room: "SET 301",
    type: "Lecture"
});


const seminar = testSeminar.value;
</script>