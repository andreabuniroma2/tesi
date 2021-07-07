
var polygonArrays = new Array();
var altroTriangolo;
var map;
var i = 5;
// Initialize and add the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: 24.886, lng: -70.268 },
        mapTypeId: "roadmap",
    });
    // Define the LatLng coordinates for the polygon's path.
    for(let item of polygonArrays){
        item.setMap(null);
    }
    var triangleCoords = [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 45.774, lng: -80.19 },
        { lat: 25.774, lng: -80.19 },
    ];
    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map
    });
    polygonArrays.push(bermudaTriangle);
    polygonArrays[0].setMap(map);

}
/*var intervalId = setInterval(function () {
    i = i + 2;
    var triangleCoords = [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 45.774, lng: -80.19 },
        { lat: 25.774, lng: -80.19 },
    ];
    for (let vari of triangleCoords) {
        vari.lat = vari.lat + i;
        vari.lng = vari.lng + i;
    }
    console.log(triangleCoords);
    for (var item of polygonArrays) {
        item.setMap(null);
    }
    // Construct the polygon.
    var pippo = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FFF000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        
    });
    pippo.setMap(map)
}, 5000);*/
