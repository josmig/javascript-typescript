
window.onload = () =>{
  const text = document.getElementById('text')
  console.log(text.innerText);
  //innerText -> para manipular el texto
  let nuevo = text.innerText = "Texto actualizado";
  console.log(nuevo);
  const contenedor = document.getElementById('agregar');
  //innerHTML para agregar HTML al desde JS
  contenedor.innerHTML= '<a href="#">Enlace</a>'
  contenedor.innerText='asdsa';
}

//window.onload (cuando el navegador este cargado)
