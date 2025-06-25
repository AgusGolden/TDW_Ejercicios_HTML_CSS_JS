document.addEventListener("DOMContentLoaded", () => {
  const preguntas = [
    {
      texto: "¿Cuál es el lenguaje que se ejecuta en el navegador?",
      opciones: ["Python", "C++", "JavaScript", "Java"],
      correcta: 2
    },
    {
      texto: "¿Qué etiqueta HTML se usa para una lista no ordenada?",
      opciones: ["<ul>", "<ol>", "<li>", "<list>"],
      correcta: 0
    },
    {
      texto: "¿Qué propiedad de CSS cambia el color del texto?",
      opciones: ["font-color", "text-color", "color", "background"],
      correcta: 2
    }
  ];

  let preguntaActual = 0;
  let puntaje = 0;

  const preguntaTexto = document.getElementById("pregunta-texto");
  const opcionesContainer = document.getElementById("opciones");
  const botonSiguiente = document.getElementById("siguiente");
  const resultadoFinal = document.getElementById("resultado-final");

  function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaTexto.textContent = pregunta.texto;
    opcionesContainer.innerHTML = "";

    pregunta.opciones.forEach((opcion, index) => {
      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.classList.add("opcion");
      boton.addEventListener("click", () => seleccionarRespuesta(boton, index));
      opcionesContainer.appendChild(boton);
    });

    botonSiguiente.style.display = "none";
  }

  function seleccionarRespuesta(boton, index) {
    const esCorrecta = index === preguntas[preguntaActual].correcta;

    const botones = opcionesContainer.querySelectorAll("button");
    botones.forEach((btn, i) => {
      btn.disabled = true;
      if (i === preguntas[preguntaActual].correcta) {
        btn.classList.add("correcta");
      } else if (btn === boton && !esCorrecta) {
        btn.classList.add("incorrecta");
      }
    });

    if (esCorrecta) puntaje++;
    botonSiguiente.style.display = "inline-block";
  }

  botonSiguiente.addEventListener("click", () => {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultado();
    }
  });

  function mostrarResultado() {
    document.getElementById("contenedor-pregunta").style.display = "none";
    botonSiguiente.style.display = "none";
    resultadoFinal.textContent = `Tu puntaje fue: ${puntaje} de ${preguntas.length}`;
  }

  mostrarPregunta();
});