<template lang="html">
<div class="contact">
  <div class="intro bg-light p-2 text-center text-dark">
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
    <div class="hc-button">
      <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/MP0NqyA">
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a hot chocolate">
        <span class="text-black" style="margin-left:15px;font-size:19px !important;">Buy me a hot chocolate</span>
      </a>
    </div>
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

.hc-button {
  display: flex;
  justify-content: center;
}

.bmc-button img {
  height: 34px !important;
  width: 35px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  border: none !important;
  vertical-align: middle !important;
}

.bmc-button {
  padding: 7px 10px 7px 10px !important;
  line-height: 35px !important;
  height: 51px !important;
  min-width: 217px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  color: #ffffff !important;
  background-color: #423a2c !important;
  border-radius: 5px !important;
  border: 1px solid transparent !important;
  padding: 7px 10px 7px 10px !important;
  font-size: 20px !important;
  letter-spacing: -0.08px !important;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  margin: 0 auto !important;
  font-family: 'Open Sans', sans-serif !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -o-transition: 0.3s all linear !important;
  -webkit-transition: 0.3s all linear !important;
  -moz-transition: 0.3s all linear !important;
  -ms-transition: 0.3s all linear !important;
  transition: 0.3s all linear !important;
}

.bmc-button:hover,
.bmc-button:active,
.bmc-button:focus {
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  text-decoration: none !important;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  opacity: 0.85 !important;
  color: #ffffff !important;
}
</style>
