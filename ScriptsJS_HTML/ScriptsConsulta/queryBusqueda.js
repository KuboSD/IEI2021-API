function definirQuery(enLocalidad, codigoPostal, provincia , tipo){
  
    let query = 'Select nombre, longitud, latitud, direccion FROM biblioteca';
    
    if(!enLocalidad == '' || !codigoPostal == '' || !provincia == '' || !tipo == ''){
      query += ' WHERE ';
        if (!enLocalidad == '' ){
          query += 'nombre LIKE "%'+enLocalidad+'%"';
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
              query += '(tipo LIKE "%'+tipo+'%" OR descripcion LIKE "%'+tipo+'%")';
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
            query += '(tipo LIKE "%'+tipo+'%" OR descripcion LIKE "%'+tipo+'%")';
          }
        }
        if (!provincia == '' && enLocalidad == '' && codigoPostal == ''){
          query += 'codigopostal LIKE "'+ provincia +'%"  ';
          if (!tipo == '' ){
            query += ' AND ';
            query += '(tipo LIKE "%'+tipo+'%" OR descripcion LIKE "%'+tipo+'%")';
          }
        }
        if (!tipo == '' && enLocalidad == '' && codigoPostal == '' && provincia == ''){
          query += '(tipo LIKE "%'+tipo+'%" OR descripcion LIKE "%'+tipo+'%")';
        }
        //query += ' FOR JSON AUTO ';
    
  }
  return query;
}
module.exports = {
  definirQuery
};