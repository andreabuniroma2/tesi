<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" type="text/css" href="css/indexStyle.css">
  <link rel="stylesheet" type="text/css" href="css/navbar_content.css">
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    
  <title>Add Map</title>
  <script src="javascript/mappa.js"></script>
</head>

<body>
  <?php require("header.php");
  ?>
  <h3>My Google Maps Demo</h3>
  <button onclick="getLocation()">Try It</button>
  <p id="demo"></p>
  <!--The div element for the map -->
  <div id="map"></div>
  <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJlELjVyZrWhf4_oUrYNkmz7Q-kCDToQ&callback=initMap&libraries=&v=weekly" async></script>
  <script src="javascript/geolocalisation.js"></script>
</body>

</html>