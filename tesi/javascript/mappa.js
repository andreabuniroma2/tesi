import { ReportingSquare } from "./ReportingSquare.js"
var map;
var myJsonArr;
var objectReportingArray=new Array();
var coordinateAttuali;
window.initMap = function () {
     map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        mapTypeId: "roadmap",
    });
    getLocation();
};
window.onload=function(){
    var bottoneDiProva=document.getElementById("bottone");
    bottoneDiProva.addEventListener("click", bottoneCliccato);
    provaDelControlIF();
    // visualizzare tutti gli incendi nella zona //
};
function bottoneCliccato(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           myJsonArr = JSON.parse(this.responseText);
           visualizzareInMappa();
        }
    };
    xhttp.open("GET", "http://localhost:8080/TesiRivelazioneIncendi/Incendi", true);
    xhttp.send();
  
}
function visualizzareInMappa(){
    var reportingSquare=new ReportingSquare(parseFloat(myJsonArr.latitudine),parseFloat(myJsonArr.longitudine));
    reportingSquare.createCircle1km().setMap(map);
}
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCenterMap);
    } else { 
     console.log("error")
    }
  } 
function setCenterMap(position){
    map.setCenter(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));

}
//ritroveremo gli oggetti json da aggiungere e da eliminare che poi dovranno essere stmpati od eliminati()
function provaDelControlIF(){
    var elementiDaAggiungereJSON=JSON.parse("[]");
    var elementiDaEliminareJSON=JSON.parse("[]");
    var jsonDiPartenza=JSON.parse(['[{"ip":45},{"ip":55},{"ip":67}]']);
    var jsonArrivato=JSON.parse('[{"ip":45},{"ip":55},{"ip":57}]');
    var elementiDaAggiugereObject=controlIfJSONChanged(jsonDiPartenza,jsonArrivato);
    var elementiDaEliminareObject=controlIfJSONChanged(jsonArrivato,jsonDiPartenza);
    for(var item in elementiDaAggiugereObject){
        var itemStringfy=JSON.stringify(elementiDaAggiugereObject[item]);
        if(itemStringfy!="{}"){
            elementiDaAggiungereJSON.push(JSON.parse(itemStringfy))   
        }
    }
    for(var item in elementiDaEliminareObject){
        var itemStringfy=JSON.stringify(elementiDaEliminareObject[item]);
        if(itemStringfy!="{}"){
           elementiDaEliminareJSON.push(JSON.parse(itemStringfy));   
        }
    }
    console.log(elementiDaAggiungereJSON);
    console.log(elementiDaEliminareJSON);
}
function controlIfJSONChanged(obj1, obj2){
    const result = {};
    if (Object.is(obj1, obj2)) {
        return undefined;
    }
    if (!obj2 || typeof obj2 !== 'object') {
        return obj2;
    }
    Object.keys(obj1 || {}).concat(Object.keys(obj2 || {})).forEach(key => {
        if(obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
            result[key]=obj2[key];
        }
        if(typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
            const value = controlIfJSONChanged(obj1[key], obj2[key]);
            if (value !== undefined) {
                result[key] = value;
            }
        }
    });
    return result;
}