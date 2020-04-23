<template>
<div class="chapter">
  <LangPicker />
  <Header v-if="lhsChapter != null && rhsChapter != null" />
    <b-container v-if="lhsChapter != null && rhsChapter != null">
      <b-row v-for="(verse, index) in lhsChapter.verses" v-bind:key="index" class="verse">
        <b-col>{{ lhsChapter.verses[index] }}</b-col>
        <b-col>{{ rhsChapter.verses[index] }}</b-col>
      </b-row>
    </b-container>
</div>
</template>

<script>
import LangPicker from '@/components/LangPicker.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Chapter',
  created() {
    this.$root.updateBothLangs();
  },
  computed: {
    lhsChapter: function() {
      return this.$root.$data.user.lhsChapter;
    },
    rhsChapter: function() {
      return this.$root.$data.user.rhsChapter;
    }
  },
  components: {
    LangPicker,
    Header
  },
}
</script>

<style scoped>
.verse {
  border-bottom: 1px solid grey;
}
</style>
