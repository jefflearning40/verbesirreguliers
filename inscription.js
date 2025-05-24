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
