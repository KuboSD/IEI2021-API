function search(){
    let cvSelected = document.getElementById('cv-checkbox').checked;
    let eusSelected = document.getElementById('eus-checkbox').checked;
    let catSelected = document.getElementById('cat-checkbox').checked;

    if(cvSelected || eusSelected || catSelected){
        let xmlHttpClean = new XMLHttpRequest();
        xmlHttpClean.open("GET", 'http://localhost:8082/cleandb')
        xmlHttpClean.send(null);
        xmlHttpClean.onreadystatechange = function(){
            if(xmlHttpClean.readyState == 4){
                setTimeout(() => {
                    loadDatas(cvSelected, eusSelected, catSelected)
                }, 1000)
            }
        }
    }
}

function searchDatas(cvSelected, eusSelected, catSelected){
    
    if(eusSelected){
        let xmlHttpEus = new XMLHttpRequest();
        xmlHttpEus.open("GET", 'http://localhost:8082/loadeus')
        xmlHttpEus.send(null);
        xmlHttpEus.onreadystatechange = function(){
            console.log(xmlHttpEus.responseText)
        }
    }
    if(catSelected){
        let xmlHttpCat = new XMLHttpRequest();
        xmlHttpCat.open("GET", 'http://localhost:8082/loadcat')
        xmlHttpCat.send(null);
        xmlHttpCat.onreadystatechange = function(){
            console.log(xmlHttpCat.responseText)
        }
    }
    if(cvSelected){
        let xmlHttpCV = new XMLHttpRequest();
        xmlHttpCV.open("GET", 'http://localhost:8082/loadcv')
        xmlHttpCV.send(null);
        xmlHttpCV.onreadystatechange = function(){
            console.log(xmlHttpCV.responseText)
        }
    }
}