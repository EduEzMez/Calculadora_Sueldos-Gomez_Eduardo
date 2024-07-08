
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

    let listDatos = {nombre,categoria,horas,antiguedad,adicionales,aportes,operacion}
    let objetoJson = JSON.stringify(listDatos)
    let objetoObjeto = JSON.parse(objetoJson)
    //let getNombre = objetoObjeto.nombre
    //let getOperacion = objetoObjeto.operacion


    //ver este codigo si no se borra
    let tomarNombre = localStorage.getItem('nombre',nombre)
    let tomarOperacion = localStorage.getItem('operacion', operacion)
    if (tomarNombre && tomarOperacion){
        resultado.innerHTML += 'El sueldo a cobrar de '+ tomarNombre +' es de '+ tomarOperacion +'.-'
    }

    //resultado.innerHTML += `<p>El sueldo a cobrar de ${getNombre} es de $${getOperacion}.-</p>`
    console.log(objetoJson)
    console.log(objetoObjeto)
    
    nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('operacion', operacion)
    let tomarDato = localStorage.getItem('nombre',nombre)
    tituloSaludo.innerText= 'Hola '+ tomarDato + ", bienvenido al simulador de sueldos."

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