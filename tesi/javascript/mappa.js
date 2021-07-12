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