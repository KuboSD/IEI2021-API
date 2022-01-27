
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
    

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'http://localhost:8082/search/' + params)
    xmlHttp.setRequestHeader('Content-type', 'application/json')
    xmlHttp.send(null) // Make sure to stringify
    xmlHttp.onreadystatechange = function() {
        // Do whatever with response
        //TO DO mostrar datos
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            let result = JSON.parse(xmlHttp.response)
                let value = '';
                for (let i = 0; i < result.message.length; i++) {
                     value += 'Added: ' + result.message[i].nombre + '\n';
                }
                document.getElementById('textarea').value = value;
                localStorage.setItem('filterResult', JSON.stringify(result.message))
                console.log(localStorage.getItem('filterResult'))
        }
        
    }
}

