"use strict";

var productos = "Monitor 20 Pulgadas";
console.log(productos); // .replace para reemplazar

console.log(productos.replace('Pulgadas', '"')); //Con esto reemplazmos un pequeño fragmento en otro

console.log(productos.replace('Monitor', 'Monitor Curvo')); // .slice para cortar

console.log(productos.slice(0, 10)); //repet(permite repetir una cadena de texto) y split

var texto = ' ¡En promocion! '.repeat(2);
console.log(texto);
console.log(productos.concat(texto));
console.log("".concat(productos, " ").concat(texto)); //split sirve para dividir un string

var actividad = "Estoy aprendiendo Javascript Moderno";
var tweet = "Javascript #JSModerno";
console.log(actividad.split(""));
console.log(actividad.split(" "));
console.log(tweet.split("#"));