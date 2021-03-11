
//Any es cualquier tipo de dato = es muy flexible

//Con esto deceimos que el arreglo no es de tipo string
let habilidades: string[] = ['Bash','Counter','Flish'];


interface Persona{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNata?: string; // con esto decimos que este valor es opcional
}

//Objeto
const personaje: Persona = {
    nombre:'Santiago',
    hp:100,
    habilidades:['Futbol','Musica','Desarrollo']
}

personaje.puebloNata= 'Juliaca';

console.table(personaje);



//Para trabajar con objetos podemos trabajar con interfaces para  decir que tal objeto es de tal tipo de dato