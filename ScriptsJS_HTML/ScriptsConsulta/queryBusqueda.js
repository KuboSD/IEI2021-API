function definirQuery(enLocalidad, codigoPostal, provincia , tipo){
    let query = 'Select * FROM biblioteca';
    if(!enLocalidad == '' || !codigoPostal == '' || !provincia == '' || !tipo == ''){
      query += ' WHERE ';
        if (!enLocalidad == '' ){
          query += 'CONTAINS(enLocalidad, "'+ enLocalidad +'") ';
          if(!codigoPostal == '' ||!provincia == '' || !tipo == ''){
            if (!codigoPostal == ''){
              query += ' AND ';
              query += 'codigopostal = '+ codigoPostal + ' ';
            }
            if (!provincia == ''){
              query += ' AND ';
              query += 'codigopostal LIKE "'+ provincia +'%" ';
            }
            if (!tipo == ''){
              query += ' AND ';
              query += '(CONTAINS(descripcion, '+ tipo +') OR CONTAINS(tipo, '+ tipo +'))';
            }
          }
        }
        if (!codigoPostal == '' && enLocalidad == ''){
          query += 'codigopostal = '+ codigoPostal + ' ';
          if (!provincia == '' ){
            query += ' AND ';
            query += 'codigopostal LIKE "'+ provincia +'%" ';
          }
          if (!tipo == '' ){
            query += ' AND ';
            query += '(CONTAINS(descripcion, '+ tipo +') OR CONTAINS(tipo, '+ tipo +'))';
          }
        }
        if (!provincia == '' && enLocalidad == '' && codigoPostal == ''){
          query += 'LIKE(codigopostal, '+ provincia +'% ) ';
          if (!tipo == '' ){
            query += ' AND ';
            query += '(CONTAINS(descripcion, '+ tipo +') OR CONTAINS(tipo, '+ tipo +'))';
          }
        }
        if (!tipo == '' && enLocalidad == '' && codigoPostal == '' && provincia == ''){
          query += '(CONTAINS(descripcion, '+ tipo +') OR CONTAINS(tipo, '+ tipo +'))';
        }
    return query;
  }
}
module.exports = {
  definirQuery
};