//objetos
let ventilador = {
  altura : "100",
  color: "Negro",
  potencia : "100w"
};

let opcionUsuario = "altura";

console.log(ventilador);
console.log(ventilador[opcionUsuario]);

//objetos dentro de objetos

let persona = {
  nombre: 'Miguel',
  apellidO: 'Pantigoso',
  edad:22,
  email: 'pantigosomiguel59@gmail.com',
  hobby:{
    deportes:'Futbol',
    equipo:'Alianza Lima',
    color:'Azul oscuro',
    comidas: {
      criollo: 'Lomo saltado',
      postres: 'Checkcake'
    }
  }
}
console.log(persona);
console.log(persona.hobby.deportes);
//agregando una nueva propiedad
persona.musica = 'Rock';
console.log(persona);
