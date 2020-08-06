window.onload = () => {
  const formulario = document.getElementById('todo-form')

  formulario.onsubmit = (e) =>{
    e.preventDefault(); //con esto hacemos que no recargue la pagina
    const input = document.getElementById('todo')
    const valorInput = input.value;
    console.log(valorInput);
  }
}
