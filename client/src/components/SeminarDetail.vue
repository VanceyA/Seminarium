<template>
    <div class="flex flex-col items-center gap-2 w-100">

        <div class="flex flex-row justify-between w-5/6">
            <h1 class="text-3xl font-bold">{{ seminar.title }}</h1>
            <AddToScheduleButton />
        </div>

        <div class="flex flex-col w-5/6">
            <p>Time: {{ seminar.time }}</p>
            <p class="text-md text-zinc-300 text-nowrap">Room: {{ seminar.room }}</p>
            <p class="text-md text-wrap pt-2">Description:{{ seminar.description }}</p>
            <p class="text-md text-wrap pt-2"><template v-if="seminar.presenters.length > 1">Presenters:</template><template v-else>Presenter:</template>{{ presenterList }}</p>
            <p>{{ seminar.fields }}</p>
            
            <p>{{ seminar.type }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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
    presenters: ["John Smith"],
    room: "SET 301",
    type: "Lecture"
});

const presenterList = computed(() => {
    return testSeminar.value.presenters.join(", ");
});


const seminar = testSeminar.value;
</script>