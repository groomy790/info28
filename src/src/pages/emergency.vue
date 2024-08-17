<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { GetEmergencyCollection } from '../service/emergency'
    import { EmergencyCollection } from '../model/emergency'
    import Card from '../components/card.vue'

    const collections = ref<EmergencyCollection>([])

    const fetchCollections = async () => {
        try {
            collections.value = await GetEmergencyCollection()
        } catch (error) {
            console.error('Error fetching collections:', error)
        }
    }

    onMounted(() => {
        fetchCollections();
    })
</script>

<template>
  <h1>비상 비상비상 비상 비상 비상 비상비상비상비상 비상!!!.!...!!!!.!..!!!!</h1>

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
