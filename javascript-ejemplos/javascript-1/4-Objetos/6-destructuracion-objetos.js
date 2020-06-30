const getPersonaDatos = ()=>{
	const respuesta = [
		{
			codigo: 200,
			data: {
				person: {
					nombre: 'Skiner',
					direccion: {
						ciudad: 'Lima',
						pais: 'Perú'
					}
				}		
			}
		},
		{
			codigo: 201,
			data: {
				person: {
					nombre: 'Bart',
					direccion: {
						ciudad: 'Arequipa',
						pais: 'Perú'
					}
				}		
			}
		},
		{
			codigo: 202,
			data: {
				person: {
					nombre: 'Lisa',
					direccion: {
						ciudad: 'Juliaca',
						pais: 'Perú'
					}
				}		
			}
		}

	]
	return respuesta
}
//Destructracion valor del objeto | key de destructuracion
// let {codigo: status,data: {person:{nombre : nom }}} = respuesta
// let {codigo: status,data: {person:{nombre : nom }}} = getPersonaDatos()

for( const { codigo: status,data: {person:{nombre : nom }}} of getPersonaDatos()){
	console.log(status,nom);
}
