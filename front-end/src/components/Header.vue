<template>
  <div class="header">
    <b-container>
      <b-row class="chapter-heading text-center font-weight-bold heading" v-if="lhsChapter.header.title != undefined">
        <b-col v-bind:class="{ rtl: lhsChapter.meta.lang === 'pes'} " class="text-center">{{ lhsChapter.header.title }}</b-col>
        <b-col v-bind:class="{ rtl: rhsChapter.meta.lang === 'pes'} " class="text-center">{{ rhsChapter.header.title }}</b-col>
      </b-row>
      <b-row class="text-center font-italic heading" v-if="lhsChapter.header.subtitle != undefined">
        <b-col v-bind:class="{ rtl: lhsChapter.meta.lang === 'pes'} " class="text-center">{{ lhsChapter.header.subtitle }}</b-col>
        <b-col v-bind:class="{ rtl: rhsChapter.meta.lang === 'pes'} " class="text-center">{{ rhsChapter.header.subtitle }}</b-col>
      </b-row>
      <b-row class="heading" v-if="lhsChapter.header.intro != undefined">
        <b-col v-bind:class="{ rtl: lhsChapter.meta.lang === 'pes'} ">{{ lhsChapter.header.intro }}</b-col>
        <b-col v-bind:class="{ rtl: rhsChapter.meta.lang === 'pes'} ">{{ rhsChapter.header.intro }}</b-col>
      </b-row>
      <b-row class="chapter-heading heading text-center font-weight-bold" v-if="lhsChapter.header.title_number != undefined">
        <b-col v-bind:class="{ rtl: lhsChapter.meta.lang === 'pes'} " class="text-center">{{ lhsChapter.header.title_number }}</b-col>
        <b-col v-bind:class="{ rtl: rhsChapter.meta.lang === 'pes'} " class="text-center">{{ rhsChapter.header.title_number }}</b-col>
      </b-row>
      <b-row class="heading" v-if="lhsChapter.header.study_intro != undefined">
        <b-col v-bind:class="{ rtl: lhsChapter.meta.lang === 'pes'} ">{{ lhsChapter.header.study_intro }}</b-col>
        <b-col v-bind:class="{ rtl: rhsChapter.meta.lang === 'pes'} ">{{ rhsChapter.header.study_intro }}</b-col>
      </b-row>
      <b-row class="heading font-italic" v-if="lhsChapter.header.study_summary != undefined">
        <b-col v-bind:class="{ rtl: lhsChapter.meta.lang === 'pes'} ">{{ lhsChapter.header.study_summary }}</b-col>
        <b-col v-bind:class="{ rtl: rhsChapter.meta.lang === 'pes'} ">{{ rhsChapter.header.study_summary }}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    lhsChapter: function() {
      return this.$root.$data.user.lhsChapter;
    },
    rhsChapter: function() {
      return this.$root.$data.user.rhsChapter;
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
}
.chapter-heading {
  font-size: 1.2rem;
}

.heading {
  border-bottom: 1px solid #adb5bd;
  font-family: 'Noto Serif', serif;
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
}

.rtl {
  direction: rtl;
  text-align: right;
}
</style>
