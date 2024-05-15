<?php
$conexion = new mysqli("localhost", "usuario", "contraseña",
"mi_base_de_datos");
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
$sql = "SELECT id, nombre, email FROM usuarios";
$resultado = $conexion->query($sql);
    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Nombre: " . $row["nombre"].
    " - Email: " . $row["email"]. "<br>";
}
} else {
echo "0 resultados";
}
$conexion->close();
?>