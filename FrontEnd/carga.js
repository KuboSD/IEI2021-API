function load(){
    let cvSelected = document.getElementById('cv-checkbox').checked;
    let eusSelected = document.getElementById('eus-checkbox').checked;
    let catSelected = document.getElementById('cat-checkbox').checked;

    if(cvSelected || eusSelected || catSelected){
        let xmlHttpClean = new XMLHttpRequest();
        xmlHttpClean.open("GET", 'http://localhost:8082/cleandb')
        xmlHttpClean.send(null);
        xmlHttpClean.onreadystatechange = function(){
            if(xmlHttpClean.readyState == 4){
                console.log(xmlHttpClean.responseText.message)
                setTimeout(() => {
                    loadDatas(cvSelected, eusSelected, catSelected)
                }, 20)
            }
        }
    }
}

function loadDatas(cvSelected, eusSelected, catSelected){
    
    if(eusSelected){
        let xmlHttpEus = new XMLHttpRequest();
        xmlHttpEus.open("GET", 'http://localhost:8082/loadeus')
        xmlHttpEus.send(null);
        xmlHttpEus.onreadystatechange = function(){
        }
        document.getElementById('textarea')
    }
    if(catSelected){
        let xmlHttpCat = new XMLHttpRequest();
        xmlHttpCat.open("GET", 'http://localhost:8082/loadcat')
        xmlHttpCat.send(null);
        xmlHttpCat.onreadystatechange = function(){
        }
    }
    if(cvSelected){
        let xmlHttpCV = new XMLHttpRequest();
        xmlHttpCV.open("GET", 'http://localhost:8082/loadcv')
        xmlHttpCV.send(null);
        xmlHttpCV.onreadystatechange = function(){
            if(xmlHttpCV.readyState == 4 && xmlHttpCV.status == 200){

            }
        }
    }

    setTimeout(()=>{
        let params = "enLocalidad=" + '' + "&codigoPostal="
        + '' + "&provincia=" + '' + "&tipo=" + ''
        let xmlHttpResult = new XMLHttpRequest();
        xmlHttpResult.open("GET", 'http://localhost:8082/search/' + params)
        xmlHttpResult.send(null);
        xmlHttpResult.onreadystatechange = function(){
            if(xmlHttpResult.readyState == 4 && xmlHttpResult.status == 200){
                let result = JSON.parse(xmlHttpResult.response)
                console.log(result.message)
                let value = '';
                for (let i = 0; i < result.message.length; i++) {
                     value += 'Added: ' + result.message[i].nombre + '\n';
                }
                document.getElementById('textarea').value = value;
            }
        }
    },150)
}