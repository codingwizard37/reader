<template>
<div id="app">
  <NavBar />
  <b-dropdown id="native-dropdown" v-bind:text="lhsLang" class="m-2">
    <b-dropdown-item v-for="lang in languages" v-bind:key="lang.id" v-on:click="updateLhsLang(lang)">
      {{ lang.long }}
    </b-dropdown-item>
  </b-dropdown>
  <b-dropdown id="foreign-dropdown" v-bind:text="rhsLang" class="m-2">
    <b-dropdown-item v-for="lang in languages" v-bind:key="lang.id" v-on:click="updateRhsLang(lang)">
      {{ lang.long }}</b-dropdown-item>
  </b-dropdown>
  <b-container>
    <b-row v-for="(value, key) in lhsChapter.header" v-bind:key="key">
      <b-col>{{ value }}</b-col>
      <b-col>{{ rhsChapter.header[key] }}</b-col>
    </b-row>
  </b-container>
  <b-container>
    <b-row v-for="(verse, index) in lhsChapter.verses" v-bind:key="index">
      <b-col>{{ lhsChapter.verses[index] }}</b-col>
      <b-col>{{ rhsChapter.verses[index] }}</b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'app',
  data() {
    return {
      lhsLang: "Left-hand Side",
      rhsLang: "Right-hand Side",
      lhsChapter: {},
      rhsChapter: {},
      chapters: [],
      languages: this.$root.$data.languages
    }
  },
  created() {
    this.getChapters();
  },
  components: {
    NavBar
  },
  methods: {
    async getChapters() {
      try {
        let response = await axios.get("/api/chapters");
        this.chapters = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    updateLhsLang: function(lang) {
      this.$root.$data.user.lhsLang = lang.short;
      this.lhsLang = lang.long;
      this.getChapter(lang.short, "lhsChapter");
    },
    updateRhsLang: function(lang) {
      this.$root.$data.user.rhsLang = lang.short;
      this.rhsLang = lang.long;
      this.getChapter(lang.short, "rhsChapter");
    },
    async getChapter(lang, ch) {
      try {
        let response = await axios.get("/api/chapter/" + lang + "/2-ne/1/");
        // console.log(response.data);
        this[ch] = response.data[0];

        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
