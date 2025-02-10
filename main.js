'use strict'
  
$(document).ready(function () {

  const card = document.querySelector(".flipper");
  card.addEventListener("click", function (e) {
      card.classList.toggle('is_flipped');
  });

  function actualizarMensaje() {

    let hora = new Date().getHours();
    let mensaje;
    
    if (hora >= 0 && hora < 12) {
      mensaje = "¡Buenos días abogada! Pulse aquí para descubrir un mensaje";
  } else if (hora >= 12 && hora < 19) {
      mensaje = "¡Buenas tardes abogada! Pulse aquí para descubrir un mensaje";
  } else {
      mensaje = "¡Buenas noches abogada! Pulse aquí para descubrir un mensaje";
  }
    
    $(".front").text(mensaje);
  }

  actualizarMensaje();

  setInterval(actualizarMensaje, 60000);
 
});


