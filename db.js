const { query } = require("express");
const mysql = require("mysql");
const dbConfig = require("./db.config");
const jsonExtractor = require('./extractores/JSONtoSQL')
const csvextractor = require('./extractores/CSVtoSQL')
const xmlextractor = require('./extractores/XMLtoJSON')
const queryBusqueda = require('./ScriptsJS_HTML/ScriptsConsulta/queryBusqueda')

  function loadEus(req, res){
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
        connection.query(queryToDb[i], (err, result) => {
          if(err){
            throw err;
          }
        })
        
      }
      
      connect.release();
      return res.status(200).send({
        message: 'ok'
      })
    })
  }

  function loadCat(req, res){
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
        connection.query(queryToDb[i], (err, result) => {
          if(err){
            throw err;
          }
        })
      }
      
      connect.release();
      return res.status(200).send({
        message: 'ok'
      })
    });
  }

  function loadCv(req, res){
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
        connection.query(queryToDb[i], (err, result) => {
          if(err){
            throw err;
          }  
        }) 
      }
      connect.release();
      return res.status(200).send({
        message: 'OK'
      })
    });
  }

  function searchDB(req, res){
    let parametros = cleanParams(req.params);
    let enLocalidad = parametros.enLocalidad;
    let codigoPostal = parametros.codigoPostal;
    let provincia = parametros.provincia;
    let tipo = parametros.tipo;
    let connection = mysql.createPool({
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DB
    });
    let query = queryBusqueda.definirQuery(enLocalidad, codigoPostal, provincia , tipo);
    connection.getConnection((error, connect) => {
      if(error){
        throw error;
      }
      connection.query(query, (err, result) => {
        if(err){
          throw err;
        }
        connect.release();
        return res.status(200).send({
          message: result
        })
      })
      
    });

  }

  function cleanDb(req, res){
    let connection = mysql.createPool({
      host: dbConfig.HOST,
      port: dbConfig.PORT,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DB
    });
    let query = 'DELETE FROM biblioteca;'
    connection.getConnection((error, connect) => {
      if(error){
        throw error
      }
      connection.query(query, (err, result) => {
        if(err){
          throw error
        }
        return res.status(200).send({
          message: 'chupame un pie'
        })
      })
      connect.release();
    });
    
  }

  function cleanParams(params){
    let enLocalidad = params.enLocalidad.substring(12)
    let codigoPostal = params.codigoPostal.substring(13)
    let provincia = params.provincia.substring(10)
    let tipo = params.tipo.substring(5)
    
    let finalParams = {
      enLocalidad: enLocalidad,
      codigoPostal: codigoPostal,
      provincia: provincia,
      tipo: tipo
    }
    return finalParams;
  }

  module.exports = {
    loadCat,
    loadCv,
    loadEus,
    cleanDb,
    searchDB
  }