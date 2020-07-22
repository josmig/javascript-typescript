//Templates Strings

let nombre = 'Pablo'
let apellido = 'Pantigoso'
//no cambia el valor
const naci = 1998
const ciudad = 'Juliaca'

function calcularEdad(anio){
	return anio - naci
}

console.log(calcularEdad(2020))

//Con ES5
console.log(nombre + '' + apellido + ' ,' + 'nacio en' + ciudad + ' en el año ' + 
	naci + ' tiene ' + calcularEdad(2020) + 'años')


//Con ES6, usando template strings
console.log(`${nombre} ${apellido} , nacio en ${ciudad}, en el año ${naci} , 
	y su edad es ${calcularEdad(2020)}`)



