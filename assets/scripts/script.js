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
