document.addEventListener("DOMContentLoaded", () => {
  const testimonios = [
    "Este producto cambió mi vida. Lo recomiendo a todos sin dudar.",
    "El servicio fue excelente y muy rápido. Volveré a comprar seguro.",
    "Atención al cliente espectacular, resolvieron todas mis dudas.",
    "La calidad es insuperable, superó mis expectativas ampliamente.",
  ];

  let indiceActual = 0;
  const testimonioDiv = document.getElementById("testimonio");
  const btnPrev = document.getElementById("prev");
  const btnNext = document.getElementById("next");

  function mostrarTestimonio(indice) {
    testimonioDiv.classList.add("oculto");

    setTimeout(() => {
      testimonioDiv.textContent = testimonios[indice];
      testimonioDiv.classList.remove("oculto");
    }, 300);
  }

  btnPrev.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + testimonios.length) % testimonios.length;
    mostrarTestimonio(indiceActual);
  });

  btnNext.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % testimonios.length;
    mostrarTestimonio(indiceActual);
  });

  mostrarTestimonio(indiceActual);
});
