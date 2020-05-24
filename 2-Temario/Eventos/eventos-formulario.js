const form = document.getElementById('form')

form.addEventListener('submit', () => {
    alert('formulario enviado')
})
form.addEventListener('change', e => {
    if (e.target.checked) {
        console.log('El usuario  quiere recordar su contraseña');

    } else {
        console.log('El usuario no quiere recordar su contraseña');

    }
})
addEventListener('scroll', e => {
    console.log(scrollX, scrollY);

})