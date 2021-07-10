<header>
    <nav class="navbar navbar-expand-lg height-100 colore" id="navbar">
        <a href="index.php">
            <div><img src="logo/logo.png"></div>
        </a>

        <div class="menu-btn d-lg-none">
            <div class="menu-btn__burger"></div>
        </div>

        <ul class="menu_nasc d-lg-none">
            <li><a href="risorseimpiegate.php">Risorse Impiegate</a></li>
            <li><a href="contatti.php">Funzione2</a></li>
            <li><a href="servizi.php">Funzione3</a></li>
            <li><a href="filosofia.php">Funzione4</a></li>
        </ul>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul>
                <li class=" "><a href="shop.php">Funzione1</a></li>
                <li class=" "><a href="contatti.php">Funzione2</a></li>
                <li class=""><a href="servizi.php">Funzione3</a></li>
                <li><a href="filosofia.php">Funzione4</a></li>
            </ul>
        </div>


        <script>
            window.onscroll = function() {
                scrollFunction()
            };

            function scrollFunction() {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.getElementById("navbar").classList.add("scroll");
                } else {
                    document.getElementById("navbar").classList.remove("scroll");
                }
            }
            const menuBtn = document.querySelector('.menu-btn');
            let menuOpen = false;
            menuBtn.addEventListener('click', () => {

                if (!menuOpen) {

                    menuBtn.classList.add('open');

                    menuOpen = true;

                } else {

                    menuBtn.classList.remove('open');

                    menuOpen = false;

                }

            });



            const hamburger = document.querySelector('.menu-btn');
            const nav = document.querySelector('.menu_nasc');
            hamburger.addEventListener('click', () => {
                nav.classList.toggle("open");

            })
        </script>



    </nav>
</header>