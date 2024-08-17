<script setup lang="ts">
    import { GetEmergencyCollection } from '../service/emergency'

    const collections = GetEmergencyCollection()
</script>

<template>
    <h1>Hello, World!</h1>

    <div class="auto-grid my-2">
        <Card   v-for="item in collections"
                :name="item.name"
                :tags="[item.subject, item.category]"
                :body="item.body"
                :links="item.links"
                :expire="item.expire"
                :deprecated="false" />
    </div>
</template>
