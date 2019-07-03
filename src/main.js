import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// highlight.js代码高亮指令
import Highlight from './assets/utils/highlight';

Vue.use(ElementUI);
Vue.use(MavonEditor);
Vue.use(Highlight);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
