//Eventos de teclado

/* const input = document.getElementById('input')

input.addEventListener('keyup', e => {
    console.log(e.key);
    console.log(e.ctrlKey);
    console.log(e.altKey);

})
 */

//sin una variable afecta a todo el windows
addEventListener('keyup', e => {
    const ball = document.getElementById('ball')

    const move = direction => {

        switch (direction) {
            case 'up':
                y--
                break;
            case 'down':
                y++
                break;
            case 'left':
                x--
                break;
            case 'right':
                x++
                break;
            default:
                break;
        }
        ball.style.transform = `translate(${x*10}px,${y*10}px)`
    }

    /* const up = () => ball.style.transform = 'translateY(-10%)'
    const down = () => ball.style.transform = 'translateY(10%)'
    const left = () => ball.style.transform = 'translateX(-10%)'
    const right = () => ball.style.transform = 'translateX(-10%)'
 */
    switch (e.key) {
        case 'ArrowUp':
            move('up')
            break;
        case 'ArrowDown':
            move('down')    
            break;
        case 'ArrowLeft':
            move('left')
            break;
        case 'ArrowRight':
            move('right')
            break;

        default:
            break;
    }
})