let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

// funcion para capturar el evento del click y pasar a modo actives
toggleBtn.onclick=function(){
    container.classList.toggle('active')
}