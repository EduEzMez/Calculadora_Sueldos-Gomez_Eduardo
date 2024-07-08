let simulador = document.getElementById('formulario');

let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];

simulador.addEventListener('submit', miFormulario);
function miFormulario(evento){

    evento.preventDefault();
    let formulario = evento.target;

    let nombre = (formulario.children[1].value);
    let categoria = Number(formulario.children[3].value);
    let horas = Number(formulario.children[5].value);
    let antiguedad = Number(formulario.children[7].value);
    let adicionales = Number(formulario.children[9].value);
    let aportes = Number(formulario.children[11].value);

    let operacion = Math.trunc((categoria * horas) + (categoria / horas * antiguedad) + adicionales - aportes);
    let resultado = document.getElementById('resultado');

    let listDatos = {nombre,categoria,horas,antiguedad,adicionales,aportes,operacion}
    
    datosGuardados.push(listDatos)

    localStorage.setItem('datos', JSON.stringify(datosGuardados))

    nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('operacion', operacion)
    tomarNombre = localStorage.getItem('nombre',nombre)
    tomarOperacion = localStorage.getItem('operacion', operacion)
    resultado.innerHTML += 'El sueldo a cobrar de '+ tomarNombre +' es de $'+ tomarOperacion +'.-'


    formulario.children[1].value = "";
    formulario.children[3].value = "";
    formulario.children[5].value = "";
    formulario.children[7].value = "";
    formulario.children[9].value = "";
    formulario.children[11].value = "";

    Toastify({
        text: "Calculo Realizado",
        className: "info",
        gravity: "bottom",
        duration: 2000,
        style: {
            
            background: "linear-gradient(to right, #0E6251, #148F77)",
        }
    }).showToast();
}