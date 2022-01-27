
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
    let enLocalidad = document.getElementById('localidad').value
    let codigoPostal = document.getElementById('cp').value
    let provincia = getCPPrefix(document.getElementById('provincia').value)
    let tipo = document.getElementById('tipo').value
    if(tipo == 'Todas'){
        tipo = ''
    }

    let params = "enLocalidad=" + enLocalidad + "&codigoPostal="
        + codigoPostal + "&provincia=" + provincia + "&tipo=" + tipo

    // console.log(enLocalidad.toString());
    // console.log(provinciaAux.toString());
    // console.log(provincia.toString());
    // console.log(tipo.toString());
    // console.log(codigoPostal.toString());
    

    let xmlHttpClean = new XMLHttpRequest();
    xmlHttpClean.open("GET", 'http://localhost:8082/search/' + params)
    xmlHttpClean.setRequestHeader('Content-type', 'application/json')
    xmlHttpClean.send(null) // Make sure to stringify
    xmlHttpClean.onreadystatechange = function() {
        // Do whatever with response
        //TO DO mostrar datos
        if(xmlHttpClean.readyState == 4 && xmlHttpClean.status == 200){
            console.log(xmlHttpClean.response);
        }
        
    }
}

