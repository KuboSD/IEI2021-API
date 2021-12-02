const { query } = require("express");
const json = require("../Fuentes de datos/Euskadi/bibliotecas.json")

function readJson(){
    let nombre, tipo, direccion, codigopostal, longitud, latitud, telefono, email, descripcion;
    let query = [];
    let isDuplicated;
    for(let i = 0; i<json.length; i++){
        for(let j = 0; j<i; j++){
            if(json[i].documentName == json[j].documentName){
                isDuplicated = true;
            }
        }
        if(!isDuplicated){
            nombre = "'" + json[i].documentName+"'";
            tipo = "'" + json[i].documentName+"'";
            direccion = "'" + json[i].address+"'";
            codigopostal = "'" + json[i].postalcode+"'";
            longitud = "'" + json[i].lonwgs84+"'";
            latitud = "'" + json[i].latwgs84+"'";
            telefono = "'" + json[i].phone+"'";
            email = "'" + json[i].email+"'";
            descripcion = "'" + json[i].documentDescription+"'";
            query[i] = "INSERT INTO biblioteca (nombre, tipo, direccion, codigoPostal, longitud, latitud, telefono, email, descripcion, enLocalidad) VALUES(" +
            nombre + "," + tipo + "," + direccion + "," + codigopostal + "," + longitud + "," + latitud + "," + telefono + "," + email + "," + descripcion + ", NULL);"
        }
    }
    return query;
}

module.exports = {
    readJson
}