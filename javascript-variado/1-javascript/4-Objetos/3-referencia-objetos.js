///Referencia de objetos
let person = {
	nombre:'Miguel',
	edad: 22,
	sueldo: 3000
}
console.log(person);

let otraPersona = {...person} //copia de un objeto ,array etc..
otraPersona.nombre= 'Naara'
otraPersona.sueldo=1500
console.log(otraPersona);


let cambiarSueldo = (p,monto) =>{	
	p.sueldo = p.sueldo + monto
	/*console.log(p);*/
}

cambiarSueldo(person,400);
console.log(person);