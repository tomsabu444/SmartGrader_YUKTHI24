const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const cors =  require("cors");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Valuate.ai");
});


async function connectDB() {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");
}


connectDB();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is Running !`);
});
