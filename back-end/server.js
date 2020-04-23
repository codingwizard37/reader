const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://jake:nobodyworshipdullexpression@157.245.137.233:27017/reader', {
  useNewUrlParser: true
});

// Create a scheme for Book of Mormon Chapters
const chapterSchema = new mongoose.Schema({
  lang_short: String,
  lang_long: String
});

// Create a scheme for Book of Mormon Chapters
const langSchema = new mongoose.Schema({
  header: {
    title: String,
    subtitle: String,
    intro: String,
    title_number: String,
    study_intro: String,
    study_summary: String,
  },
  verses: [{
    type: String
  }],
  meta: {
    lang: String,
    book: String,
    ch_num: Number
  }
});

// Create a model for items in the museum.
const Chapter = mongoose.model('Chapter', chapterSchema);
const Language = mongoose.model('Language', langSchema);

// Get a list of all of the chapters in the database.
app.get('/api/chapters', async (req, res) => {
  try {
    let items = await Chapter.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/chapter/:lang/:book/:ch_num', async (req, res) => {
  try {
    let chapter = await Chapter.find({
      meta: {
        lang: req.params.lang,
        book: req.params.book,
        ch_num: Number(req.params.ch_num)
      }
    });
    res.send(chapter);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/lang/", async (req, res) => {
  try {
    let langs = await Language.find();
    res.send(langs);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})



app.listen(3001, () => console.log('Server listening on port 3001!'));
