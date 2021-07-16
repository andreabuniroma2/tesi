import { ReportingSquare } from "./ReportingSquare.js"
import { ConstructUrl } from "./ConstructURL.js"
var map;
var myJsonArr;
var objectReportingArray = new Array();
var actualLatitude;
var actualLongitude;
var slider;
var output;
var selettoreRegione;
var selettoreProvincia;
var selettoreComune;
window.initMap = function () {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        mapTypeId: "roadmap",
    });
    getLocation();
};
window.onload = function () {
    actualLatitude = localStorage.getItem("latitude");
    actualLongitude = localStorage.getItem("longitude");
    /*Parte slider*/
    slider = document.getElementById("myRange");
    output = document.getElementById("demo");
    slider.addEventListener("mouseup", function () {
        console.log("hai alzato il mouse " + slider.value);
        richiestaHTTPConDistanza(actualLatitude, actualLongitude, slider.value);
        //qui andremo a fare una ricerca passando come valori distanza e coordinate
    });
    slider.oninput = function () {
        output.innerHTML = slider.value;
    }
    /*Fine parte slider*/
    /**Inizio Parte selettori */
    selettoreRegione = document.getElementById("regione");
    selettoreProvincia = document.getElementById("provincia");
    selettoreComune = document.getElementById("comune");
    selettoreRegione.addEventListener("change", regioneSelezionata);
    /**FIne parte selettori */

};
function richiestaHTTPConDistanza(latitude, longitude, distance) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            myJsonArr = JSON.parse(this.responseText);
            visualizzareInMappa();
        }
    };
    xhttp.open("GET", ConstructUrl.constructURLForReaserchWDistance(latitude, longitude, distance), true);
    xhttp.send();

}
function visualizzareInMappa() {
    var reportingSquare = new ReportingSquare(parseFloat(myJsonArr.latitudine), parseFloat(myJsonArr.longitudine));
    reportingSquare.createCircle1km().setMap(map);
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setCenterMap);
    } else {
        console.log("error")
    }
}
function setCenterMap(position) {
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

}
//ritroveremo gli oggetti json da aggiungere e da eliminare che poi dovranno essere stmpati od eliminati()
function provaDelControlIF() {
    var elementiDaAggiungereJSON = JSON.parse("[]");
    var elementiDaEliminareJSON = JSON.parse("[]");
    var jsonDiPartenza = JSON.parse(['[{"ip":45},{"ip":55},{"ip":67}]']);
    var jsonArrivato = JSON.parse('[{"ip":45},{"ip":55},{"ip":57}]');
    var elementiDaAggiugereObject = controlIfJSONChanged(jsonDiPartenza, jsonArrivato);
    var elementiDaEliminareObject = controlIfJSONChanged(jsonArrivato, jsonDiPartenza);
    for (var item in elementiDaAggiugereObject) {
        var itemStringfy = JSON.stringify(elementiDaAggiugereObject[item]);
        if (itemStringfy != "{}") {
            elementiDaAggiungereJSON.push(JSON.parse(itemStringfy))
        }
    }
    for (var item in elementiDaEliminareObject) {
        var itemStringfy = JSON.stringify(elementiDaEliminareObject[item]);
        if (itemStringfy != "{}") {
            elementiDaEliminareJSON.push(JSON.parse(itemStringfy));
        }
    }
    console.log(elementiDaAggiungereJSON);
    console.log(elementiDaEliminareJSON);
}
function controlIfJSONChanged(obj1, obj2) {
    const result = {};
    if (Object.is(obj1, obj2)) {
        return undefined;
    }
    if (!obj2 || typeof obj2 !== 'object') {
        return obj2;
    }
    Object.keys(obj1 || {}).concat(Object.keys(obj2 || {})).forEach(key => {
        if (obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
            result[key] = obj2[key];
        }
        if (typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
            const value = controlIfJSONChanged(obj1[key], obj2[key]);
            if (value !== undefined) {
                result[key] = value;
            }
        }
    });
    return result;
}
/*parte della gestione dello slider*/
/*fine parte gestione dello slider*/
/*Inizio parte funzioni Ricerca per regione,provincia, comune */
function regioneSelezionata() {
    /*var opt = document.createElement('option');
    // create text node to add to option element (opt)
    opt.appendChild(document.createTextNode('New Option Text'));
    // set value property of opt
    opt.value = 'option value';
    // add opt to end of select box (sel)
    selettoreProvincia.appendChild(opt);*/
    console.log(richiestaRegioni("regioni"));
}
function provinciaSelezionata() {

}
function comuneSelezionato() {
    /**Qua vado a cercare gli incendi */

}
function cercaPerSelettori() {

}
/**richiesta http per la selezione del posto */
function richiestaRegioni(tipoDiRicerca, zona) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //var listaPosti = JSON.parse(this.responseText);
            
            console.log(this.response);
        }
    };
    switch (tipoDiRicerca) {
        case 'regioni':
            xhttp.open("GET", ConstructUrl.constructURLForFindRegions(), true);
            xhttp.send();
            break;
        case 'provincie':
            xhttp.open("GET", ConstructUrl.constructURLForFindProvinces(zona), true);
            xhttp.send();
            break;
        case 'comuni':
            xhttp.open("GET", ConstructUrl.constructURLForFindComunes(comuni), true);
            xhttp.send();
            break;

    }
}
/**fine parte regione provincia comune */