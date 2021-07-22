class ReportingSquare {
  latlng
  color
  gravity
  cerchio;
  constructor(latitudine, longitudine) {
    this.latlng = { lat: latitudine, lng: longitudine };
    this.color = '#FF0000';
    this.gravity = '#FF0000';
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
      fillColor: this.color,
      fillOpacity: 0.35,
      center: this.latlng,
      radius: 100,
    });
    this.cerchio.setMap(map);
    return this.cerchio;
  }
  createCircle50m(map) {
    this.cerchio = new google.maps.Circle({
      strokeColor: this.color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: this.color,
      fillOpacity: 0.35,
      center: this.latlng,
      radius: 100,
    });
    this.cerchio.setMap(map);
    return this.cerchio;
  }
}
export { ReportingSquare }

