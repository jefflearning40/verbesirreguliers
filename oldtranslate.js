// Script pour la traduction
document.getElementById('translateButton').addEventListener('click', function() {
    var elements = document.querySelectorAll('[data-translate]');
    var isFrench = elements.length > 0 && elements[0].getAttribute('data-translate') === 'fr';

    elements.forEach(function(element) {
        if (isFrench) {
            element.textContent = element.getAttribute('data-en');
            element.setAttribute('data-translate', 'en');
        } else {
            element.textContent = element.getAttribute('data-fr');
            element.setAttribute('data-translate', 'fr');
        }
    });

    // Mettre à jour le contenu dynamique du modal
    updateModalContent(!isFrench); // Inverser la logique ici

    var button = document.getElementById('translateButton');
    if (isFrench) {
        button.textContent = 'Translate to French';
        button.setAttribute('data-translate', 'en');
    } else {
        button.textContent = 'Traduire en Anglais';
        button.setAttribute('data-translate', 'fr');
    }
});

// Fonction pour mettre à jour le contenu du modal
function updateModalContent(isFrench) {
    var messageModalBody = document.getElementById('messageModalBody');
    if (messageModalBody) {
        if (isFrench) {
            messageModalBody.textContent = messageModalBody.getAttribute('data-fr');
        } else {
            messageModalBody.textContent = messageModalBody.getAttribute('data-en');
        }
    }

    var messageModalLabel = document.getElementById('messageModalLabel');
    if (messageModalLabel) {
        if (isFrench) {
            messageModalLabel.textContent = messageModalLabel.getAttribute('data-fr');
        } else {
            messageModalLabel.textContent = messageModalLabel.getAttribute('data-en');
        }
    }

    var closeButton = document.querySelector('.btn-close-modal');
    if (closeButton) {
        if (isFrench) {
            closeButton.textContent = closeButton.getAttribute('data-fr');
        } else {
            closeButton.textContent = closeButton.getAttribute('data-en');
        }
    }
}

// Script pour gérer les liens d'inscription, de connexion, et d'exercices
document.getElementById('showInscription').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('inscriptionForm').style.display = 'block';
    document.getElementById('connectionForm').style.display = 'none';
    document.getElementById('exerciceForm').style.display = 'none';
});

document.getElementById('showConnection').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('connectionForm').style.display = 'block';
    document.getElementById('inscriptionForm').style.display = 'none';
    document.getElementById('exerciceForm').style.display = 'none';
});

document.getElementById('showExercice').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('exerciceForm').style.display = 'block';
    document.getElementById('inscriptionForm').style.display = 'none';
    document.getElementById('connectionForm').style.display = 'none';
});

// Script pour gérer le formulaire d'inscription
$(document).ready(function() {
    $('#inscriptionForm form').on('submit', function(event) {
        event.preventDefault(); // Empêche la soumission normale du formulaire

        // Validation du formulaire
        var nom = $('#nom').val();
        var email = $('#email').val();
        var adresse = $('#adresse').val();
        var telephone = $('#telephone').val();
        var rgpdConsent = $('#rgpdConsent').is(':checked');

        if (nom && email && adresse && telephone && rgpdConsent) {
            // Si le formulaire est valide, afficher un message de succès
            $('#messageModalLabel').text('Succès').attr('data-fr', 'Succès').attr('data-en', 'Success');
            $('#messageModalBody').text('Votre inscription a été enregistrée avec succès.').attr('data-fr', 'Votre inscription a été enregistrée avec succès.').attr('data-en', 'Your registration has been successfully recorded.');
            $('#messageModal').modal('show');
        } else {
            // Si le formulaire n'est pas valide, afficher un message d'erreur
            $('#messageModalLabel').text('Erreur').attr('data-fr', 'Erreur').attr('data-en', 'Error');
            $('#messageModalBody').text('Veuillez remplir tous les champs correctement et accepter le traitement de vos données.').attr('data-fr', 'Veuillez remplir tous les champs correctement et accepter le traitement de vos données.').attr('data-en', 'Please fill in all fields correctly and accept the processing of your data.');
            $('#messageModal').modal('show');
        }

        // Mettre à jour le contenu du modal après l'affichage
        var isFrench = document.querySelectorAll('[data-translate]')[0].getAttribute('data-translate') === 'fr';
        updateModalContent(isFrench);
    });

    // Gestionnaire d'événements pour le bouton "Fermer" du modal
    $('#messageModal').on('hidden.bs.modal', function () {
        $('#inscriptionForm').hide(); // Masquer le formulaire d'inscription
    });
});
