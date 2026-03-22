document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto de entrada suave
    console.log("Restaurant JAO Web Cargada");

    // 2. Interacción con la imagen del menú
    const menuImg = document.querySelector('.zoom-img');
    if (menuImg) {
        menuImg.addEventListener('mouseenter', () => {
            menuImg.style.transform = 'scale(1.05)';
        });
        menuImg.addEventListener('mouseleave', () => {
            menuImg.style.transform = 'scale(1)';
        });
    }

    // 3. Resaltar enlace activo en la navegación
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }
});