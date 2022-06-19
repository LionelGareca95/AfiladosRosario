document.addEventListener('DOMContentLoaded', function() {

    eventListeners();

});

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar')
}




/* Scrolling top*/

addEventListener('DOMContentLoaded', () => {
    const boton_ir_arriba = document.querySelector('#ir_arriba_boton')
    const barra_indicador = document.querySelector('.indicador_scroll')

    const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop

    const irArriba = () => {
        if (obtener_pixeles_inicio() > 0) {
            scrollTo(0,0)
        }
    }

    const indicador_scroll = () => {
        if(obtener_pixeles_inicio() > 50) {
            boton_ir_arriba.className = 'mostrar'
        } else {
            boton_ir_arriba.className = 'ocultar'
        }
        let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let avance_scroll = (obtener_pixeles_inicio() / alto ) * 100
        barra_indicador.style.width = `${avance_scroll}%`
    }

    boton_ir_arriba.addEventListener('click', irArriba)
    window.addEventListener('scroll', indicador_scroll)
})