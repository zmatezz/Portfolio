window.addEventListener('DOMContentLoaded', function () {
  var meuVideo = document.getElementById('meu-video-desktop') || document.getElementById('meu-video-mobile');

  meuVideo.addEventListener('canplaythrough', function () {
    var typed = new Typed(".texto-escrevendo", {
      strings: ["Matheus Guedes", "Dev Front End"],
      backDelay: 1800,
      typeSpeed: 90,
      backSpeed: 80,
      loop: true,
      startDelay: 3500,
      onComplete: function (self) {
        self.startDelay = 0;
      },
    });
  });
});

window.onload = function () {

  setTimeout(function () {
    $('.ocultar').fadeIn();
  }, 3000);

  setTimeout(function () {
    document.querySelector('.barra').classList.add('mostrar');
  }, 3000);

  setTimeout(function () {
    document.querySelector('.box').classList.add('aparece');
  }, 3000);

  setTimeout(function () {
    document.querySelector('.close-menu-label').classList.add('exibe');
  }, 2200);
};