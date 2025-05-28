document.addEventListener('DOMContentLoaded', function() {
    // Gestionnaire d'événements pour le lien "Exercices"
    document.getElementById('showExercice').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('exerciceForm').style.display = 'block';
        document.getElementById('inscriptionForm').style.display = 'none';
        document.getElementById('connectionForm').style.display = 'none';
    });

    // Gestionnaire d'événements pour le lien "Inscription"
    document.getElementById('showInscription').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('inscriptionForm').style.display = 'block';
        document.getElementById('exerciceForm').style.display = 'none';
        document.getElementById('connectionForm').style.display = 'none';
    });

    // Gestionnaire d'événements pour le lien "Connexion"
    document.getElementById('showConnection').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('connectionForm').style.display = 'block';
        document.getElementById('exerciceForm').style.display = 'none';
        document.getElementById('inscriptionForm').style.display = 'none';
    });

    // Gestionnaire d'événements pour le formulaire d'inscription
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
            $('#messageModalLabel').text('Succès');
            $('#messageModalBody').text('Votre inscription a été enregistrée avec succès.');
            $('#messageModal').modal('show');
        } else {
            // Si le formulaire n'est pas valide, afficher un message d'erreur
            $('#messageModalLabel').text('Erreur');
            $('#messageModalBody').text('Veuillez remplir tous les champs correctement et accepter le traitement de vos données.');
            $('#messageModal').modal('show');
        }
    });

    // Gestionnaire d'événements pour le bouton "Fermer" du modal
    $('#messageModal').on('hidden.bs.modal', function () {
        $('#inscriptionForm').hide(); // Masquer le formulaire d'inscription
    });
});
