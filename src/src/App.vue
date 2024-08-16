<script setup lang="ts">
    import { RouterView } from 'vue-router'

    import Nav from './components/nav.vue'
</script>

<template>
    <nav>
        <Nav />
    </nav>
    <main>
        <RouterView />
    </main>
</template>
