<?php

    include 'conexion.php';

    $sql = "UPDATE usuarios SET nombre='John Doe Swan', email = 'johndoe@email.com' WHERE nombre like 'John Doe'"; 
    if ($conexion->query($sql) === TRUE) { 
        echo "Registro actualizado con éxito"; 
    } else { 
        echo "Error actualizando el registro: ";
        echo  $conexion->error; 
    }

?>