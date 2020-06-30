//creacion de objetos
let mi_libro = {
	titulo :'El libro de javascript',
	autor: 'Miguel Pantigoso',
	page: 400
}
console.log(mi_libro);
console.log(mi_libro.titulo);

//con template strings
console.log(`${mi_libro.titulo} fue creado por ${mi_libro.autor}`);
//cambiando valores
mi_libro.page = 430
console.log(mi_libro.page);


//Ejemplo creacion de objeto persona
let person = {
	nombre: 'Miguel',
	pantigoso: 'Pantigoso',
	edad: 20,
	ciudad: 'Juliaca'
};
console.log(person);
person.edad = 22
console.log(person);


