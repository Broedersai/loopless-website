// ===================================
// Mobile Menu Toggle
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Sluit menu bij klikken op link
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Sluit menu bij klikken buiten het menu
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
});

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Haal formulier waarden op
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            company: document.getElementById('company')?.value.trim() || '',
            phone: document.getElementById('phone')?.value.trim() || '',
            interest: document.getElementById('interest')?.value || '',
            message: document.getElementById('message').value.trim()
        };

        // Validatie
        if (!formData.name || !formData.email || !formData.message) {
            showFormMessage('error', 'Vul alle verplichte velden in.');
            return;
        }

        // Email validatie
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('error', 'Voer een geldig e-mailadres in.');
            return;
        }

        // Interest check (als het veld bestaat)
        if (document.getElementById('interest') && !formData.interest) {
            showFormMessage('error', 'Selecteer waar je in geïnteresseerd bent.');
            return;
        }

        // Simuleer verzenden met loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Verzenden...';

        // Simuleer API call (in productie vervang dit door echte API call)
        setTimeout(() => {
            showFormMessage('success', 'Bedankt voor je bericht! Ik neem binnen 24 uur contact met je op.');
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;

            // Log de data (alleen voor development)
            console.log('Formulier verzonden:', formData);

            // Hier zou je normaal een API call maken, bijvoorbeeld:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
        }, 1000);
    });
}

function showFormMessage(type, message) {
    const successDiv = document.getElementById('formSuccess');
    const errorDiv = document.getElementById('formError');

    if (!successDiv || !errorDiv) return;

    // Verberg beide berichten eerst
    successDiv.style.display = 'none';
    errorDiv.style.display = 'none';

    if (type === 'success') {
        successDiv.style.display = 'flex';

        // Scroll naar het bericht
        setTimeout(() => {
            successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);

        // Verberg het bericht na 8 seconden
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 8000);
    } else {
        errorDiv.style.display = 'flex';

        // Scroll naar het bericht
        setTimeout(() => {
            errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);

        // Verberg het bericht na 6 seconden
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 6000);
    }
}

// ===================================
// Smooth Scrolling voor Anker Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Scroll Animaties
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Stop met observeren na animatie
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animeer elementen bij het scrollen
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.process-step, .bento-card, .timeline-item, ' +
        '.philosophy-card, .result-card, .faq-item, .info-card'
    );

    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        // Voeg staggered delay toe voor betere flow
        element.style.transitionDelay = `${index * 0.05}s`;

        fadeInObserver.observe(element);
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================

let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Voeg shadow toe bij scrollen
    if (currentScroll > 10) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===================================
// Stats Counter Animation (optioneel)
// ===================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observeer stat numbers en animeer ze wanneer ze in beeld komen
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const targetText = statNumber.textContent.trim();

            // Probeer alleen getallen te animeren
            const numberMatch = targetText.match(/\d+/);
            if (numberMatch) {
                const targetNumber = parseInt(numberMatch[0]);
                const prefix = targetText.replace(/\d+/, '');

                animateCounter(statNumber, targetNumber);
                statNumber.textContent = prefix + targetNumber;
            }

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number, .result-stat, .card-metric');
    statNumbers.forEach(stat => {
        // Sla de originele waarde op
        stat.dataset.target = stat.textContent;
        statsObserver.observe(stat);
    });
});

// ===================================
// Form Field Animations
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const formFields = document.querySelectorAll('.form-field input, .form-field textarea, .form-field select');

    formFields.forEach(field => {
        // Focus/Blur effecten
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        field.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });

        // Check of veld al gevuld is bij laden
        if (field.value.trim() !== '') {
            field.parentElement.classList.add('filled');
        }

        // Update filled state
        field.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.parentElement.classList.add('filled');
            } else {
                this.parentElement.classList.remove('filled');
            }
        });
    });
});

// ===================================
// Console Message (Fun Easter Egg)
// ===================================

console.log('%c👋 Hey daar!', 'font-size: 20px; font-weight: bold; color: #0066FF;');
console.log('%c✨ Interesse in hoe FlowResult werkt?', 'font-size: 14px; color: #4A5568;');
console.log('%cNeem contact op via contact@flowresult.nl', 'font-size: 14px; color: #4A5568;');
