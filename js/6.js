document.addEventListener("DOMContentLoaded", () => {
  const tasaCambio = {
    USD: { USD: 1, EUR: 0.91, ARS: 1200 },
    EUR: { USD: 1.1, EUR: 1, ARS: 1400 },
    ARS: { USD: 0.0008, EUR: 0.0007, ARS: 1 }
  };

  const cantidadInput = document.getElementById("cantidad");
  const monedaOrigen = document.getElementById("moneda-origen");
  const monedaDestino = document.getElementById("moneda-destino");
  const btnConvertir = document.getElementById("convertir");
  const resultado = document.getElementById("resultado");

  btnConvertir.addEventListener("click", () => {
    const cantidad = parseFloat(cantidadInput.value);

    if (isNaN(cantidad) || cantidad <= 0) {
      resultado.textContent = "Por favor ingresa una cantidad válida mayor a cero.";
      resultado.style.color = "red";
      return;
    }

    const origen = monedaOrigen.value;
    const destino = monedaDestino.value;

    if (origen === destino) {
      resultado.textContent = "Por favor selecciona dos monedas diferentes.";
      resultado.style.color = "red";
      return;
    }

    const tasa = tasaCambio[origen][destino];
    const convertido = cantidad * tasa;

    resultado.style.color = "#004466";
    resultado.textContent = `${cantidad.toFixed(2)} ${origen} = ${convertido.toFixed(2)} ${destino}`;
  });
});
