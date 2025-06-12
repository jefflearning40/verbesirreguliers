<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Pour vous entraîner à apprendre les verbes irréguliers.">
    <meta name="keywords" content="verbes irréguliers anglais base, prétérit, participe passé et traduction">
    <meta name="author" content="Jean Francois">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" href="assets/images/iconesite.ico" type="image/x-icon">
    <link rel="stylesheet" href="dist/css/theme.css">
    <title data-i18n="title">Verbes irréguliers</title>
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

    <div class="flex-grow-1">
        <div class="container">
            <h1 class="display-4" data-i18n="welcome">Bienvenue !</h1>
            <div id="exerciceForm" class="form-container">
                <h2 data-i18n="quiz">QCM</h2>
                <p data-i18n="quizContent">Contenu du QCM ici...</p>
                <div class="exercice-buttons">
                    <a href="pdf_viewer.html" target="_blank" class="btn">
                        <img src="assets/images/verbe_irr.jpg" alt="Tableau des verbes irréguliers" class="exercice-icon">
                        <span data-i18n="verbsTable">Tableau des verbes</span>
                    </a>
                    <a href="qcm.php" class="btn">
                        <img src="assets/images/QCM.webp" alt="Commencer le QCM" class="exercice-icon">
                        <span data-i18n="startQuiz">Commencer le QCM</span>
                    </a>
                </div>
            </div>
            <div id="inscriptionForm" class="form-container">
                <h2 data-i18n="register">Inscription</h2>
                <form>
                    <div class="form-group">
                        <label for="nom" data-i18n="name">Nom</label>
                        <input type="text" class="form-control" id="nom" placeholder="Entrez votre nom" data-i18n="enterName">
                    </div>
                    <div class="form-group">
                        <label for="email" data-i18n="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Entrez votre email" data-i18n="enterEmail">
                    </div>
                    <div class="form-group">
                        <label for="adresse" data-i18n="address">Adresse postale</label>
                        <input type="text" class="form-control" id="adresse" placeholder="Entrez votre adresse postale" data-i18n="enterAddress">
                    </div>
                    <div class="form-group">
                        <label for="telephone" data-i18n="phone">Téléphone</label>
                        <input type="tel" class="form-control" id="telephone" placeholder="Entrez votre numéro de téléphone" data-i18n="enterPhone">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="rgpdConsent">
                        <label class="form-check-label" for="rgpdConsent" data-i18n="rgpdConsent">J'accepte le traitement de mes données conformément au RGPD</label>
                    </div>
                    <button type="submit" class="btn btn-primary" data-i18n="registerButton">S'inscrire</button>
                </form>
            </div>
            <div id="connectionForm" class="form-container">
                <h2 data-i18n="login">Connexion</h2>
                <form>
                    <div class="form-group">
                        <label for="email" data-i18n="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Entrez votre email" data-i18n="enterEmail">
                    </div>
                    <div class="form-group">
                        <label for="password" data-i18n="password">Mot de passe</label>
                        <input type="password" class="form-control" id="password" placeholder="Mot de passe" data-i18n="password">
                    </div>
                    <div class="form-group">
                        <a href="#" data-toggle="modal" data-target="#forgotPasswordModal" data-i18n="forgotPassword">Mot de passe oublié ?</a>
                    </div>
                    <button type="submit" class="btn btn-primary" data-i18n="loginButton">Se connecter</button>
                </form>
            </div>
        </div>
    </div>

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
<!---------------------------------------------------------------------------------------->
    <!-- Modal pour À propos -->
    <div class="modal fade" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="aboutModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="aboutModalLabel" data-i18n="about">À propos</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p data-i18n="aboutContent">Contenu de la section À propos...</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" data-i18n="close">Fermer</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal pour Mot de passe oublié -->
    <div class="modal fade" id="forgotPasswordModal" tabindex="-1" role="dialog" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="forgotPasswordModalLabel" data-i18n="forgotPassword">Mot de passe oublié</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p data-i18n="forgotPasswordContent">Entrez votre email pour recevoir un lien de réinitialisation de mot de passe.</p>
                    <form>
                        <div class="form-group">
                            <label for="forgotEmail" data-i18n="email">Email</label>
                            <input type="email" class="form-control" id="forgotEmail" placeholder="Entrez votre email" data-i18n="enterEmail">
                        </div>
                        <button type="submit" class="btn btn-primary" data-i18n="send">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="messageModal" tabindex="-1" role="dialog" aria-labelledby="messageModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="messageModalLabel" data-i18n="message">Message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="messageModalBody" data-i18n="messageContent">Contenu du message...</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" data-i18n="close">Fermer</button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/i18next@21.6.11/i18next.min.js"></script>
    <script src="translate.js"></script>
    <script src="inscription.js"></script>
</body>
</html>
