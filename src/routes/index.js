const routes = [];
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let modules = require('../modules/index');
modules.default.forEach(item => {
    
    item.routes.forEach((route)=>{
            routes.push(route);
        });
});

export default new VueRouter({
    base : '/',
    mode : 'history',
    routes,        
});