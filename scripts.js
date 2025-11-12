// ===================================
// ResultFlow - Smooth Interactions
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navHeight = document.querySelector('.nav-simple').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Fade-in on Scroll Animation
    // ===================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.service-card-clean, .process-step-h, .benefit-item, .collab-card'
    );

    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        fadeInObserver.observe(el);
    });

    // ===================================
    // Contact Form Handling
    // ===================================

    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                function: document.getElementById('function').value.trim(),
                company: document.getElementById('company').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                industry: document.getElementById('industry').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            // Basic validation
            if (!formData.name || !formData.function || !formData.company ||
                !formData.email || !formData.phone || !formData.industry || !formData.message) {
                showFormFeedback('error', 'Vul alle verplichte velden in.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormFeedback('error', 'Voer een geldig e-mailadres in.');
                return;
            }

            // Phone validation (basic Dutch mobile format)
            const phoneRegex = /^(\+31|0)[0-9]{9}$/;
            const cleanPhone = formData.phone.replace(/[\s-]/g, '');
            if (!phoneRegex.test(cleanPhone)) {
                showFormFeedback('error', 'Voer een geldig Nederlands telefoonnummer in.');
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Bezig met verzenden...';

            // Simulate form submission
            // In production, replace with actual API call
            setTimeout(() => {
                showFormFeedback('success', 'Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;

                // Log for development
                console.log('Formulier verzonden:', formData);

                // Example API call (uncomment for production):
                /*
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    showFormFeedback('success', 'Bedankt voor je bericht!');
                    contactForm.reset();
                })
                .catch(error => {
                    showFormFeedback('error', 'Er ging iets mis. Probeer het later opnieuw.');
                })
                .finally(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                });
                */
            }, 1000);
        });
    }

    function showFormFeedback(type, message) {
        if (!formFeedback) return;

        formFeedback.textContent = message;
        formFeedback.className = `form-feedback ${type}`;
        formFeedback.style.display = 'block';

        // Scroll to feedback
        setTimeout(() => {
            formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);

        // Hide after delay
        setTimeout(() => {
            formFeedback.style.display = 'none';
        }, type === 'success' ? 8000 : 6000);
    }

    // ===================================
    // Form Focus Effects
    // ===================================

    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });

    // ===================================
    // Navbar Background on Scroll
    // ===================================

    const nav = document.querySelector('.nav-simple');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // Highlight Underline Effect
    // ===================================

    const highlight = document.querySelector('.highlight');
    if (highlight) {
        // Create animated underline
        highlight.style.position = 'relative';
        highlight.style.display = 'inline-block';

        const underline = document.createElement('span');
        underline.style.position = 'absolute';
        underline.style.bottom = '0';
        underline.style.left = '0';
        underline.style.right = '0';
        underline.style.height = '8px';
        underline.style.background = 'rgba(60, 124, 251, 0.2)';
        underline.style.borderRadius = '4px';
        underline.style.zIndex = '-1';

        highlight.appendChild(underline);
    }

    // ===================================
    // Console Easter Egg
    // ===================================

    console.log(
        '%cResultFlow 🚀',
        'font-size: 18px; font-weight: bold; color: #3C7CFB;'
    );
    console.log(
        '%cOprechte outreach die werkt. Geen spam, wel resultaat.',
        'font-size: 12px; color: #6B7280;'
    );
    console.log(
        '%cNeem contact op: contact@resultflow.nl',
        'font-size: 12px; color: #6B7280;'
    );

    // ===================================
    // Lazy Load Optimization (Optional)
    // ===================================

    // Add loading="lazy" to images if needed
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // ===================================
    // Process Timeline Horizontal Scroll Hint
    // ===================================

    const processTimeline = document.querySelector('.process-timeline');
    if (processTimeline && window.innerWidth <= 768) {
        // Check if scrollable
        if (processTimeline.scrollWidth > processTimeline.clientWidth) {
            // Add subtle hint that it's scrollable
            processTimeline.style.position = 'relative';

            // Add scroll indicator
            const scrollHint = document.createElement('div');
            scrollHint.textContent = '→ Swipe';
            scrollHint.style.position = 'absolute';
            scrollHint.style.right = '0';
            scrollHint.style.top = '-30px';
            scrollHint.style.fontSize = '0.875rem';
            scrollHint.style.color = '#9CA3AF';
            scrollHint.style.fontWeight = '500';

            processTimeline.parentElement.style.position = 'relative';
            processTimeline.parentElement.appendChild(scrollHint);

            // Remove hint after scroll
            processTimeline.addEventListener('scroll', () => {
                scrollHint.style.opacity = '0';
                setTimeout(() => scrollHint.remove(), 300);
            }, { once: true });
        }
    }
});

// ===================================
// Utility: Debounce Function
// ===================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// Performance: Reduce Motion for Accessibility
// ===================================

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';

    // Disable animations
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}
