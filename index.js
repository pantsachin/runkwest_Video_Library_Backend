const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const { initializeDBConnection } = require("./database/database.connect.js");
const { populateVideosDataBase } = require("./utils/utils.js");
const { errorHandler } = require("./middlewares/errorHandler.js");
const { routeNotFound } = require("./middlewares/routeNotFound.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

initializeDBConnection();

app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

app.use(errorHandler);
app.use(routeNotFound);

populateVideosDataBase();

app.listen(process.env.PORT || 5503, () => {
  console.log("Server Started :white_check_mark:");
});
