document.addEventListener("DOMContentLoaded", () => {
  const luces = ["rojo", "amarillo", "verde"];
  let index = 0;

  const config = {
    rojo: 2000,
    amarillo: 1000,
    verde: 2000
  };

  let timeoutID;

  function encenderLuz(color) {
    luces.forEach(luz => {
      document.getElementById(luz).classList.remove("activa");
    });
    document.getElementById(color).classList.add("activa");
  }

  function cicloSemaforo() {
    const colorActual = luces[index];
    encenderLuz(colorActual);
    timeoutID = setTimeout(() => {
      index = (index + 1) % luces.length;
      cicloSemaforo();
    }, config[colorActual]);
  }

  cicloSemaforo();

  const form = document.getElementById("form-config");
  form.addEventListener("submit", e => {
    e.preventDefault();

    const nuevoRojo = parseInt(document.getElementById("tiempo-rojo").value);
    const nuevoAmarillo = parseInt(document.getElementById("tiempo-amarillo").value);
    const nuevoVerde = parseInt(document.getElementById("tiempo-verde").value);

    if ([nuevoRojo, nuevoAmarillo, nuevoVerde].some(t => isNaN(t) || t < 100)) {
      alert("Ingresá valores válidos mayores a 100ms.");
      return;
    }

    config.rojo = nuevoRojo;
    config.amarillo = nuevoAmarillo;
    config.verde = nuevoVerde;

    clearTimeout(timeoutID);
    cicloSemaforo();
  });
});
