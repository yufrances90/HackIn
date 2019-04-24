import Vue from 'vue';

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

import App from './App.vue';
import router from './routes';
import utils from './utils';

Vue.config.productionTip = false

Vue.use(ElementUI, { locale });

Vue.config.errorHandler = err => {
  console.log('Exception: ', err)
}

new Vue({
  router,
  store: utils.Store,
  render: h => h(App),
}).$mount('#app');
