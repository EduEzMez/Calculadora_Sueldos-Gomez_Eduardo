
document.addEventListener('DOMContentLoaded', mostrarDatosGuardados);

let simulador = document.getElementById('formulario');
simulador.addEventListener('submit', miFormulario);

function miFormulario(evento) {
    evento.preventDefault();
    let formulario = evento.target;

    let nombre = (formulario.children[1].value);
    let categoria = Number(formulario.children[3].value);
    let horas = Number(formulario.children[5].value);
    let antiguedad = Number(formulario.children[7].value);
    let adicionales = Number(formulario.children[9].value);
    let aportes = Number(formulario.children[11].value);

    let operacion = Math.trunc((categoria * horas) + (categoria / horas * antiguedad) + adicionales - aportes);

    let listDatos = { nombre, categoria, horas, antiguedad, adicionales, aportes, operacion };

    // Recuperar datos existentes del localStorage
    let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];

    // Agregar el nuevo dato a la lista
    datosGuardados.push(listDatos);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('datos', JSON.stringify(datosGuardados));

    // Actualizar el resultado en la página
    mostrarDatosGuardados();

    // Limpiar formulario
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

function mostrarDatosGuardados() {
    let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar contenido previo

    let sumaOperaciones = 0;
    datosGuardados.forEach((dato, index) => {
        sumaOperaciones += dato.operacion;
        resultado.innerHTML += `
            <section class="mostrarResultado">
            <p class="pResultado">El sueldo a cobrar de ${dato.nombre} es de $${dato.operacion}.</p>
            <button class="btn-borrar" onclick="borrarDato(${index})">x</button><br>
            </section>
        `;
    });
}

function borrarDato(index) {
    let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];
    datosGuardados.splice(index, 1);
    localStorage.setItem('datos', JSON.stringify(datosGuardados));
    mostrarDatosGuardados();

    Toastify({
        text: "Dato Borrado",
        className: "info",
        gravity: "bottom",
        duration: 2000,
        style: {
            background: "linear-gradient(to right, #E74C3C, #C0392B)",
        }
    }).showToast();
}