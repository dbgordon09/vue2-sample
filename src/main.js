import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppHome from './components/AppHome'
import AppDocumentation from "./components/AppDocumentation";
import AppAbout from "./components/AppAbout";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: AppHome},
    {path: '/docs', component: AppDocumentation},
    {path: '/about', component: AppAbout},
];

const router = new VueRouter({
    routes,
    mode : 'history',
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');