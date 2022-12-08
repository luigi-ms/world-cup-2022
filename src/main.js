import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCompositionAPI from '@vue/composition-api'
import Ads from 'vue-google-adsense';

Vue.config.productionTip = false
const ads = Ads.Adsense;

new Vue({
  router,
  vuetify,
  VueCompositionAPI,
  ads,
  render: h => h(App)
}).$mount('#app')
