//Metodos en objetos

let person = {
	nombre:'Miguel',
	apellido:'Pantigoso',
	edad : 22,
	sueldo: 2390,
	metodoPrueba: function(){
		return 'Resultado del metodo embebido'
	},
	cambiarEdad:function(e){
		//this hace referencia a este mismo objeto
		this.edad += e
	}
}

// console.log(person);

person.cambiarEdad(3)
console.table(person);