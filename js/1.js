const lista = document.getElementById("to-do-list");
    const inputTarea = document.getElementById("nueva-tarea");
    const btnAgregar = document.getElementById("agregar-tarea");

btnAgregar.addEventListener("click", () => {
    const texto = inputTarea.value.trim();
    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;

        // tachar
        li.addEventListener("click", () => {
            li.classList.toggle("completada");
        });

        // eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("eliminar");
        btnEliminar.addEventListener("click", (e) => {
            lista.removeChild(li);
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
        inputTarea.value = "";
    }
});