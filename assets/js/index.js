var botonEnviar = document.getElementById('botonEnviar');
botonEnviar.addEventListener('click', function() {
  console.log(botonEnviar)
  alert('Datos enviados, nos pondremos en contacto');
  console.log("nose rompio")
});

$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();
});
