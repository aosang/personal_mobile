<template>
  <div 
    class="h-[50px] w-full border-b border-gray-300 flex items-center fixed top-0 left-0 right-0 z-10 bg-[#fffbf5]"
  >
    <img src="../assets/common/my_logo.png" alt="logo" class="w-[100px] ml-4" @click="goToPage('/')">
   <div class="ml-auto mr-4" @click="toggleSlideShow">
      <v-icon name="la-bars-solid" class="w-6 h-6" />
    </div>
  </div>
  
  <van-popup 
    v-model:show="slideShow" 
    position="right"
    :style="{ height: '100%', width: '240px', backgroundColor: '#fffbf5' }"
  >
    <label class="text-[15px] font-bold pl-4 h-[40px] border-b border-gray-100 flex items-center text-[#222]">{{ $t('message.navigation') }}</label>
    <nav class="w-full h-[40px] border-b border-gray-100 text-[15px]">
      <div class="w-full h-[40px] border-b border-gray-100 flex items-center pl-4 text-[15px]" @click="goToPage('/')">
        <v-icon name="md-home-round" class="w-5 h-5 text-gray-500 mr-1" />
        <span class="mt-[2px]">{{ $t('message.navhome') }}</span>
      </div>
      <div class="w-full h-[48px] border-b border-gray-100 flex items-center pl-4 text-[15px]" @click="goToPage('/product')">
        <v-icon name="fa-microsoft" class="w-5 h-5 text-gray-500 mr-1" />
        <span class="mt-[2px]">{{ $t('message.navproduct') }}</span>
      </div>
      <div class="w-full h-[48px] border-b border-gray-100 flex items-center pl-4 text-[15px]" @click="goToPage('/about')">
        <v-icon name="md-textsnippet" class="w-5 h-5 text-gray-500 mr-1" />
        <span class="mt-[2px]">{{ $t('message.navabout') }}</span>
      </div>
      <div class="w-full h-[48px] border-b border-gray-100 flex items-center pl-4 text-[15px]" @click="goToPage('/mtool')">
        <v-icon name="fa-tools" class="w-5 h-5 text-gray-500 mr-1" />
        <span class="mt-[2px]">{{ $t('message.navmtool') }}</span>
      </div>
    </nav>
    
    <nav class="mt-[160px]">
      <label class="text-[15px] pl-4 font-bold h-[40px] border-b border-gray-100 flex items-center text-[#222]">{{ $t('message.socialMedia') }}</label>
      <div 
        class="h-[48px] border-b border-gray-100 flex items-center pl-4"
        @click="openSocialLink('mailto:xiaoge2071@gmail.com')"
      >
        <img class="w-[18px] h-[18px] mr-2" src="https://www.wangle.run/images/myImage/myWebsite/svg_logo/google-original.svg" />
        <span class="text-[15px] mt-[2px]">{{ $t('message.socialmail') }}</span>
      </div>
      <!-- <div class="h-[48px] border-b border-gray-100 flex items-center pl-4">
        <img class="w-[16px] h-[16px] mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
        <span class="text-[15px] mt-[2px]">Twitter</span>
      </div> -->
      <div 
        class="h-[48px] border-b border-gray-100 flex items-center pl-4 "
        @click="openSocialLink('https://www.linkedin.com/in/miles-wang-1b945313a')"
      >
        <img class="w-[18px] h-[18px] mr-2" src="https://www.wangle.run/images/myImage/myWebsite/svg_logo/linkedin-original.svg" />
        <span class="text-[15px] mt-[2px]">{{ $t('message.sociallinkedin') }}</span>
      </div>
      <div 
        class="h-[48px] border-b border-gray-100 flex items-center pl-4"
        @click="openSocialLink('https://www.wangle.run/images/myImage/myWebsite/myQrcode.png')"
      >
        <v-icon name="co-wechat" class="-ml-1 mr-1 text-green-600 w-[26px] h-[26px]" />
        <span class="text-[15px] mt-[2px]">{{ $t('message.socialwechat') }}</span>
      </div>
    </nav>
  </van-popup>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const slideShow = ref(false)

const toggleSlideShow = () => {
  // 点击后，slideShow 的值为 true
  slideShow.value = true
}

const goToPage = (path) => {
  router.push(path)
  slideShow.value = false
}

const openSocialLink = (link) => {
  window.open(link, '_blank')
}
</script>

