const express = require("express");
const cors = require("cors");
const db = require("./db")
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.post("/loadcv", (req, res) => {
  db.loadCv();
  return res.status(200).send({
    message: 'Bibliotecas Comunidad Valenciana subidas correctamente'
  })
});

app.post("/loadeus", (req, res) => {
  db.loadEus();
  return res.status(200).send({
    message: 'Bibliotecas Euskadi subidas correctamente'
  })
});

app.post("/loadcat", (req, res) => {
  db.loadCat();
  res.status(200).send({
    message: 'Bibliotecas Cataluña subidas correctamente'
  })
});

require("./routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});