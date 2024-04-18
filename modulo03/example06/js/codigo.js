$(document).ready(function () {

    $("h1")
        .css("color" , "red")
        .css("font-family" , "Arial,Helvetica")
        .css("font-size" , "24pt")
        .css("font-weight" , "100")
        .css("background-color" , "#ffffaa")
        .text("Hola Mundo!");

    $("#especial").css("color", "blue").text("Especial").css("cursor", "pointer") ;

    $("#especial").click(function () {
        alert("Hola Mundo!");
    });
});