document.addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    {
        url: "https://media.istockphoto.com/id/1288385045/es/foto/pico-k2-nevado.jpg?s=612x612&w=0&k=20&c=_VpZUkp4MR31sNlanLFci2g71YcIoG78mc3i5mZG9Mw=",
        titulo: "Montaña nevada",
        etiquetas: ["Montañas"]
    },
    {
        url: "https://cdn0.geoenciclopedia.com/es/posts/5/9/1/montanas_rocosas_195_orig.jpg",
        titulo: "Cordillera rocosa",
        etiquetas: ["Montañas"]
    },
    {
        url: "https://img.freepik.com/foto-gratis/hermosos-edificios-alto-angulo-noche_23-2149444909.jpg?semt=ais_hybrid&w=740",
        titulo: "Ciudad de noche",
        etiquetas: ["Ciudades"]
    },
    {
        url: "https://www.trisacor.com/wp-content/uploads/2020/04/sede-television-china.jpg",
        titulo: "Edificios modernos",
        etiquetas: ["Ciudades"]
    },
    {
        url: "https://s1.elespanol.com/2023/06/22/viajes/773432862_234153433_1024x576.jpg",
        titulo: "Desierto infinito",
        etiquetas: ["Desierto"]
    },
    {
        url: "https://mediaim.expedia.com/localexpert/4630829/f2bb614f-835d-4564-978d-027f8b620f8e.jpg?impolicy=resizecrop&rw=1005&rh=565",
        titulo: "Dunas al atardecer",
        etiquetas: ["Desierto"]
    }
  ];

  const filtrosContainer = document.getElementById("filtros");
  const galeria = document.getElementById("galeria");

  const todasEtiquetas = [...new Set(imagenes.flatMap(img => img.etiquetas))];

  function crearBotonesFiltros() {
    const botonTodos = document.createElement("button");
    botonTodos.textContent = "Todos";
    botonTodos.classList.add("active");
    botonTodos.addEventListener("click", () => filtrarGaleria("todos"));
    filtrosContainer.appendChild(botonTodos);

    todasEtiquetas.forEach(etiqueta => {
      const boton = document.createElement("button");
      boton.textContent = etiqueta;
      boton.addEventListener("click", () => filtrarGaleria(etiqueta));
      filtrosContainer.appendChild(boton);
    });
  }

  function renderGaleria(filtro = "todos") {
    galeria.innerHTML = "";

    const filtradas = filtro === "todos"
      ? imagenes
      : imagenes.filter(img => img.etiquetas.includes(filtro));

    filtradas.forEach(img => {
      const item = document.createElement("div");
      item.classList.add("galeria-item");

      item.innerHTML = `
        <img src="${img.url}" alt="${img.titulo}">
        <h3>${img.titulo}</h3>
        <div class="etiquetas">${img.etiquetas.join(", ")}</div>
      `;

      galeria.appendChild(item);
    });
  }

  function filtrarGaleria(filtro) {
    renderGaleria(filtro);

    const botones = filtrosContainer.querySelectorAll("button");
    botones.forEach(btn => btn.classList.remove("active"));

    const botonActivo = [...botones].find(btn => btn.textContent === filtro || (filtro === "todos" && btn.textContent === "Todos"));
    if (botonActivo) botonActivo.classList.add("active");
  }

  crearBotonesFiltros();
  renderGaleria();
});
