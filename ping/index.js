const express = require("express");
const axios = require("axios");

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("ping");
});

app.get("/pong", async (req, res) => {
  const data = await axios.get("http://pong:3000/");
  res.send(data.data);
});

app.listen(PORT, `PING is listening on ${PORT}`);
