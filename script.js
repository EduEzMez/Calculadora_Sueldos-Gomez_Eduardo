let simulador = document.getElementById('formulario');

let tomarDato = localStorage.getItem('nombre',nombre)
saludo.innerHTML = tomarDato;

let tituloSaludo = document.getElementById('saludo');
if (tomarDato == null){
    tituloSaludo.innerText= 'Hola, bienvenido al simulador de sueldos. Complete los campos'
} else{
    tituloSaludo.innerText= 'Hola '+ tomarDato + ", bienvenido al simulador de sueldos. Complete los campos"
}


simulador.addEventListener('submit', miFormulario);
function miFormulario(evento){
    evento.preventDefault();
    let formulario = evento.target;

    let datoA = Number(formulario.children[3].value);
    let datoB = Number(formulario.children[5].value);
    let datoC = Number(formulario.children[7].value);
    let datoD = Number(formulario.children[9].value);
    let datoH = Number(formulario.children[11].value);

    let operacion = Math.trunc((datoA * datoB) + (datoA / datoB * datoC) + datoD - datoH);
    let resultado = document.getElementById('resultado');
    resultado.innerText = 'El sueldo a cobrar es de: $' + operacion + '.-'
    let nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre)
    //resultado.innerHTML = localStorage.getItem('nombre',nombre)
    let dameResultado = localStorage.getItem('nombre',nombre)
    //let tituloSaludo = document.getElementById('saludo');
    tituloSaludo.innerText= 'Hola '+ dameResultado + ", bienvenido al simulador de sueldos. Complete los campos"
}