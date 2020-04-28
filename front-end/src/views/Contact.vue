<template lang="html">
<div class="contact">
  <div class="intro bg-light p-2 text-center">
    <h2>Contact me:</h2>
  </div>
  <div class="body px-2 mt-1">
    <p class="text-muted font-italic">Is your language missing? Is there a problem with the site? Wanna tell me your favorite scripture?</p>
    <h4>Socials:</h4>
    <b-list-group
        class="list-group-flush mb-2"
        variant="info">
      <b-list-group-item
          class="d-flex justify-content-between align-items-center">
        <a href="mailto:jacobbsearle@gmail.com?subject=Feedback">
          <font-awesome-icon class="logo" :icon="['fas', 'envelope']" />
          jacobbsearle@gmail.com
        </a>
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </b-list-group-item>
      <b-list-group-item
          class="d-flex justify-content-between align-items-center">
        <a href="https://twitter.com/jacobbsearle">
          <font-awesome-icon class="logo" :icon="['fab', 'twitter']" />
          @jacobbsearle
        </a>
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </b-list-group-item>
      <b-list-group-item
          class="d-flex justify-content-between align-items-center">
        <a href="https://github.com/codingwizard37">
          <font-awesome-icon class="logo" :icon="['fab', 'github']" />
          codingwizard37
        </a>
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </b-list-group-item>
    </b-list-group>
    <h4>Feeling Generous?</h4>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');

p,
li {
  font-family: 'Noto Serif', serif;
}

.logo {
  font-size: 1.2rem;
  margin-right: .5rem;
}
</style>
