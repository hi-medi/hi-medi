require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const mongoose = require("./src/config/db-config");
const HttpStatus = require("http-status");

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    const error = new Error("DB 연결에 실패하였습니다.");
    next(error);
  }
  next();
});

app.use(express.static(path.resolve(__dirname, "./client/build")));

const mandaraRouter = require("./src/routes/mandara-route");
app.use("/api/v1/mandara", mandaraRouter);

app.use((err, req, res, next) => {
  const statusCode = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
  res.status(statusCode).send({
    status: statusCode,
    message: err.message,
    links: err.links,
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(process.env.PORT, () => console.log("Listening on port 9000!"));
