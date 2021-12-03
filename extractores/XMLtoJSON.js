var convert = require('xml-js');
const fs = require('fs');

function XMLtoJSON(){
    var xmlString = fs.readFileSync('../Fuentes_de_datos/Archivos_demo/CAT.xml', 'utf8');
    let JSONConverted = convert.xml2json(xmlString, {compact: true, spaces: 4});
    fs.writeFile('CAT.json', JSONConverted, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    return JSON.parse(JSONConverted);
}

function queryCAT(){
    let json = XMLtoJSON();
    let nombre, tipo, direccion, codigopostal, longitud, latitud, telefono, email, descripcion, nombreLocalidad, nombreProvincia, codigoLocalidad, codigoProvincia;
    let query = [];
    let isDuplicated;
    //let catjson = JSON.stringify(json);
    console.log(json.response.row.length);
    console.log(json);
    for(let i = 0; i<json.length; i++){
        for(let j = 0; j<i; j++){
            if(json[i].nom == json[j].nom){
                isDuplicated = true;
            }
        }
        if(!isDuplicated){
            nombre = "'" + json[i].nom+"'";
            tipo = "'" + json[i].categoria+"'";
            direccion = "'" + json[i].via+"'";
            codigopostal = "'" + json[i].cpostal+"'";
            longitud = "'" + json[i].longitud+"'";
            latitud = "'" + json[i].latitud+"'";
            telefono = "'" + json[i].telefon1+"'";
            email = "'" + json[i].email+"'";
            descripcion = "'" + json[i].propietats+"'";
            nombreLocalidad = "'" + json[i].codi_municipi+"'";
            query[i] = "INSERT INTO biblioteca (nombre, tipo, direccion, codigoPostal, longitud, latitud, telefono, email, descripcion, enLocalidad) VALUES(" +
            nombre + "," + tipo + "," + direccion + "," + codigopostal + "," + longitud + "," + latitud + "," + telefono + "," + email + "," + descripcion + "," + "(SELECT codigo FROM localidad WHERE nombre = " + nombreLocalidad + "));"
        }
    }
    return query;
 }
 module.exports = {queryCAT};