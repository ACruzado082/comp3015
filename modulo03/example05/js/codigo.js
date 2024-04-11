document.getElementById("especial").addEventListener("click",function(e) {
    alert("¡Hola Mundo!");});

    document.getElementById("saludo").addEventListener(
        "click",function(e) {
            //alert("¡Hola Mundo!");
            let h1 = document.querySelector("h1");
        h1.style.color = "Blue";
        h1.style.fontFamily = "Arial";
        h1.style.position = "absolute";
        h1.style.zIndex = "100";
        h1.style.bottom = "50%";
        h1.style.padding = "20px";
        });