const carousel = document.getElementById('novedadesCarousel');

carousel.addEventListener('slide.bs.carousel', function (event) {
    const currentSlide = event.relatedTarget;  // Slide que se va a mostrar

    // Aplica la clase `active` solo al contenido del nuevo slide
    const motoHero = currentSlide.querySelector('.moto-hero');
    const textElements = currentSlide.querySelectorAll('.carousel-text');

    // Asegura que los elementos dentro del slide activo tengan las clases necesarias para la animación
    setTimeout(() => {
        motoHero.classList.add('active');
        textElements.forEach(el => el.classList.add('active'));
    }, 10); // El tiempo puede ajustarse

    // Remueve las clases de animación del slide anterior
    const prevSlide = document.querySelector('.carousel-item.active');
    if (prevSlide) {
        const prevMotoHero = prevSlide.querySelector('.moto-hero');
        const prevTextElements = prevSlide.querySelectorAll('.carousel-text');
        prevMotoHero.classList.remove('active');
        prevTextElements.forEach(el => el.classList.remove('active'));
    }
});
