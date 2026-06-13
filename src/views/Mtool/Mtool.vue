<template>
  <div class="p-2 mt-[50px]">
    <van-cell-group class="mt-[-10px]">
      <template #title>
        <div class="flex items-center">
          <van-tag type="primary" size="large">
            <v-icon name="md-build-round" class="w-[14px] h-[14px]" />
            {{ locale === 'zh'? '开发工具' : 'Developer' }}
          </van-tag>
        </div>
      </template>
      <van-cell :key="develop.id" v-for="develop in developerData" @click="goToPage(develop.link)">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">{{ develop.title }}</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            {{ locale === 'zh'? develop.desc : develop.descEn }}
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <!-- Designer -->
    <van-cell-group>
      <template #title>
        <div class="flex items-center">
          <van-tag type="success" size="large">
            <v-icon name="md-designservices" class="w-[14px] h-[14px]" />
            {{ locale === "zh"? '设计工具' : "Designer" }}
          </van-tag>
        </div>
      </template>
      <van-cell v-for="design in designData" :key="design.id" @click="goToPage(design.link)">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">{{ design.title }}</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            {{ locale === "zh"? design.desc : design.descEn }}
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <!-- Others -->
    <van-cell-group>
      <template #title>
        <div class="flex items-center">
          <van-tag type="warning" size="large">
            <v-icon name="md-otherhouses-sharp" class="w-[14px] h-[14px]" />
            {{ locale === "zh"? "其它工具" : "Others" }}
          </van-tag>
        </div>
      </template>
      <van-cell v-for="other in otherData" :key="other.id" @click="goToPage(other.link)">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">{{ other.title }}</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            {{ locale === "zh"? other.desc : other.descEn }}
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { showToast } from 'vant';
import { supabase } from '@/lib/client'
import { useI18n } from 'vue-i18n'

const toolsData = ref([])
const { locale } = useI18n()

const developerData = ref([])
const designData = ref([])
const otherData = ref([])

const fetchToolsData = async () => {
  const { data, error } = await supabase.from('tools').select('*')

  if(error) return showToast('获取数据失败！')

  toolsData.value = data

  developerData.value = toolsData.value.filter(item => item.type === "Developer")
  designData.value = toolsData.value.filter(item => item.type === "Designer")
  otherData.value = toolsData.value.filter(item => item.type === "Others")
}

onMounted(() => {
  fetchToolsData()
})

const goToPage = (url) => {
  window.open(url, '_blank')
}
</script>
