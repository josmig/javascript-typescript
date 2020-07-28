//INtroduccion a funciones
function iterar(arg1){
  for(let i =0; i< arg1.length ; i++){
    console.log(arg1[i]);
  }
}

const numeros = [1,2,3,4,5,6]
const nombres = ['Juan','ROSA','Melania','Melano']

iterar(numeros);
iterar(nombres);

//otra funciones
function suma(a,b){
  return a+b;
}
const resultado = suma(12,12)
const resultado2 = suma(123,422)
const resultado3 = suma(resultado,resultado2)
console.log("Resultado suma 1 : " + resultado);
console.log("Resultado suma 2 : " + resultado2);
console.log("Resultado suma 3 : " + resultado3);


//Callback es una funcion que se ejecuta al final de otra funcion
function operacion(a,b,cb){
  const result = a+b;
  cb(result)
}
function callback(r){
  console.log("resultado por el callback", r);
}
operacion(1,3, callback)

//Fat arrow functions (no es necesario el uso de function)
const miArroyFunctions = (a,b) => a + b; //si es que es de una linea podemos utilizar esto
const otraFat = (a,b) => { //y si no esta
    return a+b
}
const r  = otraFat(3,3)
console.log(r);


operacion(2,4, function(){
  console.log("Soy una funcion anonima con resultado :" + r);
})
