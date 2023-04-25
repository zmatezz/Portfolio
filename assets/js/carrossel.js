const radios = document.querySelectorAll('input[type="radio"]');
let currentRadio = 0;
let autoplayIntervalId = setInterval(autoplay, 3000);

function autoplay() {
  currentRadio = currentRadio < radios.length - 1 ? currentRadio + 1 : 0;
  radios[currentRadio].click();
}

radios.forEach((radio, index) => {
  radio.addEventListener('click', () => {
    clearInterval(autoplayIntervalId);
    autoplayIntervalId = setInterval(autoplay, 3000);
    currentRadio = index;
  });
});
