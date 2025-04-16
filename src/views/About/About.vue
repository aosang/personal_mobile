<template>
  <div class="product-details py-2 px-4 mt-[50px]">
    <div v-show="active === 0">
      <template v-if="locale === 'en'">
        <h3 class="text-[15px] text-gray-400 mb-3">
          As an engineer with five years of experience in front-end development and three years in full-stack development, I have collaborated with many talented and diverse teams of developers and designers. We have delivered high-quality, user-friendly applications across various sectors, including healthcare, education, supply chain, and logistics. I have extensive development experience focused on businesses upstream and downstream of supply chains.
        </h3>
        <img src="@/assets/common/feday2024.jpg" alt="" class="w-full mb-4" />
        <h3 class="text-[15px] text-gray-400 mb-3">
          I am proficient in using Next.js, Tailwind CSS, Node.js, MongoDB, and Supabase to build application solutions for diverse scenarios.
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-3">
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
        <h3 class="text-[15px] text-gray-400 mb-1">
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackFrontend') }}</span> <br />Vue3、React、Tailwind Css、TypeScript
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackFullstack') }}</span>
          <br />Next.js、Nodejs、Supabase、MongoDB
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackDesign') }}</span> <br />Figma、Photoshop
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Proficient in English as an AI developer and user skilled in using AI
          tools like cursor and dev0.
        </h3>
        <img
          src="@/assets/common/skills.png"
          alt="skills"
          class="w-full mt-4 rounded-[10px] border border-gray-200"
        />
      </template>
      <template v-if="locale === 'zh'">
        <van-divider content-position="center">
          <div class="text-[16px] text-gray-600 font-bold">我是谁</div>
        </van-divider>
        <h3 class="text-[15px] text-gray-400 mb-3 leading-[26px]">
          Hi，我是Miles，一名35+的前端开发工程师，现居青岛。INTJ（建筑师人格），爱折腾，有较强的自我学习能力，一个意外的机缘巧合入坑前端，既非科班也非培训，属于半路出家， 喜欢这份职业的原因很简单，所见即所得的成就感。2023年完成了CS本科学历的深造，算是小小的弥补了一个遗憾。大约三年前开始尝试全栈开发，希望能够持续打造有出色用户体验的产品，目前就职于一家供应链科技公司，主要负责为集团各公司业务提供技术开发解决方案。
        </h3>
        <img src="@/assets/common/feday2024.jpg" alt="" class="w-full mb-4" />
        <van-divider content-position="center">
          <div class="text-[16px] text-gray-600 font-bold">我会做什么</div>
        </van-divider>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Tailwind css + Typescript(前者强烈推荐，TS看项目具体需求)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Uni-app(主要用来开发小程序，最近也在做iOS/Android跨端开发)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Vue + React(前端必会框架，无需多言，Vue用的更熟练一些)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Node.js(开发后端必备)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Next.js(全栈开发主要应用技术)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Supabase + MongoDB(对前端快速上手比较友好的数据库)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Figma + Photoshop(UI设计工具，UI设计能力一般，但可以快速上手)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          还有很多宝藏工具，可以看我在
          <a 
            @click="handleClickMtools"
            class="text-blue-500 underline"
          >
            MTools
          </a>里的推荐
        </h3>
        <van-divider content-position="center">
          <div class="text-[16px] text-gray-600 font-bold">其它想说的</div>
        </van-divider>
        <h3 class="text-[15px] text-gray-400 mb-1">
          每年喜欢到处转一转主动与同行们沟通学习交流，开拓视野，增长见识，也了解其他的同行都在什么，想什么，思考什么，给自己一些启发。FE Day、VueConf、ChinaJoy、D2、云栖大会都留下过足迹，对于一个步入中年的程序员，保持开放的心态在我看来很重要。
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          感谢你能看到这里，在一个碎片化的时代能有耐心听我啰嗦这么多，如果有任何问题，合作或其他想要沟通交流的，都可以给我留言。
        </h3>
      </template>
    </div>

    
    <!-- <div v-show="active === 0">
      <template v-if="locale === 'en'">
        <h3 class="text-[15px] text-gray-400 mb-3">
          As an engineer with five years of experience in front-end development and three years in full-stack development, I have collaborated with many talented and diverse teams of developers and designers. We have delivered high-quality, user-friendly applications across various sectors, including healthcare, education, supply chain, and logistics. I have extensive development experience focused on businesses upstream and downstream of supply chains.
        </h3>
        <img src="@/assets/common/feday2024.jpg" alt="" class="w-full mb-4" />
        <h3 class="text-[15px] text-gray-400 mb-3">
          I am proficient in using Next.js, Tailwind CSS, Node.js, MongoDB, and Supabase to build application solutions for diverse scenarios.
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-3">
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
        <h3 class="text-[15px] text-gray-400 mb-1">
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackFrontend') }}</span> <br />Vue3、React、Tailwind Css、TypeScript
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackFullstack') }}</span>
          <br />Next.js、Nodejs、Supabase、MongoDB
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackDesign') }}</span> <br />Figma、Photoshop
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Proficient in English as an AI developer and user skilled in using AI
          tools like cursor and dev0.
        </h3>
        <img
          src="@/assets/common/skills.png"
          alt="skills"
          class="w-full mt-4 rounded-[10px] border border-gray-200"
        />
      </template>
      <template v-if="locale === 'zh'">
        <van-divider content-position="center">
          <div class="text-[16px] text-gray-600 font-bold">我是谁</div>
        </van-divider>
        <h3 class="text-[15px] text-gray-400 mb-3 leading-[26px]">
          Hi，我是Miles，一名35+的前端开发工程师，现居青岛。INTJ（建筑师人格），爱折腾，有较强的自我学习能力，一个意外的机缘巧合入坑前端，既非科班也非培训，属于半路出家， 喜欢这份职业的原因很简单，所见即所得的成就感。2023年完成了CS本科学历的深造，算是小小的弥补了一个遗憾。大约三年前开始尝试全栈开发，希望能够持续打造有出色用户体验的产品，目前就职于一家供应链科技公司，主要负责为集团各公司业务提供技术开发解决方案。
        </h3>
        <img src="@/assets/common/feday2024.jpg" alt="" class="w-full mb-4" />
        <van-divider content-position="center">
          <div class="text-[16px] text-gray-600 font-bold">我会做什么</div>
        </van-divider>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Tailwind css + Typescript(前者强烈推荐，TS看项目具体需求)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Uni-app(主要用来开发小程序，最近也在做iOS/Android跨端开发)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Vue + React(前端必会框架，无需多言，Vue用的更熟练一些)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Node.js(开发后端必备)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Next.js(全栈开发主要应用技术)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Supabase + MongoDB(对前端快速上手比较友好的数据库)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          Figma + Photoshop(UI设计工具，UI设计能力一般，但可以快速上手)
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          还有很多宝藏工具，可以看我在
          <a 
            @click="handleClickMtools"
            class="text-blue-500 underline"
          >
            MTools
          </a>里的推荐
        </h3>
        <van-divider content-position="center">
          <div class="text-[16px] text-gray-600 font-bold">其它想说的</div>
        </van-divider>
        <h3 class="text-[15px] text-gray-400 mb-1">
          每年喜欢到处转一转主动与同行们沟通学习交流，开拓视野，增长见识，也了解其他的同行都在什么，想什么，思考什么，给自己一些启发。FE Day、VueConf、ChinaJoy、D2、云栖大会都留下过足迹，对于一个步入中年的程序员，保持开放的心态在我看来很重要。
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-1">
          感谢你能看到这里，在一个碎片化的时代能有耐心听我啰嗦这么多，如果有任何问题，合作或其他想要沟通交流的，都可以给我留言。
        </h3>
      </template>
    </div> -->
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
import { ref, onMounted, onUnmounted, watch } from "vue"
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { locale } = useI18n()
const active = ref(0);
const router = useRouter()
// const tabs = ref([
//   {
//     id: 0,
//     title: locale.value === 'en' ? "Introduction" : "自我简介",
//   },{
//     id: 1,
//     title: locale.value === 'en' ? "Work Experience" : "工作经历",
//   },
// ])

// 监听locale变化，更新tabs标题
// watch(locale, (newLocale) => {
//   tabs.value = [
//     {
//       id: 0,
//       title: newLocale === 'en' ? "Introduction" : "自我简介",
//     },{
//       id: 1,
//       title: newLocale === 'en' ? "Work Experience" : "工作经历",
//     },
//   ]
// })

// const handleTabClick = (id) => {
//   active.value = id
// }

const handleClickMtools = () => {
  router.push('/mtool')
}

onMounted(() => {
  document.body.style.height = 'calc(100vh - 50px)'
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