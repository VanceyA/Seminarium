<template>
    <div class="flex flex-col w-5/6 bg-neutral-800 hover:bg-neutral-700 px-4 pb-3 pt-2 mb-2 gap-2 rounded cursor-pointer" @click="handleClick(seminar)">
        <div class="flex flex-row justify-between items-start">
            <h2 class="text-md text-left underline">{{ seminar.title }}</h2>
            <p class="text-sm ml-6 text-right text-zinc-300 text-nowrap">{{ seminar.room }}</p>
        </div>
        <div class="flex flex-row gap-2 flex-wrap m-1">
            <Pill :item="seminar.type" :desiredColor="getTypeColor(seminar.type)" />
            <template v-for="field in seminar.fields" :key="field">
                <Pill :item="field" :desiredColor="getFieldColor(field)" />
            </template>
        </div>
    </div>
</template>

<script setup>
import Pill from './Pill.vue';
import { toRefs, inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps(["seminar"]);
const { seminar } = toRefs(props);

const fieldColorMap = inject('fieldColorMap');

const typeColorMap = inject('seminarTypeColorMap');

const getFieldColor = (field) => {
    return fieldColorMap[field] || 'gray-500';
};

const getTypeColor = (type) => {
    return typeColorMap[type] || 'gray-500';
};

const handleClick = (seminar) => {
    router.push(`/seminars/${seminar._id}`);
};

</script>
