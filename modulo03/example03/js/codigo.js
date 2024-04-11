alert("Hola Mundo!");

if (confirm("¿Deseas continuar con la acción?")) {
    console.log("El usuario aceptó.");
} else {
    console.log("El usuario canceló la acción.");
}

let nombreUsuario = prompt("Por favor, introduce tu nombre:","John Doe");
if (nombreUsuario !== null) {
    console.log("Hola, " + nombreUsuario + "!");
} else {
    console.log("Usuario no proporcionó su nombre.");
}