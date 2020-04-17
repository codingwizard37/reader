<template>
  <div class="home">
    <LangPicker />
    <Read />
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
</style>
