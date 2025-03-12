'use strict'
// EJERCICIO 1
//  Cuando se haga clic en un botón, cambiará su color de fondo
// let boton = document.querySelector("button");
// boton.addEventListener("click",() => {
//     boton.style.backgroundColor = "violet";
// })

// ejercicio 2
// Al hacer clic en el botón, ocultar/mostrar el <div>.
// let boton = document.querySelector("button");
// boton.addEventListener("click", () => {
//     document.querySelector("p").textContent = "Texto cambiado";
// })

// EJERCICIO 3
// Al pasar el mouse sobre la imagen, cambiar la src
// let imagen  = document.querySelector("img");
// imagen.addEventListener("mouseover",() => {
//     imagen.src = "imagen2.jpg";
// })

// EJERCICIO 4
// Al hacer clic en el botón, ocultar/mostrar el <div>.
// let botonMostrarOcultar = document.querySelector("button");
// botonMostrarOcultar.addEventListener("click", () => {
//     document.querySelector("div").classList.toggle("ocultar");
// })

// ejericicio 5
// Contar cuántas veces se hace clic en un botón y mostrarlo.
// let boton = document.querySelector("button");
// let contador = 0;
// boton.addEventListener("click",() => {
//     contador++;
//     document.querySelector("p").textContent = "Clics: " + contador;
// })

// ejercicio 6
// Al hacer clic en el botón, agregar un nuevo <li> a la lista.
// let boton = document.querySelector("button");
// boton.addEventListener("click",()=> {
//     let nuevoLi = document.createElement("p")
//     nuevoLi.textContent = "Nuevo li";
//     document.querySelector("ul").appendChild(nuevoLi);
// })
// Ejercicio 7
// Mostrar en un <p> la tecla que se presionó.
// let p = document.querySelector("p");
// document.addEventListener("keydown", (e) => {
//     p.textContent = e.key;
// })
// Ejercicio 8
// Si se presiona "r", fondo rojo. Si "g", fondo verde. Si "b",fondo azul.
// let body = document.querySelector("body");
// document.addEventListener("keydown",(e) => {
//     if (e.key === "r") {
//         body.style.backgroundColor = "red";
//     }else if (e.key === "b") {
//         body.style.backgroundColor = "blue";
//     }else if (e.key === "g") {
//         body.style.backgroundColor = "green";
//     }
// })
// Ejercicio 9
// Al hacer clic en el botón, cambiar su texto entre "ON" y OFF
// let boton = document.querySelector("button");
// boton.addEventListener("click",() =>{
//     if (boton.textContent === "ON") {
//         boton.textContent = "OFF";
//     }else{
//         boton.textContent = "ON";
//     }
// })
// Ejercicio 10
// let boton = document.querySelector("button");
// boton.addEventListener("click",() =>{
//    let p = document.querySelector("p");
//     if (p.style.color === "black") {
//         p.style.color = "red";
//     }else{
//         p.style.color = "black";
//     }
// })
// Ejercicio 11
// Cada <li> tiene un botón "Eliminar".
// Al hacer clic en el botón, se borra el <li>.
// let botones = document.querySelectorAll("button");
// botones.forEach(nodo => {
//     nodo.addEventListener("click", () => {
//     let padreBoton = nodo.parentElement;
//     let padreLi = padreBoton.parentElement
//     padreLi.removeChild(padreBoton);
//     })
// });
// Ejercicio 12
// Un botón agrega un <div> con texto.Otro botón elimina el último <div> agregado.
// let botonAgregar = document.getElementById("agregar");
// let botonEliminar = document.getElementById("eliminar");
// let body = document.querySelector("body");
// botonAgregar.addEventListener("click", () => {
//     let nuevoDiv = document.createElement("div");
//     let nuevoP = document.createElement("p");
//     nuevoP.textContent = "Me creo el puto jesus";
//     nuevoDiv.appendChild(nuevoP);
//     body.appendChild(nuevoDiv);
// })
// botonEliminar.addEventListener("click", () =>{
//     let ultimoHijo = body.lastElementChild;
//     if (ultimoHijo != botonEliminar && ultimoHijo != botonAgregar) {
//         body.removeChild(ultimoHijo);
//     }
// })
// Ejercicio 13
// let p = document.querySelector("p");
// p.addEventListener("click", () => {
//     p.classList.toggle("resaltado");
// });
// Ejercicio 14
// Cada clic en el botón duplica el texto del <p>.
// let duplicador = document.querySelector("button");
// let p = document.querySelector("p");
// duplicador.addEventListener("click", () => {
//     let texto = p.textContent;
//     p.insertAdjacentText("beforeend", texto);
// });
// Ejercicio 15
// Cambiar el fondo de la página entre blanco y negro con un botón
// let boton = document.querySelector("button");
// boton.addEventListener("click", () => {
//     let body = document.querySelector("body");
//     // Si el fondo es blanco o no tiene un fondo asignado, cambiarlo a negro, si es negro, a blanco
//     body.style.backgroundColor = (body.style.backgroundColor === "white" || body.style.backgroundColor === "") ? "black" : "white";
// });
// Ejercicio 16
// Alternar la visibilidad del <p>.
// let boton = document.querySelector("button");
// boton.addEventListener("click",()=>{
//     let p = document.querySelector("p");
//     p.style.display = (p.style.display === "block" || p.style.display === "inline" ) ? "none" :"block";
// })

// Ejercicio 17
// Un botón crea nuevos botones.Cada botón nuevo muestra un mensaje al hacer clic.
// let botonCreador = document.querySelector("button");
// let h1 = document.createElement("h1");
// h1.textContent = "CONTENEDOR DE CAJAS";
// botonCreador.addEventListener("click" , () => {
//     let nuevoBoton = document.createElement("button");
//     nuevoBoton.textContent = "Soy un boton creado";
//     nuevoBoton.addEventListener("click",() =>{
//         alert("Mensajito del alert");
//     });
//     let div = document.querySelector("div");
//     div.appendChild(nuevoBoton);
//     div.style.margin = "20px 0";
//     div.style.backgroundColor = "red";
//     div.insertAdjacentElement("beforebegin",h1);
// });
// Ejercicio 18
// Un botón aumenta el tamaño del texto de un <p>
// let agrandador = document.querySelector("button");
// let texto = document.querySelector("p");
// agrandador.addEventListener("click",()=>{
//     let font = texto.style.fontSize.value;
//     console.log(font);
// });
// Ejercicio 19
// Al hacer clic, el número baja de 10 a 0.Cuando llegue a 0, mostrar "¡Fin!".
let boton = document.querySelector("button");
let regresiva = document.querySelector("p");
let contador = regresiva.textContent;
boton.addEventListener("click",() =>{
    if (contador > 0) {
        regresiva.textContent = contador;
        contador--;
    }else{
        regresiva.textContent = "FIN";
    }
});
// Ejercicio 20

// Ejercicio 21

// Ejercicio 22

// Ejercicio 23

// Ejercicio 24

// Ejercicio 25

// Ejercicio 26

// Ejercicio 27

// Ejercicio 28

// Ejercicio 29

// Ejercicio 30

// Ejercicio 31

// Ejercicio 32
