<template>
  <div>
    <maskload/>
    <mheader />
    <router-view />
    <floatButton v-if="showLanguageButton" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import mheader from './components/mheader.vue'
import floatButton from './components/floatButton.vue'
import maskload from './components/maskload.vue'

const route = useRoute()
const showLanguageButton = computed(() =>
  !['Article', 'ArticleDetails'].includes(route.name)
)
</script>

<style scoped>

</style>
