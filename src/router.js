import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Article from "./views/Article";
import ArticleDetails from "./views/ArticleDetails";
import Publish from "./views/admin/Publish";
import Login from "./views/admin/Login";
import Main from "./views/Main";
import CreateArticle from "./views/admin/CreateArticle";
import ArticleManager from "./components/admin/ArticleManager";
import TagManager from "./components/admin/TagManager";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/', name: 'mainLink', component: Main, children: [
                {path: '/about', name: 'aboutLink', component: About},
                {path: '/home', name: 'homeLink', component: Home},
                {path: '/article', name: 'articleLink', component: Article},
                {path: '/details', name: 'detailsLink', component: ArticleDetails}
            ],
            redirect: '/home'
        },
        {
            path: '/publish', name: 'publishLink', component: Publish, children: [
                {path: "/createArticle", name: 'createLink', component: CreateArticle},
                {path: "/articleManager", name: 'articleManagerLink', component: ArticleManager},
                {path: "/tagManager", name: 'tagManagerLink', component: TagManager}
            ],
            redirect: "/createArticle"
        },
        {path: '/login', name: 'loginLink', component: Login},
        {path: "*", redirect: "/"},
    ]
})
