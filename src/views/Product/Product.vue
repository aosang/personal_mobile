<template>
  <div class="p-6 mt-[50px]">
    <ul>
      <li class="w-full bg-[#fff] rounded-[5px] border border-gray-200 mb-4 pb-2" @click="goToProductDetails(1)">
        <div class="overflow-hidden bg-[#f3f4f6] h-[100px] flex items-center justify-center">
          <img src="@/assets/product/logo_assets.png" alt="assets" class="w-[80%] mx-auto">
        </div>
        <div class="px-4 py-2">
          <h2 class="text-[16px] font-bold">{{ $t('message.productTitle') }}</h2>
          <p class="text-[14px] text-gray-500 mb-2" 
          style="
            word-break: break-word; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis"
          >
            {{ $t('message.productDescription') }}
          </p>

          <div class="flex flex-wrap">
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">React.js</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Tailwind CSS</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">TypeScript</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Zabbix</van-tag>
          </div>
          
          <van-button 
            size="small" 
            class="mb-2"
            color="#000"
          >
            {{ $t('message.productLinkText') }}
          </van-button>
        </div>
      </li>

      <li class="w-full bg-[#fff] rounded-[5px] border border-gray-200 mb-4 pb-2" @click="goToProductDetails(2)">
        <div class="overflow-hidden bg-[#f3f4f6] h-[100px] flex items-center justify-center">
          <img src="@/assets/product/logo_freight.png" alt="assets" class="w-[80%] mx-auto">
        </div>
        <div class="px-4 py-2">
          <h2 class="text-[16px] font-bold">{{ $t('message.productTitle2') }}</h2>
          <p class="text-[14px] text-gray-500 mb-2" 
          style="
            word-break: break-word; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis"
          >
            {{ $t('message.productDescription2') }}
          </p>
          <div class="flex flex-wrap">
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Vue.js</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Sass</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Vuex</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Vue-Router</van-tag>
          </div>
          
          <van-button 
            size="small" 
            class="mb-2 block"
            color="#000"
          >
            {{ $t('message.productLinkText') }}
          </van-button>
        </div>
      </li>

      <li class="w-full bg-[#fff] rounded-[5px] border border-gray-200 mb-4 pb-2" @click="goToProductDetails(3)">
        <div class="overflow-hidden bg-[#f3f4f6] h-[100px] flex items-center justify-center">
          <img src="@/assets/product/shipping_mobile.png" alt="assets" class="w-[80%] mx-auto">
        </div>
        <div class="px-4 py-2">
          <h2 class="text-[16px] font-bold">{{ $t('message.productTitle3') }}</h2>
          <p class="text-[14px] text-gray-500 mb-2" 
          style="
            word-break: break-word; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis"
          >
            {{ $t('message.productDescription3') }}
          </p>

          <div class="flex flex-wrap">
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Uni-app</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Vue.js</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Wechat-miniprogram</van-tag>
          </div>

          <van-button 
            size="small" 
            class="mb-2 block"
            color="#000"
          >
            {{ $t('message.productLinkText') }}
          </van-button>
        </div>
      </li>

      <li class="w-full bg-[#fff] rounded-[5px] border border-gray-200 mb-4 pb-2" @click="goToProductDetails(4)">
        <div class="overflow-hidden bg-[#f3f4f6] h-[100px] flex items-center justify-center">
          <img src="@/assets/product/logo_echemi.png" alt="assets" class="w-[80%] mx-auto">
        </div>
        <div class="px-4 py-2">
          <h2 class="text-[16px] font-bold">{{ $t('message.productTitle4') }}</h2>
          <p class="text-[14px] text-gray-500 mb-2" 
          style="
            word-break: break-word; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis"
          >
            {{ $t('message.productDescription4') }}
          </p>
          <div class="flex flex-wrap">
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">B2B</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">Nuxt.js</van-tag>
            <van-tag size="medium" class="mr-2 mb-3" text-color="#6b7280" color="#e5e7eb">E-commerce</van-tag>
          </div>
          
          <van-button 
            size="small" 
            class="mb-2 block"
            color="#000"
          >
            {{ $t('message.productLinkText') }}
          </van-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToProductDetails = (id) => {
  router.push({
    name: 'ProductDetails',
    params: { id }
  })
}
</script>

