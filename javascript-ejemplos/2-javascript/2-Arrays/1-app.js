let numero = [1,4,6,8,9];
console.log(numero);

let arrayMezcldo = [1,"hola",true,34.12];
console.log(arrayMezcldo);

let mi_array = [];
mi_array.push("Deadpool");
console.log(mi_array);
mi_array.push(12,true,"asdas");
//con push podemos agregar mas valores a nuestro array

console.log("Mi array tiene un valor de " + mi_array.length + " elementos");
console.log("El 3 elemento es  : " + mi_array[2]);

//para eliminar el ultimo valores
mi_array.pop();
console.log(mi_array);
//para eliminar el primer elemento del array
mi_array.shift()

//encontrar un elemento en el array
mi_array.indexOf(12)

//clonar un array
let copiaArray = mi_array.slice();
console.log(copiaArray);
