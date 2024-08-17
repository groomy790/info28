<script setup lang="ts">
    import { GetInternalCollection } from '../service/internal'

    import Card from '../components/card.vue'

    const collections = GetInternalCollection()
</script>

<template>
    <h1>교내 행사</h1>

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
