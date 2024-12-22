var precioBase = document.querySelector(".cantidad");

var botonMas = document.querySelector(".mas");

var botonMenos = document.querySelector(".menos");

var total = document.querySelector(".valor-total");

var cantidad = 0;

const precio = 400000;

var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function restar() {
  if (cantidad > 0) {
    cantidad--;
    precioBase.innerHTML = cantidad;
    total.innerHTML = cantidad * precio;
  }
}

function sumar() {
  cantidad++;
  precioBase.innerHTML = cantidad;
  total.innerHTML = cantidad * precio;
}

document.addEventListener("DOMContentLoaded", () => {
  const miniaturas = document.querySelectorAll(".miniaturas img");
  const imagenActiva = document.getElementById("img-inicio");
  miniaturas.forEach((miniatura) => {
    miniatura.addEventListener("click", (e) => {
      // Cambia la imagen principal
      const nuevaImagen = e.target.src;
      imagenActiva.src = nuevaImagen;
    

      // Resalta la miniatura seleccionada
      miniaturas.forEach((img) => img.classList.remove("seleccionada"));
      e.target.classList.add("seleccionada");
    });
  });
});
 
