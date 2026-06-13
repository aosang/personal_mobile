<template>
  <div class="product-details py-2 px-4 mt-[40px]">
    <div v-show="active === 0">
      <template v-if="locale === 'en'">
        <h3 class="text-[16px] text-gray-500 mb-3 leading-7">
          As an engineer with seven years of experience in front-end development, I have collaborated with many talented and diverse teams of developers and designers. We have delivered high-quality, user-friendly applications across various sectors, including healthcare, education, supply chain, and logistics. I have extensive development experience focused on businesses upstream and downstream of supply chains.
        </h3>
        <img src="@/assets/common/feday2024.jpg" alt="" class="w-full mb-4" />
        <h3 class="text-[16px] text-gray-500 mb-3 leading-7">
          I am proficient in using Next.js, Tailwind CSS, Node.js, MongoDB, and Supabase to build application solutions for diverse scenarios.
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-3 leading-7">
          Furthermore, I am passionate about sharing industry knowledge and experience within the open-source community and frequently participate in offline technical conferences.
        </h3>
        <van-divider
          content-position="center"
          class="font-bold"
          style="color: #000; font-size: 16px"
        >
          {{ $t('message.aboutTechnologyStack') }}
        </van-divider
        >
        <h3 class="text-[16px] text-gray-500 mb-1 leading-7">
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackFrontend') }}</span> <br />Vue3、React、Tailwind Css、TypeScript
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-1 leading-7">
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackFullstack') }}</span>
          <br />Next.js、Nodejs、Supabase、MongoDB
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-1 leading-7">
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackDesign') }}</span> <br />Figma、Photoshop
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-1 leading-7">
          Proficient in English as an AI developer and user skilled in using AI
          tools like cursor and dev0.
        </h3>
        <!-- <img
          src="@/assets/common/skills.png"
          alt="skills"
          class="w-full mt-4 rounded-[10px] border border-gray-200"
        /> -->
      </template>
      <template v-if="locale === 'zh'">
        <MarkDownContent :content="introductionText" />
      </template>
    </div>

    <!-- <div v-show="active === 1">
      <img src="@/assets/common/working.jpg" alt="working" class="w-full mb-4 rounded-[10px] border border-gray-200" />
      <template v-if="locale === 'en'">
        <van-steps direction="vertical">
          <van-step>
            <h3 class="text-[15px] text-gray-400 mb-1 font-bold">Jagich Technology Co.,Ltd.</h3>
            <span class="text-[15px] text-gray-400 mb-1 block font-bold">April.2021 - Present&nbsp;&nbsp;&nbsp;&nbsp;Full-stack</span>
            <p class="text-[15px] text-gray-400 leading-6 mb-1">
              Responsible for the full-stack development of the company's core business systems related to import and export over sea, railway and air, including online freight rate, cargo tracking and container control systems, while ensuring technical solutions are highly aligned with business needs.
            </p>
          </van-step>
          <van-step>
            <h3 class="text-[15px] text-gray-400 mb-1 font-bold">Topping Technology Co., Ltd.</h3>
            <p>May.2018 - March.2021&nbsp;&nbsp;&nbsp;&nbsp;Front-end engineer</p>
          </van-step>
          <van-step>
            <h3 class="text-[15px] text-gray-400 mb-1 font-bold">Echemi Technology Co., Ltd.</h3>
            <p>February.2017 - May.2018&nbsp;&nbsp;&nbsp;&nbsp;Front-end engineer</p>
          </van-step>
        </van-steps>
        <div class="text-[15px] text-gray-600 mb-1 mt-4 underline">
          If you are interested in my work experience, please click <a href="https://www.wangle.run/Miles-Resume.pdf" target="_blank" class="text-blue-500 text-[15px] font-bold">Get Miles's Resume</a> to view and learn more information.
        </div>
      </template>

      <template v-if="locale === 'zh'">
        <van-steps direction="vertical" class="custom-steps">
          <van-step>
            <h3 class="text-[15px] text-gray-400 mb-1 font-bold">嘉智科技</h3>
            <span class="text-[15px] text-gray-400 mb-1 block font-bold">2021年4月 - 至今&nbsp;&nbsp;&nbsp;&nbsp;全栈开发工程师</span>
            <p class="text-gray-400 leading-6 mb-1">
              负责公司海运、铁路及空运进出口核心业务系统的全栈开发，包括在线运价查询、货物追踪及集装箱管控系统，同时确保技术方案与业务需求高度契合。
            </p>
          </van-step>
          <van-step>
            <h3 class="text-[15px] text-gray-400 mb-1 font-bold">荣登信息技术</h3>
            <p>2018年5月 - 2021年3月&nbsp;&nbsp;&nbsp;&nbsp;前端开发工程师</p>
          </van-step>
          <van-step>
            <h3 class="text-[15px] text-gray-400 mb-1 font-bold">Echemi科技</h3>
            <p>2017年2月 - 2018年5月&nbsp;&nbsp;&nbsp;&nbsp;前端开发工程师</p>
          </van-step>
        </van-steps>
        <div class="text-[15px] text-gray-600 mb-1 mt-4 underline">
            如果您对我的工作经历感兴趣，请点击<a href="https://www.wangle.run/miles_cn.pdf" target="_blank" class="text-blue-500 text-[15px] font-bold">获取Miles的简历</a>查看并了解更多信息。
        </div>
      </template>
    </div> -->
  </div>
  <!-- <div
    class="
    fixed 
    left-0 
    bottom-0 
    w-full 
    h-[48px] 
    border-t 
    border-gray-300 
    flex 
    items-center 
    justify-center 
    bg-[#fffbf5]
    z-10
    "
  >
    <div
      class="
        w-[50%] 
        h-[100%] 
        flex 
        items-center 
        justify-center 
        text-[15px] 
        text-gray-400"
      v-for="tab in tabs"
      :key="tab.id"
      :class="{
        'text-blue-500': active === tab.id,
        'font-bold': active === tab.id,
        'bg-gray-100': active === tab.id,
        'border-r border-gray-300': tab.id === 0,
      }"
      @click="handleTabClick(tab.id)"
    >
      {{ tab.title }}
    </div>
  </div> -->
  <div class="w-full h-[60px]"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from "vue"
