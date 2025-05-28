    <video autoplay muted loop id="backgroundVideo">
        <source src="assets/images/videobg.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>
    <header role="banner" aria-label="En-tête principal">
        <nav class="navbar navbar-expand-lg navbar-light" role="navigation" aria-label="Navigation principale" style="background-color: var(--navbar-bgcolor);">
            <div class="container">
                <a href="index.html">
                    <img src="assets/images/english_flag.webp" alt="Logo" class="logo" id="logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" data-toggle="modal" data-target="#aboutModal" style="color: black; font-weight: bold;" data-i18n="about">À propos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="showExercice" style="color: var(--translat-color); font-weight: bold;" data-i18n="exercises">Exercices</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="showInscription" style="color: var(--translat-color); font-weight: bold;" data-i18n="register">Inscription</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="showConnection" style="color: var(--translat-color); font-weight: bold;" data-i18n="login">Connection</a>
                        </li>
                    </ul>
                    <button id="translateButton" class="btn btn-outline-dark" style="color: var(--translat-color); font-weight: bold;" data-i18n="translateButton">Traduire en Anglais</button>
                </div>
            </div>
        </nav>
    </header>