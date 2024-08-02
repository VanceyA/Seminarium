<template>
    <div class="flex flex-col items-center gap-2 w-100">
        <div class="flex flex-row justify-between w-5/6">
            <h1 class="text-3xl font-bold">{{ seminar.title }}</h1>
            <AddToScheduleButton v-if="!isInSchedule" @click="addToSchedule" />
            <RemoveFromScheduleButton v-else @click="removeFromSchedule" />
        </div>

        <div class="flex flex-col w-5/6">
            <p class="text-md text-zinc-300 text-nowrap">Time: {{ seminar.time }}</p>
            <p class="text-md text-zinc-300 text-nowrap">Room: {{ seminar.room }}</p>

            <div class="flex flex-row gap-2 flex-wrap m-1">
                <Pill :item="seminar.type" :desiredColor="getTypeColor(seminar.type)" />
                <template v-for="field in seminar.fields" :key="field">
                    <Pill :item="field" :desiredColor="getFieldColor(field)" />
                </template>
            </div>

            <p class="text-md text-wrap pt-2">Description: {{ seminar.description }}</p>
            <p class="text-md text-wrap pt-2" v-for="presenter in seminar.presenters">{{ presenter }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, inject, computed } from 'vue';
import { useRoute } from 'vue-router';
import AddToScheduleButton from './AddToScheduleButton.vue';
import RemoveFromScheduleButton from './RemoveFromScheduleButton.vue';
import Pill from './Pill.vue';

const route = useRoute();
const id = route.params.id;
const seminar = ref({});
const globalUserData = inject('globalUserData');

const fieldColorMap = inject('fieldColorMap');
const typeColorMap = inject('seminarTypeColorMap');

const getFieldColor = (field) => {
    return fieldColorMap[field] || 'gray-500';
};

const getTypeColor = (type) => {
    return typeColorMap[type] || 'gray-500';
};

onMounted(async () => {
    const response = await fetch(`/api/seminars/${id}`, {
        headers: {
            'Authorization': `Bearer ${globalUserData.jwt}`
        }
    });
    const data = await response.json();
    seminar.value = data;
    seminar.value.presenters = seminar.value.presenters.split('\n');
});

const isInSchedule = computed(() => {
    return globalUserData.user.schedule.seminars.includes(id);
});

const addToSchedule = async () => {
    const response = await fetch(`/api/schedule/${id}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${globalUserData.jwt}`
        },
    });
    const data = await response.json();
    globalUserData.user = data;
};

const removeFromSchedule = async () => {
    const response = await fetch(`/api/schedule/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${globalUserData.jwt}`
        },
    });
    const data = await response.json();
    globalUserData.user = data;
};

</script>