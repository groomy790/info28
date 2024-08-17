<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { GetSuhangCollection } from '../service/suhang'
    import { SuhangCollection } from '../model/suhang'
    import Card from '../components/card.vue'

    const collections = ref<SuhangCollection>([])

    const fetchCollections = async () => {
        try {
            collections.value = await GetSuhangCollection()
        } catch (error) {
            console.error('Error fetching collections:', error)
        }
    }

    onMounted(() => {
        fetchCollections();
    })
</script>

<template>
  <h1>수행 평가</h1>

  <div class="auto-grid my-2">
    <Card v-for="item in collections" :key="item.name" 
          :name="item.name"
          :tags="[item.subject, item.category]"
          :body="item.body"
          :links="item.links"
          :expire="item.expire"
          :deprecated="false" />
  </div>
</template>
