document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Smooth Entry: Slide in Hero Content immediately on Page Load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.slide-left-init');
        heroElements.forEach(element => {
            element.classList.add('slide-left-active');
        });
    }, 150); // Small delay ensures browser renders layout before starting transition

    // 2. Dynamic Scroll Reveal: Smoothly fade in sections as they enter viewport
    const sections = document.querySelectorAll('.reveal-section');
    
    const revealOptions = {
        root: null,         // Uses viewport
        threshold: 0.12,    // Triggers when 12% of the section is visible
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Stops observing once revealed for better performance
            }
        });
    }, revealOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});