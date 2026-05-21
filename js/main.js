 const imagePaths = [
  "images/family.jpeg",
  "images/my_girl.jpeg",
  "images/beach.jpeg",
  "images/grover.jpeg",
  "images/offroad.jpeg",
  "images/partner.jpeg",
  "images/partner2.jpeg",
  "images/vegas.jpeg",
];

const track = document.querySelector('.carousel-track');

let current = 0;

// Create images dynamically
imagePaths.forEach((path, index) => {
  const img = document.createElement('img');
  img.src = path;
  img.classList.add('slide');

  if (index === 0) {
    img.classList.add('active');
  }

  track.appendChild(img);
});

const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// Theme Preference: restore on lad (before paint) and persist on change.

(() => {
    const ALLOWED = new Set(['light', 'system', 'dark']);
    const id = 'theme-preference-sync';
    let container = document.getElementById(id);
    if (!container) {
        container = document.createElement('div');
        container.id = id;
        container.hidden = true;
        container.setAttribute('aria-hidden', 'true');
        ['light', 'system', 'dark'].forEach((v) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'theme-preference';
            input.value = v;
            if (v === 'system') {
                input.checked = true;
            }
            container.appendChild(input);
        });
        const mount = document.body ?? document.head;
        if (mount) {
            mount.appendChild(container);
        }
    }
    let stored = null;
    try {
        stored = localStorage.getItem('theme-preference');
    } catch {
        /* storage may be disabled */
    }
    const value = ALLOWED.has(stored) ? stored : 'system';
    const input = container.querySelector(
        'input[value="' + value + '"]'
    );
    if (input) {
        input.checked = true;
    }
    document.addEventListener('change', (e) => {
        if (e.target.name === 'theme-preference') {
            try {
                localStorage.setItem('theme-preference', e.target.value);
            } catch {
                /* storage may be disabled */
            }
        }
    });
})();