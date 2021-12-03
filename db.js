const { query } = require("express");
const mysql = require("mysql");
const dbConfig = require("./db.config");
const jsonExtractor = require('./extractores/JSONtoSQL')
const queryToLocalidades = require('./extractores/queryLocalidad')
let queryToDb;

// Create a connection to the database
const connection = mysql.createPool({
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.getConnection(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
    queryToDb = jsonExtractor.readJson();
    for(let i in queryToDb){
      connection.query(queryToDb[i], (err) => {
        if(err){
          throw err;
        }
      })
    }
  });
