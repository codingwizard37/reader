import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Create global data here
let data = {
  user: {
    lhsLang: "eng",
    rhsLang: "spa",
  },
  languages: [
    {
      short: "deu",
      long: "Deutsch"
    },
    {
      short: "eng",
      long: "English"
    },
    {
      short: "spa",
      long: "Español"
    },
    {
      short: "fra",
      long: "Français"
    },
    {
      short: "mlg",
      long: "Malagasy"
    },
    {
      short: "fin",
      long: "Suomi"
    },
    {
      short: "swe",
      long: "Svenska"
    },
    {
      short: "rus",
      long: "Русский"
    },
    {
      short: "zhs",
      long: "简体中文"
    },
  ]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
