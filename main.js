// Declare una variable para almacenar el estado del menú
var menuIsVisible = false;

// Asocia el evento "click" al botón
document.querySelector(".btn-menu").addEventListener("click", function () {
  // Obtiene el elemento del menú
  var menu = document.querySelector("#menu");

  // si el menu esta invisible
  if (!menuIsVisible) {
    menu.style.display = "block"; //lo hacemos visible
    menuIsVisible = true; //cambiamos el estado
  } else {
    menu.style.display = "none"; //lo hacemos invisible
    menuIsVisible = false; //cambiamos el estado
  }
});

menu();
