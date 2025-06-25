document.addEventListener("DOMContentLoaded", () => {
  const luces = {
    rojo: document.querySelector(".luz.rojo"),
    amarillo: document.querySelector(".luz.amarillo"),
    verde: document.querySelector(".luz.verde"),
  };

  const secuencia = ["rojo", "rojo-amarillo", "verde", "amarillo"];
  let index = 0;

  function actualizarSemaforo() {
    // Apagar luces
    Object.values(luces).forEach(luz => luz.classList.remove("encendida"));

    const estado = secuencia[index];

    switch (estado) {
      case "rojo":
        luces.rojo.classList.add("encendida");
        break;
      case "rojo-amarillo":
        luces.rojo.classList.add("encendida");
        luces.amarillo.classList.add("encendida");
        break;
      case "verde":
        luces.verde.classList.add("encendida");
        break;
      case "amarillo":
        luces.amarillo.classList.add("encendida");
        break;
    }

    index++;
    if (index >= secuencia.length) {
        index = 0;
    }
  }

  actualizarSemaforo();
  setInterval(actualizarSemaforo, 3000);
});
