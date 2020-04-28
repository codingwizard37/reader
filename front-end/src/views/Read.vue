<template>
<div class="read">
  <b-list-group
      v-for="(value, index) in this.$root.$data.books"
      v-bind:key="index"
      class="list-group-flush"
      variant="info">
    <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        :to="{name: 'Book', params: {book: value.short}}">
      {{ value.long }}
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
export default {
  name: 'Read',
  methods: {
    getNumChapters: function(shortName) {
      let numCh = this.$root.$data.books.find((item) => item.short === shortName).num_ch;
      return numCh;
    },
  }
}
</script>

<style scoped>

</style>
