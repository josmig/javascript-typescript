
//spread operator
var suma = function(a,b,c,d){
	return a+b+c+d
}

var ope1 = suma(10,10,10,10)
console.log(ope1)

//ES6
let valores= [10,15,23,17]
const ope2 = suma(...valores)
console.log(ope2)

//Ejemplo 2
const RRHH = ['Felipe','Gregorio','Hernan']
const contabilidad = ['Rocio','Karina','Luana']

const empresa = [...RRHH, ...contabilidad]
console.log(empresa)