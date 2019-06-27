import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Article from "./views/Article";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', name: 'homeLink', component: Home},
        {path: '/about', name: 'aboutLink', component: About},
        {path: '/article', name: 'articleLink', component: Article}
    ]
})
