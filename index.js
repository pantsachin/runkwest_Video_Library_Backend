const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Helloooooooo World!!!!");
});

app.listen(process.env.PORT || 5503, () => {
  console.log("Server Started :white_check_mark:");
});
