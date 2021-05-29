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

const videos = require("./routes/getVideosDataBase.router.js");
const users = require("./routes/User.router.js");
const playlist = require("./routes/playlist.router.js");

initializeDBConnection();

app.get("/", videos);
app.use("/login", users);
app.use("/watchLater", users);
app.use("/watchLater", users);
app.use("/createUserPlaylist", playlist);
app.use("/createUserPlaylist", playlist);

app.use(errorHandler);
app.use(routeNotFound);

// populateVideosDataBase();

app.listen(process.env.PORT || 5503, () => {
  console.log("Server Started :white_check_mark:");
});
