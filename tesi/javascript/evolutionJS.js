// IDINCENDIO DI PROVA = 888889
var map;
var myJsonArr;
var objectReportingArray = [];
let idIncendio;
window.onload = function () {
  console.log(findGetParameter("idincendio"));
  idIncendio = findGetParameter("idincendio");
  richiestaHTTPIDincendio(idIncendio);

}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

function richiestaHTTPIDincendio(idIncendio) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      myJsonArr = JSON.parse(this.responseText);
      console.log(this.responseText);
      storeResults();
    }
  };
  xhttp.open("GET", "http://localhost:8080/TesiRivelazioneIncendi/SingoloIncendio?idincendio=" + idIncendio, true);
  xhttp.send();
}
//Parte Della Visualizzazione
function storeResults() {
  console.log(myJsonArr);
  if (myJsonArr.length == 1) {
    console.log(myJsonArr[0]);
    var reportingSquare = new ReportingSquare(parseFloat(myJsonArr[0].latitudine), parseFloat(myJsonArr[0].longitudine), myJsonArr[0].idincendio, myJsonArr[0].gravita,myJsonArr[0].dataora);
    var cerchio = reportingSquare.createCircle100m(map);
    objectReportingArray.push(cerchio);
    orderResult();
    visualizzaEvoluzione();
  } else if (myJsonArr.length > 1) {
    for (let item in myJsonArr) {
      console.log(myJsonArr[item].gravita);
      var reportingSquare = new ReportingSquare(parseFloat(myJsonArr[item].latitudine), parseFloat(myJsonArr[item].longitudine), myJsonArr[item].idincendio, myJsonArr[item].gravita,myJsonArr[item].dataora);
      var cerchio = reportingSquare.createCircle100m(map);
      objectReportingArray.push(cerchio);
    }
    orderResult();
    visualizzaEvoluzione();
  }
  else {
    console.log("nessun incendio")
  }
}
function setZoom() {
  console.log("nel set Zoom");
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < objectReportingArray.length; i++) {
    bounds.union(objectReportingArray[i].getBounds());
  }
  map.fitBounds(bounds);

}
function orderResult(){
  if(objectReportingArray[0].dateHour !=null){
  objectReportingArray.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.dateHour) - new Date(b.dateHour);
  })
  for (let item in objectReportingArray){
    console.log(objectReportingArray[item].dateHour);
  }
}
}
// Classe Cerchio ReportingSquare che crea gli oggetti cerchio
class ReportingSquare {
  latlng;
  idincendio;
  color;
  gravity;
  cerchio;
  dateHour
  constructor(latitudine, longitudine, idincendio, gravity, dateHour) {
    this.latlng = { lat: latitudine, lng: longitudine };
    switch (gravity) {
      case 'catastrofica':
        this.color = '#FF0000';
        break;
      case 'grave':
        this.color = "#FFFF00";
        break;
      case 'moderata':
        this.color = ' #008000';
        break;
      default:
        this.color = '#FF0000';
    }
    this.dateHour = dateHour;
    this.idincendio = idincendio;
    this.gravity = gravity;
  }
  // Getter
  get cerchio() {
    return this.cerchio
  }
  get lat() {
    return this.lat;
  }
  get long() {
    return this.lat;
  }
  // Method
  createCircle100m(map) {
    this.cerchio = new google.maps.Circle({
      strokeColor: this.color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      id: this.idincendio,
      dateHour: this.dateHour,
      fillColor: this.color,
      fillOpacity: 0.35,
      center: this.latlng,
      radius: 100,
    });
    return this.cerchio;
  }
  createCircle50m(map) {
    this.cerchio = new google.maps.Circle({
      strokeColor: this.color,
      strokeOpacity: 0.8,
      id: this.idincendio,
      dateHour: this.dateHour,
      strokeWeight: 2,
      fillColor: this.color,
      fillOpacity: 0.35,
      center: this.latlng,
      radius: 100,
    });
    return this.cerchio;
  }
}
// funzione asincrona per il disegno su mappa
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function visualizzaEvoluzione() {
setZoom();
  // Sleep in loop
  for (let i = 0; i < objectReportingArray.length; i++) {
    objectReportingArray[i].setMap(map);
    await sleep(1500);
    if (i === objectReportingArray.length-1){
      for (let item in objectReportingArray){
        objectReportingArray[item].setMap(null);
      }
      i=-1;
    }
  }
}
