<?php
    include 'conexion.php';

    $sql = "DELETE FROM usuarios WHERE nombre like 'John Doe Swan'"; 
    if ($conexion->query($sql) === TRUE) { 
        echo "Registro eliminado con éxito"; 
    } else { 
        echo "Error al eliminar el registro: ";
        echo $conexion->error; 
    }

?>