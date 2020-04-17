<template lang="html">
  <div class="lang-picker">
    <b-row class="m-2">
      <b-col class="justify-content-center">
        <b-dropdown id="native-dropdown" v-bind:text="lhsLangText">
          <b-dropdown-item v-for="lang in languageList" v-bind:key="lang.id" v-on:click="updateLhsLangText(lang, bookParam, chapterParam)">
            {{ lang.long }}
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col class="justify-content-center">
        <b-dropdown id="foreign-dropdown" v-bind:text="rhsLangText" class="mx-auto">
          <b-dropdown-item v-for="lang in languageList" v-bind:key="lang.id" v-on:click="updateRhsLangText(lang, bookParam, chapterParam)">
            {{ lang.long }}
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LangPicker',
  data() {
    return {
      bookParam: this.$route.params.book,
      chapterParam: this.$route.params.chapter
    }
  },
  watched: {
    bookParam: async function(val) {
      console.log(val);
      await this.updateBothLangs(val, this.chapterParam);
    },
    chapterParam: async function(val) {
      await this.updateBothLangs(this.bookParam, val);
    }
  },
  computed: {
    lhsLangText: function() {
      if (this.lhsLang !== "") {
        return this.findLongLang(this.lhsLang);
      } else {
        return "Left-hand Side";
      }
    },
    rhsLangText: function() {
      if (this.rhsLang !== "") {
        return this.findLongLang(this.rhsLang);
      } else {
        return "Right-hand Side";
      }
    },
    lhsLang: function() {
      return this.$root.$data.user.lhsLang;
    },
    rhsLang: function() {
      return this.$root.$data.user.rhsLang;
    },
    languageList: function() {
      return this.$root.$data.languages;
    },
  },
  methods: {
    async updateBothLangs(book, chapter) {
      console.log("updateBothLangs called with params" + book + "and" + chapter)
      await this.updateLhsLangText(this.lhsLang, book, chapter);
      await this.updateRhsLangText(this.rhsLang, book, chapter);
    },
    async updateLhsLangText(lang, book, chapter) {
      this.$root.$data.user.lhsLang = lang.short;
      this.$root.$data.user.lhsChapter = await this.getChapter(lang.short, book, chapter);
      console.log(this.$root.$data.user.lhsChapter);
    },
    async updateRhsLangText(lang, book, chapter) {
      this.$root.$data.user.rhsLang = lang.short;
      this.$root.$data.user.rhsChapter = await this.getChapter(lang.short, book, chapter);
      console.log(this.$root.$data.user.rhsChapter);
    },
    async getChapter(lang, book, chapter) {
      try {
        let response = await axios.get("/api/chapter/" + lang + "/" + book + "/" + chapter + "/");
        console.log(response.data[0]);
        return response.data[0];
      } catch (error) {
        console.log(error);
      }
    },
    findLongLang(shortLang) {
      let longLang = this.$root.$data.languages.find((item) => item.short === shortLang).long;
      console.log(longLang);
      return longLang;
    }
  },
}
</script>

<style lang="css" scoped>
</style>
