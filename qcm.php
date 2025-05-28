<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="QCM sur les verbes irréguliers.">
    <meta name="keywords" content="verbes irréguliers, QCM, quiz">
    <meta name="author" content="Jean Francois">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" href="assets/images/iconesite.ico" type="image/x-icon">
    <link rel="stylesheet" href="dist/css/theme.css">
    <title data-i18n="title">QCM Verbes irréguliers</title>
</head>
<body class="d-flex flex-column min-vh-100">
    <video autoplay muted loop id="backgroundVideo">
        <source src="assets/images/videobg.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>

    <header role="banner" aria-label="En-tête principal">
        <nav class="navbar navbar-expand-lg navbar-light" role="navigation" aria-label="Navigation principale" style="background-color: var(--navbar-bgcolor);">
            <div class="container">
                <a href="index.php">
                    <img src="assets/images/english_flag.webp" alt="Logo" class="logo" id="logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.php" data-i18n="home">Accueil</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" data-i18n="quiz">QCM</a>
                        </li>
                    </ul>
                    <button id="translateButton" class="btn btn-outline-dark" style="color: var(--translat-color); font-weight: bold;" data-i18n="translateButton">Traduire en Anglais</button>
                </div>
            </div>
        </nav>
    </header>

    <div class="flex-grow-1">
        <div class="container">
            <h1 class="display-4" data-i18n="welcome">QCM sur les verbes irréguliers</h1>
            <div id="quizContainer" class="exercice-content">
                <div class="difficulty-level" data-i18n="difficultyLevel">Niveau de difficulté</div>
                <select id="difficultySelector" class="form-control">
                    <option value="easy" data-i18n="easy">Facile (20 secondes)</option>
                    <option value="medium" data-i18n="medium">Moyen (10 secondes)</option>
                    <option value="hard" data-i18n="hard">Difficile (5 secondes)</option>
                </select>
                <button id="startButton" class="btn btn-primary" data-i18n="startQuiz">Commencer le QCM</button>
            </div>
        </div>
    </div>

    <div id="progressContainer"></div>

    <footer class="text-white p-1 mt-auto" role="contentinfo" aria-label="Pied de page" style="background: var(--footer-bgcolor);">
        <div class="container">
            <p class="text-left" style="color: var(--footer-color-p);" data-i18n="copyright">&copy; 2025 Mon Site. Tous droits réservés.</p>
            <nav class="nav justify-content-left" role="navigation" aria-label="Navigation secondaire">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="mentions-legales.html" data-i18n="legalNotice">Mentions légales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="politique-confidentialite.html" data-i18n="privacyPolicy">Politique de confidentialité</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="contact.html" data-i18n="contactUs">Contactez-nous</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/i18next@21.6.11/i18next.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="translate.js"></script>
    <script src="qcm.js"></script>
    <script src="tableauverbe.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>
