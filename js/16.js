document.addEventListener("DOMContentLoaded", () => {
  const notas = [];
  let ordenAscendente = true;

  const form = document.getElementById("form-nota");
  const lista = document.getElementById("lista-notas");
  const busqueda = document.getElementById("busqueda");
  const btnOrdenar = document.getElementById("ordenar-fecha");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const contenido = document.getElementById("contenido").value.trim();

    if (!titulo || !contenido) {
      alert("Completa todos los campos.");
      return;
    }

    const nota = {
      titulo,
      contenido,
      fecha: new Date()
    };

    notas.push(nota);
    form.reset();
    renderizarNotas();
  });

  function renderizarNotas() {
    const filtro = busqueda.value.toLowerCase();
    const notasFiltradas = notas
      .filter(n =>
        n.titulo.toLowerCase().includes(filtro) ||
        n.contenido.toLowerCase().includes(filtro)
      )
      .sort((a, b) =>
        ordenAscendente
          ? a.fecha - b.fecha
          : b.fecha - a.fecha
      );

    lista.innerHTML = "";

    notasFiltradas.forEach((nota, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h3>${nota.titulo}</h3>
        <p>${nota.contenido}</p>
        <time>${nota.fecha.toLocaleString()}</time>
        <button class="eliminar-nota" onclick="eliminarNota(${i})">Eliminar</button>
      `;
      lista.appendChild(li);
    });
  }

  window.eliminarNota = (index) => {
    notas.splice(index, 1);
    renderizarNotas();
  };

  busqueda.addEventListener("input", renderizarNotas);

  btnOrdenar.addEventListener("click", () => {
    ordenAscendente = !ordenAscendente;
    renderizarNotas();
  });
});
