document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contacto");
  const errores = document.getElementById("errores");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    let mensajeError = "";

    if (nombre === "") {
      mensajeError += "El nombre es obligatorio.<br>";
    }

    if (correo === "") {
      mensajeError += "El correo es obligatorio.<br>";
    } else if (!correo.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      mensajeError += "El correo no tiene un formato válido.<br>";
    }

    if (mensaje === "") {
      mensajeError += "El mensaje no puede estar vacío.<br>";
    }

    if (mensajeError) {
      errores.innerHTML = mensajeError;
    } else {
      errores.innerHTML = "";
      alert("Formulario enviado correctamente.");
      formulario.reset();
    }
  });
});
