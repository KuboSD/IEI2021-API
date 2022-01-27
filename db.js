const { query } = require("express");
const mysql = require("mysql");
const dbConfig = require("./db.config");
const jsonExtractor = require('./extractores/JSONtoSQL')
const queryToLocalidades = require('./extractores/queryBusqueda')
const csvextractor = require('./extractores/CSVtoSQL')
const xmlextractor = require('./extractores/XMLtoJSON')

  function loadEus(){
    let connection = mysql.createPool({
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DB
    });
    queryToDb = jsonExtractor.readJson();
    connection.getConnection((error, connect) => {
      for(let i in queryToDb){
        connection.query(queryToDb[i], (err) => {
          if(err){
            throw err;
          }
        })
      }
      connect.release();
    })
  }

  function loadCat(){
    let connection = mysql.createPool({
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DB
    });
    let queryToDb = xmlextractor.queryCAT();
    connection.getConnection((error, connect) => {
      if(error){
        throw error;
      }
      for(let i in queryToDb){
        connection.query(queryToDb[i], (err) => {
          if(err){
            throw err;
          }
        })
      }
      connect.release();
    });
  }

  function loadCv(){
    let connection = mysql.createPool({
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DB
    });
    let queryToDb = csvextractor.jsonToQuery();
    connection.getConnection((error, connect) => {
      if(error){
        throw error;
      }
      for(let i in queryToDb){
        connection.query(queryToDb[i], (err) => {
          if(err){
            throw err;
          }
        }) 
      }
      connect.release();
    });
  }

  function searchDB(enLocalidad, codigoPostal, provincia , tipo){
    let connection = mysql.createPool({
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DB
    });
    console.log('hola1')
    let queryToDb = queryToLocalidades.definirQuery(enLocalidad, codigoPostal, provincia , tipo);
    connection.getConnection((error, connect) => {
      if(error){
        throw error;
      }
      connection.query(query, (err) => {
        if(err){
          throw err;
        }
        console.log('hola2')
      })
      connect.release();
    });
  }

  function cleanDb(){
    let connection = mysql.createPool({
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DB
    });
    console.log('hola1')
    let query = 'DELETE FROM biblioteca;'
    connection.getConnection((error, connect) => {
      if(error){
        throw error;
      }
      connection.query(query, (err) => {
        if(err){
          throw err;
        }
        console.log('hola2')
      })
      connect.release();
    });
  }

  module.exports = {
    loadCat,
    loadCv,
    loadEus,
    cleanDb,
    searchDB
  }