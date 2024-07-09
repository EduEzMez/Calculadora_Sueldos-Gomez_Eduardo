
document.addEventListener('DOMContentLoaded', mostrarDatosGuardados);

const apiHora = "http://worldtimeapi.org/api/timezone/Etc/UTC";

function fetchHoraActual() {
    fetch(apiHora)
    .then(response => response.json())
    .then(data => {
        const horaActual = new Date(data.datetime).toLocaleTimeString();
        document.getElementById('hora-actual').textContent = `- ${horaActual} -`;
    })
    .catch(error => {
        console.error("Error al obtener la hora:", error);
        document.getElementById('hora-actual').textContent = "No se pudo obtener la hora.";
    });
}

fetchHoraActual();

setInterval(() => {
    const currentHoraElement = document.getElementById('hora-actual');
    if (currentHoraElement.textContent !== "No se pudo obtener la hora.") {
        const currentTime = new Date();
        currentHoraElement.textContent = `- ${currentTime.toLocaleTimeString()} -`;
    }
}, 1000);



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

    let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];
    datosGuardados.push(listDatos);

    localStorage.setItem('datos', JSON.stringify(datosGuardados));

    mostrarDatosGuardados();

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
    resultado.innerHTML = '';

    let sumaOperaciones = 0;
    datosGuardados.forEach((dato, index) => {
        sumaOperaciones += dato.operacion;
        resultado.innerHTML += `
            <section class="mostrarResultado">
            <p class="pResultado">El sueldo a cobrar de ${dato.nombre} es de $${dato.operacion}. </p>
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