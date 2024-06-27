
let simulador = document.getElementById('formulario');

let tomarDato = localStorage.getItem('nombre',nombre)
saludo.innerHTML = tomarDato;

let tituloSaludo = document.getElementById('saludo');
if (tomarDato == null){
    tituloSaludo.innerText= 'Hola, bienvenido al simulador de sueldos. Complete los campos'
} else{
    tituloSaludo.innerText= 'Hola '+ tomarDato + ", bienvenido al simulador de sueldos."
}

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
    resultado.innerText = 'El sueldo a cobrar es de: $' + operacion + '.-'
    
    
    nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre)
    let tomarDato = localStorage.getItem('nombre',nombre)
    tituloSaludo.innerText= 'Hola '+ tomarDato + ", bienvenido al simulador de sueldos."
    

    let listDatos = {nombre,categoria,horas,antiguedad,adicionales,aportes}
    let objetoJson = JSON.stringify(listDatos)
    console.log(objetoJson)

    
    Toastify({
        text: "Calculo Realizado",
        className: "info",
        gravity: "bottom",
        duration: -1,
        style: {
            
            background: "linear-gradient(to right, #0E6251, #148F77)",
        }
      }).showToast();
}