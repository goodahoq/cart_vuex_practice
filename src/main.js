// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex);
import store from './store'

import {
  Button,
  Select,
  Option,
  InputNumber
} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(InputNumber);
Vue.use(Option);
import './assets/element-variables.scss'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
