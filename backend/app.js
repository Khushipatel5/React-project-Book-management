const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const bookRoute = require("./routes/bookRoute")
const mongoose = require("mongoose");
const cors = require('cors');
app.use(cors());

const connectionstring = "mongodb+srv://khushi:khushi05@cluster0.0epli.mongodb.net/bookstore";

mongoose.connect(connectionstring)
    .then((res) => {
        console.log("cloud db connected");

    })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", bookRoute)

app.listen(8000, (res) => {
    console.log("server connected")
})