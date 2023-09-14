require("dotenv").config();
const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
