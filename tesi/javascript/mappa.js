import { ReportingSquare } from "./ReportingSquare.js"
window.initMap = function () {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 41.70953628783216, lng:12.68639411940627
        },
        mapTypeId: "roadmap",
    });
    var reportingSquare=new ReportingSquare(41.70953628783216,12.68639411940627);
    reportingSquare.createCircle1km().setMap(map);
};
window.onload=function(){
    var bottoneDiProva=document.getElementById("bottone");
    bottoneDiProva.addEventListener("click", bottoneCliccato);

};
function bottoneCliccato(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           var myArr = JSON.parse(this.responseText);
           console.log("sei qio");
           console.log(myArr);
        }
    };
    xhttp.open("GET", "http://localhost:8080/TesiRivelazioneIncendi/ProvaJDBC", true);
    xhttp.send();
}