<template>
    <div class="flex flex-row justify-center">
        <header class="flex justify-between items-center w-5/6 relative mb-2">
            <!-- <button @click="toggleNav" class="text-white">Menu</button> -->
            <button @click="toggleNav" value="hamburger" class="flex flex-col justify-around h-8 w-8 p-1 rounded hover:bg-neutral-800">
                <!-- Hamburger Icon (3 lines) -->
                <span class="h-0.5 rounded bg-white w-full"></span>
                <span class="h-0.5 rounded bg-white w-full"></span>
                <span class="h-0.5 rounded bg-white w-full"></span>
            </button>
            <h1 class="text-white font-bold text-2xl cursor-pointer" @click="goHome()">Seminarium</h1>
        </header>
        <div v-if="navVisible" class="backdrop" @click="toggleNav"></div>
        <nav :class="{'translate-x-0': navVisible, '-translate-x-full': !navVisible}" class="nav-menu fixed top-0 left-0 h-full w-auto bg-zinc-800 flex flex-col items-start space-y-4 p-4 pr-24 md:pr-32 transition-transform duration-300 ease-in-out">
            <h1 class="text-white font-bold text-2xl">Seminarium</h1>
            <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }" @click="toggleNav">
                Seminars
            </router-link>
            <router-link to="/schedule" class="nav-item" :class="{ active: $route.path === '/schedule' }" @click="toggleNav">
                My Schedule
            </router-link>
            <a href="https://google.com" target="_blank" class="nav-item" @click="toggleNav">
                Give Feedback
            </a>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navVisible = ref(false);

const toggleNav = () => {
    navVisible.value = !navVisible.value;
};

const goHome = () => {
    navVisible.value = false;
    router.push('/');
};
</script>

<style scoped>
header {
    height: 60px;
}

.nav-menu {
    height: 100vh;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
}

.translate-x-0 {
    transform: translateX(0);
}

.nav-item {
    color: white;
    text-decoration: none;
}

.nav-item.active {
    font-weight: bold;
    border-bottom: 2px solid white;
}

.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    backdrop-filter: blur(2px);
    animation: blur-in 0.15s linear;
}

@keyframes blur-in {
    from {
      backdrop-filter: blur(0px);
    }
    to {
      backdrop-filter: blur(2px);
    }
  }
</style>
