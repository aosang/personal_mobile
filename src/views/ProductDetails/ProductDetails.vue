<template>
  <div class="product-details p-4 ">
    <van-divider position="center">
      <div class="text-gray-600 text-[16px] font-bold">{{locale === 'en' ? productName : productNameCn}}</div>
    </van-divider>
    <van-swipe :autoplay="4000" :show-indicators="true">
      <van-swipe-item v-for="item in imageList" :key="item">
        <img :src="item" alt="product image" class="w-full h-full">
      </van-swipe-item>
    </van-swipe>
    <div class="mt-3 flex flex-wrap gap-2">
     <van-tag 
        v-for="item in techTages"
        :key="item"
        size="large" color="#e5e7eb" text-color="#6b7280"
      >
      {{item}}
     </van-tag>
    </div>
    <p class="text-gray-500 text-[15px] mt-3">
      {{locale === 'en' ? description : productFullDescription}}
    </p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref} from 'vue'
import { useRoute } from 'vue-router'
import productData from './productData.json'
import { showToast } from 'vant'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const route = useRoute()
const productId = ref(null)
const dataDetails = reactive({})

const description = ref('')
const productName = ref('')
const productNameCn = ref('')
const productFullDescription = ref('')
const techTages = ref([])
const imageList = ref([])

onMounted(() => {
  document.body.style.height = 'calc(100vh - 50px)'
  if (route.params.id) {
    productId.value = Number(route.params.id)
    dataDetails.value = productData.find(item => item.id === productId.value)
    imageList.value = dataDetails.value.imageSrc
    description.value = dataDetails.value.description
    productName.value = dataDetails.value.name
    productNameCn.value = dataDetails.value.nameCn
    productFullDescription.value = dataDetails.value.fullDescription
    techTages.value = dataDetails.value.technologies
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