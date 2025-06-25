document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { id: 1, nombre: "Remera", precio: 2550 },
    { id: 2, nombre: "Pantalón", precio: 4500 },
    { id: 3, nombre: "Zapatillas", precio: 8200 },
    { id: 4, nombre: "Campera", precio: 9500 },
    { id: 4, nombre: "Bolso", precio: 12850 },
    { id: 4, nombre: "Reloj", precio: 6000 }
  ];

  const carrito = [];

  const listaProductos = document.getElementById("lista-productos");
  const contenedorCarrito = document.getElementById("carrito");
  const totalElemento = document.getElementById("total");

  function renderizarProductos() {
    listaProductos.innerHTML = "";
    productos.forEach(prod => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
      `;
      listaProductos.appendChild(div);
    });
  }

  function renderizarCarrito() {
    contenedorCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((item, i) => {
      total += item.precio;

      const div = document.createElement("div");
      div.className = "item-carrito";
      div.innerHTML = `
        <h4>${item.nombre}</h4>
        <p>Precio: $${item.precio}</p>
        <button onclick="eliminarDelCarrito(${i})">Eliminar</button>
      `;
      contenedorCarrito.appendChild(div);
    });

    totalElemento.textContent = total.toFixed(2);
  }

  window.agregarAlCarrito = (id) => {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    renderizarCarrito();
  };

  window.eliminarDelCarrito = (index) => {
    carrito.splice(index, 1);
    renderizarCarrito();
  };

  renderizarProductos();
  renderizarCarrito();
});