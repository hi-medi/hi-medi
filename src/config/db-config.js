require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.log(e));

module.exports = mongoose;
