
//Destructuración - Destrucción

//ES5
var datos = ['Miguel ',20]

var nombre = datos[0]
var edad = datos[1]

console.log(nombre + edad)

//ES6

const person = {
	nombre:'Miguel ',
	edad:22
}

const {nombre: n , edad:e} = person
console.log(n + e)


const calcEdad = (year)=>{
	const edad  = new Date().getFullYear() - year
	const mayor =  edad >= 18 ? true : false
	return [edad,mayor]
}

console.log(calcEdad(1998));
const [edad2,mayoria] = calcEdad(2005)
console.log(`Es mayor de edad : ${mayoria}`)