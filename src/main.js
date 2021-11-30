import Vue from 'vue'
import App from './App.vue'
import router from './routes/index';
Vue.config.productionTip = false;
import Layout from './components/Layout.vue';

// import packages
import './plugins/Snotify';

Vue.component('Layout', Layout);

initApp();
function initApp(){
  // console.log(router)
  new Vue({
    render: h => h(App),
    router,
  }).$mount('#app')
  
}