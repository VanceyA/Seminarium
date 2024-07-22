<template>
    <div class="flex flex-col justify-start w-5/6">
        <div class="text-left text-lg font-bold mb-2 p-1 border-b border-zinc-600">
            {{ time }}
        </div>
    </div>
</template>
  
<script setup>
    import { toRefs, defineProps } from 'vue';
    const props = defineProps(["time"]);
    const { time } = toRefs(props);
</script>

  