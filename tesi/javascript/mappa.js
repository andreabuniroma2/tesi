
var triangleCoords;
var bermudaTriangle;
var map;
// Initialize and add the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: 24.886, lng: -70.268 },
        mapTypeId: "terrain",
    });
    // Define the LatLng coordinates for the polygon's path.
    triangleCoords = [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 45.774, lng: -80.19 },
        { lat: 25.774, lng: -80.19 },
    ];
    // Construct the polygon.
    bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    bermudaTriangle.setMap(map);
}
var intervalId = setInterval(function() {
   bermudaTriangle.setMap(null);
   for (let item of triangleCoords){
    item.lat=item.lat+1;
    item.lng=item.lng+1;
}
    // Construct the polygon.
    bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    bermudaTriangle.setMap(map);
  }, 1000);