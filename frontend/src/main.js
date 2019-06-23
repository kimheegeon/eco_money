// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Layouts
import Maincontent from '@/layouts/MainContent.vue'
import axios from 'axios'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'
import ToggleButton from 'vue-js-toggle-button'
import DateRangePicker from '@gravitano/vue-date-range-picker'

Vue.use(DateRangePicker)
Vue.use(ToggleButton)
Vue.use(VueMomentJS, moment)
Vue.prototype.$http = axios

Vue.component('maincontent-layout', Maincontent)
Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})