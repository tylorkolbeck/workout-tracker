const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// TODO: import mongoose

mongoose.set("debug", true);

const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3000;

const app = express();

// use logging middleware
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public", { extensions: "html" }));

// TODO: create mongodb connection with mongoose

app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
