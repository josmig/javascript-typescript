
//Agregando un elemento a la lista
let form = document.getElementById('formagregar')
let lista = document.getElementById('items')
let search = document.getElementById('buscador')

form.addEventListener('submit',agregarItem)
lista.addEventListener('click', eliminar)
search.addEventListener('keyup',buscarItem)


function agregarItem(e){
    //permite cancelar si meterse en el flujo de ejecucion
    e.preventDefault() 
    let nuevo_item = document.getElementById('item').value
    let li = document.createElement('li')
    let boton= document.createElement('a')

    li.className ='list-group-item'
    boton.className='btn btn-danger p-1 float-right text-white delete'

    li.appendChild(document.createTextNode(nuevo_item))
    boton.appendChild(document.createTextNode('X'))

    //agregando el boton dentro del li
    li.appendChild(boton)
    console.log(li);


    lista.appendChild(li)

}

function eliminar(e){
    //if en la lista de la clase contiene un clase llamanada delete si existe
    if(e.target.classList.contains('delete')){
        if(confirm('¿Seguro que desea eliminar el item?')){
            console.log('Existe');        
            let li = e.target.parentNode //traemos al padre del boton en este caso la lista con parentNode se trae al padre
            console.log(li);        
            lista.removeChild(li); //quitamos de la lista #items este elemento
        }
    }
        
}

function buscarItem(e){
    //capturando texto
    let texto = e.target.value.toLowerCase()
    console.log(texto);
    let listado= lista.getElementsByTagName('li') //esto me lo trae en un HTMLCollections
    console.log(listado);
    
    Array.from(listado).forEach(function(item){ //lo convertimos en un array y lo recorremos
        let item_nombre = item.firstChild.textContent //firstChild por que hay mas de un hijo texto + boton
        if(item_nombre.toLowerCase().indexOf(texto) != -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });    
}
    
