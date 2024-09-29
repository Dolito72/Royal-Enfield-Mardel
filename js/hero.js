document.addEventListener('DOMContentLoaded', function () {
    // Agregar la clase "active" cuando el slide cambia
    var carousel = document.querySelector('#novedadesCarousel');
    
    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', function (e) {
            // Eliminar la animación en todos los items
            var items = document.querySelectorAll('.carousel-item');
            items.forEach(function (item) {
                var motoImg = item.querySelector('.moto-img');
                var animatedTexts = item.querySelectorAll('.animated-text');

                // Verificar si existen antes de eliminar clases
                if (motoImg) {
                    motoImg.classList.remove('active');
                }

                animatedTexts.forEach(function (text) {
                    if (text) {
                        text.classList.remove('active');
                    }
                });
            });

            // Añadir la animación al nuevo item activo
            var nextItem = e.relatedTarget;
            var nextMotoImg = nextItem.querySelector('.moto-img');
            var nextAnimatedTexts = nextItem.querySelectorAll('.animated-text');

            // Verificar si existen antes de añadir clases
            if (nextMotoImg) {
                nextMotoImg.classList.add('active');
            }

            nextAnimatedTexts.forEach(function (text) {
                if (text) {
                    text.classList.add('active');
                }
            });
        });
    }
});
