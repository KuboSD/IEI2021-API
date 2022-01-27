
let mapCPtoProvincia = [
    {clave:'', valor: "Todas"},
    {clave:1, valor:"Alaba"},
    {clave:20, valor:"Gipuzkoa"},
    {clave:48, valor: "Vizcaya"},
    {clave:46, valor: "Valencia"},
    {clave:12, valor: "Castellon"},
    {clave:3, valor: "Alicante"},
    {clave:8, valor: "Barcelona"},
    {clave:17, valor: "Girona"},
    {clave:25, valor: "Lleida"},
    {clave:43, valor: "Tarragona"}
];

function getCPPrefix(aux){
    for (let i = 0; i < mapCPtoProvincia.length; i++) {
        if(mapCPtoProvincia[i].valor == aux){
            return mapCPtoProvincia[i].clave;
        }
    }
}


function search(){
    let provincia = getCPPrefix(provinciaAux);

    const params = {
        enLocalidad = document.getElementById('localidad').value,
        codigoPostal = document.getElementById('cp').value,
        provincia = getCPPrefix(provinciaAux),
        tipo = document.getElementById('tipo').value,
    }

    // console.log(enLocalidad.toString());
    // console.log(provinciaAux.toString());
    // console.log(provincia.toString());
    // console.log(tipo.toString());
    // console.log(codigoPostal.toString());

    let xmlHttpClean = new XMLHttpRequest();
    xmlHttpClean.open("POST", 'http://localhost:8082/search')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params)) // Make sure to stringify
    http.onload = function() {
        // Do whatever with response
        //TO DO mostrar datos
        console.log(http.responseText);
        alert(http.responseText)
    }
}

