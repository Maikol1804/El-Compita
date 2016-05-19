

/*
FUNCION PARA SACAR EL MENU POR LA IZQUIERDA
*/


//cuando el documento este listo(se carge totalmente en e buscador) se llama el main
$(document).ready(main);
 
var contador = true;
 
 //funcion principal
function main(){
	//se toma el evento cuando se de click en el div que se llama menu_var
	$('.menu_bar').click(function(){
 
		if(contador){
			$('nav').animate({
				left: '0'
			});
			contador = false;
		} else {
			contador = true;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};

/*
FUNCION PARA DEJAR EL MENU PRINCIPAL FIJO CON SCROLL
*/

$(document).ready(function() {
  var menu = $('#menu');
  var menu_offset = menu.offset();
  // Cada vez que se haga scroll en la página, haremos un chequeo del estado del menú
  // y lo vamos a alternar entre 'fixed' y 'static'.
  $(window).on('scroll', function() {
    if($(window).scrollTop() > menu_offset.top) {
      menu.addClass('menu-fijo');
    } else {
      menu.removeClass('menu-fijo');
    }
  });
});

/*
FUNCION PARA DEJAR EL MENU PRINCIPAL REDUCIDO FIJO CON SCROLL
*/

var fixmeTop = $('.menu_bar').offset().top;     //optiene la posicion inicial del div

$(window).scroll(function() {                  // llama un evenyo del scroll

    var currentScroll = $(window).scrollTop(); // optiene la posicion inicial del scroll

    if (currentScroll > fixmeTop) {           // aplica la posicion ajustada si baja el scrol para ese elemento
        $('.menu_bar').css({                      
            position: 'fixed',
            top: '0',
            left: '0',

        });
    } else {                                   // aplicar posicion  static si el scroll sube
        $('.menu_bar').css({                      
            position: 'static'
        });
    }

});