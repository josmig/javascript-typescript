
let nombre = 'Miguel'
let apellido = 'Pantigoso'

let nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

//repetir
console.log(`${nombre}`.repeat(5))
//includes (me devuelve si una palabra esta o pertenece a la variable nombreCompleto , para poder comparar)
console.log(nombreCompleto.includes('el'))
//startsWith (si comienza con tal sale me sale false o true)
console.log(nombreCompleto.startsWith('P'))
//endsWith (si termina con tal , me sale false o true)
console.log(nombreCompleto.endsWith('so'))


