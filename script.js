// =============================================
//   MAIN SCRIPT — Галерея, защита, интерактив
// =============================================

// ===== 1. Рендер галереи из photos.js =====
function renderGallery() {
    const gallery = document.getElementById('gallery');
    const filterBar = document.getElementById('filter-bar');

    if (typeof CATEGORIES !== 'undefined') {
        filterBar.innerHTML = '';
        CATEGORIES.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'filter-tag' + (cat.key === 'all' ? ' active' : '');
            btn.dataset.filter = cat.key;
            btn.textContent = cat.label;
            filterBar.appendChild(btn);
        });
    }

    if (typeof PHOTOS === 'undefined' || PHOTOS.length === 0) {
        gallery.innerHTML = `
            <div class="gallery-empty">
                <div class="empty-icon">📷</div>
                <p>Фото ещё не добавлены.<br>Открой <code>photos.js</code> и добавь ссылки на фото из Wfolio.</p>
            </div>`;
        return;
    }

    gallery.innerHTML = '';
    PHOTOS.forEach((photo, i) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = photo.category || 'other';
        item.dataset.index = i;
        const catLabel = (typeof CATEGORIES !== 'undefined')
            ? (CATEGORIES.find(c => c.key === photo.category) || {}).label || photo.category
            : photo.category;
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title || ''}" loading="lazy" draggable="false">
            <div class="gallery-overlay">
                <span class="overlay-title">${photo.title || ''}</span>
                <span class="overlay-cat">${catLabel}</span>
            </div>`;
        gallery.appendChild(item);
    });
}

// ===== 2. Header scroll =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); });

// ===== 3. Mobile menu =====
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});
nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => { menuBtn.classList.remove('open'); nav.classList.remove('open'); document.body.style.overflow = ''; });
});

// ===== 4. Filter =====
document.getElementById('filter-bar').addEventListener('click', (e) => {
    const tag = e.target.closest('.filter-tag');
    if (!tag) return;
    document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    const filter = tag.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
    });
});

// ===== 5. Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.getElementById('gallery').addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const img = item.querySelector('img');
    if (img && img.src) { lightboxImg.src = img.src; lightboxImg.alt = img.alt; lightbox.classList.add('active'); document.body.style.overflow = 'hidden'; }
});

function closeLightbox() { lightbox.classList.remove('active'); document.body.style.overflow = ''; setTimeout(() => { lightboxImg.src = ''; }, 300); }
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox(); });

// ===== 6. Scroll reveal =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function observeElements() {
    document.querySelectorAll('.gallery-item, .about-content, .contact-card').forEach(el => {
        el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== ЗАЩИТА ФОТОГРАФИЙ =====
document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.gallery-item') || e.target.closest('.lightbox-content') || e.target.closest('.about-photo')) e.preventDefault();
});
document.addEventListener('dragstart', (e) => { if (e.target.tagName === 'IMG') e.preventDefault(); });

// ===== INIT =====
renderGallery();
observeElements();
