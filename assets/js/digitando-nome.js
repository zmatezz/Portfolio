document.addEventListener('DOMContentLoaded', function () {
  const desktopVideo = document.querySelector('.video-background video', '.video-background-mobile video');

  function activateScript() {
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

    setTimeout(function () {
      $('.ocultar').fadeIn();
    }, 3500);
  }

  desktopVideo.addEventListener('loadedmetadata', function () {
    activateScript();
  });

  mobileVideo.addEventListener('loadedmetadata', function () {
    activateScript();
  });
});
