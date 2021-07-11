class ReportingSquare {
  latlng
  color
  gravity
  constructor(latitudine, longitudine) {
    this.latlng={lat: latitudine,lng: longitudine};
    this.color = '#FF0000';
    this.gravity = '#FF0000';
  }
  // Getter
  get lat() {
    return this.lat;
  }
  get long() {
    return this.lat;
  }
  // Method
  createCircle1km() {
    return new google.maps.Circle({
      strokeColor: this.color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: this.color,
      fillOpacity: 0.35,
      center: this.latlng,
      radius: 1000,
  });
  }
}
export { ReportingSquare }

