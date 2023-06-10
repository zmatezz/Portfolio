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

window.addEventListener('load', function () {
  setTimeout(function () {
    $('.ocultar').fadeIn();
  }, 5000);

  setTimeout(function () {
    document.querySelector('.barra').classList.add('mostrar');
  }, 5000);

  setTimeout(function () {
    document.querySelector('.box').classList.add('aparece');
  }, 5000);

  setTimeout(function () {
    document.querySelector('.close-menu-label').classList.add('exibe');
  }, 500);
});

// Função para mostrar o conteúdo e executar os scripts
function showContent() {
  // código para mostrar o conteúdo
  var contentElements = document.querySelectorAll('.content');
  contentElements.forEach(function(element) {
    element.style.display = 'block';
  });

}

// Exibe a barra de progresso
var progressBar = document.querySelector('.progress-bar');
var progressBarContainer = document.querySelector('.progress-bar-container');
var body = document.querySelector('body');

progressBar.style.width = '0%';

var progress = 0;
var intervalId = setInterval(function() {
  progress += 1;
  progressBar.style.width = progress + '%';

  if (progress >= 100) {
    clearInterval(intervalId);

    progressBarContainer.style.display = 'none';
    body.classList.remove('loading');

    showContent();
  }
}, 20);
