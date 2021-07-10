 class ReportingSquare {
   lat
   long
    color
    gravity
    constructor(lat, long,color,gravity) {
      this.lat = lat;
      this.long = long;
      this.color=color;
      this.gravity=gravity;
    }
    // Getter
    get lat() {
      return this.lat;
    }
    get long() {
        return this.lat;
      }
    // Method
    createPolygon100m() {
      return"ciccio";
    }
  }
  export{ReportingSquare}
  
