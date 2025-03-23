<template>
  <div class="p-6 mt-[50px]">
    <div class="flex items-center">
      <div class="w-[100px] h-[100px] bg-red-500 rounded-[20px] overflow-hidden">
        <!-- <img src="https://www.wangle.run/images/myImage/myWebsite/my_avatar.png" alt="avatar" class="w-full h-full object-cover" /> -->
        <img src="https://www.wangle.run/company_icon/public_image/pub_avatar.jpg" alt="avatar" class="w-full h-full object-cover" />
      </div>
      <div class="ml-4">
        <div class="text-2xl font-bold">
          I'm Miles Wang
        </div>
        <div class="text-gray-400">
          Front-end engineer
        </div>
        <div class="text-gray-400">
          Qingdao, China
        </div>
      </div>
    </div>

    <div class="mt-8">
      <van-divider content-position="center">
        <div class="text-black  text-xl">
          What I can do
        </div>
      </van-divider>
      <p class="text-[15px] text-gray-400">As an engineer with five years of experience in front-end development and three years in full-stack development, I have collaborated with many talented and diverse teams of developers and designers. We have delivered high-quality, user-friendly applications across various sectors, including healthcare, education, supply chain, and logistics.</p>
      <ul class="mt-4">
        <li class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" alt="next.js" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">Next.js</h3>
            <span class="text-gray-400 text-xs leading-4 block">React framework for building fast websites.</span>
          </div>  
        </li>
        <li class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcssa" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">Tailwind CSS</h3>
            <span class="text-gray-400 text-xs leading-4 block">Utility-first CSS framework for styling.</span>
          </div>
        </li>
        <li class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">Typescript</h3>
            <span class="text-gray-400 text-xs">Superset of JavaScript with static typing.</span>
          </div>
        </li>
        <li class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="vue" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">Vue.js</h3>
            <span class="text-gray-400 text-xs leading-4 block">Progressive JavaScript framework for building user interfaces.</span>
          </div>
        </li>
        <li class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">Node.js</h3>
            <span class="text-gray-400 text-xs leading-4 block">JavaScript runtime for server-side applications.</span>
          </div>
        </li>
        <li class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="supabase" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">Supabase</h3>
            <span class="text-gray-400 text-xs leading-4 block">Open-source alternative to Firebase.</span>
          </div>
        </li>
        <li class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">MongoDB</h3>
            <span class="text-gray-400 text-xs leading-4 block">Scalable NoSQL database with flexible JSON-like documents.</span>
          </div>
        </li>
        <li class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg" alt="postman" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">Postman</h3>
            <span class="text-gray-400 text-xs leading-4 block">A tool for testing and managing APIs.</span>
          </div>
        </li>
        <li class="bg-white border border-gray-100 h-20 w-full flex items-center px-3 mb-2">
          <div class="flex items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" 
            class="mx-auto w-[36px] h-[36px]">
          </div>
          <div class="ml-4">
            <h3 class="text-[15px]">Figma</h3>
            <span class="text-gray-400 text-xs leading-4 block">Collaborative interface design and prototyping tool.</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

