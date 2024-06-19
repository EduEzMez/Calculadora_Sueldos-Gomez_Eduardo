let simulador = document.getElementById('formulario');

simulador.addEventListener('submit', miFormulario);

function miFormulario(evento){
    evento.preventDefault();
    let formulario = evento.target;

    let datoA = Number(formulario.children[1].value);
    let datoB = Number(formulario.children[3].value);
    let datoC = Number(formulario.children[5].value);
    let datoD = Number(formulario.children[7].value);
    let datoH = Number(formulario.children[9].value);

    let operacion = Math.trunc((datoA * datoB) + (datoA / datoB * datoC) + datoD - datoH);
    let resultado = document.getElementById('resultado');
    resultado.innerText = 'El sueldo a cobrar es de: $' + operacion + '.-'

}