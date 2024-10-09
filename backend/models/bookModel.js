const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookid: Number,
    bookname: String,
    image: String,
    description: String,
    author: String,
    price: Number,
    publishedYear: Number,
    language: String
});

module.exports = mongoose.model("books", bookSchema);