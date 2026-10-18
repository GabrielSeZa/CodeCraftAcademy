
/* Formulario de contacto de CodeCraft Academy */

const formulario = document.getElementById("formulario-contacto");
const mensajeFormulario = document.getElementById("mensaje-formulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const curso = document.getElementById("curso");
    const nombreCurso = curso.options[curso.selectedIndex].text;

    mensajeFormulario.textContent =
        `¡Gracias, ${nombre}! Tu solicitud para el curso ${nombreCurso} ha sido registrada en esta demostración.`;

    formulario.reset();
});



/* Filtro interactivo de cursos */

const filtroCurso = document.getElementById("filtro-curso");

const tarjetasCursos = document.querySelectorAll(
    ".contenedor-cursos article"
);

filtroCurso.addEventListener("change", function() {
    const tecnologiaSeleccionada = filtroCurso.value;

    tarjetasCursos.forEach(function(tarjeta) {
        const tecnologiaCurso = tarjeta.dataset.curso;

        if (
            tecnologiaSeleccionada === "todos" ||
            tecnologiaSeleccionada === tecnologiaCurso
        ) {
            tarjeta.hidden = false;
        } else {
            tarjeta.hidden = true;
        }
    });
});



/* Menú de navegación para celulares */

const botonMenu = document.getElementById("boton-menu");
const menuNavegacion = document.getElementById("menu-navegacion");

if (botonMenu && menuNavegacion) {

    botonMenu.addEventListener("click", function () {

        const estaAbierto = menuNavegacion.classList.toggle("menu-activo");

        botonMenu.setAttribute("aria-expanded", String(estaAbierto));

    });

    /* Cerrar el menú al seleccionar una sección */

    const enlacesMenu = menuNavegacion.querySelectorAll("a");

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            menuNavegacion.classList.remove("menu-activo");

            botonMenu.setAttribute("aria-expanded", "false");

        });

    });

}

