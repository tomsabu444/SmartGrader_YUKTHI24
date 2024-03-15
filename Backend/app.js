const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is Running !`);
});
