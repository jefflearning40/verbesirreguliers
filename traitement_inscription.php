<?php

require_once ('config/config.php');

$nom = $_POST['nom'];
$email = $_POST['email'];
$adresse = $_POST['adresse'];



if (!empty($_POST['telephone']) && is_numeric($_POST['telephone'])) {
    $telephone = $_POST['telephone'];
}



$stmt = $pdo->prepare('INSERT INTO jeff_user (nom, email, adresse, telephone) VALUES (?,?,?,?)');
$stmt->execute([$nom, $email, $adresse, $telephone]);
