document.querySelector("h1").style.color = "Red";

document.querySelector("h1").textContent = "Hola Mundo!";

// document.getElementById("especial").style.backgroundColor = "Gold";
document.getElementById("especial").style.padding = "20px";

document.querySelector("p").style.backgroundColor = "LightBlue";

let titulo = document.querySelector("h1");
titulo.style.fontWeight = "normal";
titulo.style.fontFamily = "Arial, Helvetica, Sans";

let nuevoH1 = document.createElement("h1");
nuevoH1.textContent = "¡Un nuevo H1!";
document.body.appendChild(nuevoH1);

let nuevoLi = document.createElement("li");
nuevoLi.textContent = "Un nuevo HIJO!";
nuevoLi.style.color = "Red";
document.querySelector("ul").appendChild(nuevoLi);

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
console.log(parrafos[1].textContent);

for (i = 0; i < parrafos.length; i++) {
  parrafos[i].style.color = "blue";
  parrafos[i].textContent = "Cambie todo HACKKK!!!";
}