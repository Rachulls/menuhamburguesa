document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const menuContenido = document.querySelector('.menu-contenido');
    const lineas = document.querySelectorAll('.linea');
  
    menuHamburguesa.addEventListener('click', function () {
      // Alternar la visibilidad y la opacidad del menú contenido al hacer clic en la hamburguesa
      menuContenido.style.display = (menuContenido.style.display === 'block') ? 'none' : 'block';
      menuContenido.style.opacity = (menuContenido.style.opacity === '1') ? '0' : '1';
  
      // Animar las líneas de la hamburguesa para formar una "X"
      lineas[0].style.transform = (lineas[0].style.transform === 'rotate(-45deg) translate(-5px, 6px)') ? 'none' : 'rotate(-45deg) translate(-5px, 6px)';
      lineas[1].style.opacity = (lineas[1].style.opacity === '0') ? '1' : '0';
      lineas[2].style.transform = (lineas[2].style.transform === 'rotate(45deg) translate(-5px, -6px)') ? 'none' : 'rotate(45deg) translate(-5px, -6px)';
    });
  });
  