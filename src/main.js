import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import myIcon from '@/components/common/my-icon.vue';
import './assets/fonts/iconfont.css'

const vue = createApp(App);
vue.component('my-icon',myIcon);
vue.use(router).use(store).mount('#app');
