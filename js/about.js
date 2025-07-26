const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
const size = images[0].clientWidth;

function nextSlide() {
  if (counter >= images.length - 1) {
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    return;
  }
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function prevSlide() {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

carouselSlide.addEventListener('transitionend', () => {
  if (images[counter].id === 'last-clone') {
    carouselSlide.style.transition = "none";
    counter = images.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (images[counter].id === 'first-clone') {
    carouselSlide.style.transition = "none";
    counter = images.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

function clickClientsButton() {
    document.getElementById("clients-next-slide").click();
  }
  
  setInterval(clickClientsButton, 3000);