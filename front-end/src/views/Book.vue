<template>
<div class="book">

  <p v-for="n in getNumChapters()" v-bind:key="n">
    <router-link class="m-4" :to="{ name: 'Chapter', params: {chapter: n} }">{{ n }}</router-link>
  </p>
</div>
</template>

<script>
export default {
  name: 'Book',
  methods: {
    getNumChapters: function() {
      let shortName = this.$route.params.book;
      let numCh = this.$root.$data.books.find((item) => item.short === shortName).num_ch;
      return numCh;
    },
  }
}
</script>
