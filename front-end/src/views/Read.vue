<template>
<div class="read">
  <div class="books mx-4">
    <p v-for="(value, index) in this.$root.$data.books" v-bind:key="index">
      <router-link :to="{name: 'Book', params: {book: value.short}}">{{ value.long }}</router-link>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Read',
}
</script>
