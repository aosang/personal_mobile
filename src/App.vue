<template>
  <div>
    <maskload/>
    <mheader />
    <router-view />
    <floatButton />
  </div>
</template>

<script setup>
import mheader from './components/mheader.vue'
import floatButton from './components/floatButton.vue'
import maskload from './components/maskload.vue'
</script>

<style scoped>

</style>
