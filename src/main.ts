import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'vue-global-api'
import 'modern-normalize/modern-normalize.css'
import { useCommonComponents } from './components/common/index';

const app = createApp(App)

useCommonComponents(app);

app.use(router)

app.mount('#app')