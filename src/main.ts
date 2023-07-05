import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import 'normalize.css'
import 'nprogress/nprogress.css'
import ElementPlus from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'
const app = createApp(App);
app.use(router)
app.use(ElementPlus, { locale: lang, size: 'small', zIndex: 3000 })
.mount('#app')
