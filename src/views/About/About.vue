<template>
  <div class="product-details py-2 px-4 mt-[56px]">
    <div v-show="active === 0">
      <template v-if="locale === 'en'">
        <van-divider
          content-position="center"
          class="font-bold"
          style="color: #000; font-size: 22px"
        >
          Who I Am
        </van-divider>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          Hi, I'm Miles, a Full-Satck Developer
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          I got into frontend development somewhat by accident and have grown through hands-on work and self-directed learning ever since. What kept me going is simple: code turns into product quickly and solves real problems for users. That immediate sense of creation still drives me.
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          Over the years, I've moved beyond frontend into full-stack work, with the goal of taking a product from idea to launch largely on my own. I'm also exploring AI applications and SaaS in practice.
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          Beyond the code, I care about product experience, engineering quality, and long-term maintainability. I like to understand the business logic behind a feature and find better ways to improve workflows—not just ship what was asked for.
        </h3>
        <img src="@/assets/common/feday2024.jpg" alt="" class="w-full mb-5" />
        <van-divider
          content-position="center"
          class="font-bold"
          style="color: #000; font-size: 22px"
        >
          Tech Stack
        </van-divider>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          <span class="font-bold">Front-end:</span> <br />Vue, React, TypeScript, Tailwind CSS
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          <span class="font-bold">Cross-platform:</span>
          <br />Uni-app, React Native
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          <span class="font-bold">Backend:</span> <br />Node.js
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          <span class="font-bold">DataBase:</span> <br />MongoDB, Supabase
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          <span class="font-bold">Design:</span> <br />Photoshop (basic design and image editing)
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          Tools are means to an end. What I care about is building products that are useful and pleasant to use.
        </h3>

        <van-divider
          content-position="center"
          class="font-bold"
          style="color: #000; font-size: 22px"
        >
          A Bit More
        </van-divider>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          In 2023, I completed my bachelor's degree in Computer Science—a small way of closing the loop on not having a formal CS background earlier.
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          Outside work, I attend tech events in different cities to learn from peers and stay close to how teams work and where the industry is heading. I've been to events such as FE Day, VueConf, D2, Yunqi Conference, Google Developer Conference, and ChinaJoy. Staying open-minded and keeping learning often matters more than mastering any single technology.
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          I also maintain personal projects and my personal site to capture what I'm thinking and how I'm growing. I hope that sharing what I learn helps me connect with like-minded people.
        </h3>

        <van-divider
          content-position="center"
          class="font-bold"
          style="color: #000; font-size: 22px"
        >
          What I'm Looking For
        </van-divider>

        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          Right now I'm especially interested in:
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          The team matters more than company size.
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          I gravitate toward teams that care about engineering quality, communicate thoughtfully, keep improving the product, and respect professional judgment.
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          Remote, in-office, or a small startup—I'm open as long as people work toward a shared goal with honesty and efficiency.
        </h3>
        <h3 class="text-[16px] text-gray-500 mb-2 leading-7">
          If you value long-term thinking, continuous learning, and strong product experience, I'd love to connect.
        </h3>
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