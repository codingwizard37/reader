<template>
<b-navbar class="navbar" type="dark" toggleable="lg" variant="primary">
  <b-navbar-brand :to="{name: 'Home'}">
    <img class="logo mr-1" src="@/assets/RedSushiLogo-3.svg" alt="Kitten">
    Parallel Reader
  </b-navbar-brand>
  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

  <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
      <b-nav-item v-bind:active="$route.name === 'Home'" :to="{name: 'Home'}">
        Home
      </b-nav-item>
      <b-nav-item-dropdown text="Book of Mormon" v-bind:active="$route.name === 'Book' || $route.name === 'Chapter'">
        <b-dropdown-item v-for="(value, index) in this.$root.$data.books" v-bind:key="index" v-bind:active="$route.params.book != undefined && $route.params.book == value.short" :to="{name: 'Book', params: {book: value.short}}">
          {{ value.long }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item v-bind:active="$route.name === 'About'" :to="{name: 'About'}">
        About
      </b-nav-item>
      <b-nav-item v-bind:active="$route.name === 'Contact'" :to="{name: 'Contact'}">
        Contact
      </b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
.logo {
  width: 32px;
}
</style>
