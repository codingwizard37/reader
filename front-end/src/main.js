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
    lhsLang: "",
    rhsLang: "",
    lhsChapter: {},
    rhsChapter: {}
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
  ],
  books: [
    {
      short: "1-ne",
      long: "1 Nephi",
      num_ch: 22,
    },
    {
      short: "2-ne",
      long: "2 Nephi",
      num_ch: 33,
    },
    {
      short: "jacob",
      long: "Jacob",
      num_ch: 7,
    },
    {
      short: "enos",
      long: "Enos",
      num_ch: 1,
    },
    {
      short: "jarom",
      long: "Jarom",
      num_ch: 1,
    },
    {
      short: "omni",
      long: "Omni",
      num_ch: 1,
    },
    {
      short: "w-of-m",
      long: "Words of Mormon",
      num_ch: 1,
    },
    {
      short: "mosiah",
      long: "Mosiah",
      num_ch: 29,
    },
    {
      short: "alma",
      long: "Alma",
      num_ch: 63,
    },
    {
      short: "hel",
      long: "Helaman",
      num_ch: 16,
    },
    {
      short: "3-ne",
      long: "3 Nephi",
      num_ch: 30,
    },
    {
      short: "4-ne",
      long: "4 Nephi",
      num_ch: 1,
    },
    {
      short: "morm",
      long: "Mormon",
      num_ch: 9,
    },
    {
      short: "ether",
      long: "Ether",
      num_ch: 15,
    },
    {
      short: "moro",
      long: "Moroni",
      num_ch: 10,
    },
  ]
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
