// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Header, Tabbar, TabItem, InfiniteScroll, Button, Field  } from 'mint-ui';
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'

Vue.component('mt-header', Header);
Vue.component('mt-tabbar', Tabbar);
Vue.component('mt-tab-item', TabItem);
Vue.component('mt-button', Button);
Vue.component('mt-field', Field);

Vue.use(InfiniteScroll);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
