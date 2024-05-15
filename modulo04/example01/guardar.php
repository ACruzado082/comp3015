<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
// Validar y sanitizar las entradas
$nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Formato de correo electrónico inválido";
exit;
}

// Aquí se incluiría el código para insertar los datos en la base de datos
// Crear conexión
$conexion = new mysqli("localhost", "usuario", "contraseña",
"mi_base_de_datos");
// Verificar conexión
if ($conexion->connect_error) {
die("Conexión fallida: " . $conexion->connect_error);
}
$sql = "INSERT INTO usuarios (nombre, email) VALUES (?, ?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ss", $nombre, $email);
if ($stmt->execute()) {
    echo "Nuevo registro creado con éxito";
} else {
    echo "Error: " . $stmt->error;
}
$stmt->close();
$conexion->close();
?>