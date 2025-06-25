document.addEventListener("DOMContentLoaded", () => {
  const tareas = [];

  const form = document.getElementById("form-tarea");
  const nombreInput = document.getElementById("nombre");
  const categoriaInput = document.getElementById("categoria");
  const filtro = document.getElementById("filtro-categoria");
  const lista = document.getElementById("lista-tareas");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const categoria = categoriaInput.value;

    if (!nombre || !categoria) return;

    tareas.push({ nombre, categoria, estado: false });

    form.reset();
    renderizarTareas();
  });

  filtro.addEventListener("change", renderizarTareas);

  function renderizarTareas() {
    lista.innerHTML = "";

    const categoriaSeleccionada = filtro.value;

    const tareasFiltradas = categoriaSeleccionada === "todas"
      ? tareas
      : tareas.filter(t => t.categoria === categoriaSeleccionada);

    tareasFiltradas.forEach((tarea, index) => {
      const li = document.createElement("li");
      li.className = tarea.estado ? "completada" : "";

      li.innerHTML = `
        <span>
          ${tarea.nombre}
          <span class="categoria">[${tarea.categoria}]</span>
        </span>
        <button onclick="toggleEstado(${index})">✔</button>
      `;

      lista.appendChild(li);
    });
  }

  window.toggleEstado = (index) => {
    tareas[index].estado = !tareas[index].estado;
    renderizarTareas();
  };
});