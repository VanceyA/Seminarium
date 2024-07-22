<template>
    <footer class="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-zinc-800 p-2">
        <router-link to="/" class="tab-item" :class="{ active: $route.path === '/' }">
            Seminars
        </router-link>
        <router-link to="/schedule" class="tab-item" :class="{ active: $route.path === '/schedule' }">
            Schedule
        </router-link>
    </footer>
</template>
  
<script setup>
    // No additional script needed
</script>
  
<style scoped>
    footer {
        height: 60px;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    }

    .tab-item {
        color: white;
        text-align: center;
        flex: 1;
        padding: 10px;
        text-decoration: none;
    }

    .tab-item.active {
        font-weight: bold;
        border-top: 2px solid white;
    }
</style>
  