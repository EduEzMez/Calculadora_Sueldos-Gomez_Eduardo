let miFormulario = document.getElementById('formulario');
miFormulario.addEventListener("submit", validacionFormulario);

let resultado = document.getElementById('resultado')

function validacionFormulario(evento){
    evento.preventDefault();
    let formulario = evento.target
let datoA = formulario.children[1].value;
let datoB = formulario.children[3].value;
let datoC = formulario.children[5].value;
let datoD = formulario.children[7].value;

let mostar = Number(Math.trunc((datoA * datoB) + (datoA / datoB * datoC) - datoD));
resultado.innerText = 'Sueldo a cobrar es de: $' + mostar + ' .-';

}


