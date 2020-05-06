const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Exercise = require("./exerciseModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGOD_URI ||  "mongodb://localhost/exercisedb", { useNewUrlParser: true });

app.post("/submit", (req, res) => {
    Exercise.create(body)
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})
