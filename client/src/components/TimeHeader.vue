<template>
    <div class="flex flex-col justify-start w-5/6">
        <div class="text-left text-lg font-bold mb-2 p-1 border-b border-zinc-600">
            {{ formattedTime }}
        </div>
    </div>
</template>

<script setup>
import { toRefs, computed } from 'vue';

const props = defineProps(["time"]);
const { time } = toRefs(props);

const parseTime = (timeString) => {
    const [timePart, period] = timeString.split(' ');
    let [hour, minute] = timePart.split(':').map(Number);

    if (period === 'PM' && hour !== 12) {
        hour += 12;
    } else if (period === 'AM' && hour === 12) {
        hour = 0;
    }

    return { hour, minute };
};

const formatTime = (hour, minute) => {
    const suffix = hour >= 12 ? ' PM' : ' AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute.toString().padStart(2, '0')}${suffix}`;
};

const calculateEndTime = (timeString, durationInMinutes) => {
    let { hour, minute } = parseTime(timeString);
    minute += durationInMinutes;
    if (minute >= 60) {
        hour += Math.floor(minute / 60);
        minute = minute % 60;
    }
    return formatTime(hour, minute);
};

const formattedTime = computed(() => {
    const endTime = calculateEndTime(time.value, 25); // Assuming a 25-minute seminar duration
    return `${time.value} - ${endTime}`;
});
</script>
