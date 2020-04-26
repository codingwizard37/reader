import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
// Do the commented part later for About page
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './custom.scss'
import axios from 'axios'

library.add(faChevronRight)
library.add(faExchangeAlt)
// library.add(faFontAwesome)

Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Create global data here
let data = {
  user: {
    lhsLang: null,
    rhsLang: null,
    lhsChapter: null,
    rhsChapter: null
  },
  languages: [],
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
  methods: {
    async getAllLanguages() {
      try {
        let response = await axios.get("/api/lang");
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateBothLangs() {
      if (this.user.lhsLang != null && this.user.rhsLang != null) {
        this.setLhsLang(this.user.lhsLang);
        this.setRhsLang(this.user.rhsLang);
      }
    },
    async setLhsLang(newLangData) {
      this.user.lhsLang = newLangData;
      if (this.$route.params.book != undefined && this.$route.params.chapter != undefined) {
        this.user.lhsChapter = await this.getChapterData(
          this.user.lhsLang.lang_short,
          this.$route.params.book,
          this.$route.params.chapter)
      }
    },
    async setRhsLang(newLangData) {
      this.user.rhsLang = newLangData;
      if (this.$route.params.book != undefined && this.$route.params.chapter != undefined) {
        this.user.rhsChapter = await this.getChapterData(
          this.user.rhsLang.lang_short,
          this.$route.params.book,
          this.$route.params.chapter)
      }
    },
    async getChapterData(lang, book, chapter) {
      try {
        let response = await axios.get("/api/chapter/" + lang + "/" + book + "/" + chapter + "/");
        return response.data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.languages = await this.getAllLanguages();
  },
  render: h => h(App)
}).$mount('#app')
