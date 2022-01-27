'use strict';

const csv = './Fuentes_de_datos/Archivos_demo/CV.csv'
const fs = require('fs')
let data, json;
let nombre, tipo, direccion, codigoPostal, longitud, latitud, telefono, email, descripcion, codLocalidad;
let query = [];

function excelToJson(){
    data = fs.readFileSync(csv, 'utf8')
    let lines = data.split('\n')
    let headers = lines[0].split(";");
    let result = [];
    
    for(let i=1;i<lines.length;i++){

        let obj = {};
        let currentline=lines[i].split(";");
  
        for(let j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
        fs.writeFileSync('./resultJson/cv.json', JSON.stringify(result))
    }
    return result;
}

function jsonToQuery(){
    json = excelToJson()
    json.pop()
    console.log(json)
    for(let i = 0; i<json.length; i++){
        nombre = "'" + json[i].NOMBRE+"'";
        tipo = "'"+json[i].TIPO+"'";
        direccion = "'"+json[i].DIRECCION+"'";
        codigoPostal ="'"+ json[i].CP+"'";
        longitud = ""+null+"";
        latitud = ""+null+"";
        telefono = "'"+json[i].TELEFONO+"'";
        email = "'"+json[i].EMAIL+"'";
        codLocalidad = "'"+json[i].COD_PROVINCIA + json[i].COD_MUNICIPIO+"'";
        descripcion = "'"+json[i].DESC_CARACTER+"'";
        query.push("INSERT INTO biblioteca (nombre, tipo, direccion, codigoPostal, longitud, latitud, telefono, email, descripcion, enLocalidad) VALUES(" +
        nombre + "," + tipo + "," + direccion + "," + codigoPostal + "," + longitud + "," + latitud + "," + telefono + "," + email + "," + descripcion + "," + "(SELECT codigo FROM localidad WHERE codigo = " + codLocalidad + "));")
    }
    return query;
}

module.exports = {
    excelToJson,
    jsonToQuery
}