<template>
  <div>
    <van-floating-bubble  
      axis="xy" 
      magnetic="x"
      @click="switchLanguage"
    >
      <v-icon 
        name="bi-translate" 
        class="w-[26px] h-[26px]"
      />
    </van-floating-bubble>
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