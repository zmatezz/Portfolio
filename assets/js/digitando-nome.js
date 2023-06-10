window.addEventListener('DOMContentLoaded', function() {
  var meuVideo = document.getElementById('meu-video-desktop') || document.getElementById('meu-video-mobile');

  meuVideo.addEventListener('canplaythrough', function() {
    var typed = new Typed(".texto-escrevendo", {
      strings: ["Matheus Guedes", "Dev Front End"],
      backDelay: 1800,
      typeSpeed: 90,
      backSpeed: 80,
      loop: true,
      startDelay: 3500,
      onComplete: function(self) {
        self.startDelay = 0;
      },
    });
  });

  var progressBar = document.querySelector('.progress-bar');
  var progressBarContainer = document.querySelector('.progress-bar-container');
  var content = document.querySelector('.content');
  var body = document.querySelector('body');

  var progress = 0;
  var intervalId = setInterval(function() {
    progress += 1;
    progressBar.style.width = progress + '%';

    if (progress >= 120) {
      clearInterval(intervalId);

      progressBar.style.animation = 'progressBarAnimation 0.3s ease-in-out forwards';
      setTimeout(function() {
        progressBarContainer.style.display = 'none';
        body.classList.remove('loading');
        showContent();

        // Remover a classe "hide-overflow" após 5 segundos adicionais
        setTimeout(function() {
          body.style.overflowY = 'visible';
        }, 3000);
      }, 300);
    }
  }, 20);
});

window.addEventListener('load', function() {
  setTimeout(function() {
    $('.ocultar').fadeIn();
  }, 5000);

  setTimeout(function() {
    document.querySelector('.barra').classList.add('mostrar');
  }, 5000);

  setTimeout(function() {
    document.querySelector('.box').classList.add('aparece');
  }, 5000);

  setTimeout(function() {
    document.querySelector('.close-menu-label').classList.add('exibe');
  }, 5000);
});

function showContent() {
  var contentElements = document.querySelectorAll('.content');
  contentElements.forEach(function(element) {
    element.style.display = 'block';
  });


}
