import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'

import { messages } from './locale/locale.js'

// 创建i18n实例
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'en',
  fallbackLocale: 'en',
  messages: messages,
})

// 创建语言切换函数
const switchLanguage = (lang) => {
  // 切换vue-i18n语言
  i18n.global.locale.value = lang

  if (lang === 'zh') {
    Locale.use('zhCN', zhCN)
  } else {
    Locale.use('enUS', enUS)
  }
  // 保存用户语言偏好
  localStorage.setItem('language', lang)
}

// 初始化语言设置
const savedLanguage = localStorage.getItem('language') || 'en'
switchLanguage(savedLanguage)

import { 
  Popup, 
  Divider, 
  Tab, 
  Tabs, 
  Step, 
  Steps, 
  Tag, 
  Button, 
  Cell, 
  CellGroup,
  Swipe,
  SwipeItem,
  FloatingBubble 
} from 'vant'
import 'vant/lib/index.css'

import { addIcons } from "oh-vue-icons";
import { 
  LaBarsSolid, 
  CoWechat, 
  FaMicrosoft, 
  FaTools, 
  MdTextsnippet, 
  MdHomeRound, 
  BiChevronRight,
  MdBuildRound,
  MdDesignservices,
  MdOtherhousesSharp,
  BiTranslate       
} from "oh-vue-icons/icons";
import { OhVueIcon } from "oh-vue-icons";

addIcons(MdHomeRound)
addIcons(LaBarsSolid)
addIcons(CoWechat)
addIcons(FaMicrosoft)
addIcons(FaTools)
addIcons(MdTextsnippet)
addIcons(BiChevronRight)
addIcons(MdBuildRound)
addIcons(MdDesignservices)
addIcons(MdOtherhousesSharp)
addIcons(BiTranslate)

const app = createApp(App)
app.use(router)
app.use(Popup)
app.use(Divider)
app.use(Tab)
app.use(Tabs)
app.use(Step)
app.use(Steps)
app.use(Tag)
app.use(Button)
app.use(Cell)
app.use(CellGroup)
app.use(Swipe)
app.use(SwipeItem)
app.use(FloatingBubble )
app.use(i18n)
app.config.globalProperties.$switchLanguage = switchLanguage

app.component("v-icon", OhVueIcon);
app.mount('#app')
