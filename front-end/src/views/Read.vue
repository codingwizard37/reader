<template>
<div class="read">
    <b-list-group v-for="(value, index) in this.$root.$data.books" v-bind:key="index" class="list-group-flush">
      <b-list-group-item :to="{name: 'Book', params: {book: value.short}}">{{ value.long }}</b-list-group-item>
    </b-list-group>
</div>
</template>

<script>
export default {
  name: 'Read',
}
</script>

<style scoped>

</style>
