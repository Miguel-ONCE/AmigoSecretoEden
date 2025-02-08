'use strict'
  
$(document).ready(function () {

  const card = document.querySelector(".flipper");
  card.addEventListener("click", function (e) {
      card.classList.toggle('is_flipped');
  });

});
