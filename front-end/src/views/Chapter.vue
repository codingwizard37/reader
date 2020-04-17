<template>
<div class="Chapter">
  <LangPicker ref="picker"/>
  <div class="verses" v-if="lhsChapter != undefined && rhsChapter != undefined">
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
</div>
</template>

<script>
import LangPicker from '@/components/LangPicker.vue'

export default {
  name: 'Chapter',
  computed: {
    lhsChapter: function() {
      return this.$root.$data.user.lhsChapter;
    },
    rhsChapter: function() {
      return this.$root.$data.user.rhsChapter;
    }
  },
  components: {
    LangPicker
  },
}
</script>
