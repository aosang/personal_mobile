<template>
  <div class="p-6 mt-[50px]">
    <ul>
      <li class="w-full bg-[#fff] rounded-[5px] border border-gray-200 mb-4 pb-2" @click="goToProductDetails(1)">
        <div class="overflow-hidden bg-[#f3f4f6] h-[100px] flex items-center justify-center">
          <img src="@/assets/product/logo_assets.png" alt="assets" class="w-[80%] mx-auto">
        </div>
        <div class="px-4 py-2">
          <h2 class="text-[16px] font-bold">Ops Monitoring Platform</h2>
          <p class="text-[14px] text-gray-500 mb-2" 
          style="
            word-break: break-word; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis"
          >
            Real-time monitoring of network devices, servers, and virtualization parameters, collecting millions of metrics, providing flexible alert thresholds and alarm mechanisms for quick fault detection.
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
            View More
          </van-button>
        </div>
      </li>

      <li class="w-full bg-[#fff] rounded-[5px] border border-gray-200 mb-4 pb-2" @click="goToProductDetails(2)">
        <div class="overflow-hidden bg-[#f3f4f6] h-[100px] flex items-center justify-center">
          <img src="@/assets/product/logo_freight.png" alt="assets" class="w-[80%] mx-auto">
        </div>
        <div class="px-4 py-2">
          <h2 class="text-[16px] font-bold">Online Quotation System</h2>
          <p class="text-[14px] text-gray-500 mb-2" 
          style="
            word-break: break-word; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis"
          >
            This is clearly a B2B international shipping/freight forwarding platform that helps businesses arrange cargo transport between China and international destinations.
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
            View More
          </van-button>
        </div>
      </li>

      <li class="w-full bg-[#fff] rounded-[5px] border border-gray-200 mb-4 pb-2" @click="goToProductDetails(3)">
        <div class="overflow-hidden bg-[#f3f4f6] h-[100px] flex items-center justify-center">
          <img src="@/assets/product/logo_freight.png" alt="assets" class="w-[80%] mx-auto">
        </div>
        <div class="px-4 py-2">
          <h2 class="text-[16px] font-bold">Shipping Quote Mobile</h2>
          <p class="text-[14px] text-gray-500 mb-2" 
          style="
            word-break: break-word; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis"
          >
            The Shipping Quote Mobile App is a powerful and user-friendly tool designed to streamline ocean freight rate inquiries and shipping cost estimations. Whether you are a freight forwarder, importer, exporter, or logistics provider, this app enables you to get instant and accurate shipping quotes anytime, anywhere.
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
            View More
          </van-button>
        </div>
      </li>

      <li class="w-full bg-[#fff] rounded-[5px] border border-gray-200 mb-4 pb-2" @click="goToProductDetails(4)">
        <div class="overflow-hidden bg-[#f3f4f6] h-[100px] flex items-center justify-center">
          <img src="@/assets/product/logo_echemi.png" alt="assets" class="w-[80%] mx-auto">
        </div>
        <div class="px-4 py-2">
          <h2 class="text-[16px] font-bold">Echemi.com</h2>
          <p class="text-[14px] text-gray-500 mb-2" 
          style="
            word-break: break-word; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis"
          >
            Digital marketplace connecting chemical suppliers and buyers worldwide.
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
            View More
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

