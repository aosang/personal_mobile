<template>
  <div class="p-6 mt-[50px]">
    <ul>
      <li 
        v-for="pro in productListData" 
        :key="pro.id" 
        class="w-full bg-[#fff] rounded-[5px] border border-gray-200 mb-4 pb-2" @click="goToProductDetails(pro.id)">
        <div class="overflow-hidden bg-[#f3f4f6] flex items-center justify-center">
          <img :src="pro.coverUrl || '/placeholder-wide.png'" alt="assets" class="w-[100%] mx-auto">
        </div>
        <div class="px-4 py-2">
          <h2 class="text-[16px] font-bold my-1">{{ locale === "zh"? pro.productName : pro.productNameEn }}</h2>
          <p class="text-[14px] text-gray-500 mb-2" 
          style="
            word-break: break-word; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis"
          >
            {{ locale === "zh"?  pro.productNameTextCh : pro.productNameTextEn }}
          </p>

          <div class="flex flex-wrap">
            <van-tag
              v-for="tag in pro.techTag"
              :key="tag"
              size="medium" 
              class="mr-2 mb-3" 
              text-color="#6b7280" 
              color="#e5e7eb"
            >
               {{ tag }}
            </van-tag>
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
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/client';
import { showToast } from 'vant';
import { useI18n } from 'vue-i18n';
import dayjs from '@/lib/dayjs';

const router = useRouter()
const { locale } = useI18n()

const productListData = ref([])

const fetchProductListData = async () => {
  const { data, error } = await supabase.from('product').select('*')

  if(error) return showToast('获取数据失败！')

  productListData.value = [...(data || [])].sort(
    (a, b) => dayjs(b.created_time).valueOf() - dayjs(a.created_time).valueOf()
  )
}

onMounted(() => {
  fetchProductListData()
})

const goToProductDetails = (id) => {
  router.push({
    name: 'ProductDetails',
    params: { id }
  })
}
</script>

