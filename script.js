// Seleccionar las opciones por su ID
var opcion1 = document.getElementById("opcion1");
var opcion2 = document.getElementById("opcion2");


// Agregar eventos de clic a las opciones
opcion1.addEventListener("click", function() {
  cambiarColor(opcion1);
});

opcion2.addEventListener("click", function() {
  cambiarColor(opcion2);
});



function cambiarColor(opcion) {
    // Restablecer colores de fondo de todas las opciones
    opcion1.style.backgroundColor = "";
    opcion2.style.backgroundColor = "";
   
  
    // Cambiar color de fondo de la opción seleccionada
    opcion.style.backgroundColor = "#af599e";
  }
  
