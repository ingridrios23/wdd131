// gallery.js
const images = [
  { url: 'img1.jpg', alt: 'Image 1' },
  { url: 'img2.jpg', alt: 'Image 2' },
  { url: 'img3.jpg', alt: 'Image 3' }
];

const galleryDiv = document.getElementById('gallery');

images.forEach(img => {
  const el = document.createElement('img');
  el.setAttribute('data-src', img.url);
  el.alt = img.alt;
  el.loading = 'lazy'; // Lazy loading step
  galleryDiv.appendChild(el);
});

// Simple lazy-loading via IntersectionObserver
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const img = e.target;
      img.src = img.dataset.src;
      obs.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => obs.observe(img));
