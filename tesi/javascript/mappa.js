import { ReportingSquare } from "./ReportingSquare.js"
import { ConstructUrl } from "./ConstructURL.js"
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        mapTypeId: "terrain",
    });
    getLocation();
};
var addListenersOnPolygon = function(polygon) {
    google.maps.event.addListener(polygon, 'click', function (ev) {
      goToEvolution(polygon.id);
    });  
  }
var intervalID; //id per la creazione delle richieste in loop
var distanzaDaTe;
var map;
var myJsonArr;
var objectReportingArray = [];
var actualLatitude;
var actualLongitude;
var slider;
var output;
var bottone;
var contenitoreDiv;
var selettoreRegione;
var selettoreProvincia;
var selettoreComune;
var selettoreGravity;


window.onload = function () {
    initMap();
    //selettore della gravità
    selettoreGravity = document.getElementById("gravità");
    selettoreGravity.addEventListener("change", gravitàSelezionata);
    // cambio di criteri di ricerca
    bottone = document.getElementById("bottone");
    bottone.addEventListener("click", changeResearchParamters);
    //fine cambio fi criteri di ricerca
    actualLatitude = localStorage.getItem("latitude");
    actualLongitude = localStorage.getItem("longitude");
    /*Parte slider*/
    distanzaDaTe = document.getElementById("distanzaDaTe");
    slider = document.getElementById("myRange");
    output = document.getElementById("demo");
    slider.addEventListener("mouseup", function () {
        pulisciIntervallo();
        removeAllPolygons();
        richiestaHTTPConDistanza(actualLatitude, actualLongitude, slider.value);
        intervalID = setInterval(periodicalRequest, 5000);
        //qui andremo a fare una ricerca passando come valori distanza e coordinate
    });
    slider.oninput = function () {
        output.innerHTML = slider.value + " KM";
    }
    /*Fine parte slider*/
    /**Inizio Parte selettori */
    contenitoreDiv = document.getElementById("contenitoreDiv");
    selettoreRegione = document.getElementById("regione");
    selettoreProvincia = document.getElementById("provincia");
    selettoreComune = document.getElementById("comune");
    selettoreRegione.addEventListener("change", regioneSelezionata);
    selettoreProvincia.addEventListener("change", provinciaSelezionata);
    selettoreComune.addEventListener("change", comuneSelezionato);
    /**FIne parte selettori */

};
//Parti delle Richieste
function richiestaHTTPConDistanza(latitude, longitude, distance) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            myJsonArr = JSON.parse(this.responseText);
            visualizzareInMappa();
        }
    };
    if (selettoreGravity.value == "") {
        xhttp.open("GET", ConstructUrl.constructURLForReaserchWDistance(latitude, longitude, distance), true);
        console.log(ConstructUrl.constructURLForReaserchWDistance(latitude, longitude, distance));
        xhttp.send();
    }
    else {
        xhttp.open("GET", ConstructUrl.constructURLForReaserchWDistanceWGravity(latitude, longitude, distance, selettoreGravity.value), true);
        xhttp.send();

    }

}


