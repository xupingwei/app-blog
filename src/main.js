import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// highlight.js代码高亮指令
import Highlight from './assets/utils/highlight';

axios.defaults.baseURL = "http://localhost:8080/roomapi";
axios.defaults.timeout = 10 * 1000;
// axios 请求拦截
// axios.interceptors.request.use(config => {
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//     let token = localStorage.getItem('token');
//     if (token) {
//         config.headers.common['token'] = localStorage.getItem('token');
//     }
//     return config
// }, err => {
//     return Promise.reject(err);
// });
Vue.config.productionTip = false;
Vue.prototype.axios = axios;


Vue.use(ElementUI);
Vue.use(MavonEditor);
Vue.use(Highlight);
Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//
// });


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
