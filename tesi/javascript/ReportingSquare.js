class ReportingSquare {

  latlng;
  idincendio;
  color;
  gravity;
  cerchio;
  constructor(latitudine, longitudine, idincendio, gravity) {
    this.latlng = { lat: latitudine, lng: longitudine };
    switch (gravity) {
      case 'catastrofica':
        this.color = '#FF0000';
        break;
      case 'grave':
        this.color = "#FF8000";
        break;
      case 'moderata':
        this.color = ' #FFFF00';
        break;
      default:
        this.color = '#FF0000';
    }
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
      id:this.idincendio,
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

