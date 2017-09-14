import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from './router'
//import store from './store.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//加载路由中间件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);

//定义路由
const router = new VueRouter({
    routes: routeConfig
});

new Vue({
    router,
    //store,
    el: "#app",
    render: h => h(app)
});
