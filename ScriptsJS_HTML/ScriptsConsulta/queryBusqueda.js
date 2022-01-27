function definirQuery(enLocalidad, codigoPostal, provincia , tipo){
  console.log('hola22')
    let query = 'Select nombre, longitud, latitud FROM biblioteca';
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
        query += ' FOR JSON AUTO ';
    return query;
  }
}
module.exports = {
  definirQuery
};