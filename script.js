const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    closeAllSubMenus()
}

function toggleSubMenu(button){
    
    if(!button.nextElementSibling.classList.contains('show')){  
      closeAllSubMenus()
    }
    
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')

  })
}

const modal = document.getElementById('modal');
const modalImage = modal.querySelector('.img-container');

// Función para manejar el clic en las imágenes
function handleImageClick(event) {
    // Verificar si el contenedor de la imagen está dentro de un enlace
    const parentLink = event.target.closest('a');
    
    if (parentLink) {
        // Si la imagen tiene un enlace, no abrir modal, solo redirigir
        return;
    }

    // Si no hay enlace, mostrar modal
    modal.classList.add('active');
    modalImage.style.backgroundImage = event.target.style.backgroundImage || getComputedStyle(event.target).backgroundImage;
}

// Obtener referencias a todas las imágenes
const imageWithLink = document.getElementById('image-with-link');
const imageNoLink = document.getElementById('image-no-link');

// Asignar evento solo a la imagen sin enlace
imageNoLink.addEventListener('click', handleImageClick);

// Ocultar modal al hacer clic fuera de la imagen ampliada
modal.addEventListener('click', () => {
    modal.classList.remove('active');
});


