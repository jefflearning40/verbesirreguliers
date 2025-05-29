<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userirregularverbes";

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer les données du formulaire
$nom = $_POST['nom'];
$email = $_POST['email'];
$adresse = $_POST['adresse'];
$telephone = $_POST['telephone'];

// Préparer et exécuter la requête SQL
$sql = "INSERT INTO utilisateurs (nom, email, adresse, telephone) VALUES ('$nom', '$email', '$adresse', '$telephone')";

if ($conn->query($sql) === TRUE) {
    echo "Nouvel enregistrement créé avec succès";
} else {
    echo "Erreur: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
