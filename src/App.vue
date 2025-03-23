<template>
  <div>
    <router-view v-slot="{ Component }">
      <mheader />
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import mheader from './components/mheader.vue'

</script>

<style scoped>

</style>
