<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { GetInternalCollection } from '../service/internal'
    import { InternalCollection } from '../model/internal'
    import Card from '../components/card.vue'

    import { ExpireCheck } from '../utils/expirecheck'

    const collections = ref<InternalCollection>([])

    const fetchCollections = async () => {
        try {
            collections.value = await GetInternalCollection()
        } catch (error) {
            console.error('Error fetching collections:', error)
        }
    }

    onMounted(() => {
        fetchCollections();
    })
</script>

<template>
  <h1>교내 행사</h1>

  <div class="auto-grid my-2">
    <Card v-for="item in collections" :key="item.name" 
          :name="item.name"
          :tags="[item.subject, item.category]"
          :body="item.body"
          :links="item.links"
          :expire="item.expire"
          :deprecated="ExpireCheck(item.expire.year, item.expire.month, item.expire.day)" />
  </div>
</template>
