<template>
  <div class="product-details p-4 ">
    <van-divider position="center">
      <div class="text-gray-600 text-[16px] font-bold">{{locale === 'zh' ? dataDetails.productName : dataDetails.productNameEn}}</div>
    </van-divider>
    <van-swipe :autoplay="4000" :show-indicators="true">
      <van-swipe-item v-for="item in dataDetails.swiperList " :key="item">
        <van-skeleton title avatar :row="3" :loading="isLoading">
          <img :src="item" alt="product image" class="w-full h-full">
        </van-skeleton>
      </van-swipe-item>
    </van-swipe>
    <div class="mt-3 flex flex-wrap gap-2">
     <van-tag 
        v-for="item in dataDetails.techTag"
        :key="item"
        size="large" color="#e5e7eb" text-color="#6b7280"
      >
      {{item}}
     </van-tag>
    </div>
    <p class="text-gray-500 text-[15px] mt-3 mb-3">
      {{locale === 'zh' ? dataDetails.productNameDesc  : dataDetails.productNameDescEn}}
    </p>
    
    <div class="flex">
      <div v-show="productLink" class="mr-3">
        <van-button
          color="#000"
          size="small"
          @click="handleClickWebsite"
        >
         {{ locale === 'en' ? 'Visit website' : '网站访问' }}
        </van-button>
      </div>
      <div>
        <van-button
          color="#000"
          size="small"
          @click="handleClickBack"
        >
          {{ locale === 'en' ? 'Back' : '返回列表' }}
        </van-button>
      </div>
    </div> 
    
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '@/lib/client'
import productData from './productData.json'
import { showToast } from 'vant'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const router = useRouter()
const route = useRoute()
const dataDetails = ref({})

const productLink = ref('')
const isLoading = ref(true)

const handleClickWebsite = () => {
  window.open(productLink.value, '_blank')
}

const handleClickBack = () => {
  router.push('/Product')
}

const fetchProductDetails = async (id) => {
  const { data, error } = await supabase.from('product')
  .select('*')
  .eq('id', id)
  .single()

  if(error) return showToast('查询到数据')

  dataDetails.value = data
  isLoading.value = false
}

onMounted(() => {
  document.body.style.height = 'calc(100vh - 50px)'
  if (route.params.id) {
    fetchProductDetails(route.params.id)
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