document.addEventListener('DOMContentLoaded', () => {
  const cartas = document.querySelectorAll('#galeria .carta');
  const modal = document.getElementById('modal');
  const modalContent = modal.querySelector('.modal-content');

  // Mostrar el modal al hacer clic en una carta
  cartas.forEach(carta => {
    carta.addEventListener('click', () => {
      const bgImage = getComputedStyle(carta).backgroundImage; // Obtener la imagen de fondo
      modalContent.style.backgroundImage = bgImage; // Asignar la imagen al modal
      modal.classList.add('active');
    });
  });

  // Cerrar el modal al hacer clic fuera del contenido
  modal.addEventListener('click', () => {
    modal.classList.remove('active');
  });
});

