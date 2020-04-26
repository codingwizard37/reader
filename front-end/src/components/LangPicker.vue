<template>
<div class="lang-picker bg-light">
  <div class="dropdown-container">
    <b-dropdown class="lang-dropdown" variant="outline-secondary" v-bind:text="lhsLangText">
      <b-dropdown-item v-for="lang in languageList" v-bind:key="lang._id" v-bind:active="isCurrLHSLang(lang)" v-on:click="updateLhsLangText(lang)">
        {{ lang.lang_long }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
  <div class="button-container">
    <b-button variant="secondary" class="text-light" v-on:click='switchLangs()'>
      <font-awesome-icon :icon="['fas', 'exchange-alt']" />
    </b-button>
  </div>
  <div class="dropdown-container">
    <b-dropdown class="lang-dropdown" variant="outline-secondary" v-bind:text="rhsLangText" right>
      <b-dropdown-item v-for="lang in languageList" v-bind:key="lang._id" v-bind:active="isCurrRHSLang(lang)" v-on:click="updateRhsLangText(lang)">
        {{ lang.lang_long }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
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
      this.$root.updateBothLangs();
    },
    updateRhsLangText(lang) {
      this.rhsLangText = lang.lang_long;
      this.$root.setRhsLang(lang);
      this.$root.updateBothLangs();
    },
    isCurrRHSLang(lang) {
      return this.rhsLang !== null && lang.lang_short === this.rhsLang.lang_short;
    },
    isCurrLHSLang(lang) {
      return this.lhsLang !== null && lang.lang_short === this.lhsLang.lang_short;
    },
    switchLangs() {
      if (this.lhsLang != null && this.rhsLang != null) {
        let tempLang = this.lhsLang;
        this.updateLhsLangText(this.rhsLang);
        this.updateRhsLangText(tempLang);
      }
    }
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

<style scoped>
.lang-picker {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  /* justify-content: space-evenly; */
}

.dropdown-container {
  display: flex;
  justify-content: center;
  width: 45%
}

.button-container {
  display: flex;
  justify-content: center;
  width: 10%
}
</style>
