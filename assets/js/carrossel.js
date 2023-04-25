const radios = document.querySelectorAll('input[type="radio"]');
let currentRadio = 0;


function autoplay() {
  currentRadio = currentRadio < radios.length - 1 ? currentRadio + 1 : 0;
  radios[currentRadio].click();
}

const autoplayInterval = 3000;
setInterval(autoplay, autoplayInterval);

radios.forEach((radio, index) => {
  radio.addEventListener('click', () => {
    currentRadio = index;
  });
});

