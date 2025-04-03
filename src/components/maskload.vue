<template>
  <div class="w-full h-[100vh] bg-[#fffbf5] fixed top-0 left-0 z-[100]" v-if="isLoading">
    <div class="w-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img src="../assets/common/my_logo.png" alt="loading" class="w-full h-full object-cover block">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>
<style scoped>
</style>