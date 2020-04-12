//Examinando el DOM

console.log(document.title);
console.log(document.head);

//getELementById() ID
var items  = document.getElementById('header-title');

//items.textContent = 'Cambio de texto';
//items.innerText = 'Otro cambio de text';
//items.innerHTML = '<h3>Texto Cambio</h3>'
console.log(items);
//getELementByClassName() Clase
//getELementByTagName()  Etiqueta


//Consulta por selectores querySelector

var header = document.querySelector('#main-header');
//header.style.border = 'solid 5px black';

let input = document.querySelector('input')
//input.value='Hola mundo'
var submit = document.querySelector('input[type="submit"]')


//Consulta por querySelectorALl

var ti = document.querySelectorAll('.title')
console.log(ti);

var list = document.querySelectorAll('.list-group-item')
console.log(list);


var par = document.querySelectorAll('li:nth-child(even)')
for(let i=0 ; i<par.length; i++){
    par[i].style.backgroundColor='blue'
    par[i].style.color='white'
}
var impar= document.querySelectorAll('li:nth-child(odd)')
for(let j=0; j<impar.length;j++){

    impar[j].style.backgroundColor='orange'
    impar[j].style.color='white'
}


//Elementos y Padres nodos
let listgroup = document.querySelector('.list-group')
//con parentNode o parentElement veo el padre de un objeto
console.log(listgroup.parentNode);

var main = document.querySelector('#main')
main.style.backgroundColor="#f4f4f4"

//Nodos hijos
let itemList= document.querySelector('#items')
console.log(itemList.childNodes);

//Children (hijos)
console.log(itemList.children);

//Primer hijo
//itemList.firstElementChild.textContent='primer item'
console.log(itemList.firstElementChild);

//Ultimo hijo
console.log(itemList.lastElementChild);



//Elementos hermanos
//elemento anterior al itemList
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
//Elemtno siguiente al itemList
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);



