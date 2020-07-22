let libroA = {
	titulo: 'Hobbit',
	autor: 'Rolls',
	page: 400,
	publicado: true
}

let  miLibroB = {
	titulo : 'Harry Potter',
	autor : 'JK Rowling',
	page: 500,
	publicado: true
}


let  getResumen=(libro) => {
	return {
		resumen : `${libro.titulo} creado por ${libro.autor}`,
		resumenPaginas: `${libro.titulo} tiene ${libro.page} paginas`
	}
}

let libroAResumen = getResumen(libroA);
let libroBResumen = getResumen(miLibroB);

console.log(libroAResumen.resumenPaginas);
console.log(libroBResumen.resumenPaginas);
