import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

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
  MdOtherhousesSharp      
} from "oh-vue-icons/icons";
import { OhVueIcon } from "oh-vue-icons";

addIcons(MdHomeRound);
addIcons(LaBarsSolid);
addIcons(CoWechat);
addIcons(FaMicrosoft);
addIcons(FaTools);
addIcons(MdTextsnippet);
addIcons(BiChevronRight);
addIcons(MdBuildRound);
addIcons(MdDesignservices);
addIcons(MdOtherhousesSharp);

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

app.component("v-icon", OhVueIcon);
app.mount('#app')
