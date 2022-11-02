const express = require("express");
const axios = require("axios");

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("pong");
});

app.get("/ping", async (req, res) => {
  const data = await axios.get("http://ping:3000/");
  res.send(data.data);
});

app.listen(PORT, () => console.log(`PONG is listening on ${PORT}`));
