<template>
  <div class="p-6 mt-[50px]">
    <div class="flex items-center">
      <div class="w-[100px] h-[100px] rounded-full overflow-hidden">
        <img :src="myInfoData.avatar_url" alt="avatar" class="w-full h-full object-cover" />
        <!-- <img src="https://www.wangle.run/company_icon/public_image/pub_avatar.jpg" alt="avatar" class="w-full h-full object-cover" /> -->
      </div>
      <div class="ml-4">
        <div class="text-2xl font-bold">
          I'm Miles Wang
        </div>
        <div class="text-gray-400">
          {{ locale ==='zh'? myInfoData.chWork : myInfoData.enWork }}
        </div>
        <div class="text-gray-400">
          {{ $t('message.location') }}
        </div>
      </div>
    </div>

    <div class="mt-8">
      <van-divider content-position="center">
        <div class="text-black  text-xl">
          {{ $t('message.subTitle') }}
        </div>
      </van-divider>
      <p class="text-[15px] text-gray-400 leading-7">
        {{ locale === 'zh'? myInfoData.introduction_ch :  myInfoData.introduction_en }}
      </p>
      <ul class="mt-5">
        <li v-for="tech in technologyData" :key="tech.id" class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img :src="tech.logoUrl" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">{{ tech.title }}</h3>
            <span class="text-gray-400 text-xs leading-4 block">
              {{ locale === 'zh'? tech.cnText : tech.enText }}
            </span>
          </div>  
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '@/lib/client';
import { showToast } from 'vant';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
const myInfoData = ref({})
const technologyData = ref([])

const fetchInfoData = async () => {
  const { data, error } = await supabase.from('MyInfo')
  .select('*')
  .limit(1)
  .maybeSingle()

  if(error) return showToast('获取数据失败')
  
  myInfoData.value = data
}

const fectchTechnologyData = async () => {
  const { data, error } = await supabase.from('technology').select('*')

  if(error) return showToast('获取数据失败')

  technologyData.value = data
}

onMounted(() => {
  fetchInfoData()
  fectchTechnologyData()
})

</script>

