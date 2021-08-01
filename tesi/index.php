<!DOCTYPE html>
<html>

<head>
  <script type="module" src="javascript/mappa.js"></script>
  <link rel="stylesheet" type="text/css" href="css/indexStyle.css">
  <link rel="stylesheet" type="text/css" href="css/navbar_content.css">
  <link rel="stylesheet" type="text/css" href="css/slider.css">
  <link rel="stylesheet" type="text/css" href="css/select.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <title>Add Map</title>
</head>

<body>
  <?php require("header.php");
  ?>
  <div class="container-fluid bordo">
    <div class="row m-4">
      <div class="col-xs-6 col-md-3">
        <div class="slidecontainer">
          <p id="distanzaDaTe">Distanza da te:</p>
          <input type="range" min="1" max="500" value="0" class="slider" id="myRange" style="display: none;">
          <p id="demo"></p>
        </div>
        <!-- selettori regione-->
        <div id="contenitoreDiv">
          <div class="select m-1">
            <select name="slct" id="regione">
              <option selected disabled>Regione</option>
              <?php require("selectorRegioni.php") ?>
            </select>
          </div>
          <div class="select m-1">
            <select name="slct" id="provincia">
              <option selected disabled>Provincia</option>
            </select>
          </div>
          <div class="select m-1">
            <select name="slct" id="comune">
              <option selected disabled>Comune</option>
            </select>
          </div>
        </div>
        <div class="select m-1">
          <select name="slct" id="gravità">
            <option selected disabled value="">Gravità</option>
            <option value="moderata">moderata</option>
            <option value="grave">grave</option>
            <option value="catastrofica">catastrofica</option>
          </select>
        </div>
        <div id="bottone">Cambio criteri ricerca</div>
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