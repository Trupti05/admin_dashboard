const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const { mainRoute } = require("./App/mainRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(mainRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
mongoose.connect(`mongodb://127.0.0.1:27017/Panel`).then(() => {
  console.log("Connected to MongoDB");
});
app.listen("8000");
console.log("Server started on http://localhost:8000");