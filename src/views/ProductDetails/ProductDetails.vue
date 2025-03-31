<template>
  <div class="product-details p-2 ">
    <van-divider position="center">
      <div class="text-gray-600 text-[16px] font-bold">{{dataDetails.name}}</div>
    </van-divider>
    <van-swipe :autoplay="4000" :show-indicators="true">
      <van-swipe-item v-for="item in imageList" :key="item">
        <img :src="item" alt="product image" class="w-full h-full">
      </van-swipe-item>
    </van-swipe>
    <p class="text-gray-500 text-[15px] mt-3">
      {{dataDetails.description}}
    </p>
    <div class="mt-3 flex flex-wrap gap-2">
     <van-tag size="large" color="#e5e7eb" text-color="#6b7280">React.js</van-tag>
     <van-tag size="large" color="#e5e7eb" text-color="#6b7280">zabbix</van-tag>
     <van-tag size="large" color="#e5e7eb" text-color="#6b7280">Typescript</van-tag>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, toRaw } from 'vue'
import { useRoute } from 'vue-router'
import productData from './productData.json'
import { showToast } from 'vant'

const route = useRoute()
const productId = ref(null)
const dataDetails = ref(null)
const imageList = ref([])

onMounted(() => {
  document.body.style.height = 'calc(100vh - 50px)'
  
  if (route.params.id) {
    productId.value = Number(route.params.id)
    dataDetails.value = productData.find(item => item.id === productId.value)
    imageList.value = dataDetails.value.imageSrc
    
  } else {
    showToast('未找到ID参数')
  }
})

onUnmounted(() => {
  document.body.style.height = ''
})
</script>

<style scoped>
.product-details {
  height: calc(100vh - 50px);
  overflow-y: auto;
  box-sizing: border-box;
  display: block;
  position: relative;
  top: 50px;
}
</style>