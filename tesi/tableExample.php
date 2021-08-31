<table class="table-fill" style="margin-top: 10px;">
    <thead>
        <tr>
            <th class="text-left">Res</th>
            <th class="text-left">Num</th>
        </tr>
    </thead>
    <tbody class="table-hover" id="inserisciQui">
        <!-- <tr>
            <td class="text-left">Vigili</td>
            <td class="text-left" id="numeroVigili">$ 50,000.00</td>
        </tr>
        <tr>
            <td class="text-left">Veicoli</td>
            <td class="text-left" id="numeroVeicoli">$ 10,000.00</td>
        </tr>
        <tr>
            <td class="text-left">Kit Idraulici</td>
            <td class="text-left" id="numeroKit">$ 85,000.00</td>
        </tr>-->
    </tbody>
</table>
<script>
    function costruisciTabella() {
        tabellaConteggio.innerHTML = "";
        for (item in arrayResultConteggio[0]) {
            var tr = document.createElement("tr");
            var tds = document.createElement("td");
            var tdd = document.createElement("td");
            tds.className = "text-left";
            tdd.className = "text-right";
            tds.appendChild(document.createTextNode(item));
            tdd.appendChild(document.createTextNode(arrayResultConteggio[0][item]));
            tr.appendChild(tds);
            tr.appendChild(tdd);
            console.log(item);
            tabellaConteggio.appendChild(tr);
        }

    }

    function richiestaHTTPConteggio(parametro) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                arrayResultConteggio = JSON.parse(this.responseText);
                console.log(this.responseText);
                costruisciTabella();
            }
        };
        xhttp.open("GET", "http://localhost:8080/TesiRivelazioneIncendi/ContatoreRisorse?idIncendio=" + parametro, true);
        console.log("http://localhost:8080/TesiRivelazioneIncendi/ContatoreRisorse?idIncendio=" + parametro);
        xhttp.send();

    }
    idIncendio = findGetParameter("idincendio");
    var arrayResultConteggio;
    var tabellaConteggio = document.getElementById("inserisciQui");
    richiestaHTTPConteggio(idIncendio);
    intervalID = setInterval( function() { richiestaHTTPConteggio(idIncendio); }, 5000);
</script>