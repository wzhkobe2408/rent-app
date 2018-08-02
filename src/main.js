// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
 // mint-ui
import { Header, Tabbar, TabItem, InfiniteScroll, Button, Field, Radio, Search } from 'mint-ui';
import 'mint-ui/lib/style.css'

// fontawsome icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHome)
library.add(faPlus)
library.add(faUser)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import App from './App'
import router from './router'
import store from './store/index';

Vue.component('mt-header', Header);
Vue.component('mt-tabbar', Tabbar);
Vue.component('mt-tab-item', TabItem);
Vue.component('mt-button', Button);
Vue.component('mt-field', Field);
Vue.component('mt-radio', Radio);
Vue.component('mt-search', Search);

Vue.use(InfiniteScroll);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
