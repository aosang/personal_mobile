<template>
  <div class="p-2 mt-[50px]">
    <van-cell-group class="mt-[-10px]">
      <template #title>
        <div class="flex items-center">
          <van-tag type="primary" size="large">
            <v-icon name="md-build-round" class="w-[14px] h-[14px]" />
            {{ $t('message.mtoolsTitle1') }}
          </van-tag>
        </div>
      </template>
      <van-cell @click="goToPage('https://element-plus.org')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Element UI</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            {{ $t('message.mtoolsDeveloperDescription1') }}
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
            {{ $t('message.mtoolsDeveloperDescription2') }}
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
            {{ $t('message.mtoolsDeveloperDescription3') }}
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
            {{ $t('message.mtoolsDeveloperDescription4') }}
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
            {{ $t('message.mtoolsDeveloperDescription5') }}
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
            {{ $t('message.mtoolsDeveloperDescription6') }}
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
            {{ $t('message.mtoolsTitle2') }}
          </van-tag>
        </div>
      </template>
      <van-cell @click="goToPage('https://flatuicolors.com')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">FLAT UI COLORS 2</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            {{ $t('message.mtoolsDesignerDescription1') }}
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
            {{ $t('message.mtoolsDesignerDescription2') }}
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
            {{ $t('message.mtoolsDesignerDescription3') }}
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
            {{ $t('message.mtoolsTitle3') }}
          </van-tag>
        </div>
      </template>
      <van-cell @click="goToPage('https://monosnap.com')">
        <template #title>
          <div class="text-gray-600 text-[15px] font-bold">Monosnap</div>
        </template>
        <template #label>
          <div class="text-gray-500 w-[300px] text-[13px]">
            {{ $t('message.mtoolsOtherDescription1') }}
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
            {{ $t('message.mtoolsOtherDescription2') }}
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
            {{ $t('message.mtoolsOtherDescription3') }}
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
            {{ $t('message.mtoolsOtherDescription4') }}
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
