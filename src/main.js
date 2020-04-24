import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

import 'amfe-flexible/index.js'

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')