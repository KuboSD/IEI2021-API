function search(){
    let enLocalidad = document.getElementById('localidad');
    let codigoPostal = document.getElementById('cp');
    let provincia= document.getElementById('provincia');
    let tipo = document.getElementById('tipo');

    let xmlHttpClean = new XMLHttpRequest();
    xmlHttpClean.open("GET", 'http://localhost:8082/search')
    xmlHttpClean.send(null);
}

