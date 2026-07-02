/* =============================================
   PH_IGNATOVA — Site Scripts
   ============================================= */

// Header scroll effect
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        nav.classList.toggle('open');
        document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    nav.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', () => {
            if (link.getAttribute('onclick')) return;
            menuBtn.classList.remove('open');
            nav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        // Open clicked if was closed
        if (!isOpen) item.classList.add('open');
    });
});

// Scroll reveal animation
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.photo-row, .faq-item, .service-block, .about-text').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Right-click protection on images
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG' || e.target.closest('.photo-cell')) {
        e.preventDefault();
    }
});

// Prevent drag on images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', e => e.preventDefault());
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
