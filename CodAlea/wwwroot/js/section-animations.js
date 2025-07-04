// Section Background Animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Features Section - Add Dynamic Particles
    function createFeaturesParticles() {
        const featuresSection = document.querySelector('.features-section');
        if (!featuresSection) return;
        
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'features-particles';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        
        // Create floating particles
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'feature-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(${Math.random() > 0.5 ? '37, 99, 235' : '6, 182, 212'}, 0.4);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 10 + 15}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            particlesContainer.appendChild(particle);
        }
        
        featuresSection.appendChild(particlesContainer);
        
        // Add keyframes for particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // About Section - Enhanced Code Lines
    function enhanceAboutSection() {
        const aboutSection = document.querySelector('.about-section-enhanced');
        if (!aboutSection) return;
        
        // Add floating code symbols
        const symbolsContainer = document.createElement('div');
        symbolsContainer.className = 'floating-code-symbols';
        symbolsContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        
        const codeSymbols = ['{}', '[]', '()', '<>', '==', '=>', '++', '--', '&&', '||'];
        
        for (let i = 0; i < 8; i++) {
            const symbol = document.createElement('div');
            symbol.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
            symbol.style.cssText = `
                position: absolute;
                font-family: 'Courier New', monospace;
                font-size: ${Math.random() * 16 + 12}px;
                color: rgba(6, 182, 212, 0.2);
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatSymbol ${Math.random() * 8 + 12}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
            `;
            symbolsContainer.appendChild(symbol);
        }
        
        aboutSection.appendChild(symbolsContainer);
        
        // Add keyframes for symbols
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatSymbol {
                0%, 100% {
                    transform: translateY(0px) rotate(0deg);
                    opacity: 0.2;
                }
                50% {
                    transform: translateY(-30px) rotate(180deg);
                    opacity: 0.5;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Contact Section - Network Enhancement
    function enhanceContactSection() {
        const contactSection = document.querySelector('#contact');
        if (!contactSection) return;
        
        // Add ripple effect on contact cards
        const contactCards = contactSection.querySelectorAll('.contact-card');
        contactCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const ripple = document.createElement('div');
                ripple.className = 'contact-ripple';
                ripple.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(37, 99, 235, 0.1);
                    transform: translate(-50%, -50%);
                    animation: rippleEffect 0.6s ease-out;
                    pointer-events: none;
                    z-index: -1;
                `;
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);
            });
        });
        
        // Add ripple keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rippleEffect {
                0% {
                    width: 0;
                    height: 0;
                    opacity: 0.8;
                }
                100% {
                    width: 200px;
                    height: 200px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize all animations
    createFeaturesParticles();
    enhanceAboutSection();
    enhanceContactSection();
    
    // Performance optimization - pause animations when not visible
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const animations = entry.target.querySelectorAll('[style*="animation"]');
            animations.forEach(el => {
                if (entry.isIntersecting) {
                    el.style.animationPlayState = 'running';
                } else {
                    el.style.animationPlayState = 'paused';
                }
            });
        });
    }, observerOptions);
    
    // Observe all sections with animations
    document.querySelectorAll('.features-section, .about-section-enhanced, #contact').forEach(section => {
        observer.observe(section);
    });
});
