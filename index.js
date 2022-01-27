const express = require("express");
const db = require("./db");
const busquedaJS = require("./ScriptsJS_HTML/ScriptsConsulta/queryBusqueda");
const app = express();


// parse requests of content-type - application/json
app.use(express.json());
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, email, authorization");
  next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/loadcv", (req, res) => {
  db.loadCv();
  return res.status(200).send({
    message: 'Bibliotecas Comunidad Valenciana subidas correctamente'
  })
});

app.get("/loadeus", (req, res) => {
  db.loadEus();
  return res.status(200).send({
    message: 'Bibliotecas Euskadi subidas correctamente'
  })
});

app.get("/loadcat", (req, res) => {
  db.loadCat();
  res.status(200).send({
    message: 'Bibliotecas Cataluña subidas correctamente'
  })
});

app.get("/cleandb", (req, res) => {
  db.cleanDb();
  return res.status(200).send({
    message: 'BD Limpia'
  });
})

app.get("/search", (req, res) => {
  db.searchDB(busquedaJS.enLocalidad, busquedaJS.codigoPostal, busquedaJS.provincia, busquedaJS.tipo);
  return res.status(200).send({
    message: 'Buscando..'
  })
});


// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});