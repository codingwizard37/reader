<template>
  <div class="home">
    <LangPicker />
    <Read class="read mx-auto"/>
  </div>
</template>

<script>
import LangPicker from '@/components/LangPicker.vue';
import Read from '@/views/Read.vue';

export default {
  name: 'Home',
  components: {
    Read,
    LangPicker
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* Desktop Styles */
@media only screen and (min-width: 992px) {
  .read {
    width: 60%;
  }
}
</style>
