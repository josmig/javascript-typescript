
const cuadrado = (num)=> num * num 
console.log(cuadrado(5))

const personas = [
	{
		nombre:'Pablo',
		edad:20
	},
	{
		nombre:'Ana',
		edad:24
	},
	{
		nombre:'Rosa',
		edad:20
	},
	{
		nombre:'Pepe',
		edad:30
	}
];

const menores30 = personas.filter((person)=> person.edad < 30)

console.log(menores30)