/**richiesta http per la selezione del posto */
function richiestaProvinceComuni(tipoDiRicerca, codice) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var listaPosti = JSON.parse(this.responseText);

            changeSelectors(tipoDiRicerca, listaPosti);
        }
    };
    switch (tipoDiRicerca) {
        case 'province':
            xhttp.open("GET", ConstructUrl.constructURLForFindProvinces(codice), true);
            xhttp.send();
            break;
        case 'comuni':
            xhttp.open("GET", ConstructUrl.constructURLForFindComunes(codice), true);
            xhttp.send();
            break;

    }
}
//ricerca incendi per comune provincia regione
//ricerca incendi per comune
function richiestaHTTPIncendiConComune(comune) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            removeAllPolygons();

            myJsonArr = JSON.parse(this.responseText);
            visualizzareInMappa();
        }
    }
    if (selettoreGravity.value == "") {
        xhttp.open("GET", ConstructUrl.constructURLForComunes(comune), true);
        console.log(ConstructUrl.constructURLForComunes(comune));
        xhttp.send();
    }
    else {
        xhttp.open("GET", ConstructUrl.constructURLForComunes(comune, selettoreGravity.value), true);
        xhttp.send();
    }
}
//ricerca incendi per provincia
function richiestaHTTPIncendiConProvincia(province) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            removeAllPolygons();
            myJsonArr = JSON.parse(this.responseText);
            visualizzareInMappa();
        }
    }
    if (selettoreGravity.value == "") {
        xhttp.open("GET", ConstructUrl.constructURLForProvinces(province), true);
        console.log(ConstructUrl.constructURLForProvinces(province));
        xhttp.send();
    }
    else {
        xhttp.open("GET", ConstructUrl.constructURLForProvinces(province, selettoreGravity.value), true);
        xhttp.send();
    }
}
//ricerca incendi per regione
function richiestaHTTPIncendiConRegione(regione) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            removeAllPolygons();
            myJsonArr = JSON.parse(this.responseText);
                        visualizzareInMappa();
        }
    }
    if (selettoreGravity.value == "") {
        xhttp.open("GET", ConstructUrl.constructURLForRegions(regione), true);
        console.log(ConstructUrl.constructURLForRegions(regione));
        xhttp.send();
    }
    else {
        xhttp.open("GET", ConstructUrl.constructURLForRegions(regione, selettoreGravity.value), true);
        xhttp.send();
    }
}
// fine ricerca incendi provincia regione --------------------
function periodicalRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            myJsonArr = JSON.parse(this.responseText);
            removeAllPolygons();
            visualizzareInMappaNoZoom();
        }
    };
    xhttp.open("GET", ConstructUrl.getLastReaserch(), true);
    xhttp.send();
}
//Fine Parti per le richieste
function visualizzareInMappa() {
    console.log(myJsonArr);
    if (myJsonArr.length == 1) {
        console.log(myJsonArr[0]);
        var reportingSquare = new ReportingSquare(parseFloat(myJsonArr[0].latitudine), parseFloat(myJsonArr[0].longitudine), myJsonArr[0].idincendio, myJsonArr[0].gravita);
        var cerchio = reportingSquare.createCircle100m(map);
        objectReportingArray.push(cerchio);
        setZoom();
    } else if (myJsonArr.length > 1) {
        for (let item in myJsonArr) {
            var reportingSquare = new ReportingSquare(parseFloat(myJsonArr[item].latitudine), parseFloat(myJsonArr[item].longitudine), myJsonArr[item].idincendio, myJsonArr[item].gravita);
            var cerchio = reportingSquare.createCircle100m(map);
            objectReportingArray.push(cerchio);
            addListenersOnPolygon(cerchio);
        }
        setZoom();
    }
    else {
        console.log("nessun incendio")
    }
}
function visualizzareInMappaNoZoom() {
    if (myJsonArr.length == 1) {
        console.log(myJsonArr[0]);
        var reportingSquare = new ReportingSquare(parseFloat(myJsonArr[0].latitudine), parseFloat(myJsonArr[0].longitudine), myJsonArr[0].idincendio, myJsonArr[0].gravita);
        var cerchio = reportingSquare.createCircle100m(map);
        objectReportingArray.push(cerchio);
    } else if (myJsonArr.length > 1) {
        for (let item in myJsonArr) {
            var reportingSquare = new ReportingSquare(parseFloat(myJsonArr[item].latitudine), parseFloat(myJsonArr[item].longitudine), myJsonArr[item].idincendio, myJsonArr[item].gravita);
            var cerchio = reportingSquare.createCircle100m(map);
            objectReportingArray.push(cerchio);
            addListenersOnPolygon(cerchio);
        }
    }
    else {
        console.log("nessun incendio")
    }
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
    pulisciIntervallo();
    removeAllPolygons();
    richiestaHTTPIncendiConRegione(selettoreRegione.value, null);
    intervalID = setInterval(periodicalRequest, 5000);
    richiestaProvinceComuni("province", selettoreRegione.value);
}
function provinciaSelezionata() {
    pulisciIntervallo();
    removeAllPolygons();
    richiestaHTTPIncendiConProvincia(selettoreProvincia.value, null);
    intervalID = setInterval(periodicalRequest, 5000);
    richiestaProvinceComuni("comuni", selettoreProvincia.value);

}
function comuneSelezionato() {
    pulisciIntervallo();
    removeAllPolygons();
    richiestaHTTPIncendiConComune(selettoreComune.value, null);
    intervalID = setInterval(periodicalRequest, 5000);
    /**Qua vado a cercare gli incendi */

}
function gravitàSelezionata() {
    pulisciIntervallo();
    removeAllPolygons();
    ConstructUrl.insertGravityToLastSearch(selettoreGravity.value);
    periodicalRequest();
    intervalID = setInterval(periodicalRequest, 5000);


}
function changeSelectors(tipoDiRicerca, listaPosti) {

    switch (tipoDiRicerca) {
        case 'province':
            selettoreProvincia.innerHTML = '';
            for (let i in listaPosti) {
                var opt = document.createElement('option');
                // create text node to add to option element (opt)
                opt.appendChild(document.createTextNode(listaPosti[i].nome));
                // set value property of opt
                opt.value = listaPosti[i].id;
                // add opt to end of select box (sel)
                selettoreProvincia.appendChild(opt);
            }
            selettoreComune.innerHTML = "<option>Comune</option>";

            break;
        case 'comuni':
            selettoreComune.innerHTML = '';
            for (let i in listaPosti) {
                var opt = document.createElement('option');
                // create text node to add to option element (opt)
                opt.appendChild(document.createTextNode(listaPosti[i].nome));
                // set value property of opt
                opt.value = listaPosti[i].id;
                // add opt to end of select box (sel)
                selettoreComune.appendChild(opt);
            }
            break;

    }

}
/**fine parte regione provincia comune */
// cambiare i parametri di ricerca
function changeResearchParamters() {
    if (contenitoreDiv.style.display === "none") {
        contenitoreDiv.style.display = "block";
        slider.style.display = "none";
        distanzaDaTe.style.display = "none";
        output.style.display = "none";
    } else {
        contenitoreDiv.style.display = "none";
        slider.style.display = "block";
        output.style.display = "block";
        distanzaDaTe.style.display = "block";




    }
}
// fine cambio dei parametri di ricerca
function removeAllPolygons() {
    for (let item in objectReportingArray) {
        objectReportingArray[item].setMap(null);
    }
    objectReportingArray = [];

}
//Stoppa la funzione Periodica
function pulisciIntervallo() {
    if (intervalID != null)
        clearInterval(intervalID);
}
// settare uno zoom corretto
function setZoom() {
    console.log("nel set Zoom");
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < objectReportingArray.length; i++) {
        bounds.union(objectReportingArray[i].getBounds());
    }
    map.fitBounds(bounds);

}
//map.fitBounds(bounds);}
//implementare un ischanged in caso di vedere se è cambiato l'array degli oggettti restituiti e nel caso aggiornare la mappa
// vai alla pagina delle evoluzioni
function goToEvolution(idincendio) {
    window.open("evolution.php?idincendio=" + idincendio);
}
