require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));


module.exports = mongoose;
