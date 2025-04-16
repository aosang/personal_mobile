<template>
  <div class="
    fixed 
    bottom-[60px] 
    right-[16px]
    w-[50px] 
    h-[50px]
    bg-blue-500 
    rounded-full
    shadow-lg
    flex 
    items-center 
    justify-center
    text-white
  ">
    <div  
      @click="switchLanguage"
    >
      <v-icon 
        name="bi-translate" 
        class="w-[26px] h-[26px]"
      />
  </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
const currentLanguage = ref(localStorage.getItem('language') || 'en')

const switchLanguage = () => {
  const newLang = currentLanguage.value === 'en'? 'zh' : 'en'
  proxy.$switchLanguage(newLang)
  currentLanguage.value = newLang
  // showToast(newLang === 'zh' ? '已切换到中文' : 'Switched to English')
}
</script>

<style scoped>
</style>