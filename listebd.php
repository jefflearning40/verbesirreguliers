<?php
// Afficher les données d'une table (utile pour un foreach)
$stmt = $pdo->query("SELECT * FROM userirregularverbes ORDER BY nom");
$resultats = $stmt->fetchAll(PDO::FETCH_ASSOC); 
foreach ($resultats as $resultat) {
$resultat['nom_champs'];
    }