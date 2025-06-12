
<?php
// Lire le fichier .env
function loadEnv($path)
{
    if (!file_exists($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
            putenv(sprintf('%s=%s', $name, $value));
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
}

// On charge le .env
loadEnv(__DIR__ . '/../.env');

// On récupère l'environnement (local par défaut si non défini)
$env = getenv('APP_ENV') ?: 'local';


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if ($env=="local"){
    define('DB_HOST', 'localhost');
    define('DB_NAME', 'userirregularverbes');
    define('DB_USER', 'root');
    define('DB_PASS', '');
} elseif ($env=="prod") {
    // https://phpmyadmin.hosting.ovh.net/index.php?route=/
    define('DB_HOST', 'blobidesafec.mysql.db');
    define('DB_NAME', 'blobidesafec');
    define('DB_USER', 'blobidesafec');
    define('DB_PASS', 'Afec2025Dax');
}else{
    die ("erreur environnement");
}


try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (Exception $e) {
    die('Erreur de connexion : ' . $e->getMessage());
}
