<template>
<div class="home">
  <div class="header flex-column p-3">
    <h1 class="m-auto">Book of Mormon</h1>
    <h3 class="m-auto text-white">Parallel Reader</h3>
  </div>
  <div class="page mx-auto bg-light">
    <a href="/pages/languages.html">
      <h5 class="my-3">Language selection:</h5>
    </a>
    <div class="current-lang my-3">
      <div class="dropdown">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Native
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">English</a>
          <a class="dropdown-item" href="#">Deutsch</a>
          <a class="dropdown-item" href="#">Español</a>
        </div>
      </div>
      <i class="material-icons">compare_arrows</i>
      <div class="dropdown">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Foreign
        </button>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">English</a>
          <a class="dropdown-item" href="#">Deutsch</a>
          <a class="dropdown-item" href="#">Español</a>
        </div>
      </div>
    </div>

    <div class="container-fluid my-3">
      <div class="row no-gutters">
        <div class="col">
          <a href="pages/books/1nephi/ch-list.html">
            <div class="card text-center rounded-0">
              <img class="card-img-top rounded-0" src="/images/book-covers/1nephi.jpeg" alt="lehi and family in the wilderness">
              <div class="card-body">
                <h5 class="card-title">1 Nephi</h5>
                <p class="card-text">Now available</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col">
          <!-- <a href="#" class="disabled"> -->
          <div class="card text-center text-muted rounded-0">
            <img class="card-img-top rounded-0" src="/images/book-covers/2nephi.jpeg" alt="lehi blessing his children">
            <div class="card-body">
              <h5 class="card-title">2 Nephi</h5>
              <p class="card-text">Coming soon!</p>
            </div>
          </div>
          <!-- </a> -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      chapters: []
    };
  },
  computed: {
    langList() {
      return this.$root.$data.languages.list;
    }
  },
  created() {
    this.getChapters();
  },
  methods: {
    async getChapters() {
      try {
        let response = await axios.get("/api/chapters")
        this.chapters = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
/* bom color #001738 */
/* gold color #FEC68B */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.material-icons.md-18 {
  font-size: 18px;
}

.material-icons.md-24 {
  font-size: 24px;
}

.material-icons.md-36 {
  font-size: 36px;
}

.material-icons.md-48 {
  font-size: 48px;
}

.navbar {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
}

.page {
  font-family: 'Open Sans', sans-serif;
}

.page h2 {
  margin: 16px;
}

.footer {
  border-top: 1px solid #6c757d;
  justify-content: center;
}

.github,
.twitter {
  filter: invert(1);
  opacity: .75;
}

/* homepage */
.current-lang {
  display: flex;
  /* border: 1px solid red; */
  justify-content: space-evenly;
  align-content: center;
}

.current-lang i {
  padding-top: 7px;
  padding-bottom: 7px;
}

.card {
  height: 100%;
}

.header {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  color: #FEC68B;
  text-align: center;
  background-color: #001738;
}

.page h5 {
  text-align: center;
}

/* Tablet Styles */
@media only screen and (min-width: 768px) {
  .page {
    width: 75%;
  }
}
/* Desktop Styles */
@media only screen and (min-width: 992px) {
  .page {
    width: 50%;
  }
  .chapter {
    width: 75%;
  }
}

</style>
