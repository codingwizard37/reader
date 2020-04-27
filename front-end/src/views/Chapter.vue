<template>
<div class="chapter">
  <LangPicker />
  <div v-if="lhsChapter != null && rhsChapter != null">
    <div class="nav-buttons mb-2 px-1 bg-light">
      <b-button variant="secondary-outline" v-if="!(this.lhsChapter.meta.book == '1-ne' && this.lhsChapter.meta.ch_num == 1)" @click="loadPrevChapter()" :to="getPrevChapterLink()">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </b-button>
      {{ bookName }}
      <b-button variant="secondary-outline" v-if="!(this.lhsChapter.meta.book == 'moro' && this.lhsChapter.meta.ch_num == 10)" @click="loadNextChapter()" :to="getNextChapterLink()">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </b-button>
    </div>
    <Header />
    <b-container class="verse-container">
      <b-row v-for="(verse, index) in lhsChapter.verses" v-bind:key="index" class="verse">
        <b-col>{{ lhsChapter.verses[index] }}</b-col>
        <b-col>{{ rhsChapter.verses[index] }}</b-col>
      </b-row>
    </b-container>
    <div class="nav-buttons px-1">
      <b-button variant="secondary-outline" v-if="!(this.lhsChapter.meta.book == '1-ne' && this.lhsChapter.meta.ch_num == 1)" @click="loadPrevChapter()" :to="getPrevChapterLink()">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
        {{ getPrevChapterString() }}
      </b-button>
      <b-button variant="secondary-outline" v-if="!(this.lhsChapter.meta.book == 'moro' && this.lhsChapter.meta.ch_num == 10)" @click="loadNextChapter()" :to="getNextChapterLink()">
        {{ getNextChapterString() }}
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </b-button>
    </div>
  </div>
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
    },
    bookName: function() {
      return this.$root.$data.books.find((item) => item.short === this.lhsChapter.meta.book).long;
    }
  },
  components: {
    LangPicker,
    Header
  },
  methods: {
    loadPrevChapter() {
      let meta = this.getPrevChapter(this.lhsChapter.meta.book, this.lhsChapter.meta.ch_num);
      scroll(0, 0);
      this.$root.updateBothChapters(meta);

    },
    getPrevChapterLink() {
      let meta = this.getPrevChapter(this.lhsChapter.meta.book, this.lhsChapter.meta.ch_num);
      // normal return type
      if (meta === null) {
        return null;
      } else {
        return {
          name: 'Chapter',
          params: {
            book: meta.book_short,
            chapter: meta.chapter
          }
        }
      }
    },
    getPrevChapterString() {
      let meta = this.getPrevChapter(this.lhsChapter.meta.book, this.lhsChapter.meta.ch_num);
      if (meta !== null) {
        return meta.book_long + " " + meta.chapter;
      }
    },
    getPrevChapter(book, chapter) {
      let index = this.$root.$data.books.findIndex((item) => item.short === book);

      if (chapter !== 1) {
        book = this.$root.$data.books[index];
        return {
          book_long: book.long,
          book_short: book.short,
          chapter: chapter - 1
        };
      } else if (book !== '1-ne' && chapter === 1) {
        book = this.$root.$data.books[index - 1];
        return {
          book_long: book.long,
          book_short: book.short,
          chapter: book.num_ch
        };
      } else if (book === '1-ne' && chapter === 1) {
        return null;
      }
    },

    loadNextChapter() {
      let meta = this.getNextChapter(this.lhsChapter.meta.book, this.lhsChapter.meta.ch_num);
      this.$root.updateBothChapters(meta);
      scroll(0, 0);

    },
    getNextChapterLink() {
      let meta = this.getNextChapter(this.lhsChapter.meta.book, this.lhsChapter.meta.ch_num);
      // normal return type
      if (meta === null) {
        return null;
      } else {
        return {
          name: 'Chapter',
          params: {
            book: meta.book_short,
            chapter: meta.chapter
          }
        }
      }
    },
    getNextChapterString() {
      let meta = this.getNextChapter(this.lhsChapter.meta.book, this.lhsChapter.meta.ch_num);
      if (meta !== null) {
        return meta.book_long + " " + meta.chapter;
      }
    },
    getNextChapter(book, chapter) {
      let index = this.$root.$data.books.findIndex((item) => item.short === book);
      book = this.$root.$data.books[index];
      console.log(book);

      if (chapter !== book.num_ch) {
        return {
          book_long: book.long,
          book_short: book.short,
          chapter: chapter + 1
        };
      } else if (book !== 'moro' && chapter === book.num_ch) {
        book = this.$root.$data.books[index + 1];
        return {
          book_long: book.long,
          book_short: book.short,
          chapter: 1
        };
      } else if (book === 'moro' && chapter === 10) {
        return null;
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');

.verse-container {
  font-family: 'Noto Serif', serif;
}

.verse {
  border-bottom: 1px solid grey;
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
