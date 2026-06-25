let uno = document.querySelector('#b1')
let dos = document.querySelector('#b2')
let tres = document.querySelector('#b3')
let cuatro = document.querySelector('#b4')
let p = document.querySelector('p')


uno.onclick = function(){
    //cambiar el color de fondo
    p.style.backgroundColor = 'blue'
}
dos.onclick = function(){
    //cambia el contenido del parrafo
    p.textContent = 'cambio de parrafo'
}
tres.onclick = function(){
    //cambia el color de letra
    p.style.color = 'grey'
}
cuatro.onclick = function(){
    p.style.fontFamily = 'IMPACT'
}


