import Vue from 'vue'
import App from './App.vue'
import router from './config/routes';
Vue.config.productionTip = false;

// import packages
import './plugins/Snotify';

initApp();
function initApp(){
  // console.log(router)
  new Vue({
    render: h => h(App),
    router,
  }).$mount('#app')
  
}