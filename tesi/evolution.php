
<!DOCTYPE html>
<html>

<head>
    <title>Evolution</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="css/evolutionStyle.css" />
    <link rel="stylesheet" type="text/css" href="css/navbar_content.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="javascript/evolutionJS.js"></script>
</head>

<body>
    <?php require("header.php")?>

    <body>
        <div class="container-fluid bordo">
            <div class="row m-4">
                <div class="col-xs-6 col-md-3">
                </div>
                <div class="col-xs-6 col-md-6">
                    <div id="map"></div>
                </div>
                <div class="col-xs-6 col-md-3"></div>

            </div>
        </div>

        <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoJlELjVyZrWhf4_oUrYNkmz7Q-kCDToQ&callback=initMap&libraries=&v=weekly" async></script>
    </body>

</html>