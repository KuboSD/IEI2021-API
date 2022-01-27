const express = require("express");
const db = require("./db")
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
  let result = db.loadCv();
  setTimeout(()=>{
    console.log(result)
    return res.status(200).send({
      message: result
    })
  },50)
});

app.get("/loadeus", (req, res) => {
  let result = db.loadEus();
  setTimeout(()=>{
    console.log(result)
    return res.status(200).send({
      message: result
    })
  },50)
});

app.get("/loadcat", (req, res) => {
  let result = db.loadCat();
  setTimeout(()=>{
    console.log(result)
    return res.status(200).send({
      message: result
    })
  },50)
});

app.get("/cleandb", (req, res) => {
  result = db.cleanDb();
  setTimeout(()=>{
    console.log(result)
    return res.status(200).send({
      message: result
    })
  },50)
})


// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});