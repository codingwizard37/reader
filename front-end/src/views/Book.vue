<template>
<div class="book">
  <div class="ch-list p-4">
    <b-button
        class="ch-button"
        v-for="n in getNumChapters()"
        v-bind:key="n"
        variant="outline-secondary"
        :to="{ name: 'Chapter', params: {chapter: n} }">
      {{ n }}
    </b-button>
  </div>
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

<style scoped>
.ch-list {
  display: flex;
  flex-wrap: wrap;
}

.ch-button {
  width: 3rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
