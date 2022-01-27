
let mapCPtoProvincia = [
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

console.log(mapCPtoProvincia);

function search(){
    let enLocalidad = document.getElementById('localidad');
    let codigoPostal = document.getElementById('cp');
    let provincia= document.getElementById('provincia');
    let tipo = document.getElementById('tipo');

    let xmlHttpClean = new XMLHttpRequest();
    xmlHttpClean.open("GET", 'http://localhost:8082/search')
    xmlHttpClean.send(null);
}

