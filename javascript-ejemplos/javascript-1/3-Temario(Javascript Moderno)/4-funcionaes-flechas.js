

//funciones flechas
const years = [2000,2001,2002,2003,2004]

//ES5
//map recorrer los items del array y hacer operaciones
var es5 = years.map(function(el){
	return 2020- el
})
console.log(es5)

//ES6
let es6 = years.map(el => 2020 - el)
console.log(es6)

es6 = years.map((el, index)=> `Edad ${index + 1}: ${20202 - el}`)
console.log(es6)

es6 = years.map(
	(el,index)=>{
		const yearActual= new Date().getFullYear();
		const edad = yearActual - el

		return `Edad ${index+1}: ${edad}`
	}
)

console.log(es6)
