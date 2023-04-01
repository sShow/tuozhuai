import ElementPlus from 'element-plus';
import { createApp } from 'vue';

import Entry from './views/index.vue';

import 'element-plus/dist/index.css';
import './styles/reset.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import('tippy.js/dist/tippy.css');
import('tippy.js/themes/light.css');

const app = createApp(Entry);

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount('#app');
