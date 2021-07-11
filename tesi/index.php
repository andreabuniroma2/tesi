<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" type="text/css" href="css/indexStyle.css">
  <link rel="stylesheet" type="text/css" href="css/navbar_content.css">
  <link rel="stylesheet" type="text/css" href="css/slider.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <title>Add Map</title>
  <script type="module" src="javascript/mappa.js"></script>
</head>

<body>
  <?php require("header.php");
  ?>
  <div class="container-fluid bordo">
    <div class="row m-4">
      <div class="col-xs-6 col-md-3">
        <div class="middle">

          <div class="blocco_slider">
            <div class="multi-range-slider">
              <input type="range" id="input-left" min="1200" max="4000" value="1200" onchange="change(strumento)">
              <input type="range" id="input-right" min="1200" max="4000" value="4000" onchange="change(strumento)">
              <div class="slider">
                <div class="track"></div>
                <div class="range"></div>
                <div class="thumb left"></div>
                <div class="thumb right"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="bottone">clicca per </div>
      </div>
      <div class="col-xs-6 col-md-6">
        <div id="map"></div>
      </div>
      <div class="col-xs-6 col-md-3">lista incendi</div>

    </div>
  </div>
  <div class="container-fluid no-gutters" id="lanostrastoria">
    <h3>la nostra storia</h3>
    <div class="storia">
      <img src="immagini/vigile.jpeg" alt="no_image">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut excepturi ratione fugiat voluptates quisquam autem soluta modi, est ad magnam cum quo nobis vero voluptas odit quae ullam! Necessitatibus, atque.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut excepturi ratione fugiat voluptates quisquam autem soluta modi, est ad magnam cum quo nobis vero voluptas odit quae ullam! Necessitatibus, atque.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut excepturi ratione fugiat voluptates quisquam autem soluta modi, est ad magnam cum quo nobis vero voluptas odit quae ullam! Necessitatibus, atque.
      </p>
    </div>
  </div>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJlELjVyZrWhf4_oUrYNkmz7Q-kCDToQ&callback=initMap&libraries=&v=weekly" async></script>
  <script src="javascript/geolocalisation.js"></script>
</body>

</html>