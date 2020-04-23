<template lang="html">
  <div class="lang-picker">
    <b-row class="m-2">
      <b-col class="justify-content-center">
        <b-dropdown id="native-dropdown" v-bind:text="lhsLangText">
          <b-dropdown-item v-for="lang in languageList" v-bind:key="lang._id" v-on:click="updateLhsLangText(lang)">
            {{ lang.lang_long }}
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col class="justify-content-center">
        <b-dropdown id="foreign-dropdown" v-bind:text="rhsLangText" class="mx-auto">
          <b-dropdown-item v-for="lang in languageList" v-bind:key="lang._id" v-on:click="updateRhsLangText(lang)">
            {{ lang.lang_long }}
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'LangPicker',
  data() {
    return {
      lhsLangText: "Left-hand Side",
      rhsLangText: "Right-hand Side"
    }
  },
  computed: {
    lhsLang: function() {
      return this.$root.$data.user.lhsLang;
    },
    rhsLang: function() {
      return this.$root.$data.user.rhsLang;
    },
    languageList: function() {
      return this.$root.$data.languages;
    },
  },
  methods: {
    updateLhsLangText(lang) {
      this.lhsLangText = lang.lang_long;
      this.$root.setLhsLang(lang);
    },
    updateRhsLangText(lang) {
      this.rhsLangText= lang.lang_long;
      this.$root.setRhsLang(lang);
    },
  },
  created() {
    if (this.$root.$data.user.lhsLang != null) {
      this.lhsLangText = this.$root.$data.user.lhsLang.lang_long;
    }
    if (this.$root.$data.user.rhsLang != null) {
      this.rhsLangText = this.$root.$data.user.rhsLang.lang_long;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
