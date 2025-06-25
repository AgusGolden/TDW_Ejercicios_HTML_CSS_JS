document.addEventListener("DOMContentLoaded", () => {
  const productos = [];
  let editandoIndex = null;

  const form = document.getElementById("form-producto");
  const tabla = document.getElementById("tabla-productos").querySelector("tbody");
  const btnAgregar = document.getElementById("btn-agregar");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const imagen = document.getElementById("imagen").value.trim();

    if (!nombre || isNaN(precio) || isNaN(cantidad)) {
      alert("Por favor, completá todos los campos correctamente.");
      return;
    }

    const producto = { nombre, precio, cantidad, imagen };

    if (editandoIndex !== null) {
      productos[editandoIndex] = producto;
      editandoIndex = null;
      btnAgregar.textContent = "Agregar";
    } else {
      productos.push(producto);
    }

    form.reset();
    renderizarProductos();
  });

  function renderizarProductos() {
    tabla.innerHTML = "";

    productos.forEach((p, i) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}">` : "-"}</td>
        <td>${p.nombre}</td>
        <td>$${p.precio.toFixed(2)}</td>
        <td>${p.cantidad}</td>
        <td>
          <button class="boton-accion boton-editar" onclick="editarProducto(${i})">Editar</button>
          <button class="boton-accion boton-eliminar" onclick="eliminarProducto(${i})">Eliminar</button>
        </td>
      `;

      tabla.appendChild(tr);
    });
  }

  window.editarProducto = (i) => {
    const p = productos[i];
    document.getElementById("nombre").value = p.nombre;
    document.getElementById("precio").value = p.precio;
    document.getElementById("cantidad").value = p.cantidad;
    document.getElementById("imagen").value = p.imagen;
    editandoIndex = i;
    btnAgregar.textContent = "Confirmar cambios";
  };

  window.eliminarProducto = (i) => {
    productos.splice(i, 1);
    renderizarProductos();
  };
});
