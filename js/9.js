document.addEventListener("DOMContentLoaded", () => {
  const contactos = [];
  let editandoIndex = null;

  const form = document.getElementById("form-contacto");
  const lista = document.getElementById("lista-contactos");
  const botonSubmit = document.getElementById("boton-submit");

  // Evento al enviar el formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();

    const telefonoValido = /^[\d+\- ]+$/.test(telefono);

    if (!nombre || !telefono || !correo) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (!telefonoValido) {
      alert("El teléfono solo puede contener números, espacios, guiones y el signo +.");
      return;
    }

    const contacto = { nombre, telefono, correo };

    if (editandoIndex !== null) {
      contactos[editandoIndex] = contacto;
      editandoIndex = null;
    } else {
      contactos.push(contacto);
    }

    form.reset();
    botonSubmit.textContent = "Agregar";
    renderizarContactos();
  });

  // Renderiza la lista de contactos
  function renderizarContactos() {
    lista.innerHTML = "";

    contactos.forEach((c, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${c.nombre}</span>
        <span>${c.telefono}</span>
        <span>${c.correo}</span>
        <div>
          <button class="boton-accion boton-editar" onclick="editarContacto(${i})">Editar</button>
          <button class="boton-accion boton-eliminar" onclick="eliminarContacto(${i})">Eliminar</button>
        </div>
      `;
      lista.appendChild(li);
    });
  }

  // Función para editar un contacto
  window.editarContacto = (i) => {
    const c = contactos[i];
    document.getElementById("nombre").value = c.nombre;
    document.getElementById("telefono").value = c.telefono;
    document.getElementById("correo").value = c.correo;
    editandoIndex = i;
    botonSubmit.textContent = "Confirmar cambios";
  };

  // Función para eliminar un contacto
  window.eliminarContacto = (i) => {
    contactos.splice(i, 1);
    renderizarContactos();
  };
});