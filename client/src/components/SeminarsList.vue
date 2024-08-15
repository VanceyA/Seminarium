<template>
    <div class="flex flex-col items-center gap-2 w-100">
        <h1 class="text-3xl font-bold">Upcoming Seminars</h1>
        <h3 class="text-xl">Click on seminars to view details and build your schedule!</h3>
        <div class="flex flex-row justify-end w-5/6 mt-2">
            <button v-if="!isDropdownOpen" @click="toggleDropdown" class="px-4 py-2 bg-zinc-600 text-white rounded-md">
                Show Filters
            </button>
            <button v-else @click="toggleDropdown" class="px-4 py-2 bg-zinc-600 text-white rounded-md">
                Hide Filters
            </button>
        </div>
        <div v-if="isDropdownOpen" class="flex flex-col flex-wrap bg-neutral-800 rounded shadow-lg mt-2 p-6 w-5/6 h-auto md:h-96 lg:h-64 xl:h-48 gap-4">
            <div v-for="(field, index) in fields" :key="index" class="flex items-center">
                <div class="relative flex items-center">
                    <input 
                        type="checkbox" 
                        :id="field" 
                        :value="field" 
                        v-model="selectedFields" 
                        @change="filterByField"
                        class="appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-blue-500 checked:border-transparent focus:outline-none transition duration-200 cursor-pointer"
                    />
                    <svg v-show="selectedFields.includes(field)" class="absolute top-0 left-0 w-5 h-5 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <label :for="field" class="ml-3">
                    <Pill :item="field" :desiredColor="getFieldColor(field)" />
                </label>
            </div>
        </div>
        <template v-for="(seminar, index) in filteredSeminars" :key="seminar._id">
            <template v-if="shouldShowTimeHeader(index, filteredSeminars)">
                <TimeHeader :time="seminar.time" />
            </template>
            <SeminarItem :seminar="seminar"/>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted, inject, computed } from 'vue';
import SeminarItem from './SeminarItem.vue';
import TimeHeader from './TimeHeader.vue';
import Pill from './Pill.vue';

const seminars = ref([]);
const isDropdownOpen = ref(false);
const selectedFields = ref([]);

const fieldColorMap = inject('fieldColorMap');

const fields = Object.keys(fieldColorMap);

const getFieldColor = (field) => {
    return fieldColorMap[field] || 'gray-500';
};

onMounted(async () => {
    const response = await fetch('/api/seminars', {
        headers: {
            'Authorization': `Bearer ${inject('globalUserData').jwt}`
        }
    });
    const data = await response.json();
    seminars.value = data.sort((a, b) => {
        const parseTime = (timeString) => {
            const [timePart, period] = timeString.split(' ');
            let [hour, minute] = timePart.split(':').map(Number);
            if (period === 'PM' && hour !== 12) {
                hour += 12;
            } else if (period === 'AM' && hour === 12) {
                hour = 0;
            }
            return hour * 60 + minute; // Convert time to minutes for easier comparison
        };

        return parseTime(a.time) - parseTime(b.time);
    });
});

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const filterByField = () => {
    if (selectedFields.value.length === 0) {
        return seminars.value;
    }
    return seminars.value.filter(seminar =>
        seminar.fields.some(field => selectedFields.value.includes(field))
    );
};

const filteredSeminars = computed(() => {
    return filterByField();
});

const shouldShowTimeHeader = (index, filteredSeminars) => {
    if (index === 0) return true;
    return filteredSeminars[index].time !== filteredSeminars[index - 1].time;
};
</script>