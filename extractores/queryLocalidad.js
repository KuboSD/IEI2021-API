const barcelona = require('../Fuentes de datos/codigos/catbarcelona.json')
const tarragona = require('../Fuentes de datos/codigos/cattarragona.json')
const lleida = require('../Fuentes de datos/codigos/catlleida.json')
const girona = require('../Fuentes de datos/codigos/catgirona.json')
const valencia = require('../Fuentes de datos/codigos/cvvalencia.json')
const alicante = require('../Fuentes de datos/codigos/cvalicante.json')
const castellon = require('../Fuentes de datos/codigos/cvcastellon.json')
const alava = require('../Fuentes de datos/codigos/pvalava.json')
const gipuzkoa = require('../Fuentes de datos/codigos/pvgipuzkoa.json')
const bizkaia = require('../Fuentes de datos/codigos/pvvizcaya.json')
const query = []
let codigo, nombre, codProvincia;

function insertarLocalidades(){
    for(let i = 2; i<  barcelona.Hoja1.length; i++){
        codigo = "'" + barcelona.Hoja1[i].CPRO + barcelona.Hoja1[i].Column2 + "'";
        nombre = "'" + barcelona.Hoja1[i].Column4 + "'";
        codProvincia = "'" + barcelona.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
        // console.log("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
        // codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));")
    }
    for(let i = 2; i< tarragona.Hoja1.length; i++){
        codigo = "'" + tarragona.Hoja1[i].CPRO + tarragona.Hoja1[i].Column2 + "'";
        nombre = "'" + tarragona.Hoja1[i].Column4 + "'";
        codProvincia = "'" + tarragona.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
    }for(let i = 2; i< lleida.Hoja1.length; i++){
        codigo = "'" + lleida.Hoja1[i].CPRO + lleida.Hoja1[i].Column2 + "'";
        nombre = "'" + lleida.Hoja1[i].Column4 + "'";
        codProvincia = "'" + lleida.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
    }for(let i = 2; i< girona.Hoja1.length; i++){
        codigo = "'" + girona.Hoja1[i].CPRO + girona.Hoja1[i].Column2 + "'";
        nombre = "'" + girona.Hoja1[i].Column4 + "'";
        codProvincia = "'" + girona.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
    }for(let i = 2; i< valencia.Hoja1.length; i++){
        codigo = "'" + valencia.Hoja1[i].CPRO + valencia.Hoja1[i].Column2 + "'";
        nombre = "'" + valencia.Hoja1[i].Column4 + "'";
        codProvincia = "'" + valencia.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
    }for(let i = 2; i< alicante.Hoja1.length; i++){
        codigo = "'" + alicante.Hoja1[i].CPRO + alicante.Hoja1[i].Column2 + "'";
        nombre = "'" + alicante.Hoja1[i].Column4 + "'";
        codProvincia = "'" + alicante.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
    }for(let i = 2; i< castellon.Hoja1.length; i++){
        codigo = "'" + castellon.Hoja1[i].CPRO + castellon.Hoja1[i].Column2 + "'";
        nombre = "'" + castellon.Hoja1[i].Column4 + "'";
        codProvincia = "'" + castellon.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
    }for(let i = 2; i< alava.Hoja1.length; i++){
        codigo = "'" + alava.Hoja1[i].CPRO + alava.Hoja1[i].Column2 + "'";
        nombre = "'" + alava.Hoja1[i].Column4 + "'";
        codProvincia = "'" + alava.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
    }for(let i = 2; i< gipuzkoa.Hoja1.length; i++){
        codigo = "'" + gipuzkoa.Hoja1[i].CPRO+ gipuzkoa.Hoja1[i].Column2 + "'";
        nombre = "'" + gipuzkoa.Hoja1[i].Column4 + "'";
        codProvincia = "'" + gipuzkoa.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
    }for(let i = 2; i<bizkaia.Hoja1.length; i++){
        codigo = "'" + bizkaia.Hoja1[i].CPRO + bizkaia.Hoja1[i].Column2 + "'";
        nombre = "'" + bizkaia.Hoja1[i].Column4 + "'";
        codProvincia = "'" + bizkaia.Hoja1[i].CPRO + "'";
        query.push("INSERT INTO localidad (codigo, nombre, enProvincia) VALUES(" + 
            codigo + "," + nombre + "," + "(SELECT codigo FROM provincia WHERE codigo = " + codProvincia + "));");
    }
    return query;
}

module.exports = {
    insertarLocalidades
}