<script setup lang="ts">
    import { GetSuhangCollection } from '../service/suhang'

    import Card from '../components/card.vue'

    const collections = GetSuhangCollection()
</script>

<template>
    <h1>수행 평가</h1>

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
