<template>
  <div class="mt-[50px] mb-[48px] p-4">
    <div v-show="active === 0">
      <template v-if="locale === 'en'">
        <h3 class="text-[15px] text-gray-400 mb-3">
          {{ $t('message.aboutIntroductionDetails1') }}
        </h3>
        <img src="@/assets/common/feday2024.jpg" alt="" class="w-full mb-4" />
        <h3 class="text-[15px] text-gray-400 mb-3">
          {{ $t('message.aboutIntroductionDetails2') }}
        </h3>
        <h3 class="text-[15px] text-gray-400 mb-3">
          {{ $t('message.aboutIntroductionDetails3') }}
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
          <span class="font-bold">·{{ $t('message.aboutTechnologyStackFrontend') }}</span> <br />Vue3、React、Tailwind
          Css、TypeScript
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
        <div>123</div>
      </template>
    </div>
    <div v-show="active === 1">
      <img src="@/assets/common/working.jpg" alt="working" class="w-full mb-4 rounded-[10px] border border-gray-200" />
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
    </div>
  </div>
  <div
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const active = ref(0);

const tabs = ref([
  {
    id: 0,
    title: locale.value === 'en' ? "Introduction" : "自我简介",
  },{
    id: 1,
    title: locale.value === 'en' ? "Work Experience" : "工作经历",
  },
]);

const handleTabClick = (id) => {
  active.value = id;
};
</script>