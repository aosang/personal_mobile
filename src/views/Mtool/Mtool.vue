<template>
  <div class="p-2 mt-[50px]">
    <van-cell-group>
      <template #title>
        <div class="flex items-center">
          <van-tag type="primary" size="large">
            <v-icon name="md-build-round" class="w-[14px] h-[14px]" />
            Developer
          </van-tag>
        </div>
      </template>
      <van-cell @click="goToPage('https://element-plus.org')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Element UI</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Vue 2.0 based component library for developers, designers and product managers
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://ant.design/')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Ant Design</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Building beautiful products more flexible and working with happiness
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://ui.shadcn.com')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Shadcn UI</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Build your component library
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://umijs.org/en-US')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">UmiJS</div> 
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Extensible enterprise-level front-end application framework
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://stripe.com/en-pl')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Stripe</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Payment processing for internet businesses
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://supabase.com')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Supabase</div> 
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Database, authentication, and storage services
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
            Designer
          </van-tag>
        </div>
      </template>
      <van-cell @click="goToPage('https://flatuicolors.com')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">FLAT UI COLORS 2</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Color palette website
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://dribbble.com')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Dribbble</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Discover the world’s top designers
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://pixabay.com/')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Pixbay</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Stunning royalty-free images & royalty-free stock
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
            Others
          </van-tag>
        </div>
      </template>
      <van-cell @click="goToPage('https://monosnap.com')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Monosnap</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Screen capture and screen recording tool
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://smallpdf.com/')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Smallpdf</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            File type conversion platform
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://tinypng.com')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">TinyPng</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Image lossless compression
          </div>
        </template>
        <template #value>
          <div class="text-gray-500 text-[13px]">
            <v-icon name="bi-chevron-right" />
          </div>
        </template>
      </van-cell>
      <van-cell @click="goToPage('https://z-library.sk/')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Z-Library</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            Free online library
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

const goToPage = (url) => {
  window.open(url, '_blank')
}
</script>
