<template>
<div class="book">
  <p v-for="n in getNumChapters()" v-bind:key="n" v-on:click="updateBothLangs(n)">
    <router-link class="m-4" :to="{ name: 'Chapter', params: {chapter: n} }">{{ n }}</router-link>
  </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Book',
  methods: {
    getNumChapters: function() {
      let shortName = this.$route.params.book;
      let numCh = this.$root.$data.books.find((item) => item.short === shortName).num_ch;
      return numCh;
    },
    async updateBothLangs(chapter) {
      this.$root.$data.user.lhsChapter = await this.getChapter(this.$root.$data.user.lhsLang, this.$route.params.book, chapter);
      this.$root.$data.user.rhsChapter = await this.getChapter(this.$root.$data.user.rhsLang, this.$route.params.book, chapter);
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
  },
}
</script>
