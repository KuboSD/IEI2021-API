var convert = require('xml-js');
const fs = require('fs');

function XMLtoJSON(){
    var xmlString = fs.readFileSync('/home/alexginbo/Documentos/uni/iei/proyecto_practicas/IEI2021-API/Fuentes_de_datos/Archivos_demo/CAT.xml', 'utf8');
    let JSONConverted = convert.xml2json(xmlString, {compact: true, spaces: 4});
    fs.writeFile('./resultJson/CAT.json.response.row', JSONConverted, (err) => {
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

    for(let i = 0; i<json.response.row.length; i++){
        for(let j = 0; j<i; j++){
            if(json.response.row[i].nom == json.response.row[j].nom){
                isDuplicated = true;
            }
        }
        if(!isDuplicated){
            console.log(json.response.row[i])
            nombre = "'" + json.response.row[i].nom._text+"'";
            tipo = "'" + json.response.row[i].categoria._text+"'";
            direccion = "'" + json.response.row[i].via._text+"'";
            codigopostal = "'" + json.response.row[i].cpostal._text+"'";
            longitud = "'" + json.response.row[i].longitud._text+"'";
            latitud = "'" + json.response.row[i].latitud._text+"'";
            telefono = "'" + json.response.row[i].telefon1._text+"'";
            email = "'" + json.response.row[i].email._text+"'";
            descripcion = "'" + json.response.row[i].propietats._text+"'";
            nombreLocalidad = "'" + json.response.row[i].cpostal._text.slice(0,2)+json.response.row[i].codi_municipi._text+"'";
            query[i] = "INSERT INTO biblioteca (nombre, tipo, direccion, codigoPostal, longitud, latitud, telefono, email, descripcion, enLocalidad) VALUES(" +
            nombre + "," + tipo + "," + direccion + "," + codigopostal + "," + longitud + "," + latitud + "," + telefono + "," + email + "," + descripcion + "," + "(SELECT codigo FROM localidad WHERE codigo = " + nombreLocalidad + "));"
        }
    }
    return query;
 }
 module.exports = {queryCAT};