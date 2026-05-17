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