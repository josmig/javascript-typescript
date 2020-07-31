
window.onload = () =>{
  const text = document.getElementById('text')
  console.log(text.innerText);
  //innerText -> para manipular el texto
  let nuevo = text.innerText = "Texto actualizado";
  console.log(nuevo);
}

//window.onload (cuando el navegador este cargado)
