document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
    
    // Efecto hover para las cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            this.querySelector('.card-header').style.backgroundColor = '#2980b9';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            this.querySelector('.card-header').style.backgroundColor = '#3498db';
        });
    });
    
    // Efecto de aparición suave al hacer scroll
    const fadeElements = document.querySelectorAll('.card, .highlight, .section-title');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configuración inicial
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Verificar al cargar y al hacer scroll
    checkFade();
    window.addEventListener('scroll', checkFade);
    
    // Animación para las nubes
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach((cloud, index) => {
        cloud.style.animationDuration = `${20 + (index * 5)}s`;
    });
});