import { useI18n } from 'vue-i18n'
import { supabase } from '@/lib/client'
import { showToast } from "vant"
import MarkDownContent from "@/components/MarkDownContent.vue"

import { useRouter } from 'vue-router'

const { locale } = useI18n()
const active = ref(0);
const router = useRouter()

const introData = ref(null)
const introductionText = computed(() => introData.value?.[0]?.introduction_text ?? '')

const tabs = ref([
  {
    id: 0,
    title: locale.value === 'en' ? "Introduction" : "自我简介",
  },{
    id: 1,
    title: locale.value === 'en' ? "Work Experience" : "工作经历",
  },
])

// 监听locale变化，更新tabs标题
watch(locale, (newLocale) => {
  tabs.value = [
    {
      id: 0,
      title: newLocale === 'en' ? "Introduction" : "自我简介",
    },{
      id: 1,
      title: newLocale === 'en' ? "Work Experience" : "工作经历",
    },
  ]
})

const fetchIntroductionText = async () => {
  const { data, error } = await supabase.from('introduction').select('*')

  if(error) return showToast('获取数据失败！')

  introData.value = data
}

const handleTabClick = (id) => {
  active.value = id
}

const handleClickMtools = () => {
  router.push('/mtool')
}

onMounted(() => {
  document.body.style.height = 'calc(100vh - 50px)'

  fetchIntroductionText()
})

onUnmounted(() => {
  document.body.style.height = ''
})
</script>

<style scoped>
/* .product-details {
  height: calc(100vh - 50px);
  overflow-y: auto;
  box-sizing: border-box;
  display: block;
  position: relative;
  top: 50px;
} */

::v-deep(.van-steps) {
  background: transparent;
}
</style>