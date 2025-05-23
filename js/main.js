// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Substituir por ID real do Google Analytics

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            const isHidden = menu.classList.contains("hidden");
            menu.classList.toggle("hidden");
            btn.setAttribute("aria-expanded", isHidden ? "true" : "false");
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu if open
            if (menu && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
        });
    });

    // Optimize touch events for mobile
    let touchStartY = 0;
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    // Improve button feedback on touch devices
    document.querySelectorAll('button, .touch-target').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        }, { passive: true });
    });

    // Optimize font loading
    if ('fonts' in document) {
        document.fonts.ready.then(() => {
            document.body.classList.add('font-loaded');
        });
    }

    // Lazy loading for gallery images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Modal functionality
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');

    window.openModal = function() {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    // Close modal when clicking the X button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Social sharing functionality
    window.shareOnFacebook = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent('Casa Tuiuiú - Aluguel de Temporada em Bonito');
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
        
        // Google Analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'share', {
                method: 'Facebook',
                content_type: 'website',
                content_id: 'casa-tuiuiu'
            });
        }
    };

    window.shareOnTwitter = function() {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Conheça a Casa Tuiuiú em Bonito, MS - Sua hospedagem confortável e segura no Pantanal!');
        const hashtags = encodeURIComponent('BonitoMS,Pantanal,CasaTuiuiu,Turismo');
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}&hashtags=${hashtags}`, '_blank', 'width=600,height=400');
        
        // Google Analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'share', {
                method: 'Twitter',
                content_type: 'website',
                content_id: 'casa-tuiuiu'
            });
        }
    };

    window.shareOnWhatsApp = function() {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('Olha que casa incrível para hospedagem em Bonito, MS! Casa Tuiuiú - confortável e segura no Pantanal.');
        window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
        
        // Google Analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'share', {
                method: 'WhatsApp',
                content_type: 'website',
                content_id: 'casa-tuiuiu'
            });
        }
    };

    window.shareByEmail = function() {
        const subject = encodeURIComponent('Casa Tuiuiú - Hospedagem em Bonito, MS');
        const body = encodeURIComponent(`Olá!\n\nEncontrei esta casa incrível para hospedagem em Bonito, MS:\n\nCasa Tuiuiú - Sua hospedagem confortável e com segurança em Bonito\n\n${window.location.href}\n\nVale a pena conferir!`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        
        // Google Analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'share', {
                method: 'Email',
                content_type: 'website',
                content_id: 'casa-tuiuiu'
            });
        }
    };

    // Track page views and interactions
    if (typeof gtag !== 'undefined') {
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', function() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
                maxScroll = scrollPercent;
                gtag('event', 'scroll', {
                    event_category: 'engagement',
                    event_label: `${scrollPercent}%`,
                    value: scrollPercent
                });
            }
        });

        // Track button clicks
        document.querySelectorAll('a[href*="airbnb"], a[href*="booking"], a[href*="whatsapp"]').forEach(link => {
            link.addEventListener('click', function() {
                const platform = this.href.includes('airbnb') ? 'Airbnb' : 
                               this.href.includes('booking') ? 'Booking' : 'WhatsApp';
                gtag('event', 'click', {
                    event_category: 'booking',
                    event_label: platform,
                    value: 1
                });
            });
        });
    }

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData && typeof gtag !== 'undefined') {
                    gtag('event', 'timing_complete', {
                        name: 'load',
                        value: Math.round(perfData.loadEventEnd - perfData.loadEventStart)
                    });
                }
            }, 0);
        });
    }

    // Enhanced mobile experience
    if ('serviceWorker' in navigator) {
        // Register service worker for PWA capabilities (future enhancement)
        // navigator.serviceWorker.register('/sw.js');
    }

    // Add skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Improve form accessibility
    document.querySelectorAll('input, textarea, select').forEach(element => {
        element.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        element.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // Add loading states for external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    });
});

// Error handling
window.addEventListener('error', function(e) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            description: e.error ? e.error.toString() : 'Unknown error',
            fatal: false
        });
    }
});

// Connection quality detection
if ('connection' in navigator) {
    const connection = navigator.connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        // Disable some animations for slow connections
        document.body.classList.add('slow-connection');
    }
}