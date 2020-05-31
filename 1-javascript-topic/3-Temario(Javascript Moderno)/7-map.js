//Maps ! array

const datos = new Map();

//clave - valor
datos.set('nombre','Miguel')
datos.set('edad','22')
datos.set(1,'pantigosomiguel59@gmail.com')
datos.set(2,'naara@gmail.com')
datos.set(3,9291939129)

console.log(datos.get('nombre'))
console.log(datos.get(2))
console.log(datos.size)


//recorrer mapas
datos.forEach((valor , key)=>{
	console.log(`${key}: ${valor}`)
})
