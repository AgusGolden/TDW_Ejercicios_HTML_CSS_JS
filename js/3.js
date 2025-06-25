document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".imagen-galeria");
  const modal = document.getElementById("modal");
  const imagenModal = document.getElementById("imagen-modal");
  const cerrar = document.getElementById("cerrar");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      imagenModal.src = img.src;
      modal.classList.add("mostrar");
    });
  });

  cerrar.addEventListener("click", () => {
    modal.classList.remove("mostrar");
  });

  // cerrar modal haciendo clic afuera
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("mostrar");
    }
  });
});