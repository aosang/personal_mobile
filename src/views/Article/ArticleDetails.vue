<template>
  <div class="w-full mt-[60px] px-4">
    <h2 class="text-[18px] text-gray-800 font-bold">{{ articleDetailsData.title }}</h2>
    <div class="flex items-center gap-2 mt-2">
      <span class="text-[13px] text-gray-500">{{ dayjs(articleDetailsData.created_time).locale(locale === 'zh' ? 'zh-cn' : 'en').fromNow() }}</span>
      <van-tag style="padding: 2px 4px;">{{ articleDetailsData.type === "Thoughts"? "工作感悟" : "技术分享" }}</van-tag>
    </div>
    <van-divider />
    <div>
      <MarkDownContent :content="articleDetailsData.articleText" />
    </div>
    <div class="flex items-center my-5 gap-3">
      <van-button 
        type="primary" 
        size="medium" 
        style="padding: 2px 8px"
        @click="backArticleList"
      >
        返回列表
      </van-button>
      <van-button @click="prevArticle">上一篇</van-button>
      <van-button @click="nextArticle">下一篇</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '@/lib/client'
import { showToast } from 'vant';
import dayjs from '@/lib/dayjs';
import { useI18n } from 'vue-i18n'
import MarkDownContent from "@/components/MarkDownContent.vue"

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()
const articleDetailsData = ref({})
const articleList = ref([])

const currentIndex = computed(() =>
  articleList.value.findIndex((item) => item.id === route.params.id)
)

const fetchArticleList = async () => {
  const { data, error } = await supabase
    .from('article')
    .select('id')
    .eq('isSend', 'true')
    .order('isTop', { ascending: false })
    .order('created_time', { ascending: false })

  if (!error) {
    articleList.value = data || []
  }
}

const fetchArticleDetailsData = async (id) => {
  const { data, error } = await supabase.from('article').select('*').eq('id', id).limit(1).single()

  if(error) return showToast('获取数据失败！')
  
  articleDetailsData.value = data
}

const goToArticle = (id) => {
  router.push({
    name: 'ArticleDetails',
    params: { id }
  })
}

const prevArticle = () => {
  if (currentIndex.value <= 0) {
    return showToast('已经是第一篇了')
  }
  goToArticle(articleList.value[currentIndex.value - 1].id)
}

const nextArticle = () => {
  if (currentIndex.value < 0 || currentIndex.value >= articleList.value.length - 1) {
    return showToast('已经是最后一篇了')
  }
  goToArticle(articleList.value[currentIndex.value + 1].id)
}

const backArticleList = () => {
  router.push({
    name: 'Article'
  })
}

onMounted(() => {
  fetchArticleList()
  if(route.params.id) {
    fetchArticleDetailsData(route.params.id)
  }
})

watch(() => route.params.id, (id) => {
  if (id) {
    fetchArticleDetailsData(id)
    window.scrollTo({ top: 0 })
  }
})

</script>