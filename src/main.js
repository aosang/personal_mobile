import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { Popup, Divider} from 'vant'
import 'vant/lib/index.css'

import { addIcons } from "oh-vue-icons";
import { LaBarsSolid, CoWechat, FaMicrosoft, FaTools, MdTextsnippet, MdHomeRound } from "oh-vue-icons/icons";
import { OhVueIcon } from "oh-vue-icons";

addIcons(MdHomeRound);
addIcons(LaBarsSolid);
addIcons(CoWechat);
addIcons(FaMicrosoft);
addIcons(FaTools);
addIcons(MdTextsnippet);


const app = createApp(App)
app.use(router)
app.use(Popup)
app.use(Divider)
app.component("v-icon", OhVueIcon);
app.mount('#app')
