<script setup lang="ts">
    import { defineProps } from 'vue'

    interface Link {
        name: string
        url: string
    }

    interface Expire {
        year: number
        month: number
        day: number
    }

    const props = defineProps<{
        name: string
        tags: Array<string>
        body: Array<string>
        links: Array<Link>
        expire: Expire
        deprecated: boolean
    }>()

    const DEPRECATED_WARNING_TEXT = "만료됨"
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div v-if="props.deprecated">
                <h5 class="card-title">
                    <span class="text-decoration-line-through opacity-50">{{ props.name }}</span>
                    <br />
                    <span class="text-danger ms-2 fw-bold">{{ DEPRECATED_WARNING_TEXT }}</span>
                </h5>
            </div>
            <div v-else>
                <h5 class="card-title fw-bold">{{ props.name }}</h5>
            </div>

            <!-- Tags -->
            <p class="card-text">
                <span v-for="(item) in props.tags" class="badge rounded-pill text-bg-secondary m-1">{{ item }}</span>
            </p>
        </div>

        <!-- Body list-->
        <ul class="list-group list-group-flush">
            <li v-for="(item, index) in props.body" :key="index" class="list-group-item">{{ item }}</li>
        </ul>
        
        <!-- Link list -->
        <div class="card-body">
            <a v-for="(item, index) in props.links" :key="index" :href="item.url" class="card-link">{{ item.name }}</a>
        </div>
    </div>
</template>
