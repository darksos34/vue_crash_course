import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app")

Vue.use(Vuelidate)
Vue.use(Vuetify)
