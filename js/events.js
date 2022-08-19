// Eventos
/*function print() {
    console.log('print')
}

// Eventos do Teclado
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}
*/

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
    console.log('print')
}

h1.addEventListener('click', function() {
    console.log('print2')
})

// argumento event
const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}