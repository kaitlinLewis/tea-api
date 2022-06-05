const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

const tea = {
  oolong: {
    type: "black",
    origin: "jungle",
    waterTempCelsius: 90,
    steepTimeSeconds: 180,
    caffinated: false,
    flavourProfile: "nutty, fruity, ",
  },
  matcha: {
    type: "green",
    origin: "China",
    waterTempCelsius: 90,
    steepTimeSeconds: 180,
    caffinated: true,
    flavourProfile: "grassy, fruity ",
  },
  unknown: {
    type: "unknown",
    origin: "unknown",
    waterTempCelsius: 0,
    steepTimeSeconds: 0,
    caffinated: false,
    flavourProfile: "unknown",
  },
};

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const teaName = req.params.name.toLowerCase();
  if (tea[teaName]) {
    res.json(tea[teaName]);
  } else {
    res.json(tea["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
