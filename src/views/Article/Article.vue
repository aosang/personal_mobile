<template>
  <div class="w-full mt-[60px]">
    <ul class="w-[92%] mx-auto" v-if="articleData.length > 0 || articleData.length !== 0">
      <li 
        v-for="item in articleData" 
        :key="item.id" 
        class="px-3 py-[22px] border-b border-gray-200"
        @click="goToArticleDetails(item.id)"
      >
        <div class="flex gap-2 items-center">
          <van-tag v-if="item.isTop === 'top'" type="primary" style="padding: 2px 4px;">置顶</van-tag>
          <van-tag
            v-if="item.isTop !== 'top' && item.id === latestNonTopId"
            type="primary"
            plain
            style="padding: 2px 4px;"
          >
            {{ locale === 'zh' ? '最新' : 'Latest' }}
          </van-tag>
          <h2 class="text-[15px] line-clamp-2 break-words">{{ item.title }}</h2>
        </div>
        <p class="text-gray-500 text-[14px] mt-1 line-clamp-2 break-words">{{ item.short }}</p>
        <div class="flex mt-2 gap-2">
          <span class="text-gray-700 text-[13px]">{{ dayjs(item.created_time).locale(locale === 'zh' ? 'zh-cn' : 'en').fromNow() }}</span>
          <van-tag style="padding: 2px 4px">{{ item.type === "Thoughts"? "工作感悟" : "技术分享" }}</van-tag>
        </div>
      </li>
    </ul>
    
    <div v-if="articleData.length === 0">
      <van-empty description="暂无文章发布" />
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { supabase } from '@/lib/client'
  import { showToast } from 'vant'
  import dayjs from '@/lib/dayjs'
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'

  const articleData = ref([])
  const { locale } = useI18n()
  const router = useRouter()

  const latestNonTopId = computed(() =>
    articleData.value.find((a) => a.isTop !== 'top')?.id
  )
  
  const fetchArticleData = async () => {
    const { data, error } = await supabase.from('article').select('*')
      .eq('isSend', 'true')
      .order('isTop', { ascending: false })      // top 在前
      .order('created_time', { ascending: false }) // 时间新的在前
      
    if(error) return showToast('获取数据失败！')

    articleData.value = data
  }

  const goToArticleDetails = (id) => {
    router.push({
      name: 'ArticleDetails',
      params: { id }
    })
  }

  onMounted(() => {
    fetchArticleData()
  })

</script>

<style scoped>
  
</style>