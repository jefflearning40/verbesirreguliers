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
<!--
    <script src="translate.js"></script>
<script src="inscription.js"></script>
<script src="script.js"></script> 
-->
<script src="assets/scripts/translate.js"></script>
<script src="assets/scripts/inscription.js"></script>
<script src="assets/scripts/script.js"></script>